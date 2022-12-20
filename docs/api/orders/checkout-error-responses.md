---
id: checkout-error-responses
sidebar_label: "Error Responses"
hide_title: true
---
## Error Responses

Errors are returned with status code 200, containing the error inside the errors array. This is in order to allow greater interoperability with integrators.

| Reason | Code |
|--------|------|
| Merchant does not ship to country | INTERNATIONAL_SHIPPING_ERROR |
| Product not found | PRODUCT_DOES_NOT_EXIST |
| Variant not found | PRODUCT_UNAVAILABLE |
| Fields are missing from the request | INVALID_INPUT |
| Invalid province code given | PROVINCE_UNRECOGNIZED |
