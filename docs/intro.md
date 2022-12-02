---
sidebar_position: 1
---

# Tutorial Intro

Let's discover **Bonsai in less than 5 minutes**.

## Getting Started

Get started by [downloading a sample feed](https://shopbonsai/sample-feed.csv).

### Feed Format

Once the feed is downloaded, open it in a spreadsheet editor like Excel or Google Sheets.
<!-- TODO: add a note on Modern CSV and q -->

#### Feed Columns

The feed columns are:

- **name**: The name of the product.
- **description**: The description of the product.
- **id**: The unique identifier of the variant.
- **item_group_id**: The unique identifier of the product.
- **affiliate_item_group_id**: The unique identifier of the product.
- **link**: The link to the product.
- **image_link**: The link to the product image.
- **price**: The price of the product.
- **sale_price**: The "original" price of the product if it's now on sale.
- **availability**: The availability of the product.

To see more details, head over to the [feed format docs](/docs/product-feeds)

#### Feed Rows

Each of the rows of a feed represents a product variant. For example, if you have a product with 3 colors and 2 sizes, you'll have 6 rows. Each row will have the same `item_group_id` and `affiliate_item_group_id` but different `id` and `availability`. The `availability` column will be `in_stock` for the available variants and `out_of_stock` for the unavailable ones.

To see more details, head over to the [feed format docs](/docs/product-feeds).

### API

Some quick notes on API

### Product Collections

Some quick notes on product collections
