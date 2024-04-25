<script setup lang="ts">

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

const products = ref<Product[]>([]);
const pending = ref(true);

async function fetchProducts() {
  pending.value = true;
  try {
    const response = await fetch('https://dummyjson.com/products');
    if (response.ok) {
      const data = await response.json();
      products.value = data.products; // Assuming the API returns an object with a products array
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    pending.value = false;
  }
}

// Fetch products on mount
onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div v-if="pending" class="p-4 mb-2 bg-orange-300 last:mb-0">
    {{ $t('loading') }}
  </div>
  <div v-else>
    <div class="grid grid-cols-2 gap-4 mb-4">
      <div v-for="product in products" :key="product.id" class="p-4 border border-orange-400">
        <div class="">
          <h3 class="mb-4 text-xl">{{ product.title }}</h3>
          <img :src="product.thumbnail" alt="Product thumbnail" class="object-cover w-full h-auto mb-4 max-h-40">
          <p class="mb-4">{{ product.description }}</p>
          <div class="text-gray-500">
            <div class="">Price: ${{ product.price }} ({{ product.discountPercentage }}% off)</div>
            <div class="">Rating: {{ product.rating }}</div>
            <div class="">Stock: {{ product.stock }}</div>
            <div class="">Brand: {{ product.brand }}</div>
            <div class="">Category: {{ product.category }}</div>
          </div>
          <h4 class="my-4 border-b-[1px] border-orange-300">Images</h4>
          <div class="grid grid-cols-6">
            <img v-for="image in product.images" :src="image" :alt="`${product.title} image`" :key="image" class="object-cover h-auto max-w-20 max-h-20">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>