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

public class CategoryRequest {
    private String categoryName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String creator;
    private String updater;

}
