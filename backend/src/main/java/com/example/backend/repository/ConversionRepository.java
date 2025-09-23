package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.entity.Product_unit_conversion;

@Repository
public interface ConversionRepository extends JpaRepository<Product_unit_conversion, Long> {

}
