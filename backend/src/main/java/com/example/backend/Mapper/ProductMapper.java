package com.example.backend.mapper;

import java.util.List;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import com.example.backend.dto.request.ProductRequest;
import com.example.backend.dto.response.ProductResponse;
import com.example.backend.entity.Product;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    ProductResponse toDTO(Product product);

    Product toEntity(ProductRequest productRequest);

    List<ProductResponse> toDTOList(List<Product> products);

    List<Product> toEntityList(List<ProductRequest> productRequests);

    void updateEntityFromDTO(ProductRequest productRequest, @MappingTarget Product product);
}
