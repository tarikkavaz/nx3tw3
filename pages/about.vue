<template>
  <div class="p-4 mb-4 bg-purple-400" id="content">
    <h1>{{ $t('about') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <Alert class="text-white bg-purple-600">
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
    import(`@/content/about${language.toUpperCase()}.vue`)
      .catch(() => import('@/content/aboutEN.vue'))
  );
});

useSeoMeta({
  title: `${t('siteName')}`,
  ogTitle: `${t('siteName')}`,
  twitterTitle: `${t('siteName')}`,
  description: t('globalDescription') + ' - ' + t('aboutDescription'),
  ogDescription: t('globalDescription') + ' - ' + t('aboutDescription'),
  twitterDescription: t('globalDescription') + ' - ' + t('aboutDescription'),
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