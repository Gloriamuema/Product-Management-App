import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dummyjson.com',
  timeout: 10000
})

// We don't set Authorization here because token is stored in Pinia; stores will attach header per-request.

export default api
