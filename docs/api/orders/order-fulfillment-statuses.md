---
id: order-fulfillment-statuses
title: "Order Status: Fulfillment Statuses"
sidebar_label: "Fulfillment Statuses"
hide_title: true
toc_max_heading_level: 4
toc_min_heading_level: 3
---


# Fulfillment Statuses

Fulfillment statuses are a high-level tracker for what's happening with an order. In most cases, they provide a snapshot of an order's current stage in the fulfillment process.

For a typical order without any issues, the flow follows these statuses:

1. **payment successful**: After an order has been submitted to Bonsai.
<details>
  <summary>payment successful order status response example</summary>
  <div>

  ```json
  {
    "data": {
        "id": "31415926535897932384626433",
        "orderNumber": 832795,
        "externalId": "028841971693993751058209749445923",
        "fulfillmentStatus": "payment successful",
        "shippingTracking": [],
        "products": [
            {
                "id": "078164062862089986280348253421170",
                "variantId": "679821480865132823066470938446095",
                "merchantOrderId": null,
                "fulfillmentStatus": "payment successful",
                "paymentStatus": "paid",
                "quantity": 1
            }
        ],
        "customer": {
            "firstName": "Archimedes",
            "lastName": "Syracuse",
            "email": "gmail@gmail.com"
        }
    },
    "errors": []
}
  ```

  </div>
</details>

2. **sent to merchant**: After the order has been submitted to a merchant.
<details>
  <summary>sent to merchant order status response example</summary>
  <div>

  ```json
  {
    "data": {
        "id": "31415926535897932384626433",
        "orderNumber": 832795,
        "externalId": "028841971693993751058209749445923",
        "fulfillmentStatus": "sent to merchant",
        "shippingTracking": [],
        "products": [
            {
                "id": "078164062862089986280348253421170",
                "variantId": "679821480865132823066470938446095",
                "merchantOrderId": "5284911117",
                "fulfillmentStatus": "sent to merchant",
                "paymentStatus": "paid",
                "quantity": 1
            }
        ],
        "customer": {
            "firstName": "Archimedes",
            "lastName": "Syracuse",
            "email": "gmail@gmail.com"
        }
    },
    "errors": []
}
  ```

  </div>
</details>

3. **fulfilled**: Once the merchant has sent the products to the customer.
<details>
  <summary>fulfilled order status response example</summary>
  <div>

  ```json
  {
    "data": {
        "id": "31415926535897932384626433",
        "orderNumber": 832795,
        "externalId": "028841971693993751058209749445923",
        "fulfillmentStatus": "fulfilled",
        "shippingTracking": [
            {
                "carrier": "Shipping Carrier name",
                "trackingNumber": "0348253421170679",
                "trackingUrl": "https://trackingurl.com",
                "products": [
                    {
                        "id": "078164062862089986280348253421170",
                        "variantId": "679821480865132823066470938446095",
                        "quantity": 1
                    }
                ]
            }
        ],
        "products": [
            {
                "id": "078164062862089986280348253421170",
                "variantId": "679821480865132823066470938446095",
                "merchantOrderId": "5284911117",
                "fulfillmentStatus": "fulfilled",
                "paymentStatus": "paid",
                "quantity": 1
            }
        ],
        "customer": {
            "firstName": "Archimedes",
            "lastName": "Syracuse",
            "email": "gmail@gmail.com"
        }
    },
    "errors": []
}
  ```

  </div>
</details>

This standard flow represents an order from submission to Bonsai till products being sent to the customer.

---

## PAYMENT SUCCESSFUL

- **Description:** Payment for the order was successful.

**Example:**

An order that was submitted successfully to Bonsai.

---

## SENT TO MERCHANT

- **Description:** This status indicates that the order information has been sent to the merchant for further processing.

**Example:**

An order that was submitted successfully to Bonsai, was submitted to a merchant, and is awaiting shipping details.

---

## PARTIALLY FULFILLED

- **Description:** Order that has had product shipping information added to it for some of the products.

**Example:**

An order that was submitted successfully to Bonsai, was submitted to a merchant, and then has had some products shipped to the customer. This will happen when an order has products for multiple merchants as one merchant will ship products faster than the other. This is temporary until the shipping details for the other products are added.

---

## FULFILLED

- **Description:** Order that has had product shipping information added to it.

**Example:**

An order that was submitted successfully to Bonsai, was submitted to a merchant, and then has had products shipped to the customer.

---


## CANCELLED

- **Description:** This status indicates that the order has been cancelled.

**Example:**

An order that was submitted to Bonsai, but later cancelled by the customer. These orders are usually refunded.

---

## FAILED (PAYMENT)

- **Description:** Payment verification for the order has failed.

- **Example:**

An order that was submitted to Bonsai with payment information that we were unable to verify.

---

## FAILED (MERCHANT)

- **Description:** Sending the order to the merchant has failed.

**Example:**

An order that was submitted to Bonsai with products from a merchant we have an automated integration with. When trying to place the order via that integration something went wrong. Our team usually resolves these issues very quickly so it's unlikely you'll see orders with this status.

---

## FAILED (UNKNOWN)

- **Description:** There was an unknown issue while processing.

**Example:**

An order that had an unexpected and unidentified issue during the processing of an order. This status indicates something went wrong on Bonsai's side and we are looking into it.
