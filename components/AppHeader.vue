<template>
  <div class="p-4 mb-4 bg-green-300">
    <div class="flex justify-between">
      <div class="p-4 bg-green-400"> 
        <a href="#" v-for="locale in availableLocales" :key="locale.code" @click.prevent.stop="setLocale(locale.code)">
          translate to {{ locale.name }} ({{ locale.code }})
        </a>
      </div>
      <div class="p-4 bg-green-400">
        <NuxtLink v-for="locale in availableLocales" :key="locale.code" :to="switchLocalePath(locale.code)">
          switch path to {{ locale.name }} ({{ locale.code }})
        </NuxtLink>
      </div>
      <div class="p-4 bg-green-400">
        <select v-model="language">
          <option v-for="lang in locales" :key="lang" :value="lang.code">{{ lang.name }}</option>
        </select>
      </div>
    </div>
    <nav class="mt-8">
      <ul class="flex gap-2">
        <li><NuxtLink :to="localePath('/')">{{ $t('home') }}</NuxtLink></li>
        <li><NuxtLink :to="localePath('about')"> {{ $t('about') }}</NuxtLink></li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const { t, locale, locales, setLocale } = useI18n()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const availableLocales = computed(() => locales.value.filter(l => l.code !== locale.value))
const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value)
})
</script>
