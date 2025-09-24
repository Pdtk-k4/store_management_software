package com.example.backend.dto.request;

import java.time.LocalDateTime;
import java.util.List;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttributeRequest {
    private Long attributeId;
    private String attributeName;
    private Boolean isActive;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long productId;
    private String productName;
    private List<AttributeValueRequest> attributeValues;
}
