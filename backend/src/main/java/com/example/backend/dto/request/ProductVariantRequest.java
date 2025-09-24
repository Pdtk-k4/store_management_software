package com.example.backend.dto.request;

import java.util.List;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductVariantRequest {
    private Long variantId;
    private String variantName; // Tên biến thể sản phẩm
    private String sku;// mã phiên bản sản phẩm
    private String barcode;// mã vạch phiên bản sản phẩm
    private String mass; // khối lượng
    private String sellPrice;
    private String variantUnit; // đơn vị tính
    private boolean isActive; // Biến thể còn sử dụng hay không
    private Long productId; // sản phẩm cha
    private String productName;
    private List<VariantAttributeRequest> variantAttributes;

}
