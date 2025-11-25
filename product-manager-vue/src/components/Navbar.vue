<template>
  <header class="bg-[#000080] text-white p-4 shadow">
    <div class="max-w-6xl mx-auto flex justify-between items-center">
      <div class="text-xl font-bold">Product Manager</div>
      <div class="flex items-center gap-3">
        <div v-if="auth.isAuthenticated" class="text-sm">Hello, {{ auth.user?.username || 'User' }}</div>
        <button v-if="auth.isAuthenticated" @click="logout" class="bg-white text-[#000080] px-3 py-1 rounded">Logout</button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useAuthStore } from '../stores/auth'
const auth = useAuthStore()
function logout() {
  auth.logout()
  location.href = '/login'
}
</script>
