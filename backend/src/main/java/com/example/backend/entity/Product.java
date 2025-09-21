package com.example.backend.entity;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import org.hibernate.annotations.ManyToAny;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long productId;
        private String productName;
        private String sku;// mã sản phẩm
        private String barcode;
        private BigDecimal mass; // khối lượng
        private String productUnit; // đơn vị tính
        private Boolean isActive;// trạng thái được bán hay không
        private String description;
        private LocalDateTime createAt;
        private LocalDateTime updateAt;
        @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true,
                        fetch = FetchType.LAZY)
        private List<Price> prices = new ArrayList<>();
        @ManyToOne
        @JoinColumn(name = "category_id")
        private Category category;
        @ManyToOne
        @JoinColumn(name = "brand_id")
        private Brand brand;
        @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true,
                        fetch = FetchType.LAZY)
        private List<Tag> tags = new ArrayList<>();
        @ManyToOne
        @JoinColumn(name = "unit_id")
        private Unit unit;
        @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true,
                        fetch = FetchType.LAZY)
        private List<Product_unit_conversion> unitConversions = new ArrayList<>();
        @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true,
                        fetch = FetchType.LAZY)
        private List<Inventory> inventories = new ArrayList<>();
        @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true,
                        fetch = FetchType.LAZY)
        private List<Product_attribute> attributes = new ArrayList<>();

}
