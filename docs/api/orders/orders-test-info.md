---
id: orders-live-testing
title: "Submit Orders: Test Orders"
sidebar_label: "Test Orders"
hide_title: true
toc_max_heading_level: 3
toc_min_heading_level: 2
---
# Testing Orders

## Introduction

Partners can test orders using our API in different scenarios. This document outlines the procedures for testing orders in test mode.

## Test Mode

In this mode, all orders are treated as test orders. This means that payment won't be taken and orders won't be fulfilled.

### Using Bonsai Test in Customer Shipping Info:

1. Make a call to our submit orders api using our API key.
2. Set "bonsai" as the customer's first name in the shipping address.
3. Set "test" as the customer's last name in the shipping address.
4. Order should be in test mode.
5. All operations are available, and the flow is normal.

#### Example

```json
{
  ...
  "shipping_address": {
    "first_name": "bonsai",
    "last_name": "test",
    "address1": "351 E 103rd St",
    "address2": "Whitecastle",
    "city": "New York",
    "country": "US",
    "name": "Eddy Bonsai",
    "province": "NY",
    "phone": "555-625-1199",
    "zip": "10029"
  },
  ...
}

```

> Note: This mode is fit for a one-time manual order placement.

### Using a Test API Key:

1. Make a call to our submit orders api using our Test API key.
2. All orders should be in test mode.
3. All operations are available, and the flow is normal.

#### Example

```bash
curl -L -X POST 'https://api.shopbonsai.ca/orders/V1/submit' \
-H 'Content-Type: application/json' \
-H 'Accept: application/json' \
-H 'API-Key: <TEST_API_KEY_VALUE>' \
...
```

> Note: This mode is fit for automated testing (e2e, others).
