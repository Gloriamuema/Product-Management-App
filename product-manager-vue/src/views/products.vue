<template>
  <div class="max-w-6xl mx-auto mt-6 p-4">
    <!-- Search & Filter -->
    <div class="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search by name or type"
        class="border p-2 rounded w-full md:w-1/2"
      />
      <select v-model="selectedCategory" class="border p-2 rounded w-full md:w-1/4">
        <option value="">All Types</option>
        <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
      </select>
    </div>

    <!-- Product List -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white rounded shadow p-4 flex flex-col"
      >
        <img :src="product.image" alt="Product Image" class="w-full h-48 object-cover rounded mb-3" />
        <h3 class="font-bold text-lg text-[#000080] mb-1">{{ product.title }}</h3>
        <p class="text-gray-700 text-sm mb-1">Type: {{ product.category }}</p>
        <p class="text-gray-700 text-sm mb-1">Quantity: {{ product.stock }}</p>
        <p class="text-gray-700 text-sm mb-2">Price: ${{ product.price.toFixed(2) }}</p>
        <p class="text-gray-600 text-sm mb-2 line-clamp-3">{{ product.description }}</p>
        <router-link
          :to="`/products/${product.id}`"
          class="mt-auto text-white bg-[#000080] text-center py-2 rounded hover:bg-blue-700 transition"
        >
          View
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProductStore } from '../stores/products'

const productStore = useProductStore()
const searchQuery = ref('')
const selectedCategory = ref('')

// Dummy categories for filter
const categories = ['beauty', 'fragrances', 'furniture', 'groceries']

// Load products on mount
onMounted(() => {
  productStore.fetchProducts()
})

// Filtered products
const filteredProducts = computed(() => {
  return productStore.products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.value.toLowerCase())
    const matchesCategory = selectedCategory.value ? p.category === selectedCategory.value : true
    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
/* Optional: Truncate long descriptions */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>
