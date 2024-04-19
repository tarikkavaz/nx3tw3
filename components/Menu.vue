<template>
  <nav>
    <NuxtLinkLocale to="/" class="px-4 py-2"> {{ $t('home') }} </NuxtLinkLocale>
    <NuxtLinkLocale to="about" class="px-4 py-2"> {{ $t('about') }} </NuxtLinkLocale>
    <NuxtLinkLocale to="contact" class="px-4 py-2"> {{ $t('contact') }} </NuxtLinkLocale>
  </nav>
</template>
<style scoped>
a:hover {
  @apply bg-black/20;
}
</style>