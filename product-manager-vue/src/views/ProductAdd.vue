<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
    <h2 class="text-2xl font-bold text-[#000080] mb-4">Add Product</h2>

    <form @submit.prevent="submit">
      <input v-model="product.name" placeholder="Product Name" class="border p-2 w-full mb-2 rounded" required />
      <input v-model.number="product.quantity" type="number" placeholder="Quantity" class="border p-2 w-full mb-2 rounded" required />
      <input v-model="product.type" placeholder="Type / Category" class="border p-2 w-full mb-2 rounded" required />
      <input v-model.number="product.price" type="number" placeholder="Price" class="border p-2 w-full mb-2 rounded" required />
      <textarea v-model="product.description" placeholder="Description" class="border p-2 w-full mb-2 rounded"></textarea>
      <button type="submit" class="bg-[#000080] text-white px-4 py-2 rounded w-full">Add Product</button>
    </form>

    <p v-if="message" :class="messageClass" class="mt-4 font-semibold">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '../stores/products'
import { useRouter } from 'vue-router'

const store = useProductStore()
const router = useRouter()
const message = ref('')
const messageClass = ref('text-green-600')

const product = ref({
  name: '',
  quantity: 1,
  type: '',
  price: 0,
  description: '',
})

async function submit() {
  try {
    await store.addProduct({
      title: product.value.name,
      stock: product.value.quantity,
      category: product.value.type,
      price: product.value.price,
      description: product.value.description,
      thumbnail: 'https://via.placeholder.com/150', // dummy image
    })

    message.value = 'Product added successfully!'
    messageClass.value = 'text-green-600'
    product.value = { name: '', quantity: 1, type: '', price: 0, description: '' }

    router.push('/products') // redirect after adding
  } catch (err) {
    message.value = 'Failed to add product. Try again.'
    messageClass.value = 'text-red-600'
  }
}
</script>
