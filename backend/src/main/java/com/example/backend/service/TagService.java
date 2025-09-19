package com.example.backend.service;

import java.util.List;

import com.example.backend.dto.request.TagRequest;
import com.example.backend.dto.response.TagResponse;

public interface TagService {
    // Define service methods here
    TagResponse createTag(TagRequest tagRequest);

    TagResponse updateTag(Long tagId, TagRequest tagRequest);

    void deleteTag(Long tagId);

    TagResponse getTagById(Long tagId);

    List<TagResponse> getAllTags();
}
