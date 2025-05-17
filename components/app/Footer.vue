<script setup lang="ts">
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(1, 'All fields are required.'),
  email: z.string().email('Invalid email.'),
  message: z.string().min(1, 'All fields are required.'),
})

const name = ref('')
const message = ref('')
const email = ref('')

const toastState = ref({
  title: '',
  message: '',
  type: 'success' as 'success' | 'error' | 'warning' | 'info',
})

const isToastVisible = ref(false)

const errorMessage = ref('')
const isLoading = ref(false)

async function handleSubmit() {
  isLoading.value = true
  const result = formSchema.safeParse({
    name: name.value,
    message: message.value,
    email: email.value
  })

  if (!result.success) {
    toastState.value.title = 'Error'
    toastState.value.message = 'Something went wrong please try again.'
    toastState.value.type = 'error'
    isToastVisible.value = true
    errorMessage.value = result.error.errors[0].message
  } else {
    errorMessage.value = ''
    const result = await $fetch<{ success: boolean; message: string }>('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.value,
        message: message.value,
        email: email.value
      }),
    })
    if (result.success) {
      clearForm()
      toastState.value.title = 'Message Sent!'
      toastState.value.message = 'Thanks for reaching out. We will get back to you shortly.'
      toastState.value.type = 'success'
      isToastVisible.value = true
    } else {
      toastState.value.title = 'Error'
      toastState.value.message = "Something went wrong please try again."
      toastState.value.type = 'error'
      isToastVisible.value = true
    }
  }
  isLoading.value = false
}

function clearForm() {
  name.value = ''
  message.value = ''
  email.value = ''
}

function resetToast() {
  isToastVisible.value = false
  toastState.value.title = ''
  toastState.value.message = ''
  toastState.value.type = 'success'
}
</script>

<template>
  <div id="footer" class="relative">
    <AppToast v-if="isToastVisible" :duration="5000" :title="toastState.title" :message="toastState.message" :type="toastState.type" @cleared="resetToast()"/>
    <div class="md:flex max-w-7xl justify-evenly md:pt-12 md:px-12 p-4 lg:mx-auto ">
      <div class="md:flex w-full mx-auto md:w-1/2 items-end justify-center md:-m-16 z-0 relative">
        <img src="/images/sayWhatsup.svg" alt="what up" class="md:w-[80%] md:h-[80%] w-[40%] mx-auto" />
      </div>
      <div class="md:w-1/2 md:mt-28 mt-8">
        <form @submit.prevent="handleSubmit">
          <div class="sm:w-96 mx-auto">
            <div class="w-full mx-auto">
              <input v-model="name" type="text" placeholder="Name" name="name"
                class="border-[1px] border-[#333333] sm:w-96 w-full rounded-full p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
              <input v-model="email" type="text" placeholder="Email" name="email"
                class="border-[1px] border-[#333333] sm:w-96 w-full rounded-full p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
              <div>
                <textarea name="message" 
                  v-model="message"
                  class="border-[1px] border-[#333333] sm:w-96 w-full rounded-lg p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500"
                  rows="18" placeholder="Message"></textarea>
              </div>
              <div v-if="errorMessage" class="text-red-500 text-xs font-semibold text-center">
                {{ errorMessage }}
              </div>

              <div class="flex justify-end">
                <button
                  class="px-4 py-1 bg-[#FBA819] text-white rounded-full transition border-[1.5px] border-gray-800 text-xs button-shadow">
                  SEND
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="m-1 mt-0 z-50 relative">
      <div class="px-4 flex justify-between">
        <p class="font-azeret text-xs text-gray-600">2024. Project mono. all rights reserved</p>
        <p class="font-azeret text-xs text-gray-600">moving up local design skills one student at a time</p>
        <p class="font-azeret text-xs text-gray-600">Instagram. Linkedin. Tiktok</p>
      </div>
      <div class="rounded-2xl border-2 border-gray-800 bg-[#FBA819]">
        <h1 class="text-white font-extrabold text-4xl md:text-6xl lg:text-9xl text-center uppercase">projectmono</h1>
      </div>
    </div>
  </div>
</template>
