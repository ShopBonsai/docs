---
title: Getting Started
description: Learn how to download and use product feeds.
sidebar_position: 1
---

# Getting Started

Bonsai product feeds are CSV files containing product information. [Google's product feed specification](https://support.google.com/merchants/answer/7052112?hl=en) forms the foundation for our feeds with changes based on Bonsai's requirements.

:::info
Feeds are not customizable and need to be consumed as-is. Please contact your account manager if you have specific questions or requirements, and we can assist you with the implementation.
:::

## Downloading a Feed

Feeds are hosted on [Amazon Web Services](https://aws.amazon.com/) as CSV files. Before you download a feed, you need to configure your AWS
credentials and [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html).

### Prerequisites

:::info
Your AWS credentials will be shared with you via your account manager.
:::

:::tip
If you’re new to AWS, please [install AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) first.
:::

Once you received AWS credentials, you should have the following information:

- `access_id`
- `secret`
- `bucket_name`

### Configuration

Now that you have the credentials and AWS CLI installed, you can configure it to get access to the
feeds. Please configure AWS CLI with the credentials you received from your account manager:

```bash
aws configure # use `access_id` and `secret`
```

### Bucket Access

You should now have access, list the bucket's contents, and download one of our feeds.

```bash
# List contents of the bucket
aws s3 ls s3://<bucket_name>

# Copy one of the feeds
# Downloading the file through CLI will pull a gzipped version, you'll need to `gunzip` the result.
aws s3 cp 's3://<bucket_name>/<file_name>.csv' - | gunzip > <file_name>.csv

# For example:
aws s3 cp 's3://prod-feed-exports/verishop.csv' - | gunzip > verishop.csv
```

## CSV Format

The provided CSV feeds are:

- **comma separated**
- the **first row contains the column names**
- some columns are **optional** whereas others are **required**
- values that contain **multiple lines of text, commas, or double quotes** are **enclosed in double quotes**

To see more details, head over to the [feed format reference](/docs/product-feeds/format).

## Feed Ingestion

So what do you need to do with this data? You can use it to create and update products in your application. Existing CSV ingestion services can import products depending on your technology to avoid manually integrating with our feeds.

For example, if you're using Shopify, you can use a 3rd party service such as [Skyvia](https://skyvia.com/data-integration/shopify-csv-file-import-and-export) to import a feed into your application automatically.

Using a custom-built application, you can use a service like [Feedonomics](https://feedonomics.com/) to import your feeds. If these are not an option, you can write a service to import a feed into your application since CSV is a widely supported format.

:::note
We don't endorse any specific service, but we do recommend using a service that can automatically import your feed into your store.
:::

### Parsing the Feed

The feed is a CSV file, so you'll need to parse the file to read out the data. If you're not using a 3rd party service and writing one yourself, you can use a library like [Papa Parse](https://www.papaparse.com/). Once you have the data, you can create and update your application's products.

Depending on your use case, you may want to:

1. create a new product for each variant, or
2. create a new product for each variant color, but grouping sizes, or
3. create a single product grouping colors and sizes

This mainly depends on how your customers are used to viewing and purchasing products. We recommend either option 2 or 3. You can use the `item_group_id` column to group variants into a single product, as it's a unique identifier per product.

:::note
Please be aware that new columns might be added to the feed file; your feed ingestion should not fail when new columns are added.
:::

## Example

Each row of a feed represents a product variant. For example, if you have a product with 2 colors
and 4 sizes, you'll have 8 rows:

<details>
  <summary>CSV table example</summary>
  <div>

id | title | link | description | image_link | additional_image_link | availability | quantity | price | sale_price | google_product_category | brand | color | gender | size | size_type | item_group_id | affiliate_item_group_id | option1 | option2 | option3 | option4 | option5 | option6 | option7 | option8 | option9 | total_ratings | star_rating | created_at | updated_at
--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--|--
M00679529706740 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34 </div> | https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Black | female | XS | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z
M00679529825786 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34" </div> | https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Tan | female | S | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z
M00679529832364 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34" </div> | https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Black | female | M | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z
M00679529880785 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34" </div> | https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Black | female | L | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z
M00679529571225 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34" </div> | https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Black | female | S | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z
M00679529714066 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34" </div> | https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Tan | female | L | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z
M00679529736280 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34" </div> | https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Tan | female | XS | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z
M00679529896908 | Joelle Sweater Dress | https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086 | <div style={{ minWidth: 500 }}>This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.<br /><br />- Ribbed knit sweater dress<br />- Turtleneck<br />- Fringe detail on arms and across back<br />- Oversized sleeves<br />- Mini length<br /><br />Model Measurement:<br />- Model is wearing size S<br />- Height: 5'9"<br />- Bust: 32"<br />- Waist: 24"<br />- Hips: 34" </div> | https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg | <div style={{ minWidth: 700 }}>https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg</div> | in_stock | 250 | 128.0 USD | | Apparel & Accessories > Clothing > Dresses | CRESCENT | Tan | female | M | | clad6pg5z00eu012gfz7hfm92 | 7575809654978 | | | | | | | | | | | | 2022-11-12T00:23:14.685Z | 2022-12-05T17:09:21.959Z

  </div>
</details>

<details>
  <summary>
    CSV text example
  </summary>

  <div>

```csv
id,title,link,description,image_link,additional_image_link,availability,quantity,price,sale_price,google_product_category,brand,color,gender,size,size_type,item_group_id,affiliate_item_group_id,option1,option2,option3,option4,option5,option6,option7,option8,option9,total_ratings,star_rating,created_at,updated_at
M00679529706740,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg,"https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Black,female,XS,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z
M00679529825786,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg,"https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Tan,female,S,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z
M00679529832364,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg,"https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Black,female,M,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z
M00679529880785,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg,"https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Black,female,L,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z
M00679529571225,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ibVj7L3r2L.jpeg,"https://sharpener.shopbonsai.ca/i/NUGIkTxyN.jpeg,https://sharpener.shopbonsai.ca/i/l06wqjhhRX.jpeg,https://sharpener.shopbonsai.ca/i/G05oQal19.jpeg,https://sharpener.shopbonsai.ca/i/ABzdpkgLD.jpeg,https://sharpener.shopbonsai.ca/i/E1_Tv5HdOs.jpeg,https://sharpener.shopbonsai.ca/i/ePSYnwnl17.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Black,female,S,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z
M00679529714066,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg,"https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Tan,female,L,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z
M00679529736280,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg,"https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Tan,female,XS,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z
M00679529896908,Joelle Sweater Dress,https://verishop.sjv.io/c/2970856/1493616/15992?prodsku=M00679529571225&u=https%3A%2F%2Fwww.verishop.com%2Fcrescent%2Fmarketplace%2Fjoelle-sweater-dress%2Fp7575809654978%3Fcolor%3Dblack%26variant_id%3D42700732793026&intsrc=CATF_11086,"This Mini Sweater Dress features turtleneck, long oversized sleeves, and fringe detail on arms and across back.

- Ribbed knit sweater dress
- Turtleneck
- Fringe detail on arms and across back
- Oversized sleeves
- Mini length

Model Measurement:
- Model is wearing size S
- Height: 5'9""
- Bust: 32""
- Waist: 24""
- Hips: 34""",https://sharpener.shopbonsai.ca/i/ebpRBj2lI.jpeg,"https://sharpener.shopbonsai.ca/i/cFydIvml0j.jpeg,https://sharpener.shopbonsai.ca/i/OmWBH3_nv.jpeg,https://sharpener.shopbonsai.ca/i/lXYaZ3Towx.jpeg,https://sharpener.shopbonsai.ca/i/CfBCWtxzfI.jpeg,https://sharpener.shopbonsai.ca/i/Qer468W2XF.jpeg,https://sharpener.shopbonsai.ca/i/cQyMAZk8R.jpeg",in_stock,250,128.0 USD,,Apparel & Accessories > Clothing > Dresses,CRESCENT,Tan,female,M,,clad6pg5z00eu012gfz7hfm92,7575809654978,,,,,,,,,,,,2022-11-12T00:23:14.685Z,2022-12-05T17:09:21.959Z

```

  </div>
</details>
