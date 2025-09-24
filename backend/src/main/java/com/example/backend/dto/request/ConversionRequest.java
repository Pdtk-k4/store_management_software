package com.example.backend.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConversionRequest {
    private Long conversionId;
    private String baseUnit;
    private String convertedUnit;
    private Double conversionFactor;
    private Long productId;
    private String productName;
}
