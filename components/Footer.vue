<template>
  <div class="p-4 mt-4 bg-blue-300" id="footer">
    <p class="mb-4"><a :href="'mailto:' + email">{{ email }}</a></p>
    <div class="flex align-middle">
      <Menu />
      <OtherLang />
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRuntimeConfig } from 'nuxt/app';
  const config = useRuntimeConfig();
  const email = config.public.email;
</script>