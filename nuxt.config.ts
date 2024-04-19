// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    defaultLocale: 'en',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
      },
      {
        code: 'tr',
        name: 'Türkçe'
      }
    ],
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about',
        tr: '/hakkimizda',
      },
    },
  }
})