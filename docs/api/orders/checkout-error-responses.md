---
id: checkout-error-responses
sidebar_label: "Error Responses"
hide_title: true
---
## Error Responses

Errors are returned with status code 200, containing the error inside the errors array. This is in order to allow greater interoperability with integrators.

### PRODUCT_UNAVAILABLE

| Reason | Code | HTTP Code |
|--------|------|-----------|
| Merchant does not ship to country | INTERNATIONAL_SHIPPING_ERROR | 400 Bad Request |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "PRODUCT_UNAVAILABLE",
  "title": "The product requested is no longer available",
  "detail": {
    "publicId": "clbj0i7w4041d01z60hv53mcm",
    "variantId": "13833901"
  }
}
```

### PRODUCT_DOES_NOT_EXIST

| Reason | Code | HTTP Code |
|--------|------|-----------|
| Product not found | PRODUCT_DOES_NOT_EXIST | 404 Not Found |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 404,
  "code": "PRODUCT_DOES_NOT_EXIST",
  "title": "Product does not exist",
  "detail": {
    "publicId": "clbj0i7w4041d01z60hv53mcm",
    "variantId": "13833901"
  }
}
```

### VARIANT_DOES_NOT_EXIST

| Reason | Code | HTTP Code |
|--------|------|-----------|
| Variant not found | VARIANT_DOES_NOT_EXIST | 404 Not Found |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 404,
  "code": "VARIANT_DOES_NOT_EXIST",
  "title": "Variant does not exist",
  "detail": {
    "publicId": "clbj0i7w4041d01z60hv53mcm",
    "variantId": "13833901"
  }
}
```

### INTERNATIONAL_SHIPPING_ERROR

| Reason | Code | HTTP Code |
|--------|------|-----------|
| Merchant does not ship to country | PRODUCT_DOES_NOT_EXIST | 400 Bad Request |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "INTERNATIONAL_SHIPPING_ERROR",
  "title": "The merchant does not provide international shipping",
}
```

### TAXES_OR_DUTIES_ERROR

| Reason | Code | HTTP Code |
|--------|------|-----------|
| Product not found | PRODUCT_DOES_NOT_EXIST | 400 Bad Request |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "TAXES_OR_DUTIES_ERROR",
  "title": "There was an error calculating taxes or duties",
}
```


<!-- | Reason | Code | Error Example |
|--------|------|---------------|
| Merchant does not ship to country | INTERNATIONAL_SHIPPING_ERROR |
| Product not found | PRODUCT_DOES_NOT_EXIST |
| Variant not found | PRODUCT_UNAVAILABLE |
| Fields are missing from the request | INVALID_INPUT |
| Couldn't calculate taxes or duties for the given address | TAXES_OR_DUTIES_ERROR | -->
