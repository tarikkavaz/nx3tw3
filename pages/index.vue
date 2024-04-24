<template>
  <div class="p-4 mb-4 bg-purple-400" id="content">
    <h1>{{ $t(pageName) }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <component :is="currentContent"></component>
  </div>
  <BilgiNews />
</template>
<script setup lang="ts">
  const pageName = 'index'; // Set Page Name
  const { currentContent } = usePageSetup(pageName);
</script>
