// https://nuxt.com/docs/api/configuration/nuxt-config
// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/custom.css'
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ]
})