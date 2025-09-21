package com.example.backend.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import jakarta.annotation.Generated;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.*;

// thuộc tính sản phẩm

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product_attribute {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long attributeId;
    private String attributeName; // size, color
    private String attributeDescription;// mô tả thuộc tính
    private boolean isActive; // thuộc tính còn sử dụng hay không
    private LocalDate createdAt;
    private LocalDate updatedAt;
    @OneToMany(mappedBy = "productAttribute", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private List<Product_attribute_value> attributeValues = new ArrayList<>();

}
