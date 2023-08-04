import axios from 'axios';
import { getAuthHeader } from '../authorization/index';

const api = axios.create({
    baseURL: import.meta.env.VUE_APP_BASE_URL,
});

api.interceptors.request.use(
    (config) => {
        const token = getAuthHeader();
        config.headers.Authorization = token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default api;
