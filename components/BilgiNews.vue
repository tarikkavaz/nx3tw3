<template>
  <div>
    <div v-if="pending" class="p-4 mb-2 bg-orange-300 last:mb-0">{{ $t('loading') }}</div>
    <div v-else-if="filteredNews.length || filteredEvents.length">
      <h3 v-if="filteredNews.length" class="mb-4 text-2xl">{{ $t('news') }}</h3>
      <NuxtLink v-for="item in filteredNews" :to="item.url" :key="item.id" class="flex gap-4 p-4 mb-2 bg-orange-300 last:mb-0" target="_blank">
        <img :src="item.image" :alt="item.short_16words" class="w-auto max-h-20">
        <div>
          <p class="text-2xl">{{ item.title }}</p>
          <p>{{ item.short_16words }}</p>
        </div>
      </NuxtLink>
      
      <h3 v-if="filteredEvents.length" class="mt-8 mb-4 text-2xl">{{ $t('events') }}</h3>
      <NuxtLink v-for="item in filteredEvents" :to="item.url" :key="item.id" class="flex gap-4 p-4 mb-2 bg-orange-300 last:mb-0" target="_blank">
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
  import { ref, watch, computed } from 'vue';
  import { useI18n } from 'vue-i18n'; 
  import { useFetch, useRuntimeConfig } from 'nuxt/app';

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

  const config = useRuntimeConfig();
  const apiUrl = config.public.apiUrl;

  const { pending, data: newsDataRef } = await useFetch<NewsResult>(`https://www.bilgi.edu.tr/api/news/?site=${apiUrl}`);

  const newsData = ref<NewsResult>({ results: [] });

  if (newsDataRef.value) {
    newsData.value = newsDataRef.value;
  }

  watch(newsDataRef, (newData) => {
    if (newData) {
      newsData.value = newData;
    } else {
      newsData.value = { results: [] };
    }
  });

  const { locale } = useI18n();

  const filteredNews = computed(() => {
    const newsPathSegment = locale.value === 'en' ? '/en/news' : '/tr/haber';
    return newsData.value.results.filter(item => item.url.includes(newsPathSegment));
  });

  const filteredEvents = computed(() => {
    const eventsPathSegment = locale.value === 'en' ? '/en/event' : '/tr/etkinlik';
    return newsData.value.results.filter(item => item.url.includes(eventsPathSegment));
  });
</script>
