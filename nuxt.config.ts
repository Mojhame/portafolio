// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxt/ui',
    '@nuxt/image'
  ],
  ui: {
    icons: ['mdi', 'heroicons']
  },
  devtools: { enabled: true }
})
