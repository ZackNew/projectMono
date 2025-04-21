<script setup lang="ts">
const props = defineProps<{
  imgSide: 'left' | 'right',
  imgBgColor: string
}>()
</script>

<template>
  <div class="flex justify-center w-full gap-[1px]" :class="imgSide === 'right' ? 'flex-row-reverse' : ''">
    <div class="w-[40%] flex justify-center items-center p-4 md:p-12 lg:p-20 bg-grid" :class="[imgBgColor, imgSide === 'right' ? 'lg:justify-start items-center' : 'lg:justify-end items-center']">
      <div>
        <slot name="image" />
      </div>
    </div>
    <div class="bg-[#333333] w-[60%] flex justify-center items-center p-4 md:p-12 lg:p-20 bg-grid" :class="imgSide === 'right' ? 'lg:justify-end' : 'lg:justify-start'">
      <div>
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

