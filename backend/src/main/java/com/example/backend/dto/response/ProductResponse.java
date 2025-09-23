package com.example.backend.dto.response;

import java.util.List;
import com.example.backend.dto.request.AttributeRequest;
import com.example.backend.dto.request.ConversionRequest;
import com.example.backend.dto.request.PriceRequest;
import com.example.backend.dto.request.ProductVariantRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResponse {
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
    private List<TagResponse> tags;
    private List<PriceResponse> prices;
    private List<AttributeResponse> attributes;
    private List<ConversionResponse> conversions;
    private List<ProductVariantResponse> variants;
}

