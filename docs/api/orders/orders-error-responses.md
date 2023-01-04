---
id: orders-error-responses
title: "Submit Orders: Error Responses"
sidebar_label: "Error Responses"
hide_title: true
---
## Error Responses

### `INSUFFICIENT_INVENTORY`

| Code | Reason |
|------|--------|
| `INSUFFICIENT_INVENTORY` | Insufficient inventory for the requested quantity |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "INSUFFICIENT_INVENTORY",
  "title": "Not enough inventory",
  "detail": {
    "productId": "clbj0i7w4041d01z60hv53mcm",
    "variantId": "13833901"
  }
}
```

### `PAYMENT_REQUIRED`

| Code | Reason |
|------|--------|
| `PAYMENT_REQUIRED` | Valid payment is required |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 402,
  "code": "PAYMENT_REQUIRED",
  "title": "Payment is required for this order",
  "detail": {
    "message": "Your card was declined."
  }
}
```

:::info
If you're using Stripe as payment method, please refer to [Stripe docs](https://stripe.com/docs/error-codes) for possible Stripe error codes.
:::

### `PAYMENT_METHOD_NOT_SUPPORTED`

| Code | Reason |
|------|--------|
| `PAYMENT_METHOD_NOT_SUPPORTED` | Payment method is not supported for the requested products |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "PAYMENT_METHOD_NOT_SUPPORTED",
  "title": "The selected payment method is not supported for this order type",
  "detail": {
    "paymentMethod": "afterpay"
  }
}
```

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

### `PAYMENT_AMOUNTS_NOT_PROVIDED`

| Code | Reason |
|------|--------|
| `PAYMENT_AMOUNTS_NOT_PROVIDED` | Payment amounts are not provided when using `external payment` as payment method |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "PAYMENT_AMOUNTS_NOT_PROVIDED",
  "title": "Payment amounts not provided"
}
```

### `ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT`

| Code | Reason |
|------|--------|
| `ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT` | Account does not support external payment |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT",
  "title": "Account does not support external payment"
}
```

### `EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET`

| Code | Reason |
|------|--------|
| `EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET` | External payment type is not implemented for the account yet |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 402,
  "code": "EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET",
  "title": "External payment not implemented yet",
  "detail": {
    "token": "<redacted>",
    "externalPaymentType": "api"
  }
}
```

### `EXTERNAL_PAYMENT_UNKNOWN_ERROR`

| Code | Reason |
|------|--------|
| `EXTERNAL_PAYMENT_UNKNOWN_ERROR` | Unknown error while validating external payment |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "EXTERNAL_PAYMENT_UNKNOWN_ERROR",
  "title": "Unknown error while validating external payment",
  "detail": {
    "externalPaymentConfig": {
      "api": {
        "skipValidation": false,
        "type": "apiKey",
        "apiKey": "<redacted>",
        "method": "<redacted>"
      }
    },
    "token": "<redacted>"
  }
}
```

### `EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED`

| Code | Reason |
|------|--------|
| `EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED` | External payment token validation failed |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 402,
  "code": "EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED",
  "title": "External payment token validation failed",
  "detail": {
    "token": "<redacted>"
  }
}
```
