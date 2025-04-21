<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const props = defineProps<{
  width?: string
  options: { label: string; value: any }[]
  placeholder?: string
}>()

const emit = defineEmits<{
  (e: 'select', value: any): void
}>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const selected = ref<any>(null)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectOption = (option: { label: string; value: any }) => {
  selected.value = option
  emit('select', option.value)
  isOpen.value = false
}

const selectedLabel = computed(() => selected.value?.label)

onClickOutside(dropdownRef, () => {
  console.log('finger');
  
  isOpen.value = false
})
</script>

<template>
  <div ref="dropdownRef">
    <div :class="width" class="relative" >
      <button
        @click="toggleDropdown"
        class="w-full text-left border-[1px] border-[#333333] rounded-full py-2 px-6 mb-0 button-shadow-black bg-[#E9E3D3] text-xs focus:outline-none focus:ring-2 focus:ring-gray-500"
        type="button"
      >
        {{ selectedLabel || placeholder }}
        <span class="float-right">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z"/></svg>
        </span>
      </button>
      <ul
        v-if="isOpen"
        class="absolute z-10 mt-2 w-full bg-[#E9E3D3] border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto"
      >
        <li
          v-for="(option, index) in options"
          :key="index"
          @click="selectOption(option)"
          class="px-4 py-2 hover:bg-[#ebdcae] cursor-pointer text-xs"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

