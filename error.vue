<template>
  <NuxtLayout>
    <div class="p-4 mb-4 bg-purple-400">
      <h1 class="text-2xl font-semibold">You've Arrived Here on Error</h1>
      <button class="button" @click="goBack">Back</button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/')
    }
  }
}
</script>