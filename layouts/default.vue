<template>
  <div class="p-4">
    <NuxtLoadingIndicator />
    <Header />
    <main class="">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
  useHead({
    titleTemplate: '%s - My App'
  })
</script>
<style >
  #header {
    .router-link-active {
      @apply border-b-2 border-green-500;
    }
  }
  #footer {
    .router-link-active {
      @apply border-b-2 border-blue-500;
    }
  }
</style>
