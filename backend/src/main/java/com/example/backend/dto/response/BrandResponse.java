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

public class BrandResponse {
    private String brandName;
    private String creator;
    private String updater;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String brandImage;

}
