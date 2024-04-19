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
  experimental: {
    scanPageMeta: true,
  },
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
      '/': {
        en: '/',
        fr: '/',
      },
      about: {
        en: '/about',
        fr: '/hakkimizda',
      },
    },
  }
})