<template>
  <div class="p-6 max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-[#000080] mb-4">Add Product</h2>
    <form @submit.prevent="submit" class="bg-white p-6 rounded shadow">
      <input v-model="title" placeholder="Title" class="border p-2 w-full mb-2 rounded" required />
      <textarea v-model="description" placeholder="Description" class="border p-2 w-full mb-2 rounded"></textarea>
      <input v-model="category" placeholder="Category" class="border p-2 w-full mb-2 rounded" />
      <input v-model.number="price" type="number" placeholder="Price" class="border p-2 w-full mb-2 rounded" />
      <input v-model.number="stock" type="number" placeholder="Stock" class="border p-2 w-full mb-2 rounded" />
      <input v-model="thumbnail" placeholder="Thumbnail URL" class="border p-2 w-full mb-2 rounded" />
      <button class="bg-[#000080] text-white px-4 py-2 rounded w-full">Add Product</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/products'
import { useRouter } from 'vue-router'

const store = useProductStore()
const router = useRouter()

const title = ref('')
const description = ref('')
const category = ref('')
const price = ref(0)
const stock = ref(0)
const thumbnail = ref('')

async function submit() {
  await store.addProduct({ title: title.value, description: description.value, category: category.value, price: price.value, stock: stock.value, thumbnail: thumbnail.value })
  router.push('/products')
}
</script>
