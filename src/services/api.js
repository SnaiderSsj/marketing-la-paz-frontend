import axios from 'axios';

const API_BASE_URL = 'https://marketinglapaz-production.up.railway.app';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// Interceptor para logs
api.interceptors.request.use(
  (config) => {
    console.log(`🔄 ${config.method?.toUpperCase()} to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('❌ Request error:', error);
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log(`✅ Response from: ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    console.error('❌ Response error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const campañasAPI = {
  getAll: () => api.get('/api/campañas'),
  getById: (id) => api.get(`/api/campañas/${id}`),
  create: (data) => api.post('/api/campañas', data),
  update: (id, data) => api.put(`/api/campañas/${id}`, data),
  delete: (id) => api.delete(`/api/campañas/${id}`),
  getActivas: () => api.get('/api/campañas/activas'),
  getEstadisticas: () => api.get('/api/campañas/estadisticas'),
};

export const leadsAPI = {
  getAll: () => api.get('/api/leads'),
  getById: (id) => api.get(`/api/leads/${id}`),
  create: (data) => api.post('/api/leads', data),
  update: (id, data) => api.put(`/api/leads/${id}`, data),
  delete: (id) => api.delete(`/api/leads/${id}`),
  getEstadisticas: () => api.get('/api/leads/estadisticas'),
};

export const marketingAPI = {
  getDashboard: () => api.get('/api/dashboard'),
  getHealth: () => api.get('/health'),
};

export default api;