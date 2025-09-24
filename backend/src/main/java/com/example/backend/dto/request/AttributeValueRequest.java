package com.example.backend.dto.request;

import java.util.List;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AttributeValueRequest {
    private Long valueId;
    private String valueName;
    private String valueDescription;
    private Long attributeId;
    private String attributeName;
    private List<Long> variantAttributeId;
}
