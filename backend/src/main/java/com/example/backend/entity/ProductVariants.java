package com.example.backend.entity;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "product_variants")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductVariants {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long variantId;
    private String variantName; // Tên biến thể sản phẩm
    private String sku;// mã phiên bản sản phẩm
    private String barcode;// mã vạch phiên bản sản phẩm
    private BigDecimal mass; // khối lượng
    private BigDecimal sellPrice;
    private String variantUnit; // đơn vị tính
    private boolean isActive; // Biến thể còn sử dụng hay không
    private LocalDate createdAt;
    private LocalDate updatedAt;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product; // sản phẩm cha

    @OneToMany(mappedBy = "productVariant", cascade = CascadeType.ALL, orphanRemoval = true,
            fetch = FetchType.LAZY)
    private List<VariantAttribute> variantAttributes = new ArrayList<>();
}
