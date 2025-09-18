package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entity.Brand;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {
    boolean existsBranName(String brandName);
}
