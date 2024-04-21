<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1 class="text-2xl font-semibold">{{ $t('about') }}</h1>
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
    import(`@/pages/about${language.toUpperCase()}.vue`)
      .catch(() => import('@/pages/aboutEN.vue'))
  );
});

  useSeoMeta({
    title: t('about'),
    description: t('globalDescription') + ' - ' + t('aboutDescription'),
  })
</script>