<template>
  <div class="p-4 mb-4 bg-purple-400" id="content">
    <h1>{{ $t('contact') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <Alert>
    <p>{{ $t('alert') }}</p>
  </Alert>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();
const config = useRuntimeConfig();
const siteurl = config.public.siteurl;
const currentContent = computed(() => {
  const language = locale.value;
  return defineAsyncComponent(() =>
    import(`@/content/contact${language.toUpperCase()}.vue`)
      .catch(() => import('@/content/contactEN.vue'))
  );
});

useSeoMeta({
  title: `${t('siteName')}`,
  ogTitle: `${t('siteName')}`,
  twitterTitle: `${t('siteName')}`,
  description: t('globalDescription') + ' - ' + t('contactDescription'),
  ogDescription: t('globalDescription') + ' - ' + t('contactDescription'),
  twitterDescription: t('globalDescription') + ' - ' + t('contactDescription'),
  ogUrl: siteurl,
  ogImage: siteurl + '/share.jpg',
  twitterImage: siteurl + '/share.jpg',
  twitterCard: 'summary_large_image',
})
useHead({
  htmlAttrs: {
    lang: locale.value
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>