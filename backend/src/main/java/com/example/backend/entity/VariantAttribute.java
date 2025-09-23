package com.example.backend.entity;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "variant_attributes")
public class VariantAttribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long variantAttributeId;
    private String attributeName; // Tên thuộc tính biến thể
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "variant_id")
    private ProductVariants productVariant; // Biến thể sản phẩm
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attribute_id")
    private Product_attribute productAttribute; // Thuộc tính sản phẩm
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "attribute_value_id")
    private Product_attribute_value attributeValue; // Giá trị thuộc tính

}
