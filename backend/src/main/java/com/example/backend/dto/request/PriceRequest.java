package com.example.backend.dto.request;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PriceRequest {
    private String priceName;
    private Double priceValue;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
}
