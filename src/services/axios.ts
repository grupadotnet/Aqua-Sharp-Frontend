import axios from 'axios';
import.meta.env;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_PATH + '/api',
});

export { api };
