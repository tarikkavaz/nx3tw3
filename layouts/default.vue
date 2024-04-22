<template>
  <div class="max-w-screen-xl p-4 mx-auto">
    <NuxtLoadingIndicator />
    <Header />
    <main id="content">
      <slot />
    </main>
    <Footer />
  </div>
</template>
<script setup lang="ts">
  const { t } = useI18n();
  useHead({
    titleTemplate: (titleChunk) => `${titleChunk} - ${t('siteName')}`
  })
</script>
<style >
  #header {
    .router-link-active {
      @apply border-b-2 border-green-500;
    }
  }
  #content {
    h1 {
      @apply text-3xl font-bold;
    }
    h2 {
      @apply text-2xl font-bold;
    } 
    h3 {
      @apply text-xl font-bold;
    }
    h4 {
      @apply text-lg font-bold;
    }
    h5 {
      @apply text-base font-bold;
    }
    a {
      @apply text-blue-800 underline;
      &:hover {
        @apply text-blue-600;
      }
    }
  }
  #footer {
    .router-link-active {
      @apply border-b-2 border-blue-500;
    }
  }
</style>
