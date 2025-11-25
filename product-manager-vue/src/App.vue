<script setup>
import { useAuthStore } from './stores/auth'
const auth = useAuthStore()
function logout() {
  auth.logout()
  location.href = '/login'
}
</script>
