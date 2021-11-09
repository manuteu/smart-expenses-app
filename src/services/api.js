import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apismartex.herokuapp.com/api/rotas/',
});

export default api;
