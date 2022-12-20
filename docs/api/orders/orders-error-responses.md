---
id: orders-error-responses
sidebar_label: "Error Responses"
hide_title: true
---
## Error Responses

Errors are returned with status code 200, containing the error inside the errors array. This is in order to allow greater interoperability with integrators.

| Reason | Code | HTTP Code |
|--------|------|-----------|
| Merchant does not ship to country | INTERNATIONAL_SHIPPING_ERROR | 400 Bad Request |
| Fields are missing from the request | INVALID_INPUT | 400 Bad Request |
| Not enough inventory | INSUFFICIENT_INVENTORY | 400 Bad Request |
| Merchant does not ship to country | INTERNATIONAL_SHIPPING_ERROR | 400 Bad Request |
| Product does not exist | PRODUCT_DOES_NOT_EXIST | 404 Not Found |
| Variant does not exist | VARIANT_DOES_NOT_EXIST | 404 Not Found |
| Failed to verify the provided token | PAYMENT_REQUIRED | 402 Payment Required |

:::info
If you're using Stripe as payment provider, please refer to https://stripe.com/docs/error-codes for possible Stripe error codes.
:::
