package com.example.backend.dto.response;

import java.time.LocalDateTime;

import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CategoryResponse {
    private String categoryName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String creator;
    private String updater;
}
