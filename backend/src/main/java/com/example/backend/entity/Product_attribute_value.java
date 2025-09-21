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

// giá trị thuộc tính sản phẩm sizwe: M, L, XL
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product_attribute_value {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long valueId;
    private String valueName; // M, L, XL
    private String valueDescription; // mô tả giá trị thuộc tính
    @ManyToOne
    @JoinColumn(name = "attribute_id")
    private Product_attribute productAttribute; // thuộc tính sản phẩm
}
