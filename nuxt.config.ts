// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts", "@vueuse/nuxt", "@nuxt/image"],
  fonts: {
    families: [
      {
        name: "Azeret Mono",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
      {
        name: "Rethink Sans",
        provider: "google",
        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      },
    ],
  },
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
});