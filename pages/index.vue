<template>
  <div class="p-4 mb-4 bg-purple-400">
    <h1 class="text-2xl font-semibold">{{ $t('home') }}</h1>
    <h2>{{ $t('welcome') }}</h2>
    <div v-if="locale === 'en'">
      <p>en Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quaerat cupiditate vel molestiae atque. Molestiae aliquam, explicabo aperiam sequi, aut eveniet autem perferendis itaque necessitatibus reiciendis tenetur quae repellendus vel!</p>
    </div>
    <div v-if="locale === 'tr'">
      <p>tr Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima quaerat cupiditate vel molestiae atque. Molestiae aliquam, explicabo aperiam sequi, aut eveniet autem perferendis itaque necessitatibus reiciendis tenetur quae repellendus vel!</p>
    </div>
  </div>
  <BilgiNews />
</template>
<script setup lang="ts">
  import { useI18n } from 'vue-i18n'; 
  const { t, locale } = useI18n();
  useSeoMeta({
    title: t('home'),
    description: t('globalDescription') + ' - ' + t('homeDescription'),
  })
</script>