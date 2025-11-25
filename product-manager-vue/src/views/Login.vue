<template>
  <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
    <h2 class="text-2xl font-bold text-[#000080] mb-4">Login</h2>
    <form @submit.prevent="loginUser">
      <input v-model="username" type="text" placeholder="Username" class="border p-2 w-full mb-2 rounded" />
      <input v-model="password" type="password" placeholder="Password" class="border p-2 w-full mb-2 rounded" />
      <button type="submit" class="bg-[#000080] text-white px-4 py-2 rounded w-full">Login</button>
    </form>
    <p v-if="message" class="mt-2 text-red-600">{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const message = ref('')
const auth = useAuthStore()
const router = useRouter()

function loginUser() {
  try {
    auth.login({ username: username.value, password: password.value })
    router.push('/products')
  } catch (err) {
    message.value = err.message
  }
}
</script>
