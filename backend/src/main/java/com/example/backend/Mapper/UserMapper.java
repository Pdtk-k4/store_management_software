package com.example.backend.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.backend.dto.response.UsersResponseDTO;
import com.example.backend.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UsersResponseDTO toDto(User user);

    @Mapping(target = "password", ignore = true)
    User toEntity(UsersResponseDTO usersResponseDTO);
}