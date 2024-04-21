<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1 class="text-2xl font-semibold">{{ $t('index') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <div><component :is="currentContent"></component></div>
  </div>
  <BilgiNews />
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const currentContent = computed(() => {
  const language = locale.value;
  return defineAsyncComponent(() =>
    import(`@/pages/index${language.toUpperCase()}.vue`)
      .catch(() => import('@/pages/indexEN.vue'))
  );
});

useSeoMeta({
  title: t('index'),
  description: t('globalDescription') + ' - ' + t('indexDescription'),
})
</script>
