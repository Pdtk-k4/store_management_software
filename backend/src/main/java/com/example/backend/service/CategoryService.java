package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.request.CategoryRequest;
import com.example.backend.dto.response.CategoryResponse;

public interface CategoryService {
    CategoryResponse createCategory(CategoryRequest categoryRequest);

    CategoryResponse updateCategory(Long categoryId, CategoryRequest categoryRequest);

    void deleteCategory(Long categoryId);

    CategoryResponse getCategoryById(Long categoryId);

    List<CategoryResponse> getAllCategory();
}
