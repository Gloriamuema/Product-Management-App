<template>
  <div class="min-h-screen bg-gray-100">
    <header class="bg-white shadow p-4">
      <div class="max-w-6xl mx-auto flex justify-between items-center">
        <div class="text-xl font-bold text-[#000080]">Product Manager</div>
        <nav class="flex items-center gap-4">
          <router-link to="/products" class="px-4 py-2 hover:text-blue-600">Products</router-link>
          <router-link to="/add-product" class="px-4 py-2 hover:text-blue-600">Add Product</router-link>
        </nav>
        <div class="ml-auto flex items-center gap-2" v-if="auth.isAuthenticated">
          <span class="text-sm text-gray-600">Hello, {{ auth.user.username }}</span>
          <button @click="logout" class="px-3 py-1 border rounded text-[#000080] border-[#000080']">
            Logout
          </button>
        </div>
      </div>
    </header>

    <main class="max-w-6xl mx-auto mt-6 px-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useAuthStore } from './stores/auth'
const auth = useAuthStore()
function logout() {
  auth.logout()
  location.href = '/login'
}
</script>
