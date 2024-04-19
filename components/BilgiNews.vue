<template>
  <div class="">
    <div v-if="pending" class="p-4 mb-2 bg-orange-300 last:mb-0">{{ $t('loading') }}</div>
    <div v-else-if="newsData && newsData.results.length">
      <div v-for="item in newsData.results" :key="item.id" class="p-4 mb-2 bg-orange-300 last:mb-0">
        <pre>{{ item.title }}</pre>
        <pre>{{ item.short_16words }}</pre>
        <pre>{{ item.url }}</pre>
        <pre>{{ item.image }}</pre>
      </div>
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
    console.log(newData);
  } else {
    console.log("No data or error in fetching data");
  }
});
</script>
