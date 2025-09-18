package com.example.backend.Mapper;

import java.util.List;

import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface BaseMapper<D, E> {
    D toDTO(E entities);

    E toEntity(D dtos);

    List<D> toDTOList(List<E> entitis);

    List<E> toEntity(List<D> dtos);
}
