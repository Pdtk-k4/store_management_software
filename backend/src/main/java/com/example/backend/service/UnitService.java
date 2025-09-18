package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.request.UnitRequest;
import com.example.backend.dto.response.UnitResponse;

public interface UnitService {
    UnitResponse createUnit(UnitRequest unitRequest);

    UnitResponse updateUnit(Long unitId, UnitRequest unitRequest);

    void deleteUnit(Long unitId);

    UnitResponse getUnitById(Long unitId);

    List<UnitResponse> getAllUnits();
}
