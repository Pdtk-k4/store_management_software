package com.example.backend.Mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.example.backend.dto.request.CategoryRequest;
import com.example.backend.dto.response.CategoryResponse;
import com.example.backend.entity.Category;

@Mapper(componentModel = "spring")
public interface CategoryMapper {
    CategoryResponse toDTO(Category category);

    Category toEntity(CategoryRequest categoryRequest);

    List<CategoryResponse> toDTOs(List<Category> categories);

    List<Category> toEntities(List<CategoryRequest> categoryRequests);

    void updateEntityFromDTO(CategoryRequest categoryRequest, @MappingTarget Category category);
}
