<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-primary mb-4">Product Details</h2>
    <div v-if="product" class="bg-white p-4 rounded shadow">
      <p><strong>Title:</strong> {{ product.title }}</p>
      <p><strong>Price:</strong> ${{ product.price }}</p>
      <p><strong>Description:</strong> {{ product.description || 'No description' }}</p>
    </div>
    <p v-else>Product not found</p>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '../stores/products'

const route = useRoute()
const productStore = useProductStore()
const product = ref(null)

onMounted(() => {
  const id = route.params.id
  product.value = productStore.getProductById(id)
})
</script>
