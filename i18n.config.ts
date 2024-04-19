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
      loading: 'Loading...',
      nonews: 'No News Found',
      home: 'Home',
      about: 'About'
    },
    fr: {
      welcome: 'Bienvenue',
      loading: 'Chargement...',
      nonews: 'Aucune nouvelle trouvée',
      home: 'D’accuei',
      about: 'À Propos'
    }
  }
}))