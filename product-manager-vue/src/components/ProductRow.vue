<template>
  <tr class="hover:bg-gray-50 cursor-pointer" @click="$emit('view', product.id)">
    <td class="p-3">
      <img :src="product.thumbnail" alt="" class="h-10 w-10 rounded-full object-cover"/>
    </td>
    <td class="p-3">
      <div class="font-semibold text-sm text-primary">{{ product.title }}</div>
      <div class="text-xs text-gray-500">{{ truncated }}</div>
    </td>
    <td class="p-3 text-sm capitalize">{{ product.category }}</td>
    <td class="p-3 text-sm">${{ product.price }}</td>
    <td class="p-3 text-sm">{{ product.stock }}</td>
    <td class="p-3">
      <button class="text-sm px-3 py-1 border rounded text-primary border-primary" @click.stop="$emit('view', product.id)">View</button>
    </td>
  </tr>
</template>

<script setup>
defineProps({ product: Object })
const truncated = computed(() => {
  const desc = product.description || ''
  return desc.length > 90 ? desc.slice(0, 90) + '...' : desc
})
</script>
