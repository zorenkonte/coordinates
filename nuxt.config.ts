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
    '@nuxtjs/i18n',
    '@nuxthub/core',
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
  app: {
    head: {
      title: 'MWC',
      titleTemplate: '%s - MWC',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon1.ico' },
      ],
    },
  },
  i18n: {
    bundle: {
      optimizeTranslationDirective: false,
    },
  },
})
