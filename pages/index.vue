<template>
  <div class="p-4 mb-4 bg-purple-400" id="content">
    <h1>{{ $t('index') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <BilgiNews />
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

const currentContent = computed(() => {
  const language = locale.value;
  return defineAsyncComponent(() =>
    import(`@/content/index${language.toUpperCase()}.vue`)
      .catch(() => import('@/content/indexEN.vue'))
  );
});

useSeoMeta({
  title: t('index'),
  description: t('globalDescription') + ' - ' + t('indexDescription'),
})
</script>
