import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import ProductView from '../views/ProductView.vue'
import { useAuthStore } from '../stores/auth'

const routes = [
  { path: '/login', component: Login },
  { path: '/products', component: Products },
  { path: '/products/:id', component: ProductView },
  { path: '/:pathMatch(.*)*', redirect: '/login' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  const auth = useAuthStore()
  if (to.path !== '/login' && !auth.isAuthenticated) return '/login'
  if (to.path === '/login' && auth.isAuthenticated) return '/products'
})

export default router
