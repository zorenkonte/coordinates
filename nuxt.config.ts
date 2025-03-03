// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/supabase',
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    'shadcn-nuxt',
  ],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'cloudflare-pages',
  },
  runtimeConfig: {
    public: {
      appName: '',
    },
  },
})
