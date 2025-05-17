<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  title: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration: number
}>()

const visible = ref(true)

const toastTypeClasses = {
  'bg-[#494949] border-l-[6px] border-green-500': props.type === 'success',
  'bg-[#494949] border-l-[6px] border-red-500': props.type === 'error',
  'bg-[#494949] border-l-[6px] border-yellow-400': props.type === 'warning',
  'bg-[#494949] border-l-[6px] border-blue-500': props.type === 'info',
}

onMounted(() => {
  setTimeout(() => {
    visible.value = false
  }, props.duration)
})
</script>

<template>
  <div
    v-if="visible"
    class="fixed top-4 right-4 z-50 max-w-sm w-full rounded-xl shadow-lg p-4 flex items-start gap-3 transition-all duration-300"
    :class="toastTypeClasses"
  >
    <div class="mt-1">
      <svg class="w-6 h-6 text-white border rounded-full border-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" v-if="type === 'success'" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" v-if="type === 'error'" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01" v-if="type === 'info'" />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" v-if="type === 'warning'" />
      </svg>
    </div>

    <div class="flex-1">
      <p class="font-semibold text-white">{{ title }}</p>
      <p class="text-sm text-white opacity-90 mt-1">{{ message }}</p>
    </div>

    <button @click="visible = false" class="text-white hover:text-opacity-70">
      <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>


