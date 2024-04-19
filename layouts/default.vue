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
  useSeoMeta({
    title: 'My Amazing Site',
    ogTitle: 'My Amazing Site',
    description: 'This is my amazing site, let me tell you all about it.',
    ogDescription: 'This is my amazing site, let me tell you all about it.',
    ogImage: 'https://example.com/image.png',
    twitterCard: 'summary_large_image',
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
