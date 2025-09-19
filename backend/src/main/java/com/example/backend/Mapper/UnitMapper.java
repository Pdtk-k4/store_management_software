package com.example.backend.Mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import com.example.backend.dto.request.UnitRequest;
import com.example.backend.dto.response.UnitResponse;
import com.example.backend.entity.Unit;

@Mapper(componentModel = "spring")
public interface UnitMapper {
    UnitResponse toDTO(Unit unit);

    Unit toEntity(UnitRequest unitRequest);

    List<UnitResponse> toDTOLists(List<Unit> units);

    List<Unit> toEntityLists(List<UnitRequest> unitRequests);

    void updateEntityFromDTO(UnitRequest unitRequest, @MappingTarget Unit unit);
}
