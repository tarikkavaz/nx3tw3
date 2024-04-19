export default defineI18nConfig(() => ({
  legacy: false,
  strategy: 'prefix',
  locale: 'en',
  defaultLocale: 'en',
    customRoutes: 'config',
    pages: {
      about: {
        en: '/about',
        fr: '/a-propos',
      },
    },
  messages: {
    en: {
      welcome: 'Welcome',
      home: 'Home',
      about: 'About'
    },
    fr: {
      welcome: 'Bienvenue',
      home: 'D’accuei',
      about: 'À Propos'
    }
  }
}))