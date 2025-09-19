package com.example.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Mapper.TagMapper;
import com.example.backend.dto.request.TagRequest;
import com.example.backend.dto.response.TagResponse;
import com.example.backend.entity.Tag;
import com.example.backend.repository.TagRepository;
import com.example.backend.service.TagService;

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagRepository tagRepository;
    @Autowired
    private TagMapper tagMapper;

    @Override
    public TagResponse createTag(TagRequest tagRequest) {
        if (tagRepository.existsTagName(tagRequest.getTagName())) {
            throw new RuntimeException("Tag name đã tôn tại");
        }
        Tag tag = tagMapper.toEntity(tagRequest);
        Tag saved = tagRepository.save(tag);
        return tagMapper.toDTO(saved);
    }

    @Override
    public TagResponse updateTag(Long tagId, TagRequest tagRequest) {
        Tag exxting = tagRepository.findById(tagId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy tag : " + tagId));
        tagMapper.updateEntityFromDTO(tagRequest, exxting);
        Tag updateTag = tagRepository.save(exxting);
        return tagMapper.toDTO(updateTag);
    }

    @Override
    public void deleteTag(Long tagId) {
        Tag existing = tagRepository.findById(tagId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy tag : " + tagId));
        tagRepository.delete(existing);

    }

    @Override
    public TagResponse getTagById(Long tagId) {
        Tag existing = tagRepository.findById(tagId)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy tag : " + tagId));
        return tagMapper.toDTO(existing);
    }

    @Override
    public List<TagResponse> getAllTags() {
        List<Tag> tags = tagRepository.findAll();
        return tagMapper.toDTOLists(tags);
    }

}
