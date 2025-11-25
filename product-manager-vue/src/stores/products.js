import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      const res = await fetch('https://dummyjson.com/products')
      const data = await res.json()
      this.products = data.products
    },
    async addProduct(product) {
      // DummyJSON API doesn't allow POST, so we mock adding
      product.id = Date.now()
      this.products.push(product)
    },
    getProductById(id) {
      return this.products.find((p) => p.id === Number(id))
    },
  },
})
