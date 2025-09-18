package com.example.backend.Mapper;

import java.util.List;

import org.mapstruct.MappingTarget;

import com.example.backend.dto.request.BrandRequest;
import com.example.backend.dto.response.BrandResponse;
import com.example.backend.entity.Brand;

public interface BrandMapper {
    BrandResponse toDTO(Brand brands);

    Brand toEntity(BrandRequest brandRequest);

    List<BrandResponse> toDTOs(List<Brand> brands);

    List<Brand> toEntities(List<BrandResponse> brandResponses);

    void updateEntityFromDTO(@MappingTarget Brand brand, BrandRequest brandRequest);

}
