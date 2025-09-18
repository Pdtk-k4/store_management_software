package com.example.backend.exception;

// 403 Forbidden (không có quyền)
public class AccessDeniedException extends RuntimeException {
    public AccessDeniedException(String massage) {
        super(massage);
    }

}
