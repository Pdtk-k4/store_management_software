package com.example.backend.dto.response;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VariantAttributeResponse {
    private Long variantAttributeId;
    private Long variantId;
    private String variantName;
    private Long attributeId;
    private String attributeName;
    private Long attributeValueId;
    private String attributeValueName;
}
