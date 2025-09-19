package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entity.Price;

@Repository
public interface PriceRepository extends JpaRepository<Price, Long> {
    boolean existsByPriceName(String priceName);
}
