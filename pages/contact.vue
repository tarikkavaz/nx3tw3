<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1 class="text-2xl font-semibold">{{ $t('contact') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <div v-if="locale === 'en'">
      <p>en Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quaerat cupiditate vel molestiae atque. Molestiae aliquam, explicabo aperiam sequi, aut eveniet autem perferendis itaque necessitatibus reiciendis tenetur quae repellendus vel!</p>
    </div>
    <div v-if="locale === 'tr'">
      <p>tr Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quaerat cupiditate vel molestiae atque. Molestiae aliquam, explicabo aperiam sequi, aut eveniet autem perferendis itaque necessitatibus reiciendis tenetur quae repellendus vel!</p>
    </div>
  </div>
  <Alert>
    <div v-if="locale === 'en'">
      <p>Alert</p>
    </div>
    <div v-if="locale === 'tr'">
      <p>Uyarı</p>
    </div>
  </Alert>
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'; 
  const { locale } = useI18n();
  useSeoMeta({
    title: 'Contact page',
    description: 'This is the contact page',
  })
</script>