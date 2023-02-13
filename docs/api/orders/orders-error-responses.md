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

The errors will also depend on the `paymentMethod` provided.

## Generic Errors

### `INSUFFICIENT_INVENTORY`

| Code | Reason | Next step |
|------|--------|-----------|
| `INSUFFICIENT_INVENTORY` | Insufficient inventory for the requested quantity | Request the customer to change requested quantity |

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

| Code | Reason |
|------|--------|
| `OUT_OF_STOCK` | The product is out of stock |
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
| `PAYMENT_REQUIRED` | Valid payment is required | Request the customer to verify their payment information |
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
| `PAYMENT_METHOD_NOT_SUPPORTED` | Payment method is not supported for the requested products | Request the customer to choose a different payment method |
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
| `PROVINCE_NOT_FOUND` | The province was not found | Request the customer to verify their address |
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

#### Note
If this error happens, we suggest to verify the feed ingestion to make sure you re passing the right ids to the Bonsai API as it might happen to other products.
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

| Code | Reason |Next step |
|------|--------|-|
| `VARIANT_DOES_NOT_EXIST` | Variant not found | Mark the variant as unavailable |

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
| `PRODUCTS_PRICE_CHANGE` | The price of one of the products has changed since the last time it was fetched | Request the customer to confirm the new price |
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

### `PRODUCTS_PRICE_INVALID`

| Code | Reason | Next step |
|------|--------|-|
| `PRODUCTS_PRICE_INVALID` | The price of one of the products is `<= 0` | Set the product as unavailable |


<!-- TODO: Review this error and how we could translate in a more friendly way > set to unavailable as this should be handled before it hits our API clients -->
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
| `PRODUCT_UNAVAILABLE` | Product is no longer available for sale | Set product as unavailable |
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

### `MERCHANT_NOT_FOUND`

| Code | Reason | Next step |
|------|--------|-|
| `MERCHANT_NOT_FOUND` | Could not find merchant with that id from supported integration types | Set this merchant products to unavailable |

#### Note
If this ever happens, please reach out to Bonsai for more context.

<!-- TODO: This should probably be handled differently -->
#### Example

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

### `INVALID_INPUT`

| Code | Reason | Next Step |
|------|--------|-|
| `INVALID_INPUT` | Required fields are missing from the request body | Request the customer to provide the missing fields |
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

### `MERCHANT_PAYMENT_MISSING`

| Code | Reason | Next step |
|------|--------|-|
| `MERCHANT_PAYMENT_MISSING` | No payment was transferred to the **Shopify** merchant when using standard payment method | Please reach out to Bonsai to help with this |

<!-- TODO: Should probably be an internal error and not passed to the client -->

#### Note
There are however some very rare instances where merchants update their system, and impact ours in consequence. We handle these cases very promptly so the window of this happening is very slim.

#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 404,
  "code": "MERCHANT_PAYMENT_MISSING",
  "title": "No payment was transferred to the merchant",
}
```

### `REQUEST_SOURCE_UNRECOGNIZED`

| Code | Reason |
|------|--------|
| `REQUEST_SOURCE_UNRECOGNIZED` | The account source is not recognized because it was setup incorrectly |

<!-- TODO: Is this relevant anymore? -->
#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "REQUEST_SOURCE_UNRECOGNIZED",
  "title": "The account source is not recognized"
}
```

### `MISSING_SHIPPING`

| Code | Reason |
|------|--------|
| `MISSING_SHIPPING` | No shipping address was provided |

<!-- This should be handled by INVALID_INPUT? -->
#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "MISSING_SHIPPING",
  "title": "No shipping address was provided"
}
```

### `TAX_ERROR`

| Code | Reason | Next step |
|------|--------|-|
| `TAX_ERROR` | An error occurred while communicating with Avalara | Reach out to Bonsai |

<!-- This should probably be an internal error as we should not communicate which system we are using internally -->
#### Example

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

### `TAXES_OR_DUTIES_ERROR`

| Code | Reason |
|------|--------|
| `TAXES_OR_DUTIES_ERROR` | Couldn't calculate taxes or duties for the given address |

<!-- This should probably be an internal error as we should not communicate which system we are using internally -->
<!-- In case this happens, we should provide a better error about which product is being targetted by this error so front could handle it properly instead of cancelling the whole cart -->
#### Example

```json
{
  "id": "123e4567-e89b-12d3-a456-426655440000",
  "status": 400,
  "code": "TAXES_OR_DUTIES_ERROR",
  "title": "There was an error calculating taxes or duties",
  "detail": "FetchError: invalid json response body at https://rest.avatax.com/api/v2/transactions/create reason: Unexpected token < in JSON at position 0"
}
```

## Stripe Payment Method Errors

### `STRIPE_ERROR`

| Code | Reason | Next step |
|------|--------|-|
| `STRIPE_ERROR` | An error occurred while communicating with Stripe | Provide the customer the provided feedback from Stripe |
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
| `PAYMENT_AMOUNTS_NOT_PROVIDED` | Payment amounts are not provided when using `external payment` as payment method | Please provide the amounts when submitting the external payment |
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
| `ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT` | Account does not support external payment | Please reach out to `Bonsai` to set you up |

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
| `EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET` | External payment type is not implemented for the account yet | Please reach out to `Bonsai` to set you up |
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
| `EXTERNAL_PAYMENT_UNKNOWN_ERROR` | Unknown error while validating external payment | Please reach out to `Bonsai` for more details |

#### Note
When setting you up, you provide us with an endpoint to validate that the provided payment token is indeed valid in your system.
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

| Code | Reason | Next step |
|------|--------|-|
| `EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED` | External payment token validation failed | Please reach out to `Bonsai` for more details |

#### Note
When setting you up, you provide us with an endpoint to validate that the provided payment token is indeed valid in your system.

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

