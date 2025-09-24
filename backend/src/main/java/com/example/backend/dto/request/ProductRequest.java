package com.example.backend.dto.request;

import java.util.List;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductRequest {
    private Long productId;
    private String productName;
    private String sku;// mã sản phẩm
    private String barcode;
    private String mass; // khối lượng
    private String productUnit; // đơn vị tính
    private Boolean isActive;// trạng thái được bán hay không
    private String description;
    private Long categoryId;
    private Long brandId;
    private Long unitId;
    private List<TagRequest> tags;
    private List<PriceRequest> prices;
    private List<AttributeRequest> attributes;
    private List<ConversionRequest> conversions;
    private List<InventoryRequest> inventories;
    private List<ProductVariantRequest> variants;
}
