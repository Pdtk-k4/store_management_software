package com.example.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ConversionResponse {
    private String baseUnit;
    private String convertedUnit;
    private Double conversionFactor;
    private Long productId;
    private String productName;
}
