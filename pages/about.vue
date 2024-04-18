<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1>About Page</h1>
    <h2>{{ $t('welcome') }}</h2>
  </div>
  <AppAlert>
    This is an auto-imported component.
  </AppAlert>
</template>
<script setup>
const { t } = useI18n()
</script>