import { useState, useEffect } from 'react';
import type { Product, FilterParams, PaginationParams } from '../types';
import { productApi } from '../services/api';

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: string | null;
  total: number;
  fetchProducts: () => void;
  createProduct: (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export const useProducts = (
  params?: FilterParams & PaginationParams
): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      // For demo purposes, using mock data
      // In production, uncomment the API call:
      // const response = await productApi.getAll(params);
      // setProducts(response.data);
      
      // Mock data
      const mockProducts: Product[] = [
        {
          id: 'P001',
          name: 'Laptop Dell XPS 13',
          category: 'Electronics',
          price: 25000000,
          stock: 15,
          status: 'active',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z',
        },
        {
          id: 'P002',
          name: 'iPhone 15 Pro',
          category: 'Electronics',
          price: 28000000,
          stock: 8,
          status: 'active',
          createdAt: '2024-01-01T00:00:00Z',
          updatedAt: '2024-01-01T00:00:00Z',
        },
      ];
      setProducts(mockProducts);
      setTotal(mockProducts.length);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (product: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      // In production, use API:
      // await productApi.create(product);
      
      // Mock implementation
      const newProduct: Product = {
        ...product,
        id: `P${Date.now()}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      setProducts(prev => [...prev, newProduct]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create product');
      throw err;
    }
  };

  const updateProduct = async (id: string, product: Partial<Product>) => {
    try {
      // In production, use API:
      // await productApi.update(id, product);
      
      // Mock implementation
      setProducts(prev => prev.map(p => p.id === id ? { ...p, ...product } : p));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update product');
      throw err;
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      // In production, use API:
      // await productApi.delete(id);
      
      // Mock implementation
      setProducts(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete product');
      throw err;
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [params]);

  return {
    products,
    loading,
    error,
    total,
    fetchProducts,
    createProduct,
    updateProduct,
    deleteProduct,
  };
};