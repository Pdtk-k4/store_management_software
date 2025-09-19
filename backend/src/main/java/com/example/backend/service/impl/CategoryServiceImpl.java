package com.example.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.mapper.CategoryMapper;
import com.example.backend.dto.request.CategoryRequest;
import com.example.backend.dto.response.CategoryResponse;
import com.example.backend.entity.Category;
import com.example.backend.repository.CategoryRepository;
import com.example.backend.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public CategoryResponse createCategory(CategoryRequest categoryRequest) {
        if (categoryRepository.existsByCategoryName(categoryRequest.getCategoryName())) {
            throw new RuntimeException("Category name đã tôn tại");
        }
        Category category = categoryMapper.toEntity(categoryRequest);
        Category savedCategory = categoryRepository.save(category);
        return categoryMapper.toDTO(savedCategory);
    }

    @Override
    public CategoryResponse updateCategory(Long categoryId, CategoryRequest categoryRequest) {
        Category existing = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy category : " + categoryId));
        if (!existing.getCategoryName().equals(categoryRequest.getCategoryName())
                && categoryRepository.existsByCategoryName(categoryRequest.getCategoryName())) {
            throw new RuntimeException("Category name đã tôn tại");
        }
        categoryMapper.updateEntityFromDTO(categoryRequest, existing);
        Category updatedCategory = categoryRepository.save(existing);
        return categoryMapper.toDTO(updatedCategory);
    }

    @Override
    public void deleteCategory(Long categoryId) {
        Category existing = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy category : " + categoryId));
        categoryRepository.delete(existing);
    }

    @Override
    public CategoryResponse getCategoryById(Long categoryId) {
        Category existing = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy category : " + categoryId));
        return categoryMapper.toDTO(existing);

    }

    @Override
    public List<CategoryResponse> getAllCategory() {
        List<Category> categories = categoryRepository.findAll();
        return categoryMapper.toDTOs(categories);
    }

}
