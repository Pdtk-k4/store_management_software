package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.request.UnitRequest;
import com.example.backend.dto.response.UnitResponse;
import com.example.backend.service.UnitService;

@RestController
@RequestMapping("/api/units")
public class UnitController {
    @Autowired
    private UnitService unitService;

    @PostMapping
    public ResponseEntity<UnitResponse> createUnit(@RequestBody UnitRequest unitRequest) {
        UnitResponse unitResponse = unitService.createUnit(unitRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(unitResponse);
    }

    @PutMapping("/{unitId}")
    public ResponseEntity<UnitResponse> updateUnit(@PathVariable Long unitId, @RequestBody UnitRequest unitRequest) {
        UnitResponse unitResponse = unitService.updateUnit(unitId, unitRequest);
        return ResponseEntity.ok(unitResponse);
    }

    @DeleteMapping("/{unitId}")
    public ResponseEntity<Void> deleteUnit(@PathVariable Long unitId) {
        unitService.deleteUnit(unitId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{unitId}")
    public ResponseEntity<UnitResponse> getUnitById(@PathVariable Long unitId) {
        UnitResponse unitResponse = unitService.getUnitById(unitId);
        return ResponseEntity.ok(unitResponse);
    }

    @GetMapping
    public ResponseEntity<List<UnitResponse>> getAllUnits() {
        List<UnitResponse> units = unitService.getAllUnits();
        return ResponseEntity.ok(units);
    }
}
