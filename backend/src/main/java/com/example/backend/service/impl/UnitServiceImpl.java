package com.example.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.mapper.UnitMapper;
import com.example.backend.dto.request.UnitRequest;
import com.example.backend.dto.response.UnitResponse;
import com.example.backend.entity.Unit;
import com.example.backend.repository.UnitRepository;
import com.example.backend.service.UnitService;

@Service
public class UnitServiceImpl implements UnitService {
    @Autowired
    private UnitRepository unitRepository;
    @Autowired
    private UnitMapper unitMapper;

    @Override
    public UnitResponse createUnit(UnitRequest unitRequest) {
        if (unitRepository.existsByUnitName(unitRequest.getUnitName())) {
            throw new RuntimeException("Unit name đã tôn tại");
        }
        Unit unit = unitMapper.toEntity(unitRequest);
        Unit savedUnit = unitRepository.save(unit);
        return unitMapper.toDTO(savedUnit);
    }

    @Override
    public UnitResponse updateUnit(Long unitId, UnitRequest unitRequest) {
        Unit existing = unitRepository.findById(unitId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy unit : " + unitId));
        if (!existing.getUnitName().equals(unitRequest.getUnitName())
                && unitRepository.existsByUnitName(unitRequest.getUnitName())) {
            throw new RuntimeException("Unit name đã tôn tại");
        }
        unitMapper.updateEntityFromDTO(unitRequest, existing);
        Unit updatedUnit = unitRepository.save(existing);
        return unitMapper.toDTO(updatedUnit);
    }

    @Override
    public void deleteUnit(Long unitId) {
        Unit existing = unitRepository.findById(unitId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy unit : " + unitId));
        unitRepository.delete(existing);
    }

    @Override
    public UnitResponse getUnitById(Long unitId) {
        Unit existing = unitRepository.findById(unitId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy unit : " + unitId));
        return unitMapper.toDTO(existing);
    }

    @Override
    public List<UnitResponse> getAllUnits() {
        List<Unit> units = unitRepository.findAll();
        return unitMapper.toDTOLists(units);
    }

}
