package com.example.backend.entity;

import java.util.ArrayList;
import java.util.List;
import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
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

    @OneToMany(mappedBy = "attributeValue", cascade = CascadeType.ALL, orphanRemoval = true,
            fetch = FetchType.LAZY)
    private List<VariantAttribute> variantAttributes = new ArrayList<>();
}
