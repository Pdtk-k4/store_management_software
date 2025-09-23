package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.example.backend.entity.VariantAttribute;

@Repository
public interface VariantAttributeRepository extends JpaRepository<VariantAttribute, Long> {

}
