<template>
  <div class="">
    <div v-if="pending" class="p-4 mb-2 bg-orange-300 last:mb-0">{{ $t('loading') }}</div>
    <div v-else-if="newsData && newsData.results.length">
      <NuxtLink :to="item.url" v-for="item in newsData.results" :key="item.id" class="flex gap-4 p-4 mb-2 bg-orange-300 last:mb-0" target="_blank">
        <img :src="item.image" :alt="item.short_16words" class="w-auto max-h-20">
        <div>
          <p class="text-2xl">{{ item.title }}</p>
          <p>{{ item.short_16words }}</p>
        </div>
      </NuxtLink>
    </div>
    <div v-else class="p-4 mb-2 bg-orange-300 last:mb-0">{{ $t('nonews') }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useLazyAsyncData } from '#imports';

// Define a type for the item structure
interface NewsItem {
  id: string;
  title: string;
  short_16words: string;
  url: string;
  image: string;
}

interface NewsResult {
  results: NewsItem[];
}

// Async data fetching with proper typing
const { pending, data: newsDataRef } = await useLazyAsyncData<NewsResult | null>('items', () => $fetch('https://www.bilgi.edu.tr/api/news/?site=test.bilgi.edu.tr'));

// Unwrap the ref for easier access and initialize it safely
const newsData = ref<NewsResult>({ results: [] });
if (newsDataRef.value) {
  newsData.value = newsDataRef.value;
}

// Watch for changes in data
watch(newsDataRef, (newData) => {
  if (newData) {
    newsData.value = newData;
  } else {
    newsData.value = { results: [] };
  }
});
</script>
