package com.example.backend.dto.request;

import lombok.AllArgsConstructor;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VariantAttributeRequest {
    @NotNull(message = "ID thuộc tính biến thể không được để trống")
    private Long variantAttributeId;

    @NotBlank(message = "Tên thuộc tính không được để trống")
    private String attributeName;

    @NotNull(message = "ID biến thể sản phẩm không được để trống")
    private Long variantId;

    @NotNull(message = "ID thuộc tính sản phẩm không được để trống")
    private Long attributeId;

    @NotNull(message = "ID giá trị thuộc tính không được để trống")
    private Long attributeValueId;
}
