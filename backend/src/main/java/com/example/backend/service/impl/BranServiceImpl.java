package com.example.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.mapper.BrandMapper;
import com.example.backend.dto.request.BrandRequest;
import com.example.backend.dto.response.BrandResponse;
import com.example.backend.entity.Brand;
import com.example.backend.repository.BrandRepository;
import com.example.backend.service.BrandService;

@Service
public class BranServiceImpl implements BrandService {

    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private BrandMapper brandMapper;

    @Override
    public BrandResponse createBrand(BrandRequest brandRequest) {

        if (brandRepository.existsBranName(brandRequest.getBrandName())) {
            throw new RuntimeException("Brand name đã tôn tại");
        }
        Brand brand = brandMapper.toEntity(brandRequest);
        Brand savedBrand = brandRepository.save(brand);
        return brandMapper.toDTO(savedBrand);

    }

    @Override
    public BrandResponse updateBrand(Long brandId, BrandRequest brandRequest) {
        Brand existing = brandRepository.findById(brandId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy brand : " + brandId));
        if (!existing.getBrandName().equals(brandRequest.getBrandName())
                && brandRepository.existsBranName(brandRequest.getBrandName())) {
            throw new RuntimeException("Brand name đã tôn tại");
        }
        brandMapper.updateEntityFromDTO(existing, brandRequest);
        Brand updatedBrand = brandRepository.save(existing);
        return brandMapper.toDTO(updatedBrand);
    }

    @Override
    public void deleteBrand(Long brandId) {
        Brand existing = brandRepository.findById(brandId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy brand : " + brandId));
        brandRepository.delete(existing);
    }

    @Override
    public BrandResponse getBrandById(Long brandId) {
        Brand existing = brandRepository.findById(brandId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy brand : " + brandId));
        return brandMapper.toDTO(existing);
    }

    @Override
    public List<BrandResponse> getAllBrands() {
        List<Brand> listBrand = brandRepository.findAll();
        return brandMapper.toDTOs(listBrand);
    }

}
