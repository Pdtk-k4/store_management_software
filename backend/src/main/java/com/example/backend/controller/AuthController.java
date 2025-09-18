package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.request.RegisterAdminRequest;
import com.example.backend.dto.request.LoginRequestDTO;
import com.example.backend.dto.response.LoginResponseDTO;
import com.example.backend.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> login(@Valid @RequestBody LoginRequestDTO loginRequestDTO) {
        LoginResponseDTO login = authService.login(loginRequestDTO);
        return ResponseEntity.ok(login);
    }

    @PostMapping("/register/staff")
    public ResponseEntity<LoginResponseDTO> registerAdmin(
            @Valid @RequestBody RegisterAdminRequest registerAdminRequest) {
        LoginResponseDTO register = authService.registerAdmin(registerAdminRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(register);
    }

}
