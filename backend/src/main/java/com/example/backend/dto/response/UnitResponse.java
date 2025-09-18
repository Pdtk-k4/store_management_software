package com.example.backend.dto.response;

import lombok.AllArgsConstructor;
import lombok.*;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UnitResponse {
    private String unitName;
    private String abbreviation;
}
