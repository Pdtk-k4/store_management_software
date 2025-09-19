package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.request.BrandRequest;
import com.example.backend.dto.response.BrandResponse;

public interface BrandService {
    // Define service methods here
    BrandResponse createBrand(BrandRequest brandRequest);

    BrandResponse updateBrand(Long brandId, BrandRequest brandRequest);

    void deleteBrand(Long brandId);

    BrandResponse getBrandById(Long brandId);

    List<BrandResponse> getAllBrands();

}