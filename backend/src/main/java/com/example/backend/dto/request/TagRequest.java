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
public class TagRequest {
    private String tagName;
    private LocalDateTime createAt;
    private LocalDateTime updateAt;
}
