package com.example.backend.service;

import java.util.List;
import com.example.backend.dto.request.ProductRequest;
import com.example.backend.dto.response.ProductResponse;
import com.example.backend.entity.Product;

public interface ProductService {
    ProductResponse createProduct(ProductRequest productRequest);

    ProductResponse getProductById(Long productId);

    ProductResponse updateProduct(Long productId, ProductRequest productRequest);

    void deleteProduct(Long productId);

    List<ProductResponse> getAllProducts();


}
