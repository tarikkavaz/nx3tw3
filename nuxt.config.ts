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
  modules: [
    '@nuxtjs/i18n', 
    ['@nuxtjs/google-fonts', {
      families: {
        'Jacquard+24': true,
        'Josefin+Sans': true,
        Roboto: [400, 700],
        Inter: [400, 700],
        Lato: [100, 300],
      }
    }],
  ],
  googleFonts: {
    preload: true,
    subsets: 'latin-ext',
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
      { code: 'en', iso: 'en-GB', name: 'English', file: 'en-GB.ts'},
      { code: 'tr', iso: 'tr-TR', name: 'Türkçe', file: 'tr-TR.ts'}
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
  }
})