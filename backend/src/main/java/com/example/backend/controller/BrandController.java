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

import com.example.backend.dto.request.BrandRequest;
import com.example.backend.dto.response.BrandResponse;
import com.example.backend.service.BrandService;

@RestController
@RequestMapping("/api/brands")
public class BrandController {
    @Autowired
    private BrandService brandService;

    @PostMapping
    public ResponseEntity<BrandResponse> createBrand(@RequestBody BrandRequest brandRequest) {
        BrandResponse brandResponse = brandService.createBrand(brandRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(brandResponse);
    }

    @PutMapping("/{brandId}")
    public ResponseEntity<BrandResponse> updateBrand(@PathVariable Long brandId,
            @RequestBody BrandRequest brandRequest) {
        BrandResponse brandResponse = brandService.updateBrand(brandId, brandRequest);
        return ResponseEntity.ok(brandResponse);
    }

    @DeleteMapping("/{brandId}")
    public ResponseEntity<Void> deleteBrand(@PathVariable Long brandId) {
        brandService.deleteBrand(brandId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{brandId}")
    public ResponseEntity<BrandResponse> getBrandById(@PathVariable Long brandId) {
        BrandResponse brandResponse = brandService.getBrandById(brandId);
        return ResponseEntity.ok(brandResponse);
    }

    @GetMapping
    public ResponseEntity<List<BrandResponse>> getAllBrands() {
        List<BrandResponse> brands = brandService.getAllBrands();
        return ResponseEntity.ok(brands);
    }
}
