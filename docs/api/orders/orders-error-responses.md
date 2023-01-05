---
id: orders-error-responses
title: "Submit Orders: Error Responses"
sidebar_label: "Error Responses"
hide_title: true
toc_max_heading_level: 2
---
# Error Responses

All error responses have HTTP status code `4xx` or `5xx`. The response body contains `errors` field.
The `errors` field contains an array of errors:

<details>
  <summary>Error response example</summary>
  <div>

  ```json
  {
    "errors": [
      {
        "id": "5d094f10-8caf-11ed-83bd-2bcc14ba6c4e",
        "status": 400,
        "code": "INSUFFICIENT_INVENTORY",
        "title": "Not enough inventory",
        "detail": {
          "productId": "clbj0i7w4041d01z60hv53mcm",
          "variantId": "13833901"
        }
      }
    ]
  }
  ```

  </div>
</details>

We will return multiple errors if multiple errors are encountered. However, most of the time, only
one error will be returned.

## `INSUFFICIENT_INVENTORY`

| Code | Reason |
|------|--------|
| `INSUFFICIENT_INVENTORY` | Insufficient inventory for the requested quantity |

### Example

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

## `OUT_OF_STOCK`

| Code | Reason |
|------|--------|
| `OUT_OF_STOCK` | The product is out of stock |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "OUT_OF_STOCK",
  "title": "The product is out of stock",
  "detail": {
    "public_id": "clbj0i7w4041d01z60hv53mcm",
    "variant_id": "13833901"
  }
}
```

## `PAYMENT_REQUIRED`

| Code | Reason |
|------|--------|
| `PAYMENT_REQUIRED` | Valid payment is required |

### Example

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

## `PAYMENT_METHOD_NOT_SUPPORTED`

| Code | Reason |
|------|--------|
| `PAYMENT_METHOD_NOT_SUPPORTED` | Payment method is not supported for the requested products |

### Example

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

## `STRIPE_ERROR`

| Code | Reason |
|------|--------|
| `STRIPE_ERROR` | An error occurred while communicating with Stripe |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 500,
  "code": "STRIPE_ERROR",
  "title": "Error during a Stripe operation",
  "detail": {
    "stripeToken": "<redacted>",
    "customer": {
      "email": "qa@shopbonsai.ca",
      "first_name": "Eddy",
      "last_name": "Bonsai"
    },
    "message": "Your card was declined."
  }
}
```

## `PROVINCE_NOT_FOUND`

| Code | Reason |
|------|--------|
| `PROVINCE_NOT_FOUND` | The province was not found |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 404,
  "code": "PROVINCE_NOT_FOUND",
  "title": "Could not find delivery province",
  "detail": {
    "province": "non-existent-province"
  }
}
```

## `INTERNATIONAL_SHIPPING_ERROR`

| Code | Reason |
|------|--------|
| `INTERNATIONAL_SHIPPING_ERROR` | Merchant does not ship to country |

### Example

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

## `PRODUCT_DOES_NOT_EXIST`

| Code | Reason |
|------|--------|
| `PRODUCT_DOES_NOT_EXIST` | Product not found |

### Example

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

## `VARIANT_DOES_NOT_EXIST`

| Code | Reason |
|------|--------|
| `VARIANT_DOES_NOT_EXIST` | Variant not found |

### Example

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

## `PRODUCTS_PRICE_CHANGE`

| Code | Reason |
|------|--------|
| `PRODUCTS_PRICE_CHANGE` | The price of one of the products has changed since the last time it was fetched |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "PRODUCTS_PRICE_CHANGE",
  "title": "The price of one of the products has changed",
  "detail": {
    "publicId": "clbj0i7w4041d01z60hv53mcm",
    "variantId": "13833901"
  }
}
```

## `PRODUCTS_PRICE_INVALID`

| Code | Reason |
|------|--------|
| `PRODUCTS_PRICE_INVALID` | The price of one of the products is `<= 0` |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "PRODUCTS_PRICE_CHANGE",
  "title": "The price of one of the products has changed",
  "detail": {
    "publicId": "clbj0i7w4041d01z60hv53mcm",
    "variantId": "13833901"
  }
}
```

## `PRODUCT_UNAVAILABLE`

| Code | Reason |
|------|--------|
| `PRODUCT_UNAVAILABLE` | Product is no longer available for sale |

### Example

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

## `MERCHANT_NOT_FOUND`

| Code | Reason |
|------|--------|
| `MERCHANT_NOT_FOUND` | Could not find merchant with that id from supported integration types |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 404,
  "code": "MERCHANT_NOT_FOUND",
  "title": "Could not find merchant with that id from supported integration types",
  "detail": {
    "_id": "632f1a217f7aad1048d141d6"
  }
}
```

## `INVALID_INPUT`

| Code | Reason |
|------|--------|
| `INVALID_INPUT` | Required fields are missing from the request body |

### Example

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

## `PAYMENT_AMOUNTS_NOT_PROVIDED`

| Code | Reason |
|------|--------|
| `PAYMENT_AMOUNTS_NOT_PROVIDED` | Payment amounts are not provided when using `external payment` as payment method |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "PAYMENT_AMOUNTS_NOT_PROVIDED",
  "title": "Payment amounts not provided"
}
```

## `ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT`

| Code | Reason |
|------|--------|
| `ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT` | Account does not support external payment |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT",
  "title": "Account does not support external payment"
}
```

## `EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET`

| Code | Reason |
|------|--------|
| `EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET` | External payment type is not implemented for the account yet |

### Example

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

## `EXTERNAL_PAYMENT_UNKNOWN_ERROR`

| Code | Reason |
|------|--------|
| `EXTERNAL_PAYMENT_UNKNOWN_ERROR` | Unknown error while validating external payment |

### Example

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

## `EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED`

| Code | Reason |
|------|--------|
| `EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED` | External payment token validation failed |

### Example

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

## `MERCHANT_PAYMENT_MISSING`

| Code | Reason |
|------|--------|
| `MERCHANT_PAYMENT_MISSING` | No payment was transferred to the merchant when using standard payment method |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 404,
  "code": "MERCHANT_PAYMENT_MISSING",
  "title": "No payment was transferred to the merchant",
}
```

## `REQUEST_SOURCE_UNRECOGNIZED`

| Code | Reason |
|------|--------|
| `REQUEST_SOURCE_UNRECOGNIZED` | The account source is not recognized because it was setup incorrectly |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "REQUEST_SOURCE_UNRECOGNIZED",
  "title": "The account source is not recognized"
}
```

## `MISSING_SHIPPING`

| Code | Reason |
|------|--------|
| `MISSING_SHIPPING` | No shipping address was provided |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "MISSING_SHIPPING",
  "title": "No shipping address was provided"
}
```

## `TAX_ERROR`

| Code | Reason |
|------|--------|
| `TAX_ERROR` | An error occurred while communicating with Avalara |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "TAX_ERROR",
  "title": "Error during a tax calculation",
  "detail": {
    "message": "Company not found.",
    "code": "EntityNotFoundError",
    "number": 4,
    "description": "The Company with code 'ABC' was not found.",
    "faultCode": "Client",
    "helpLink": "https://developer.avalara.com/avatax/errors/EntityNotFoundError",
    "severity": "Error"
  }
}
```

## `TAXES_OR_DUTIES_ERROR`

| Code | Reason |
|------|--------|
| `TAXES_OR_DUTIES_ERROR` | Couldn't calculate taxes or duties for the given address |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "TAXES_OR_DUTIES_ERROR",
  "title": "There was an error calculating taxes or duties",
  "detail": "FetchError: invalid json response body at https://rest.avatax.com/api/v2/transactions/create reason: Unexpected token < in JSON at position 0"
}
```
