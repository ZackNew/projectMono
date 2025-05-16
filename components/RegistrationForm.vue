<script setup lang="ts">
import { ref } from 'vue'
import { z } from 'zod'

const formSchema = z.object({
  fullName: z.string().min(1, 'All fields are required.'),
  phone: z.string().regex(/^(09|07)\d{8}$|^(?:\+251|251)(9|7)\d{8}$/, 'Invalid phone number.'),
  email: z.string().email('Invalid email.'),
  designSkill: z.string().min(1, { message: 'All fields are required.' }),
  futureUse: z.string().min(1, { message: 'All fields are required.' }),
  hearFrom: z.string().min(1, { message: 'All fields are required.' }),
  paymentMethod: z.string().min(1, { message: 'All fields are required.' }),
})

const fullName = ref('')
const phone = ref('')
const email = ref('')
const designSkill = ref('')
const futureUse = ref('')
const hearFrom = ref('')
const paymentMethod = ref('')

const errorMessage = ref('')

const handleSubmit = () => {
  const result = formSchema.safeParse({
    fullName: fullName.value,
    phone: phone.value,
    email: email.value,
    designSkill: designSkill.value,
    futureUse: futureUse.value,
    hearFrom: hearFrom.value,
    paymentMethod: paymentMethod.value,
  })

  if (!result.success) {
    errorMessage.value = result.error.errors[0].message
  } else {
    errorMessage.value = ''
    console.log('Form submitted', result.data)
  }
}
</script>

<template>
  <div class="flex justify-center items-center bg-cover bg-center bg-[#333333] bg-grid-local">
    <div class="my-8 md:mb-0 md:mt-16 flex items-end mx-2">
      <div class="flex-1 hidden md:flex">
        <img class="w-44" src="/images/tapel.svg" alt="">
      </div>
      <div class="flex-1 self-center md:mb-12">
        <h1 class="uppercase text-center text-[#FBA819] font-bold text-2xl mb-4">registration form</h1>
        <form @submit.prevent="handleSubmit" class="flex flex-col items-center justify-center gap-4 mb-4">
          <input v-model="fullName" type="text" placeholder="Full Name:"
            class="border-[1px] border-[#333333] sm:w-[260px] md:w-[360px] rounded-full py-2 px-6 button-shadow-black bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />

          <div class="flex items-center gap-2 justify-center">
            <input v-model="phone" type="text" placeholder="Phone Num:"
              class="border-[1px] border-[#333333] w-[150px] sm:w-[160px] md:w-[235px] rounded-full py-2 px-6 button-shadow-black bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
            <input v-model="email" type="text" placeholder="Email:"
              class="border-[1px] border-[#333333] w-[150px] sm:w-[160px] md:w-[235px] rounded-full py-2 px-6 button-shadow-black bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
          </div>

          <AppDropDown width="w-[340px] sm:w-[390px] md:w-[506px]" :options="[
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' }
          ]" placeholder="How skill are you in design?" @select="val => designSkill = val" />

          <AppDropDown width="w-[320px] sm:w-[380px] md:w-[476px]" :options="[
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' }
          ]" placeholder="How do you want to use your learned skill afterwards?" @select="val => futureUse = val" />

          <AppDropDown width="w-[280px] sm:w-[310px] md:w-[367px]" :options="[
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' }
          ]" placeholder="where did you hear about us?" @select="val => hearFrom = val"/>

          <AppDropDown width="w-[250px] sm:w-[250px] md:w-[248px]" :options="[
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' }
          ]" placeholder="preferred payment methods" @select="val => paymentMethod = val"/>

          <!-- Single-line error message -->
          <div v-if="errorMessage" class="text-red-500 text-xs font-semibold text-center">
            {{ errorMessage }}
          </div>

          <button
            class="px-5 py-2 bg-[#FBA819] text-white rounded-full transition border-[1.5px] border-gray-800 text-xs button-shadow-black uppercase">
            enroll
          </button>
        </form>
      </div>
      <div class="flex-1 hidden md:flex">
        <img class="w-44" src="/images/sun.svg" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-grid-local {
  background-size: 20px 20px;
  background-image: linear-gradient(to right,
      rgba(244, 236, 236, 0.07) 0.5px,
      transparent 0.5px),
    linear-gradient(to bottom, rgba(244, 236, 236, 0.07) 0.5px, transparent 0.5px);
}
</style>