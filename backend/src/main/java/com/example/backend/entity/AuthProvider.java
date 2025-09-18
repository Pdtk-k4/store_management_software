package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "auth_provider")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class AuthProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // LOCAL, GOOGLE
    @Column(length = 50, nullable = false)
    private String provider;

    // ID do Google/Facebook cung cấp
    @Column(nullable = false, length = 255)
    private String providerId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

}
