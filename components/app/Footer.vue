<script setup lang="ts">

</script>

<template>
  <div id="footer" class="relative">
    <div class="md:flex max-w-7xl justify-evenly md:pt-12 md:px-12 p-4 lg:mx-auto ">
      <div class="md:flex w-full mx-auto md:w-1/2 items-end justify-center md:-m-16 z-0 relative">
        <img src="/images/sayWhatsup.svg" alt="what up" class="md:w-[80%] md:h-[80%] w-[40%] mx-auto" />
      </div>
      <div class="md:w-1/2 md:mt-28 mt-8">
        <form>
          <div class="sm:w-96 mx-auto">
            <div class="w-full mx-auto">
              <input type="text" placeholder="Name"
              class="border-[1px] border-[#333333] sm:w-96 w-full rounded-full p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
            <input type="text" placeholder="Name"
              class="border-[1px] border-[#333333] sm:w-96 w-full rounded-full p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
            <div>
              <textarea
                class="border-[1px] border-[#333333] sm:w-96 w-full rounded-lg p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500"
                rows="18" placeholder="Message"></textarea>
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
