package com.example.backend.entity;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// quy đổi đơn vị sản phẩm 1 thùng = 10 cái
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product_unit_conversion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long conversionId;
    private String baseUnit; // đơn vị gốc
    private String convertedUnit; // đến đơn vị quy đổi
    private Double conversionFactor; // hệ số quy đổi
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product; // sản phẩm
}
