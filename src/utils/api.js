import axios from 'axios';
import { API_BASE_URL } from '../redux/constants';

export const api = axios.create({
  baseURL: API_BASE_URL,
});

export const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
