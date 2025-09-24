package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.entity.ProductVariants;

@Repository
public interface ProductVariantsRepository extends JpaRepository<ProductVariants, Long> {

}
