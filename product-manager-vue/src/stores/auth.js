import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    login({ username, password }) {
      // Use hardcoded username/password
      if (username === 'admin' && password === '123') {
        const userData = { username: 'admin' }
        this.user = userData
        localStorage.setItem('user', JSON.stringify(userData))
      } else {
        throw new Error('Invalid credentials')
      }
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
  },
})
