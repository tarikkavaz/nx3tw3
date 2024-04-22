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
const currentContent = computed(() => {
  const language = locale.value;
  return defineAsyncComponent(() =>
    import(`@/content/about${language.toUpperCase()}.vue`)
      .catch(() => import('@/content/aboutEN.vue'))
  );
});

useSeoMeta({
  title: t('about'),
  ogTitle: `${t('about')} - ${t('siteName')}`,
  twitterTitle: `${t('about')} - ${t('siteName')}`,
  description: t('globalDescription') + ' - ' + t('aboutDescription'),
  ogDescription: t('globalDescription') + ' - ' + t('aboutDescription'),
  twitterDescription: t('globalDescription') + ' - ' + t('aboutDescription'),
})
</script>