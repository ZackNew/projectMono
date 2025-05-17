<script setup lang="ts">
const isOpen = ref(false);
const router = useRouter()
const route = useRoute()

function goToSection(id: string) {
  if(isOpen) {
    isOpen.value = false
  }
  const hash = id ? `#${id}` : ''

  if (route.path === '/') {
    scrollToSection(id)
  } else {
    router.push({ path: '/', hash }).then(() => {
      // Wait until page content is rendered
      setTimeout(() => {
        scrollToSection(id)
      }, 300)
    })
  }
}

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
const isHomePage = computed(() => route.path === '/')

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
</script>
<template>
  <div class="w-full px-6 py-4">
    <div class="max-w-7xl mx-auto flex items-center justify-between">
      <NuxtLink to="/" class="text-xl font-bold text-gray-800">
        <img src="/images/logo.png" />
      </NuxtLink>

      <!-- <nav class="hidden md:flex items-center gap-10 lg:gap-16 md:gap-8 w-full justify-center">
        <NuxtLink to="/" class="text-gray-600 hover:text-black text-xs font-azeret">Home</NuxtLink>
        <NuxtLink to="/#about" class="text-gray-600 hover:text-black text-xs font-azeret">About</NuxtLink>
        <NuxtLink to="#courses" class="text-gray-600 hover:text-black text-xs font-azeret">Classes</NuxtLink>
        <NuxtLink to="#footer" class="text-gray-600 hover:text-black text-xs font-azeret">Contact</NuxtLink>
      </nav> -->
      <nav class="hidden md:flex items-center gap-10 lg:gap-16 md:gap-8 w-full justify-center">
        <button @click="goToSection('')" class="text-gray-600 hover:text-black text-xs font-azeret">Home</button>
        <button @click="goToSection('about')" class="text-gray-600 hover:text-black text-xs font-azeret">About</button>
        <button @click="goToSection('courses')"
          class="text-gray-600 hover:text-black text-xs font-azeret">Classes</button>
        <button @click="goToSection('footer')"
          class="text-gray-600 hover:text-black text-xs font-azeret">Contact</button>
      </nav>

      <div class="hidden md:block">
        <button v-if="isHomePage"
          class="px-4 py-2 bg-[#FF3D00] text-white rounded-full transition border-[1.5px] border-gray-800 text-xs button-shadow font-azeret">
          Enroll
        </button>
        <NuxtLink v-else to="/">
          <button
            class="px-4 py-2 bg-[#FF3D00] text-white rounded-full transition border-[1.5px] border-gray-800 text-xs button-shadow flex items-center font-azeret">
            back
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z" />
            </svg>
          </button>
        </NuxtLink>
      </div>

      <button class="md:hidden" @click="toggleMenu">
        <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <div v-if="isOpen" class="md:hidden mt-4 px-4 space-y-3 flex flex-col items-start ">
      <button @click="goToSection('')" class="text-gray-600 hover:text-black text-xs font-azeret">Home</button>
      <button @click="goToSection('about')" class="text-gray-600 hover:text-black text-xs font-azeret">About</button>
      <button @click="goToSection('courses')"
        class="text-gray-600 hover:text-black text-xs font-azeret">Classes</button>
      <button @click="goToSection('footer')" class="text-gray-600 hover:text-black text-xs font-azeret">Contact</button>
      <button v-if="isHomePage"
        class="px-4 py-2 bg-[#FF3D00] text-white rounded-full transition border-[1.5px] border-gray-800 text-xs button-shadow">
        Enroll
      </button>
      <button v-else
        class="px-4 py-2 bg-[#FF3D00] text-white rounded-full transition border-[1.5px] border-gray-800 text-xs button-shadow flex items-center">
        back
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="16" viewBox="0 0 24 24">
          <path fill="currentColor" d="M20 11v2H8l5.5 5.5l-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5L8 11z" />
        </svg>
      </button>
    </div>
  </div>
</template>
