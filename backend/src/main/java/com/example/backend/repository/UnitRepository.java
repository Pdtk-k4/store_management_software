package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.entity.Unit;

@Repository
public interface UnitRepository extends JpaRepository<Unit, Long> {
    boolean existsByUnitName(String unitName);
}
