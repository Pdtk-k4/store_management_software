package com.example.backend.entity;

import lombok.AllArgsConstructor;

import java.time.LocalDateTime;

import jakarta.persistence.*;
import lombok.*;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long categoryId;
    @Column(nullable = false, unique = true)
    private String categoryName;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private String creator;
    private String updater;
}
