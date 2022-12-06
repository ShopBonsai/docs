# Product validation

All ingested products go through a validation process to make sure all required data is available.
A product is valid when all its data follow our requirements; some of which are:

- Product is available on the merchant site
- All variant details are available and valid
  - Price (& sale price if exists)
  - Variant options (color & size included)
- Merchant has excluded the product from being sold through Bonsai.

We remove products when product:

- is excluded
- category is null
- unavailable is true
- google category is null
- is not published
- brand is not live
- merchant is not live
- is missing certain options
- has duplicate variants
- merchant needs webhooks
  - applies mainly to Shopify merchants
- needs further refinement
  - related to google categories
- brand is not blacklisted by merchant
- is verified or is auto reviewed

We also filter variant if the variant

- Has negative or null price
- A price lower than its sale price
- Variant was deleted
- Does not have at least 2 images
