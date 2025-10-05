// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/icon'
  ],

  plugins: [
    { src: '~/plugins/aos.client', mode: 'client' }
  ],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})