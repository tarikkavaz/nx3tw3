<template>
  <nav class="mt-8">
    <div class="flex gap-2">
      <NuxtLinkLocale to="/"> {{ $t('home') }} </NuxtLinkLocale>
      <NuxtLinkLocale to="about"> {{ $t('about') }} </NuxtLinkLocale>
    </div>
  </nav>
</template>
