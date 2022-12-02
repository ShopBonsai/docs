---
title: Feed Format
description: Learn how product feeds are formatted at Bonsai.
---

# Format

- Each row of the CSV represents a variant
- The columns are comma separated
- Columns are quoted when necessary
- `"` is the escape character

Name | Description | Required | Notes
---------|----------|---------|-------
`id` | Variant ID. | ✅ |
`item_group_id` | Product ID | ✅ | variants belonging to the same product have the same `item_group_id`
`affiliate_item_group_id` | Affiliate product ID | ✅ | For backward compatibility
`title` | Product title. | ✅ |
`link` | Link to the product on the merchant’s website. | ✅ |
`description` | Product description. | ✅ |
`image_link` | A single image URL representing the product or variant. Note: different variants with the same `item_group_id` may have the same `image_link` value. | ✅ |
`additional_image_link` | Either a single image URL, or a comma-separated list of image URLs. | ❌ |
`availability` | Either `in_stock` or `out_of_stock`. | ✅ |
`quantity` | Number of the variant available to sell. | ✅ |
`price` | Variant’s regular price. Includes currency. Example: 125 USD. | ✅ |
`sale_price` | Variant’s sale price, if the variant is on sale. Includes currency. | ❌ |
`google_product_category` | Google Product Category. | ✅ |
`brand` | Product brand name. | ❌ |
`color` | Variant color. | ❌ |
`gender` | Product gender. One of male, female, unisex, and kids & babies. | ✅ |
`size` | Variant size. | ❌ |
`size_type` | Variant size type. Example: slim fit. | ❌ |
`option<1...9>` | Arbitrary variant option information apart from color, size, and size type, in the form of `<optionName>:<optionValue>`. Example: material:cotton. | ❌ |
`total_ratings` | Number of product ratings. | ❌ |
`star_rating` | Average product rating, from 0 to 5 inclusive. | ❌ |
`created_at` | ISO 8601 string of product’s creation date. | ✅ |
`updated_at` | ISO 8601 string of the product’s update date. | ✅ |

ℹ️ Notes

- It is highly suggested to download images before using on your site
- please provide an API-Key when downloading images as this would allow us to serve you better.
