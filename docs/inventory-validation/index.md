---
title: Inventory Validation
---

# Inventory Validation

This page contains information about product inventory validation that increases order success rate when merchant feed information is out of date.

## How can a user buy an out-of-stock product
Consider the following scenario demonstrating how a user can buy an out-of-stock product.

1. Product inventory changes on the merchant website, and the product becomes unavailable
2. Merchant updates the merchant product feed
3. Bonsai imports the merchant product feed
4. Bonsai updates the product feed in the S3 bucket
5. Partner imports the product feed from S3 bucket
6. End user views the product on the partner's website and attempts to buy it

Bonsai is working hard to reduce the time between the merchant updating the feed in step 2 and Bonsai updating the feed in step 4.
With the most optimized flow, a lot depends on how frequently the merchant updates the feed.
If the updates happen once a day, there is a higher chance for the end user to buy an out-of-stock product.
Frequently updated merchant feeds have a higher order success rate. 
As a result, by the time the end user buys the product, the product is still in stock.

## How validation works
For merchants that don't update their feed frequently enough to ensure a high order success rate, Bonsai provides a custom solution that validates product availability during checkout.

When a user selects a product to buy on the partner's website, you can make an API call to Bonsai checkout.
The [Checkout Totals API endpoint](../api/orders/checkout-totals.api.mdx) returns stock information stored in the Bonsai database.
This information is more up-to-date than the information that the partner has.
In parallel, Bonsai triggers an inventory validation for the product using the merchant website.
The validation sometimes takes longer time, so the validation result isn't present in the response of the first [Checkout Totals API endpoint](../api/orders/checkout-totals.api.mdx) call.
Once validation results are in, a consequent call to [Checkout Totals API endpoint](../api/orders/checkout-totals.api.mdx) includes the most up-to-date information based on the merchant's website.

Here's how the checkout flow looks in this case:
1. The user adds a product to the cart
2. Call [Checkout Totals API endpoint](../api/orders/checkout-totals.api.mdx). Inventory validation starts asynchronously
3. Allow the user to enter the billing and shipping information
4. Call Bonsai [Checkout Totals API endpoint](../api/orders/checkout-totals.api.mdx) again. The inventory validation results are in, providing the most up-to-date product availability information based on the merchant's website
5. Call Bonsai [Submit Order API endpoint](../api/orders/submit-orders.api.mdx) to place order

## Checkout flow diagram
![Inventory validation flow diagram](./inventory-validation-flow-diagram.jpg)

[comment]: # (Edit diagram https://miro.com/app/board/uXjVPxSArFY=/)
