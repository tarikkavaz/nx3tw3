<template>

  <div v-for="item in item.results" class="">
    {{ item.title }}
  </div>
</template>

<script setup lang="ts">
/* Navigation will occur before fetching is complete.
  Handle pending and error states directly within your component's template
*/
const { pending, data: item } = await useLazyAsyncData('item', () => $fetch('https://www.bilgi.edu.tr/api/news/?site=test.bilgi.edu.tr'))

watch(item, (newItem) => {
  // Because item might start out null, you won't have access
  // to its contents immediately, but you can watch it.
})
</script>