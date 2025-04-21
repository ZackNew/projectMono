<script setup lang="ts">

</script>

<template>
  <div id="footer">
    <div class="flex max-w-7xl justify-evenly pt-12 px-12 lg:mx-auto ">
      <div class="w-1/2 flex items-end justify-center">
        <img src="/images/whatsup.svg" alt="what up" class="w-96 h-96" />
      </div>
      <div class="w-1/2 mb-12">
        <form>
          <div class="w-96">
            <input type="text" placeholder="Name"
              class="border-[1px] border-[#333333] w-96 rounded-full p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
            <input type="text" placeholder="Name"
              class="border-[1px] border-[#333333] w-96 rounded-full p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500" />
            <div>
              <textarea
                class="border-[1px] border-[#333333] w-96 rounded-lg p-2 mb-4 button-shadow bg-[#E9E3D3] text-xs focus:outline-none focus:ring-1 focus:ring-gray-500"
                rows="18" placeholder="Message"></textarea>
            </div>
            <div class="flex justify-end">
              <button
                class="px-4 py-1 bg-[#FBA819] text-white rounded-full transition border-[1.5px] border-gray-800 text-xs button-shadow">
                SEND
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="m-1 mt-0">
      <div class="rounded-2xl border-2 border-gray-800 bg-[#FBA819]">
      <h1 class="text-white font-extrabold text-5xl md:text-6xl lg:text-9xl text-center uppercase">projectmono</h1>
    </div>
    </div>
  </div>
</template>
