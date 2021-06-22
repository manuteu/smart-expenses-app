import axios from 'axios'

const api = axios.create({
  baseURL: 'http://Localhost:3000'
})

export default api