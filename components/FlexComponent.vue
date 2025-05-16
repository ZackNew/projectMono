<script setup lang="ts">
const props = defineProps<{
  imgSide: 'left' | 'right',
  imgBgColor: string
}>()
</script>

<template>
  <div
    class="md:flex justify-center w-full gap-[1px]" 
    :class="imgSide === 'right' ? 'flex-row-reverse' : ''"
  >
    <div
      class="md:w-[40%] flex justify-center items-center bg-grid max-h-full w-full"
      :class="[imgBgColor, imgSide === 'right' ? 'lg:justify-start' : 'lg:justify-end']"
    >
      <div class="w-full h-full justify-center">
        <slot name="image" />
      </div>
    </div>
    <div
      class="bg-[#333333] w-full md:w-[60%] flex justify-center items-center p-4 md:p-12 lg:p-20 bg-grid min-h-full"
      :class="imgSide === 'right' ? 'lg:justify-end' : 'lg:justify-start'"
    >
      <div>
        <slot name="content" />
      </div>
    </div>
  </div>
</template> 
