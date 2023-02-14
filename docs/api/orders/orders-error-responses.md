---
id: orders-error-responses
title: "Submit Orders: Error Responses"
sidebar_label: "Error Responses"
hide_title: true
toc_max_heading_level: 3
toc_min_heading_level: 2
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

Payment-related errors will also depend on the `paymentMethod` provided.

:::info
Please reach out to Bonsai if you receive any error not listed within this document.
:::
## Generic Errors

### `INSUFFICIENT_INVENTORY`

| Code | Reason | Next step |
|------|--------|-----------|
| `INSUFFICIENT_INVENTORY` | Insufficient inventory for the requested quantity | Request that the customer changes quantity |

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

### `OUT_OF_STOCK`

| Code | Reason | Next step |
|------|--------|-|
| `OUT_OF_STOCK` | The product is out of stock | Request that the customer removes product from cart |
#### Example

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

### `PAYMENT_REQUIRED`

| Code | Reason | Next step |
|------|--------|-|
| `PAYMENT_REQUIRED` | Valid payment is required | Request that the customer verifies their payment information |
:::info
This error will contain details with more information about what went wrong with the payment.
it is safe to show this message to the customer for Payment methods other than `external payment` .
:::
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

### `PAYMENT_METHOD_NOT_SUPPORTED`

| Code | Reason | Next step |
|------|--------|-|
| `PAYMENT_METHOD_NOT_SUPPORTED` | Payment method is not supported for the requested products | Request that the customer chooses a different payment method |

:::info
Bonsai supports 2 payment methods:
- `stripe`
- `external payment`
:::

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

### `PROVINCE_NOT_FOUND`

| Code | Reason | Next step |
|------|--------|-|
| `PROVINCE_NOT_FOUND` | The province was not found | Request that the customer verifies their address |
#### Example

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

### `INTERNATIONAL_SHIPPING_ERROR`

| Code | Reason | Next step |
|------|--------|-|
| `INTERNATIONAL_SHIPPING_ERROR` | Merchant does not ship to country | Communicate that the product (publicId/variantId) does not ship to the specified country |
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

| Code | Reason | Next step |
|------|--------|-|
| `PRODUCT_DOES_NOT_EXIST` | Product not found | Mark the product as unavailable |

:::info
If this error happens, we suggest verifying the feed ingestion to make sure you are passing the right ids to the Bonsai API as it might also happen to other products.
:::

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

| Code | Reason | Next step |
|------|--------|-|
| `VARIANT_DOES_NOT_EXIST` | Variant not found | Mark the variant as unavailable |

:::info
If this error happens, we suggest verifying the feed ingestion to make sure you are passing the right ids to the Bonsai API as it might also happen to other products
:::

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

### `PRODUCTS_PRICE_CHANGE`

| Code | Reason | Next step |
|------|--------|-|
| `PRODUCTS_PRICE_CHANGE` | The price of one of the products has changed since the last time it was fetched | Request that the customer confirms the new price |
#### Example

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

### `PRODUCT_UNAVAILABLE`

| Code | Reason | Next step |
|------|--------|-|
| `PRODUCT_UNAVAILABLE` | Product is no longer available for sale | Mark the product as unavailable |

:::info
Please check this [Product feed documentation](https://docs.shopbonsai.ca/docs/product-feeds/best-practices/) to learn more on product validation and removal.
:::

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

### `INVALID_INPUT`

| Code | Reason | Next step |
|------|--------|-|
| `INVALID_INPUT` | Required fields are missing from the request body | Check the format of the requests you're sending to our API |
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

## Stripe Payment Method Errors

### `STRIPE_ERROR`

| Code | Reason | Next step |
|------|--------|-|
| `STRIPE_ERROR` | An error occurred while communicating with Stripe | Provide the customer the error message from Stripe (error title) |
#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 402,
  "code": "STRIPE_ERROR",
  "title": "Your card has insufficient funds.",
  "detail": {
    "stripeToken": "tok_visa_chargeDeclinedInsufficientFunds",
    "customer": {
      "first_name": "Haytham",
      "last_name": "Labrini",
      "email": "qa@shopbonsai.ca"
    }
  }
}
```

:::info
If you're using Stripe as payment method, please refer to [Stripe docs](https://stripe.com/docs/error-codes) for possible Stripe error codes.
:::


## External Payment Method Errors

### `PAYMENT_AMOUNTS_NOT_PROVIDED`

| Code | Reason | Next step |
|------|--------|-|
| `PAYMENT_AMOUNTS_NOT_PROVIDED` | Payment amounts are not provided when using `external payment` as payment method | Please provide the amounts when submitting an order with payment method `external payment` |
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

| Code | Reason | Next step |
|------|--------|-|
| `ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT` | Account does not support external payment | Please reach out to Bonsai to set you up |

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

| Code | Reason | Next step |
|------|--------|-|
| `EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET` | External payment type is not implemented for the account yet | Please reach out to Bonsai to set you up |
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

| Code | Reason | Next step |
|------|--------|-|
| `EXTERNAL_PAYMENT_UNKNOWN_ERROR` | Unknown error while validating external payment | Please reach out to Bonsai |

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "EXTERNAL_PAYMENT_UNKNOWN_ERROR",
  "title": "Unknown error while validating external payment",
}
```

### `EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED`

| Code | Reason | Next step |
|------|--------|-|
| `EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED` | External payment token validation failed | Please reach out to Bonsai for more details |

:::info
When setting you up, you provided us with an endpoint to validate that the provided payment token is valid in your system. If that validation fails this error will be thrown.
:::

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 402,
  "code": "EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED",
  "title": "External payment token validation failed",
}
```

