<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1 class="text-2xl font-semibold">{{ $t('home') }}</h1>
    <h2>{{ $t('welcome') }}</h2>

    <p v-if="locale === 'en'">en Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quaerat cupiditate vel molestiae atque. Molestiae aliquam, explicabo aperiam sequi, aut eveniet autem perferendis itaque necessitatibus reiciendis tenetur quae repellendus vel!</p>
    <p v-if="locale === 'tr'">tr Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quaerat cupiditate vel molestiae atque. Molestiae aliquam, explicabo aperiam sequi, aut eveniet autem perferendis itaque necessitatibus reiciendis tenetur quae repellendus vel!</p>

  </div>
  <BilgiNews />
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'; 
  const { locale } = useI18n();
</script>