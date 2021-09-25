import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apismartex.herokuapp.com/',
});

export default api;
