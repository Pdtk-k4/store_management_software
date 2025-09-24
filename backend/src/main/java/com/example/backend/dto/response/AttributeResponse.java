package com.example.backend.dto.response;

import java.time.LocalDateTime;
import java.util.List;
import com.example.backend.dto.request.AttributeValueRequest;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttributeResponse {
    private String attributeName;
    private Boolean isActive;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private Long productId;
    private String productName;
    private List<AttributeValueRequest> attributeValues;
}
