package com.example.backend.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.Mapper.PriceMapper;
import com.example.backend.dto.request.PriceRequest;
import com.example.backend.dto.response.PriceResponse;
import com.example.backend.entity.Price;
import com.example.backend.repository.PriceRepository;
import com.example.backend.service.PriceService;

@Service
public class PriceServiceImpl implements PriceService {

    @Autowired
    private PriceRepository priceRepository;
    @Autowired
    private PriceMapper priceMapper;

    @Override
    public PriceResponse createPrice(PriceRequest priceRequest) {
        if (priceRepository.existsPriceName(priceRequest.getPriceName())) {
            throw new RuntimeException("Price name đã tồn tại");
        }
        Price price = priceMapper.toEntity(priceRequest);
        Price savedPrice = priceRepository.save(price);
        return priceMapper.toDTO(savedPrice);
    }

    @Override
    public PriceResponse getPriceById(Long id) {
        Price existing = priceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy price : " + id));
        return priceMapper.toDTO(existing);
    }

    @Override
    public PriceResponse updatePrice(Long id, PriceRequest priceRequest) {
        Price existing = priceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy price : " + id));
        if (!existing.getPriceName().equals(priceRequest.getPriceName())
                && priceRepository.existsPriceName(priceRequest.getPriceName())) {
            throw new RuntimeException("Price name đã tôn tại");
        }
        priceMapper.updateEntityFromDTO(existing, priceRequest);
        Price updatedPrice = priceRepository.save(existing);
        return priceMapper.toDTO(updatedPrice);
    }

    @Override
    public void deletePrice(Long id) {
        Price existing = priceRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Không tìm thấy price : " + id));
        priceRepository.delete(existing);
    }

    @Override
    public List<PriceResponse> getAllPrices() {
        List<Price> prices = priceRepository.findAll();
        return priceMapper.toDTOLists(prices);

    }

}
