// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/icon', 'nuxt-gtag'],

  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' }
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  gtag: {
    id: 'G-PJEZ52ZTTK'
  }
})