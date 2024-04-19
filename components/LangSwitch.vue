<template>
  <select v-model="language">
    <option v-for="lang in locales" :key="lang" :value="lang.code">{{ lang.name }}</option>
  </select>
</template>

<script setup>
  const { locale, locales, setLocale } = useI18n()
  const switchLocalePath = useSwitchLocalePath()
  const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value))
  const language = computed({
    get: () => locale.value,
    set: (value) => setLocale(value)
  })
</script>
