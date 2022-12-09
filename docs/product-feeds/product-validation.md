---
title: Product Validation
description: Learn what products are included in our feeds.
sidebar_position: 3
---

# Product Validation

We gather products from various merchants and validate them before they are exported to our product
feeds. Validation process makes sure that the data follows our requirements. We omit products from
feeds if they do not meet our requirements.

## Validation Rules

All of the following rules must equate to `false` for a product to be included in our feeds:

- Merchant didn't publish the product
- Merchant doesn't wish to have a specific product in the feed
- Merchant doesn't wish to have a specific brand in the feed
- Product doesn't have a Google category
- Product has duplicate variants
- Variants have different set of options (e.g. some have color and size, whilst others have only color)
- Merchant webhooks are not working. Applies only to Shopify merchants
- Bonsai manually marked product as unavailable
- Bonsai didn't publish the brand
- Bonsai didn't publish the merchant
- Bonsai couldn't parse the product correctly

There are also a few rules that we follow when validating variants:

- Variant has negative or `null` price
- Variant price is lower than its sale price
- Variant has 0 or only 1 image
- Merchant deleted the variant

If **any of the above rules** equate to `true`, the product or variant is **omitted** from the feed.

:::caution
We currently do not remove out of stock products from the feeds. However, there's a possibility that
we will do so in the future to avoid growing feed sizes infinitely.
:::
