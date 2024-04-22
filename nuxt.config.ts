// https://nuxt.com/docs/api/configuration/nuxt-config

const BASE_URL = 'test.bilgi.edu.tr';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n', 'nuxt-gtag'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      siteurl: `https://${BASE_URL}`,
      apiUrl: BASE_URL,
      email: 'info@bilgi.edu.tr' 
    }
  },
  $development: { 
    runtimeConfig: {
      public: {
        siteurl: 'http://localhost:3000',
      }
    },
  },
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root' // recommended
    },
    defaultLocale: 'en',
    strategy: 'prefix',
    lazy: true,
    langDir: 'lang',
    customRoutes: 'config',
    locales: [
      { code: 'en', iso: 'en-GB', name: 'English', file: 'en.ts'},
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe', file: 'tr.ts'}
    ],
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
  },
  gtag: {
    id: 'G-XXXXXXXXXX'
  },
})