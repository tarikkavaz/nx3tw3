<template>
  <div class="max-w-screen-xl p-4 mx-auto">
    <NuxtLoadingIndicator />
    <Header />
    <main>
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
      @apply text-3xl font-bold my-8;
    }
    h2 {
      @apply text-2xl font-bold my-6;
    } 
    h3 {
      @apply text-xl font-bold my-4;
    }
    h4 {
      @apply text-lg font-bold my-2;
    }
    h5 {
      @apply text-base font-bold my-1;
    }
    a {
      @apply bg-black/50 text-white px-1 py-1 rounded-md;
      &:hover {
        @apply bg-black;
      }
    }
  }
  #footer {
    .router-link-active {
      @apply border-b-2 border-blue-500;
    }
  }
</style>
