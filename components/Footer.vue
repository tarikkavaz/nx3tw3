<template>
  <div class="p-4 mt-4 bg-blue-300">
    <h2>Footer <a :href="'mailto:' + email">{{ email }}</a></h2>
    <!-- <Menu />
    <LangSwitch /> -->
  </div>
</template>

<script setup lang="ts">
import { useRuntimeConfig } from 'nuxt/app';

const config = useRuntimeConfig();
const email = config.public.email;
</script>