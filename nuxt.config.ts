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
  runtimeConfig: {
    public: {
      apiUrl: 'test.bilgi.edu.tr',
      email: 'info@bilgi.edu.tr' 
    }
  },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    defaultLocale: 'en',
    strategy: 'prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-GB',
        name: 'English',
        file: 'en-GB.ts'
      },
      {
        code: 'tr',
        iso: 'tr-TR',
        name: 'Türkçe',
        file: 'tr-TR.ts'
      }
    ],
    lazy: true,
    langDir: 'lang',
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about',
        tr: '/hakkimizda',
      },
      contact: {
        en: '/contact',
        tr: '/iletisim',
      },
    },
  }
})