package com.example.backend.service;

import com.example.backend.config.CustomUserDetails;
import com.example.backend.entity.Permission;
import com.example.backend.entity.Role;
import com.example.backend.entity.RolePermission;
import com.example.backend.entity.User;
import com.example.backend.entity.UserRole;
import com.example.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
public class CustomUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String identifier) throws UsernameNotFoundException {
        User user = userRepository.findByUserName(identifier)
                .orElseGet(() -> userRepository.findByEmail(identifier).orElse(null));

        if (user == null) {
            throw new UsernameNotFoundException("Không tìm thấy người dùng có định danh là: " + identifier);
        }
        Set<GrantedAuthority> authorities = new HashSet<>();
        if (user.getUserRole() != null) {
            for (UserRole userRole : user.getUserRole()) {
                Role role = userRole.getRole();
                if (role != null) {
                    // thêm role
                    authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getRoleName()));

                    // thêm permission
                    if (role.getRolePermissions() != null) {
                        for (RolePermission rolePermission : role.getRolePermissions()) {
                            Permission permission = rolePermission.getPermission();
                            if (permission != null) {
                                authorities.add(new SimpleGrantedAuthority(permission.getPermissionName()));
                            }
                        }
                    }
                }

            }
        }

        return new CustomUserDetails(user.getUserId(), user.getUserName(), user.getEmail(), authorities);
    }
}