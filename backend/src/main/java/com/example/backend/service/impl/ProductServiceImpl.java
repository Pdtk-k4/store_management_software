package com.example.backend.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.time.LocalDateTime;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.example.backend.dto.request.AttributeRequest;
import com.example.backend.dto.request.ConversionRequest;
import com.example.backend.dto.request.ProductRequest;
import com.example.backend.dto.response.ProductResponse;
import com.example.backend.entity.Product;
import com.example.backend.entity.ProductVariants;
import com.example.backend.entity.VariantAttribute;
import com.example.backend.entity.Product_attribute;
import com.example.backend.entity.Product_attribute_value;
import com.example.backend.mapper.ProductMapper;
import com.example.backend.repository.ProductRepository;
import com.example.backend.repository.AttributeRepository;
import com.example.backend.repository.AttributeValueRepository;
import com.example.backend.service.ProductService;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;
    private final ProductMapper productMapper;
    private final AttributeRepository attributeRepository;
    private final AttributeValueRepository attributeValueRepository;

    @Override
    @Transactional
    public ProductResponse createProduct(ProductRequest request) {
        // Validation
        if (request == null) {
            throw new IllegalArgumentException("Product request cannot be null");
        }
        if (request.getProductName() == null || request.getProductName().trim().isEmpty()) {
            throw new IllegalArgumentException("Product name cannot be null or empty");
        }

        if (productRepository.existsByProductName(request.getProductName())) {
            throw new IllegalArgumentException("Product with the same name already exists");
        }

        // Tạo product gốc từ mapper
        Product product = productMapper.toEntity(request);

        // Set timestamps
        LocalDateTime now = LocalDateTime.now();
        product.setCreateAt(now);
        product.setUpdateAt(now);

        // Sinh variants từ conversions + attributes
        List<ProductVariants> variants = generateVariantsFromRequest(request, product);
        if (!variants.isEmpty()) {
            product.setVariants(variants);
        }

        // Lưu
        Product saved = productRepository.save(product);
        return productMapper.toDTO(saved);
    }

    @Override
    public ProductResponse getProductById(Long productId) {
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + productId));
        return productMapper.toDTO(product);
    }

    @Override
    public ProductResponse updateProduct(Long productId, ProductRequest productRequest) {
        // Validation
        if (productId == null) {
            throw new IllegalArgumentException("Product ID cannot be null");
        }
        if (productRequest == null) {
            throw new IllegalArgumentException("Product request cannot be null");
        }
        if (productRequest.getProductName() == null
                || productRequest.getProductName().trim().isEmpty()) {
            throw new IllegalArgumentException("Product name cannot be null or empty");
        }

        Product existingProduct = productRepository.findById(productId)
                .orElseThrow(() -> new RuntimeException("Product not found with id: " + productId));

        // Kiểm tra tên sản phẩm trùng lặp (trừ chính nó)
        if (!existingProduct.getProductName().equals(productRequest.getProductName())
                && productRepository.existsByProductName(productRequest.getProductName())) {
            throw new IllegalArgumentException("Product with the same name already exists");
        }

        Product updatedProduct = productMapper.toEntity(productRequest);
        updatedProduct.setProductId(productId);

        Product savedProduct = productRepository.save(updatedProduct);
        return productMapper.toDTO(savedProduct);
    }

    @Override
    public void deleteProduct(Long productId) {
        if (productId == null) {
            throw new IllegalArgumentException("Product ID cannot be null");
        }
        if (!productRepository.existsById(productId)) {
            throw new RuntimeException("Product not found with id: " + productId);
        }
        productRepository.deleteById(productId);
    }

    @Override
    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll().stream().map(productMapper::toDTO).toList();
    }

    /**
     * Sinh danh sách ProductVariants từ ProductRequest Sử dụng cách thiết kế chuẩn 3NF với entity
     * relationships
     */
    private List<ProductVariants> generateVariantsFromRequest(ProductRequest request,
            Product product) {
        List<ProductVariants> variants = new ArrayList<>();

        // Sinh tất cả tổ hợp attribute từ database entities
        List<List<Product_attribute_value>> attributeCombinations =
                generateAttributeCombinationsFromDatabase(request.getAttributes(), product);

        // Nếu có conversions (Thùng, Két, ...) thì sinh theo conversion
        if (request.getConversions() != null && !request.getConversions().isEmpty()) {
            for (ConversionRequest conv : request.getConversions()) {
                for (List<Product_attribute_value> attrCombo : attributeCombinations) {
                    variants.add(buildVariantFromEntities(request, product, conv, attrCombo));
                }
            }
        } else {
            // Nếu không có conversion thì chỉ sinh theo attributes
            for (List<Product_attribute_value> attrCombo : attributeCombinations) {
                variants.add(buildVariantFromEntities(request, product, null, attrCombo));
            }
        }

        // Nếu không có attributes và conversions, tạo variant mặc định
        if (variants.isEmpty()) {
            variants.add(buildDefaultVariant(request, product));
        }

        return variants;
    }

    /**
     * Sinh tổ hợp attributes từ database entities thay vì convert sang Map Cách này đảm bảo tính
     * chuẩn hóa và tái sử dụng dữ liệu
     */
    private List<List<Product_attribute_value>> generateAttributeCombinationsFromDatabase(
            List<AttributeRequest> attributeRequests, Product product) {

        List<List<Product_attribute_value>> results = new ArrayList<>();

        if (attributeRequests == null || attributeRequests.isEmpty()) {
            results.add(new ArrayList<>()); // Empty combination
            return results;
        }

        // Tạo hoặc tìm attributes trong database
        List<List<Product_attribute_value>> attributeValueGroups = new ArrayList<>();

        for (AttributeRequest attrReq : attributeRequests) {
            // Tìm hoặc tạo Product_attribute
            Product_attribute attribute = findOrCreateAttribute(attrReq, product);

            // Tìm hoặc tạo Product_attribute_value cho attribute này
            List<Product_attribute_value> values = findOrCreateAttributeValues(attrReq, attribute);
            attributeValueGroups.add(values);
        }

        // Sinh Cartesian product từ các nhóm attribute values
        generateCartesianProduct(attributeValueGroups, 0, new ArrayList<>(), results);

        return results;
    }

    /**
     * Build ProductVariants từ database entities thay vì Map<String, String>
     */
    private ProductVariants buildVariantFromEntities(ProductRequest req, Product product,
            ConversionRequest conv, List<Product_attribute_value> attributeValues) {

        String variantName = buildVariantNameFromEntities(req.getProductName(),
                conv != null ? conv.getConvertedUnit() : null, attributeValues);

        ProductVariants variant =
                ProductVariants.builder().product(product).variantName(variantName)
                        .variantUnit(conv != null ? conv.getConvertedUnit() : req.getProductUnit())
                        .isActive(req.getIsActive() != null ? req.getIsActive() : true)
                        .sku(buildVariantSku(req.getSku(), conv, attributeValues))
                        .barcode(req.getBarcode()).build();

        // Gắn attributes vào ProductVariants thông qua VariantAttribute với entity references
        if (attributeValues != null && !attributeValues.isEmpty()) {
            List<VariantAttribute> variantAttributes = new ArrayList<>();
            for (Product_attribute_value attrValue : attributeValues) {
                VariantAttribute variantAttr = VariantAttribute.builder().productVariant(variant)
                        .productAttribute(attrValue.getProductAttribute()) // Reference đến
                                                                           // Product_attribute
                                                                           // entity
                        .attributeValue(attrValue) // Reference đến Product_attribute_value entity
                        .attributeName(attrValue.getProductAttribute().getAttributeName()) // Denormalize
                                                                                           // for
                                                                                           // performance
                        .build();
                variantAttributes.add(variantAttr);
            }
            variant.setVariantAttributes(variantAttributes);
        }

        return variant;
    }

    /**
     * Tạo variant mặc định khi không có attributes và conversions
     */
    private ProductVariants buildDefaultVariant(ProductRequest req, Product product) {
        return ProductVariants.builder().product(product).variantName(req.getProductName())
                .variantUnit(req.getProductUnit())
                .isActive(req.getIsActive() != null ? req.getIsActive() : true).sku(req.getSku())
                .barcode(req.getBarcode()).build();
    }

    /**
     * Tìm hoặc tạo Product_attribute trong database
     */
    private Product_attribute findOrCreateAttribute(AttributeRequest attrReq, Product product) {
        if (attrReq.getAttributeId() != null) {
            return attributeRepository.findById(attrReq.getAttributeId())
                    .orElseThrow(() -> new RuntimeException(
                            "Không tìm thấy attribute id " + attrReq.getAttributeId()));
        }

        Product_attribute newAttr =
                Product_attribute.builder().attributeName(attrReq.getAttributeName())
                        .attributeDescription(attrReq.getAttributeName())
                        .isActive(attrReq.getIsActive() != null ? attrReq.getIsActive() : true)
                        .product(product).build();
        return attributeRepository.save(newAttr);
    }


    /**
     * Tìm hoặc tạo Product_attribute_value trong database
     */
    private List<Product_attribute_value> findOrCreateAttributeValues(AttributeRequest attrReq,
            Product_attribute attribute) {
        List<Product_attribute_value> values = new ArrayList<>();

        if (attrReq.getAttributeValues() != null) {
            for (var valueReq : attrReq.getAttributeValues()) {
                Product_attribute_value value;

                if (valueReq.getValueId() != null) {
                    value = attributeValueRepository.findById(valueReq.getValueId())
                            .orElseThrow(() -> new RuntimeException(
                                    "Không tìm thấy attribute value id " + valueReq.getValueId()));
                } else {
                    value = Product_attribute_value.builder().valueName(valueReq.getValueName())
                            .valueDescription(valueReq.getValueDescription())
                            .productAttribute(attribute).build();
                    value = attributeValueRepository.save(value);
                }

                values.add(value);
            }
        }

        return values;
    }


    /**
     * Sinh Cartesian product từ các nhóm attribute values
     */
    private void generateCartesianProduct(List<List<Product_attribute_value>> attributeValueGroups,
            int index, List<Product_attribute_value> current,
            List<List<Product_attribute_value>> results) {

        if (index == attributeValueGroups.size()) {
            results.add(new ArrayList<>(current));
            return;
        }

        List<Product_attribute_value> currentGroup = attributeValueGroups.get(index);
        for (Product_attribute_value value : currentGroup) {
            current.add(value);
            generateCartesianProduct(attributeValueGroups, index + 1, current, results);
            current.remove(current.size() - 1);
        }
    }

    /**
     * Build variant name từ entities thay vì Map
     */
    private String buildVariantNameFromEntities(String productName, String unit,
            List<Product_attribute_value> attributeValues) {
        StringBuilder sb = new StringBuilder(productName);

        if (attributeValues != null && !attributeValues.isEmpty()) {
            for (Product_attribute_value attrValue : attributeValues) {
                sb.append(" - ").append(attrValue.getValueName());
            }
        }

        if (unit != null && !unit.isEmpty()) {
            sb.append(" - ").append(unit);
        }

        return sb.toString();
    }

    /**
     * Build variant SKU từ entities
     */
    private String buildVariantSku(String baseSku, ConversionRequest conv,
            List<Product_attribute_value> attributeValues) {
        if (baseSku == null)
            return null;

        StringBuilder sku = new StringBuilder(baseSku);

        if (attributeValues != null && !attributeValues.isEmpty()) {
            for (Product_attribute_value attrValue : attributeValues) {
                sku.append("-").append(attrValue.getValueName().toUpperCase());
            }
        }

        if (conv != null && conv.getConvertedUnit() != null) {
            sku.append("-").append(conv.getConvertedUnit().toUpperCase());
        }

        return sku.toString();
    }
}
