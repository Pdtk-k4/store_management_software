package com.example.backend.service.impl;

import java.time.LocalDateTime;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.dto.request.LoginRequestDTO;
import com.example.backend.dto.request.RegisterAdminRequest;
import com.example.backend.dto.request.RegisterClientRequest;
import com.example.backend.dto.response.LoginResponseDTO;
import com.example.backend.dto.response.UsersResponseDTO;
import com.example.backend.entity.AuthProvider;
import com.example.backend.entity.Role;
import com.example.backend.entity.User;
import com.example.backend.entity.UserRole;
import com.example.backend.exception.ResourceNotFoundException;
import com.example.backend.mapper.UserMapper;
import com.example.backend.repository.AuthProviderRepository;
import com.example.backend.repository.RoleRepository;
import com.example.backend.repository.UserRepository;
import com.example.backend.repository.UserRoleRepository;
import com.example.backend.service.AuthService;
import com.example.backend.util.JwtUtil;

@Service
public class AuthServiceImpl implements AuthService {

    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserRoleRepository userRoleRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private AuthProviderRepository authProviderRepository;

    @Override
    public LoginResponseDTO login(LoginRequestDTO loginRequestDTO) {
        User user = userRepository.findByUserName(loginRequestDTO.getIdentifier())
                .orElseGet(() -> userRepository.findByEmail(loginRequestDTO.getIdentifier()).orElse(null));

        if (user == null) {
            throw new ResourceNotFoundException("Sai tài khoản");
        }

        authProviderRepository.findByUserAndProvider(user, "LOCAL")
                .orElseThrow(() -> new ResourceNotFoundException("tài khoản chưa được đăng kí"));

        if (!passwordEncoder.matches(loginRequestDTO.getPassword(), user.getPassword())) {
            throw new ResourceNotFoundException("Sai mật khẩu");
        }

        String token = jwtUtil.generateToken(user.getUserId(), user.getUserName());
        UsersResponseDTO usersResponseDTO = userMapper.toDto(user);
        return new LoginResponseDTO(usersResponseDTO, token);

    }

    @Override
    public LoginResponseDTO registerAdmin(RegisterAdminRequest registerAdminRequest) {
        User user = userRepository
                .findByUserNameAndEmail(registerAdminRequest.getUserName(), registerAdminRequest.getEmail())
                .map(existingUser -> {
                    boolean hasLocal = authProviderRepository.findByUserAndProvider(existingUser, "LOCAL").isPresent();
                    if (hasLocal) {
                        throw new RuntimeException("UserName và Email đã tồn tại trong hệ thống");
                    }

                    return existingUser;
                }).orElseGet(() -> {
                    User newUser = User.builder()
                            .userName(registerAdminRequest.getUserName())
                            .email(registerAdminRequest.getEmail())
                            .displayName(registerAdminRequest.getDisplayName())
                            .phone(registerAdminRequest.getPhone())
                            .password(passwordEncoder.encode(registerAdminRequest.getPassword()))
                            .isActive(true)
                            .createAt(LocalDateTime.now())
                            .updateAt(LocalDateTime.now())
                            .build();
                    return userRepository.save(newUser);

                });

        String providerId = UUID.randomUUID().toString().substring(0, 8);
        authProviderRepository.findByUserAndProvider(user, "LOCAL").orElseGet(() -> {
            AuthProvider authProvider = AuthProvider.builder()
                    .provider("LOCAL")
                    .user(user)
                    .providerId(providerId)
                    .build();
            return authProviderRepository.save(authProvider);
        });

        Role role = roleRepository.findByRoleName("STAFF")
                .orElseThrow(() -> new RuntimeException("Vai trò STAFF không tồn tại"));
        if (!userRoleRepository.existsByUser_UserIdAndRole_RoleId(user.getUserId(), role.getRoleId())) {
            UserRole userRole = UserRole.builder()
                    .user(user)
                    .role(role)
                    .build();
            userRoleRepository.save(userRole);
        }

        String token = jwtUtil.generateToken(user.getUserId(), user.getUserName());
        UsersResponseDTO usersResponseDTO = userMapper.toDto(user);
        return new LoginResponseDTO(usersResponseDTO, token);
    }

    @Override
    public LoginResponseDTO registerClient(RegisterClientRequest registerClientRequest) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'registerClient'");
    }

}
