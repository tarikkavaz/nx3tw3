<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1 class="text-2xl font-semibold">{{ $t('contact') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <div><component :is="currentContent"></component></div>
  </div>
  <Alert>
    <p>{{ $t('alert') }}</p>
  </Alert>
</template>
<script setup lang="ts">
const { t, locale } = useI18n();

const currentContent = computed(() => {
  const language = locale.value;
  return defineAsyncComponent(() =>
    import(`@/pages/contact${language.toUpperCase()}.vue`)
      .catch(() => import('@/pages/contactEN.vue'))
  );
});

  useSeoMeta({
    title: t('contact'),
    description: t('globalDescription') + ' - ' + t('contactDescription'),
  })
</script>