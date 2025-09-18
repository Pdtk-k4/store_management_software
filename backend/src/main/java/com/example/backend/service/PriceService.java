package com.example.backend.service;

import com.example.backend.dto.request.PriceRequest;
import com.example.backend.dto.response.PriceResponse;

public interface PriceService {
    PriceResponse createPrice(PriceRequest priceRequest);

    PriceResponse getPriceById(Long id);

    PriceResponse updatePrice(Long id, PriceRequest priceRequest);

    void deletePrice(Long id);

    List<PriceResponse> getAllPrices();
}
