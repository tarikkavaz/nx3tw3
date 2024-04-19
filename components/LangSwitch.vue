<template>
  <div class="flex justify-between">
    <div class="">
      <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
        {{ locale.name }} ({{ locale.code }})
      </NuxtLink>
    </div>
    <div class="">
      <select v-model="language">
        <option v-for="lang in locales" :key="lang" :value="lang.code">{{ lang.name }}</option>
      </select>
    </div>
  </div>
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
