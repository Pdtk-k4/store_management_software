package com.example.backend.dto.response;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PriceResponse {
    private String priceName;
    private Double priceValue;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
}
