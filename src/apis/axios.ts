import axios from 'axios';
import { MMKV } from 'react-native-mmkv';

const store = new MMKV();

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:3030',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = store.getString('token');
  try {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    return Promise.reject(error);
  }
  return config;
});

export default axiosInstance;
