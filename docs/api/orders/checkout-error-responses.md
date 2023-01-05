---
id: checkout-error-responses
title: "Checkout Totals: Error Responses"
sidebar_label: "Error Responses"
hide_title: true
toc_max_heading_level: 2
---
# Error Responses

All error responses have HTTP status code `200`. The response body contains `errors` and `data` fields.
The `errors` field contains an array of errors, and the `data` field contains `0`'s as totals and
the data that was sent in the request:

<details>
  <summary>Error response example</summary>
  <div>

  ```json
  {
    "data": {
      "subtotal": 0,
      "tax": 0,
      "shipping": [],
      "total": 0,
      "duties": 0,
      "line_items": [
        {
          "public_id": "clad6pg5z00eaw012gfz7hfm92",
          "variant_id": "M00679529706740",
          "inventory": 0,
          "price": 0,
          "quantity": 1,
          "name": ""
        }
      ],
      "currency": "USD",
      "shipping_total": 0
    },
    "errors": [
      {
        "id": "a32b6540-80cb-11ed-9719-0bf8a5afe259",
        "status": 404,
        "code": "PRODUCT_DOES_NOT_EXIST",
        "title": "Product does not exist",
        "detail": {
          "publicId": "clad6pg5z00eaw012gfz7hfm92",
          "variantId": "M00679529706740"
        }
      }
    ]
  }
  ```

  </div>
</details>

We will return multiple errors if multiple errors are encountered. However, most of the time, only
one error will be returned.

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

## `PROVINCE_UNRECOGNIZED`

| Code | Reason |
|------|--------|
| `PROVINCE_UNRECOGNIZED` | Province/state for the given country not found |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 404,
  "code": "PROVINCE_UNRECOGNIZED",
  "title": "The province not recognized.",
  "detail": {
    "countryCode": "US",
    "province": "WE"
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

## `TAX_ERROR`

| Code | Reason |
|------|--------|
| `TAX_ERROR` | Could not calculate taxes |

### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "TAX_ERROR",
  "title": "Tax calculation cannot be determined. Zip is not valid for the state.",
  "detail": "Tax calculation cannot be determined. Zip is not valid for the state.",
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
