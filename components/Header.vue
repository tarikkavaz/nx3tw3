<template>
  <div class="p-4 mb-4 bg-green-300">
    <div class="mb-10">
      <img :src="'https://tbl.bilgi.edu.tr/brand-resources/logotypes/bilgi/dark/bilgi-logotype-' + $i18n.locale + '-dark@2x.png'" class="h-24 pt-4" alt="">
    </div>
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
    <nav class="mt-8">
      <div class="flex gap-2">
        <NuxtLinkLocale to="/"> {{ $t('home') }} </NuxtLinkLocale>
        <NuxtLinkLocale to="about"> {{ $t('about') }} </NuxtLinkLocale>
      </div>
    </nav>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value))
const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value)
})
</script>
