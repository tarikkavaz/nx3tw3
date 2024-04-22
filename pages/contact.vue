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

const currentContent = computed(() => {
  const language = locale.value;
  return defineAsyncComponent(() =>
    import(`@/content/contact${language.toUpperCase()}.vue`)
      .catch(() => import('@/content/contactEN.vue'))
  );
});

  useSeoMeta({
    title: t('contact'),
    description: t('globalDescription') + ' - ' + t('contactDescription'),
  })
</script>