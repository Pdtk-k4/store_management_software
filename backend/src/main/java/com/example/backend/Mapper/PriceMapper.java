package com.example.backend.Mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.example.backend.dto.request.PriceRequest;
import com.example.backend.dto.response.PriceResponse;
import com.example.backend.entity.Price;

@Mapper(componentModel = "spring")
public interface PriceMapper {
    PriceResponse toDTO(Price price);

    Price toEntity(PriceRequest priceRequest);

    List<PriceResponse> toDTOLists(List<Price> price);

    List<Price> toEntityLists(List<PriceRequest> priceRequest);

    void updateEntityFromDTO(@MappingTarget Price price, PriceRequest priceRequest);

}
