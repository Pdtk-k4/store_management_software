package com.example.backend.mapper;

import java.util.List;

import org.mapstruct.MappingTarget;

import com.example.backend.dto.request.TagRequest;
import com.example.backend.dto.response.TagResponse;
import com.example.backend.entity.Tag;

public interface TagMapper {
    TagResponse toDTO(Tag tag);

    Tag toEntity(TagRequest tagRequest);

    List<TagResponse> toDTOLists(List<Tag> tags);

    List<Tag> toEntityLists(List<TagRequest> tagRequests);

    void updateEntityFromDTO(TagRequest tagRequest, @MappingTarget Tag tag);

}
