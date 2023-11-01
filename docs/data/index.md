---
title: Data
---

# Data Exports

Bonsai offers various CSV data exports to help you keep track of events, orders, line items, and refunds. This document provides a comprehensive overview of what data you can expect to receive.

## How to Access Data Exports

To access these data exports, you need to reach out to your point of contact at Bonsai. Depending on your integration type with Bonsai, not all export types may be available. For more details on which exports are applicable for you, see the [Available Exports](#available-exports) section.

## Prerequisites

To benefit from Bonsai's data exports, ensure you're either using [Bonsai UI](/docs/bonsai-ui/introduction) or processing orders through [the Orders API](/docs/api/orders/orders-api) and are using your live API keys. However, [test orders and refunds](/docs/api/orders/orders-live-testing) are filtered out from orders, line items, and refunds exports even if placed with live API keys.

## Cadence 

Exports are available either once every 24 hours (default) or every 8 hours. To select a cadence, please specify your preference to your point of contact at Bonsai. In either case, data is lagged by 8 hours, i.e., data made available at 16:00 UTC will cover the period from 00:00 to 08:00 UTC for the same day.

## Destination

The destination for these exports is an AWS S3 data bucket. The bucket name will be supplied to you after you request data exports.

### Authorization

You should use the same AWS keys as described [here](/docs/product-feeds/getting-started).

### Access

To access the data in the bucket, you can use the AWS CLI or any SDK of your choice. Here is an example command for how to access your bucket data using the CLI:

```zsh
aws s3 cp 's3://prod-data-export-myaccount/v5/orders/orders_2023-10-26T00-08-28.csv' ./my-orders.csv
```

## Data Retention

Data in the S3 bucket is retained for 3 months. Contractual exceptions may apply. For longer-term storage, pull the data into your own systems.

## Versioning

Versioning of data exports is implemented to protect your integration from breaking changes. Breaking changes are defined as one of the following:

- A change in the definition or format for an existing export field
- A change in the ordering of export fields
- The removal of an export field
- A change in the grain associated with an export (i.e. the definition of what each line in the export represents)

Please note that a new field could be appended as a new column in existing exports without this being considered a breaking change. As such, please be sure that your integration does not break if there are unexpected fields available in the export that were not previously there.

Breaking and non-breaking changes will be updated in the [changelog](#changelog).

### Current Version

The latest version of exports is `v5`. This version is reflected in the file path associated with the exports. If a new version is released, the path will change. For example: orders may continue to be exported in the path with the prefix `v5/orders` with the old `v5` format, while new `v6` orders will be exported with the prefix `v6/orders`.

## Available Exports

| Export Type   | Applicable To             | File Path (latest version)                       | File Name (example)                |
| :------------ | :------------------------ | :----------------------------------------------- | :--------------------------------- |
| Events        | Bonsai UI clients         | v5/events/events_YYYY-MM-DDTHH-mm-ss.csv         | events_2023-10-26T00-08-21.csv     |
| Line Items    | API and Bonsai UI clients | v5/line-items/line-items_YYYY-MM-DDTHH-mm-ss.csv | line-items_2023-10-26T00-08-24.csv |
| Orders        | API and Bonsai UI clients | v5/orders/orders_YYYY-MM-DDTHH-mm-ss.csv         | orders_2023-10-26T00-08-28.csv     |
| Refunds       | API and Bonsai UI clients | v5/refunds/refunds_YYYY-MM-DDTHH-mm-ss.csv       | refunds_2023-10-26T00-08-31.csv    |

**Note: Catalog-only accounts will not have access to any exports.**

### Events Export

The Events export provides basic insights into specific user interactions within the Bonsai UI. Below are the event types you can expect in this export and their respective fields.

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


#### Event Types and Descriptions

| Event Type           | Description                                                                                         |
| :------------------- | :-------------------------------------------------------------------------------------------------- |
| Add to Cart          | User adds a product to their cart. Not available in all versions of Bonsai UI                       |
| Cart View            | User views their cart or single product                                                             |
| Initiate Checkout    | User begins checkout with a cart or single product                                                  |
| Submit Shipping Info | Shipping information is successfully submitted; user moves forward to the payment information step  |
| Place Order          | Payment information is successfully sent                                                            |
| Order Success        | Order is completed successfully                                                                     |
| Order Error          | Something goes wrong after successfully submitting payment information                              |

#### Event Fields

| Field                | Description                                                                   |
| :------------------- | :---------------------------------------------------------------------------- |
| Event Timestamp      | Time when the event occurred in UTC, in ISO 8601 format                       |
| Event                | Type of the event (e.g., Add to Cart, Initiate Checkout)                      |
| Cart ID              | Unique identifier for the cart                                                |

### Line Items Export

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


#### Line Item Fields

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
| Order Timestamp  | Time when the order was placed in UTC, in ISO 8601 format           |
| Goods Without Tax| Cost of goods sold without tax                                      |

### Orders Export

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

#### Order Fields

| Field                 | Description                                                                   |
| :-------------------- | :---------------------------------------------------------------------------- |
| Order ID              | Unique identifier for the order, generated by Bonsai                          |
| Order Number          | Human-readable order number                                                   |
| External Order ID     | Identifier from an external system, if provided, otherwise "empty"            |
| Cart ID               | Unique identifier for the cart related to this order, or "empty"              |
| Order Timestamp       | Time the order was placed in UTC, in ISO 8601 format                          |
| Total Customer Charge | Total amount charged to the customer                                          |
| Goods Without Tax     | Total price of the goods sold without tax                                     |
| Goods Tax             | Tax charged on the goods                                                      |
| Shipping Without Tax  | Cost of shipping, not including tax                                           |
| Shipping Tax          | Tax on the shipping cost                                                      |
| Duties                | Import duties or tariffs applied to the order                                 |

### Refunds Export

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

#### Refund Fields

| Field                     | Description                                                                                        |
| :------------------------ | :------------------------------------------------------------------------------------------------- |
| Order ID                  | Unique identifier for the original order, generated by Bonsai                                      |
| Order Number              | Human-readable order number for the original order                                                 |
| External Order ID         | Identifier from an external system for the original order, if provided, otherwise "empty"          |
| Cart ID                   | Unique identifier for the cart related to the original order, or "empty"                           |
| Refund ID                 | Unique identifier for the refund transaction                                                       |
| Refund Reason             | Classification for the refund reason                                                               |
| Refund Timestamp          | Time the refund was processed in UTC, in ISO 8601 format                                           |
| Refunded Goods Without Tax| Total amount of goods refunded, not including tax                                                  |

#### Refund Reasons

Here are the common reasons for refunds:

| Reason            | Description                                       |
| :---------------- | :------------------------------------------------ |
| Item Unavailable  | Item out of stock or not available for purchase   |
| Customer Returned | Customer returned the item and received a refund. |
| Customer Canceled | Customer canceled the order before shipment.      |
| Reimbursement     | Money returned for an approved claim or payment   |

## Changelog

- November 1, 2023
  - Initial documentation for `v5` exports.