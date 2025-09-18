package com.example.backend.service;

import com.example.backend.dto.request.LoginRequestDTO;
import com.example.backend.dto.request.RegisterAdminRequest;
import com.example.backend.dto.request.RegisterClientRequest;
import com.example.backend.dto.response.LoginResponseDTO;

public interface AuthService {
    LoginResponseDTO login(LoginRequestDTO loginRequestDTO);

    LoginResponseDTO registerAdmin(RegisterAdminRequest registerAdminRequest);

    LoginResponseDTO registerClient(RegisterClientRequest registerClientRequest);
}
