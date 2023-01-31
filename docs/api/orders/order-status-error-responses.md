---
id: order-status-error-responses
title: "Order Status: Error Responses"
sidebar_label: "Error Responses"
hide_title: true
toc_max_heading_level: 2
---

# Error Responses

All responses have HTTP status code `4xx` or `5xx`. The response body contains `errors` field.
The `errors` field contains an array of errors.

<details>
  <summary>Error response example</summary>
  <div>

```json
{
  "errors": [
    {
      "id": "8b0bed00-a19f-11ed-a7ca-b90aca74bd02",
      "status": 404,
      "code": "CUSTOMER_ORDER_NOT_FOUND",
      "title": "Customer order has not been found",
      "detail": {
        "customer_order_id": "cld4z0z7k0000hevb06zf884"
      }
    }
  ]
}
```

  </div>
</details>

## `CUSTOMER_ORDER_NOT_FOUND`

The only error that is expected during normal use of this route is when an invalid customer order ID is requested. If you encounter this error, ensure you are providing the `public_id` from the **[Submit Orders](./submit-orders.api.mdx)** respose.

### Example

```json
{
  "id": "8b0bed00-a19f-11ed-a7ca-b90aca74bd02",
  "status": 404,
  "code": "CUSTOMER_ORDER_NOT_FOUND",
  "title": "Customer order has not been found",
  "detail": {
    "customer_order_id": "cld4z0z7k0000hevb06zf884"
  }
}
```
