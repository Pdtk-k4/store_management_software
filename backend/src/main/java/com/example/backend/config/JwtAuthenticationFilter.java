package com.example.backend.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import com.example.backend.util.JwtUtil;

import java.io.IOException;
import java.util.List;
import java.util.logging.Logger;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter {
    private static final Logger logger = Logger.getLogger(JwtAuthenticationFilter.class.getName());
    private static final List<String> EXCLUDED_PATHS = List.of("/api/auth/", "/api/brands/",
            "/api/categories/", "/api/units/", "/api/products/", "/api/tags/",
            "/api/workspaces/invitations/**", "/ping", "/actuator/health");

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        String path = request.getRequestURI();
        logger.info("Processing request: " + path);

        if (EXCLUDED_PATHS.stream().anyMatch(path::startsWith)) {
            logger.info("Skipping JWT filter for public endpoint: " + path);
            filterChain.doFilter(request, response);
            return;
        }

        String header = request.getHeader("Authorization");
        logger.info("Authorization Header: " + header);
        if (header != null && header.startsWith("Bearer ")) {
            String token = header.substring(7);
            try {
                String userName = jwtUtil.getUserNameFromToken(token);
                logger.info("userName from token: " + userName);
                if (userName != null
                        && SecurityContextHolder.getContext().getAuthentication() == null) {
                    UserDetails userDetails = userDetailsService.loadUserByUsername(userName);
                    if (jwtUtil.validateToken(token, userDetails)) {
                        UsernamePasswordAuthenticationToken auth =
                                new UsernamePasswordAuthenticationToken(userDetails, null,
                                        userDetails.getAuthorities());
                        auth.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(auth);
                    } else {
                        logger.warning("Invalid token for email: " + userName);
                    }
                }
            } catch (Exception e) {
                logger.severe("Token validation error: " + e.getMessage());
            }
        } else {
            logger.warning("No valid Bearer token found in request");
        }
        filterChain.doFilter(request, response);
    }
}
