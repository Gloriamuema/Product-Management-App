<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold text-primary mb-4">Products</h2>

    <button @click="showAddForm = !showAddForm" class="bg-primary text-white px-4 py-2 rounded mb-4">
      {{ showAddForm ? 'Cancel' : 'Add Product' }}
    </button>

    <!-- Add Product Form -->
    <div v-if="showAddForm" class="bg-white p-4 rounded shadow mb-4">
      <input v-model="newProduct.title" placeholder="Product Title" class="border p-2 w-full rounded mb-2" />
      <input v-model="newProduct.price" type="number" placeholder="Price" class="border p-2 w-full rounded mb-2" />
      <button @click="addProduct" class="bg-primary text-white px-4 py-2 rounded">Add</button>
    </div>

    <!-- Product List -->
    <ul>
      <li v-for="product in products" :key="product.id" class="bg-white p-4 rounded shadow mb-2 flex justify-between items-center">
        <span>{{ product.title }} - ${{ product.price }}</span>
        <router-link :to="`/products/${product.id}`" class="text-primary">View</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useProductStore } from '../stores/products'

const productStore = useProductStore()
const products = productStore.products
const showAddForm = ref(false)
const newProduct = ref({ title: '', price: 0 })

onMounted(() => {
  productStore.fetchProducts()
})

function addProduct() {
  if (!newProduct.value.title || newProduct.value.price <= 0) return
  productStore.addProduct({ ...newProduct.value })
  newProduct.value.title = ''
  newProduct.value.price = 0
  showAddForm.value = false
}
</script>
