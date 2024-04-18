<template>
  <div v-for="item in item.results" class="p-4 mb-2 bg-orange-300">
    <pre>{{ item.title }}</pre>
    <pre>{{ item.short_16words }}</pre>
    <pre>{{ item.url }}</pre>
    <pre>{{ item.image }}</pre>
  </div>
</template>

<script setup lang="ts">
const { pending, data: item } = await useLazyAsyncData('item', () => $fetch('https://www.bilgi.edu.tr/api/news/?site=test.bilgi.edu.tr'))

watch(item, (newItem) => {
  console.log(newItem)
})
</script>