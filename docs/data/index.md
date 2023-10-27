---
title: Data
---

# Data Exports

Bonsai offers various CSV data exports to help you keep track of events, orders, line items, and refunds. This document provides a comprehensive overview of what data you can expect to receive.

## How to Access Data Exports

To access these data exports, you need to reach out to your point of contact at Bonsai. Depending on your business and technical setup, not all export types may be available. For more details on which exports are accessible for your account, see the [Available Exports](#available-exports) section.

## Prerequisites

To benefit from Bonsai's data exports, ensure you're processing orders or traffic with your live API keys. Please note that test orders and refunds are filtered out even if placed with live API keys.

## Cadence 

Exports are either available once every 24 hours or every 8 hours. In either case, data is lagged by 8 hours. To illustrate: meaning that data available at 16:00 UTC will cover the period from 00:00 to 08:00 UTC.

### Destinations

- S3 bucket provided by Bonsai (default/preferred)
- GCP bucket provided by Bonsai
- Email

### Authorization

- **AWS**: Use the same AWS keys as described [here](/docs/product-feeds/getting-started).
- **GCP**: Activate a service account with `gcloud auth activate-service-account --key-file=your-service-account.json`.
- **Email**: Ensure access to the designated email account.

### Data Retention

Data in these buckets is retained for 3 months by default. Contractual exceptions may apply. For longer-term storage, pull the data into your own systems.

## Available Exports

We offer different types of exports that cater to various needs. Here's a quick rundown:

| Export Type   | Applicable To             |
| :------------ | :------------------------ |
| Events        | Bonsai UI clients         |
| Line Items    | API and Bonsai UI clients |
| Orders        | API and Bonsai UI clients |
| Refunds       | API and Bonsai UI clients |

Note: Catalog-only accounts will not have access to any exports.

## Events Export

The Events export provides detailed insights into specific user interactions within the Bonsai UI. Below are the event types you can expect in this export and their respective fields.

<details>
  <summary>Events export example</summary>
  <div>
    <pre><code>
Event Time,Event,Cart ID<br></br>
2023-10-25T14:31:21.000Z,Initiate Checkout,3aasunj099y9<br></br>
2023-10-25T14:23:44.000Z,Add to Cart,3aasunj099y9<br></br>
2023-10-25T14:20:27.000Z,Cart View,3aasunj099y9<br></br>
2023-10-25T14:18:44.000Z,Place Order,3aasunj099y9<br></br>
2023-10-25T14:17:33.000Z,Order Success,3aasunj099y9
    </code></pre>
  </div>
</details>


### Event Types and Descriptions

| Event Type           | Description                                                                                     |
| :------------------- | :---------------------------------------------------------------------------------------------- |
| Add to Cart          | User adds a product to their cart. Not available in all versions of Bonsai UI                   |
| Cart View            | User views their cart or single product                                                         |
| Initiate Checkout    | User begins checkout with a cart or single product                                              |
| Submit Shipping Info | Shipping information successfully submitted; user moves forward to payment information step     |
| Place Order          | Payment information successfully sent                                                           |
| Order Success        | Order completes successfully                                                                    |
| Order Error          | Something goes wrong after successfully sending payment information                             |

### Event Fields

| Field                | Description                                                 |
| :------------------- | :---------------------------------------------------------- |
| Event Timestamp      | Time when the event occurred in UTC                         |
| Event                | Type of the event (e.g., Add to Cart, Initiate Checkout)    |
| Cart ID              | Unique identifier for the cart                              |

## Line Items Export

The Line Items export offers a detailed view of individual products sold in each order.

<details>
  <summary>Line Items export example</summary>
  <div>
    <pre><code>
Order ID,Order Number,External Order ID,Cart ID,Product ID,Variant ID,Quantity Sold,Product Name,Merchant Name,Order Timestamp,Goods Without Tax<br></br>
clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,cks0fz5eo00001sr269h63310,0400151858640,2,"Widget A, Size: L",MerchantX,2023-10-25T14:31:21.000Z,$40.00<br></br>
clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,clbdx2e2l0383011h2kzx8cjp,40427980980431,1,Widget B,MerchantX,2023-10-25T14:31:21.000Z,$50.00
    </code></pre>
  </div>
</details>


### Line Item Fields

| Field            | Description                                                         |
| :--------------- | :------------------------------------------------------------------ |
| Order ID         | Unique identifier for the order                                     |
| Order Number     | Human-readable order number                                         |
| External Order ID| External reference ID for the order, if provided, otherwise "empty" |
| Cart ID          | Unique identifier for the cart, or "empty"                          |
| Product ID       | Unique identifier for the product                                   |
| Variant ID       | Unique identifier for the product variant                           |
| Quantity Sold    | Number of units sold                                                |
| Product Name     | Name of the product                                                 |
| Merchant Name    | Name of the merchant                                                |
| Order Timestamp  | Time when the order was placed in UTC                               |
| Goods Without Tax| Cost of goods sold without tax                                      |

## Orders Export

The Orders export provides an overview of all orders processed.

<details>
  <summary>Orders export example</summary>
  <div>
    <pre><code>
Order ID,Order Number,External Order ID,Cart ID,Order Timestamp,Total Customer Charge,Goods Without Tax,Goods Tax,Shipping Without Tax,Shipping Tax,Duties<br></br>
clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,2023-10-25T14:31:21.000Z,$100.00,$90.00,$10.00,$0.00,$0.00,$0.00
    </code></pre>
  </div>
</details>

### Orders Fields

| Field                 | Description                                                                   |
| :-------------------- | :---------------------------------------------------------------------------- |
| Order ID              | The unique identifier for the order, generated by Bonsai                      |
| Order Number          | A human-readable order number                                                 |
| External Order ID     | Identifier from an external system, if provided, otherwise "empty"            |
| Cart ID               | Unique identifier for the cart related to this order, or "empty"              |
| Order Timestamp       | Time the order was placed in UTC                                              |
| Total Customer Charge | The total amount charged to the customer                                      |
| Goods Without Tax     | Total price of the goods sold without tax                                     |
| Goods Tax             | Tax charged on the goods                                                      |
| Shipping Without Tax  | Cost of shipping, not including tax                                           |
| Shipping Tax          | Tax on the shipping cost                                                      |
| Duties                | Any import duties or tariffs applied to the order                             |

## Refunds Export

The Refunds export provides individual refunds granted on individual orders and the reasons stated for these refunds. It is possible to have multiple refunds granted for a single order.

<details>
  <summary>Refunds export example</summary>
  <div>
    <pre><code>
Order ID,Order Number,External Order ID,Cart ID,Refund ID,Refund Reason,Refund Timestamp,Refunded Goods Without Tax<br></br>
clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,R123,Customer Canceled,2023-10-26T10:00:00.000Z,$40.00
    </code></pre>
  </div>
</details>

### Refunds Fields

| Field                     | Description                                                                                        |
| :------------------------ | :------------------------------------------------------------------------------------------------- |
| Order ID                  | The unique identifier for the original order, generated by Bonsai                                  |
| Order Number              | A human-readable order number for the original order                                               |
| External Order ID         | Identifier from an external system for the original order, if provided, otherwise "empty"          |
| Cart ID                   | Unique identifier for the cart related to the original order, or "empty"                           |
| Refund ID                 | The unique identifier for the refund transaction                                                   |
| Refund Reason             | Classification for the refund reason                                                               |
| Refund Timestamp          | Time the refund was processed, usually in UTC                                                      |
| Refunded Goods Without Tax| The total amount of goods refunded, not including tax                                              |

### Refund Reasons

Here are the common reasons for refunds:

| Reason            | Description                                       |
| :---------------- | :------------------------------------------------ |
| Item Unavailable  | Item out of stock or not available for purchase   |
| Customer Returned | Customer returned the item and received a refund. |
| Customer Canceled | Customer canceled the order before shipment.      |
| Reimbursement     | Money returned for an approved claim or payment   |