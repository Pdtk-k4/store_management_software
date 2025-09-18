package com.example.backend.dto.response;

import java.time.LocalDateTime;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UsersResponseDTO {
    private Long userId;
    private String userName;
    private String email;
    private String avatarUrl;
    private String displayName;
    private String address;
    private Integer phone;
    private Boolean isActive;
    private LocalDateTime joinDate;
    private LocalDateTime lastLogin;
    private LocalDateTime createdAt;
    private LocalDateTime updateAt;
}
