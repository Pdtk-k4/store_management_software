package com.example.backend.dto.request;

import jakarta.validation.constraints.*; // dùng cho Spring Boot 3+
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RegisterAdminRequest {

    @NotBlank(message = "Tên đăng nhập không được để trống")
    @Size(min = 4, max = 20, message = "Tên đăng nhập phải từ 4 đến 20 ký tự")
    private String userName;

    @NotBlank(message = "Tên hiển thị không được để trống")
    @Size(max = 50, message = "Tên hiển thị tối đa 50 ký tự")
    private String displayName;

    @NotBlank(message = "Email không được để trống")
    @Email(message = "Email không đúng định dạng")
    private String email;

    @NotNull(message = "Số điện thoại không được để trống")
    @Digits(integer = 15, fraction = 0, message = "Số điện thoại chỉ được chứa chữ số và tối đa 15 chữ số")
    private Integer phone;

    @NotBlank(message = "Mật khẩu không được để trống")
    @Size(min = 8, message = "Mật khẩu phải có ít nhất 8 ký tự")
    private String password;
}
