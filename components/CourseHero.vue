<script setup lang="ts">
const videoId = '7CrcH3g03T8'; // Extract just the ID from the URL
</script>

<template>
  <div class="bg-[#333333] py-16 px-4 bg-grid">
    <div class=" flex items-center justify-center">
    <div class="border rounded-xl overflow-hidden w-full max-w-4xl aspect-video">
      <iframe :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&playlist=${videoId}&controls=0`"
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen class="w-full h-full"></iframe>
    </div>
  </div>
  <div class="flex justify-center w-full mt-8">
    <button @click="navigateTo('/course?course=motion-design')"
    class="px-5 py-2 bg-[#FBA819] text-white rounded-full transition border-[1.5px] border-black button-shadow-black-lg text-lg">
    Enroll Now
  </button>
  </div>
  </div>
</template>