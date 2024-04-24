export function pageSetup(pageName: string) {
  const { t, locale } = useI18n();

  const currentContent = computed(() => {
    const language = locale.value;
    return defineAsyncComponent(() =>
      import(`@/content/${pageName}${language.toUpperCase()}.vue`)
        .catch(() => import(`@/content/${pageName}EN.vue`))
    );
  });

  useSeoMeta({
    title: t(pageName),
    ogTitle: `${t(pageName)} - ${t('siteName')}`,
    twitterTitle: `${t(pageName)} - ${t('siteName')}`,
    description: t('globalDescription') + ' - ' + t(`${pageName}Description`),
    ogDescription: t('globalDescription') + ' - ' + t(`${pageName}Description`),
    twitterDescription: t('globalDescription') + ' - ' + t(`${pageName}Description`),
  });

  return {
    currentContent,
  };
}
