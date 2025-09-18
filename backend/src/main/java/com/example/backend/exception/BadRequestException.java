package com.example.backend.exception;

//400 (Không hợp lệ)
public class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message);
    }
}
