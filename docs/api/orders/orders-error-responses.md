---
id: orders-error-responses
title: "Submit Orders: Error Responses"
sidebar_label: "Error Responses"
hide_title: true
---
## Error Responses

### `INTERNATIONAL_SHIPPING_ERROR`

| Code | Reason |
|------|--------|
| `INTERNATIONAL_SHIPPING_ERROR` | Merchant does not ship to country |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "INTERNATIONAL_SHIPPING_ERROR",
  "title": "The merchant does not provide international shipping",
  "detail": [
    {
      "publicId": "clbj0i7w4041d01z60hv53mcm",
      "variantId": "13833901"
    }
  ]
}
```

### `PRODUCT_DOES_NOT_EXIST`

| Code | Reason |
|------|--------|
| `PRODUCT_DOES_NOT_EXIST` | Product not found |

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

### `VARIANT_DOES_NOT_EXIST`

| Code | Reason |
|------|--------|
| `VARIANT_DOES_NOT_EXIST` | Variant not found |

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


### `INVALID_INPUT`

| Code | Reason |
|------|--------|
| `INVALID_INPUT` | Required fields are missing from the request body |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "INVALID_INPUT",
  "title": "Invalid input provided",
  "detail": [
    {
      "message": "\"quantity\" is required",
      "path": [
        "products",
        0,
        "quantity"
      ],
      "type": "any.required",
      "context": {
        "key": "quantity",
        "label": "quantity"
      }
    }
  ]
}
```

<!-- Errors are returned with status code 200, containing the error inside the errors array. This is in order to allow greater interoperability with integrators.

| Reason | Code | HTTP Code |
|--------|------|-----------|
| Fields are missing from the request | INVALID_INPUT | 400 Bad Request |
| Not enough inventory | INSUFFICIENT_INVENTORY | 400 Bad Request |
| Merchant does not ship to country | INTERNATIONAL_SHIPPING_ERROR | 400 Bad Request |
| Product does not exist | PRODUCT_DOES_NOT_EXIST | 404 Not Found |
| Variant does not exist | VARIANT_DOES_NOT_EXIST | 404 Not Found |
| Failed to verify the provided token | PAYMENT_REQUIRED | 402 Payment Required | -->

:::info
If you're using Stripe as payment provider, please refer to https://stripe.com/docs/error-codes for possible Stripe error codes.
:::
