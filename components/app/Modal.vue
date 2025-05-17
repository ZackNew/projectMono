<script setup lang="ts">
defineProps<{
  isVisible: boolean
}>()

const emit = defineEmits<{
  (e: 'cancel'): void
  (e: 'confirm'): void
}>()

function emitCancel() {
  emit('cancel')
}

function emitConfirm() {
  emit('confirm')
}
</script>

<template>
  <div v-if="isVisible">
    <div class="fixed inset-0 z-50 flex justify-center items-center text-white">
      <div class="relative flex flex-col rounded-lg shadow-lg bg-[#333333] bg-grid-local py-8 px-20 animate-scale-up">

         <button
          class="absolute top-2 right-2 p-1 leading-none"
          @click="emitCancel"
        >
          <div class="text-xl font-semibold h-6 w-6">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </span>
          </div>
        </button>
        <!-- Header -->
        <div class="p-5">
          <div class="flex justify-between items-start">
            <slot name="header"/>
          </div>
        </div>

        <!-- Body -->
        <slot name="body"/>

        <!-- Footer -->
        <slot name="footer"/>
      </div>
    </div>
    <div class="fixed inset-0 z-40 bg-black opacity-50"></div>
  </div>
</template>

<style scoped>
.bg-grid-local {
  background-size: 20px 20px;
  background-image: linear-gradient(to right,
      rgba(130, 127, 127, 0.07) 0.5px,
      transparent 0.5px),
    linear-gradient(to bottom, rgba(138, 135, 135, 0.07) 0.5px, transparent 0.5px);
}

@keyframes scale-up {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-up {
  animation: scale-up 0.3s ease-out both;
}
</style>