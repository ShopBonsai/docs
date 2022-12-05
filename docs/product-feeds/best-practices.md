---
title: Best Practices
description: Best practices for product feeds.
sidebar_position: 2
---

# Best Practices

This page contains some best practices for ingesting Bonsai's product feeds. These best practices
are based on our experience with our partners and are meant to help you get the most out of Bonsai.

## Automate feed ingestion

Automate feed ingestion to ensure that your feed is always up-to-date. Re-ingest our feeds at least
every 24 hours. We recommend ingesting our feeds every 1-2 hours. This will ensure that you have the
latest product data. If you're ingesting our feeds every 24 hours, you might miss out on inventory
and price changes. We update feeds every 30 minutes.

Ingest our feeds on the 15th minute of half hour. For example, ingest our feeds at 12:15, 12:45,
1:15, 1:45, etc. This will ensure that you don't download a feed while it's being updated as this
might result in incomplete data.

## Images

Whilst we do allow using images from our CDN, we recommend reuploading them to your own CDN. This is
a good practice, as it allows you to control the images on your site, and also allows you to serve
images faster.

## Affiliate IDs

We recommend using `affiliate_item_group_id` if you need to map products from our feeds to the same
products from your own database. This field is unique to each product per feed. And it is assigned
by the merchant.

## Out of stock products

Currently, we keep out of stock products in our feeds. We recommend using the `availability` column
to filter out out of stock products. `quantity` column will always be `0` for out of stock products.

## Product removal

We remove variants from the feeds if they were removed by the merchant or they are no longer up to
our standards.
