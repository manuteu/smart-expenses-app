import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apismartex.herokuapp.com/api/rotas',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;
