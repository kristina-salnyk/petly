import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pet-support.onrender.com/api',
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
