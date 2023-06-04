import axios from 'axios';
import Cookies from 'universal-cookie';
import.meta.env;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_PATH + '/api',
  headers: {
    Authorization: 'Bearer ' + new Cookies().get('Authorization'),
  },
});

export { api };
