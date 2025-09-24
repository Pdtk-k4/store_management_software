import axios from 'axios';
import { API_BASE_URL } from '../constants';
import type { Product, Order, Customer, ApiResponse, PaginationParams, FilterParams } from '../types';

// Create axios instance
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Product API
export const productApi = {
  getAll: (params?: FilterParams & PaginationParams): Promise<ApiResponse<Product[]>> =>
    api.get('/products', { params }).then(res => res.data),

  getById: (id: string): Promise<ApiResponse<Product>> =>
    api.get(`/products/${id}`).then(res => res.data),

  create: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Product>> =>
    api.post('/products', product).then(res => res.data),

  update: (id: string, product: Partial<Product>): Promise<ApiResponse<Product>> =>
    api.put(`/products/${id}`, product).then(res => res.data),

  delete: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/products/${id}`).then(res => res.data),
};

// Order API
export const orderApi = {
  getAll: (params?: FilterParams & PaginationParams): Promise<ApiResponse<Order[]>> =>
    api.get('/orders', { params }).then(res => res.data),

  getById: (id: string): Promise<ApiResponse<Order>> =>
    api.get(`/orders/${id}`).then(res => res.data),

  create: (order: Omit<Order, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Order>> =>
    api.post('/orders', order).then(res => res.data),

  updateStatus: (id: string, status: Order['status']): Promise<ApiResponse<Order>> =>
    api.patch(`/orders/${id}/status`, { status }).then(res => res.data),

  delete: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/orders/${id}`).then(res => res.data),
};

// Customer API
export const customerApi = {
  getAll: (params?: FilterParams & PaginationParams): Promise<ApiResponse<Customer[]>> =>
    api.get('/customers', { params }).then(res => res.data),

  getById: (id: string): Promise<ApiResponse<Customer>> =>
    api.get(`/customers/${id}`).then(res => res.data),

  create: (customer: Omit<Customer, 'id' | 'createdAt' | 'updatedAt'>): Promise<ApiResponse<Customer>> =>
    api.post('/customers', customer).then(res => res.data),

  update: (id: string, customer: Partial<Customer>): Promise<ApiResponse<Customer>> =>
    api.put(`/customers/${id}`, customer).then(res => res.data),

  delete: (id: string): Promise<ApiResponse<void>> =>
    api.delete(`/customers/${id}`).then(res => res.data),
};

export default api;