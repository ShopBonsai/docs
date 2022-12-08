---
title: Best Practices
description: Learn best practices for ingesting Bonsai's product feeds.
sidebar_position: 2
---

# Best Practices

This page contains best practices for ingesting Bonsai's product feeds based on our experience with our partners. They will help you to get the most out of our catalogue.

## Automating feed ingestion

Automate feed ingestion to ensure your feed is always up-to-date. We recommend ingesting our feeds every 1-2 hours for best results and once every 24 hours as a bare minimum. It'll ensure you have the latest, most up-to-date product information. If you only ingest our feeds every 24 hours, you might miss out on inventory and price changes, causing a negative experience for your customers and overhead for yourself. We update feeds **every 30 minutes**.

Ingest our feeds on the 15th minute of every half hour. For example, ingest our feeds at 12:15, 12:45,
1:15, 1:45, etc. This will ensure that you don't download a feed while it's being updated as this
might result in incomplete data.

## Images

While we allow using images from our CDN, we recommend re-uploading them to your services. It is a good practice, as it will enable you to control the images and increase performance when serving them.

## Affiliate IDs

We recommend using `affiliate_item_group_id` if you need to map products from our feeds to the same
products from your database. This field is unique to each product per feed. And it is assigned
by the merchant.

## Out of stock products

Currently, we keep out-of-stock products in our feeds. You can use the `availability` column to filter out out-of-stock products. The `quantity` column will always be `0` for out-of-stock products.

## Product removal

We remove variants from the feeds if the merchant removed them or they are no longer up to our standards.
