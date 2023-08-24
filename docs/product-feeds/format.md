---
title: Feed Format Reference
description: Learn how product feeds are formatted at Bonsai.
sidebar_position: 4
---

# Feed Format Reference

## `id`

> **required**

Variant ID. Each variant within a feed has a unique ID. This ID is used to identify the variant in
the feed and in the API.

## `item_group_id`

> **required**

Product ID. Variants belonging to the same product have the same `item_group_id`. This ID is used to
identify the product in the feed and in the API.

## `affiliate_item_group_id`

> **required**

Affiliate product ID. Variants belonging to the same product have the same `affiliate_item_group_id`.
This field is unique to each product per feed. And it is assigned by the merchant. You can use
this field to map products from our feeds to the same products from your own database.

## `title`

> **required**

Title of the product. Each variant of a product has the same title.

## `link`

> **required**

Link to the product on the merchant’s website. Each variant of a product has the same link.

## `description`

> **required**

Product description. Each variant of a product has the same description.

## `image_link`

> **required**

A single image URL representing the product or variant. Different variants with the same
`item_group_id` may have the same `image_link` value.

## `additional_image_link`

> **optional**

Either a single image URL, or a comma-separated list of image URLs.

## `availability`

> **required**

Availability of a variant - can either be `in_stock` or `out_of_stock`. If a variant is out of stock,
the `quantity` field will always be `0`. If a variant is in stock, the `quantity` field will be greater
than `0`.

## `quantity`

> **required**

Number of the inventory available to sell. This number is an estimate and may not be accurate. To get
the most accurate inventory, use the [Checkout API](/docs/api/orders/checkout-totals).

## `price`

> **required**

Variant’s regular price, including currency. Example: `125 USD`.

## `sale_price`

> **optional**

Variant’s price before discount, if the variant is on sale. Includes currency. Example: `150 USD`.
:::note Example
If a product is currently being sold for $100, but its previous price was $150, then in the feed it will be displayed as:
- `price: 100 USD`
- `sale_price: 150 USD`
:::
## `google_product_category`

> **required**

Google Product Category. You can find the list of categories [here](https://support.google.com/merchants/answer/6324436?hl=en). Example: `Apparel & Accessories > Clothing > Shirts & Tops > T-Shirts`.

## `brand`

> **optional**

Brand of the product. Each variant of a product has the same brand. Example: `Nike`.

## `color`

> **optional**

Color of the variant. Example: `Black`.

## `gender`

> **required**

Product gender. One of `male`, `female`, `unisex`, and `kids & babies`.

## `size`

> **optional**

Size of the variant. Example: `XL`.

## `size_type`

> **optional**

Size type of the variant. Example: `slim fit`.

## `option<1...9>`

> **optional**

Arbitrary variant option information apart from color, size, and size type, in the form of `<optionName>:<optionValue>`. Example: `material:cotton`. It can have up to 9 options.

## `total_ratings`

> **optional**

Total number of ratings for the product. Example: `10`.

## `star_rating`

> **optional**

Average star rating for the product. Example: `4.5`. The value must be between `0` and `5`.

## `created_at`

> **required**

ISO 8601 string of product’s creation date. Example: `2022-12-14T18:30:00Z`.

## `updated_at`

> **required**

ISO 8601 string of the product’s update date. Example: `2022-12-14T18:31:00Z`.

## `gtin`

> **optional**

Global Trade Item Number (GTIN) is `null` unless provided by the merchant.

## `sku`

> **optional**

stock keeping unit (sku) is `null` unless provided by the merchant.

## `is_final_sale`

> **optional**

Some items are final sale (i.e. highly discounted products); we set it to true whenever this information is provided by the merchant.


## `are_taxes_included_in_price`

> **optional**

If the price of the product is inclusive of taxes.


## `product_slug`

> **required**

URL-friendly value based on the product’s name. It’s guaranteed to be unique per merchant, and it will never change. It can be used as a slug in the URL for a specific PDP, instead of ids. Limited to 255 characters. Example: `gwen-lace-trim-silk-camisole-ac3cb58d`
