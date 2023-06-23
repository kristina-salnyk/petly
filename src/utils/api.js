import axios from 'axios';
// import { API_BASE_URL } from '../redux/constants';

export const api = axios.create({
  // baseURL: 'http://localhost:8080/api',
  // baseURL: 'https://pet-support.onrender.com/api',
  baseURL: 'http://3.125.69.59/api',
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
