<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <form @submit.prevent="submit" class="bg-white p-6 rounded shadow w-96">
      <h2 class="text-xl font-bold mb-4 text-[#000080]">Login</h2>

      <div class="mb-4">
        <label class="block mb-1">Username</label>
        <input v-model="username" class="border p-2 w-full rounded" required />
      </div>

      <div class="mb-4">
        <label class="block mb-1">Password</label>
       <input 
  v-model="username" 
  autocomplete="off"
/>

<input 
  v-model="password" 
  type="password" 
  autocomplete="off"
  spellcheck="false"
/>

      </div>

      <button class="bg-[#000080] text-white px-4 py-2 rounded w-full">Login</button>

      <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const error = ref('')

async function submit() {
  error.value = ''
  try {
    await auth.login({ username: username.value.trim(), password: password.value })
    router.push('/products') // redirect on success
  } catch (err) {
    error.value = err.message
  }
}
</script>
