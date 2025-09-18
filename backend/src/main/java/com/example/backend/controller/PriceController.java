package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.dto.request.PriceRequest;
import com.example.backend.dto.response.PriceResponse;
import com.example.backend.service.PriceService;

@RestController
@RequestMapping("/api/prices")
public class PriceController {
    @Autowired
    private PriceService priceService;

    @PostMapping
    public ResponseEntity<PriceResponse> createPrice(@RequestBody PriceRequest priceRequest) {
        PriceResponse priceResponse = priceService.createPrice(priceRequest);
        return ResponseEntity.status(HttpStatus.CREATED).body(priceResponse);
    }

    @PutMapping("/{priceId}")
    public ResponseEntity<PriceResponse> updatePrice(@PathVariable Long priceId,
            @RequestBody PriceRequest priceRequest) {
        PriceResponse priceResponse = priceService.updatePrice(priceId, priceRequest);
        return ResponseEntity.ok(priceResponse);
    }

    @DeleteMapping("/{priceId}")
    public ResponseEntity<Void> deletePrice(@PathVariable Long priceId) {
        priceService.deletePrice(priceId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/{priceId}")
    public ResponseEntity<PriceResponse> getPriceById(@PathVariable Long priceId) {
        PriceResponse priceResponse = priceService.getPriceById(priceId);
        return ResponseEntity.ok(priceResponse);
    }

    @GetMapping
    public ResponseEntity<List<PriceResponse>> getAllPrices() {
        List<PriceResponse> prices = priceService.getAllPrices();
        return ResponseEntity.ok(prices);
    }
}