package com.example.backend.exception;

// 404 Not Found (không tồn tại)
public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException(String massage) {
        super(massage);
    }
}
