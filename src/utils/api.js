import axios from 'axios';
// import { API_BASE_URL } from '../redux/constants';

export const api = axios.create({
  // baseURL: 'http://localhost:8080/api',
  // baseURL: 'http://3.72.23.58/api',
  baseURL: 'https://petly-4cyh.onrender.com/api',
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
