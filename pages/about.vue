<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1 class="text-2xl font-semibold">{{ $t('about') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
  </div>
  <Alert>
    This is an auto-imported component.
  </Alert>
</template>
<script setup>
const { t } = useI18n()
</script>