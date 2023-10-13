---
id: orders-live-testing
title: "Submit Orders: Test Orders"
sidebar_label: "Test Orders"
hide_title: true
toc_max_heading_level: 3
toc_min_heading_level: 2
---
# Testing Orders

## Introduction

Partners can test orders using our API in different scenarios. This document outlines the procedures for testing orders in live mode with prompt cancellation and test mode.

## Live Mode with Prompt Cancellation

In live mode with prompt cancellation, a partner can manually test orders using our API. Operations will go through as usual, but the orders will be filtered out from all reporting and Beam.

1. Make a call to our submist orders api using our API key.
2. Add "+bonsai" to the customer's email for identification..
3. Orders will be refunded and included in reporting or Beam.

> Note: This mode is fit for a one-time manual order placement in live mode.

## Test Mode

In test mode, all orders are treated as test orders. This means they will have the attribute `isTest: true` and will use the test Stripe API key, and provide a mock tax calucaltions.

### Using Bonsai Test in Customer Shipping Info:

1. Make a call to our submit orders api using our API key.
2. Add "+bonsai-test" to the customer's first name and last name in the shipping address.
3. Order should be in test mode.
4. All operations are available, and the flow is normal.

> Note: This mode is fit for a one-time manual order placement.

### Using a Test API Key:

1. Make a call to our submit orders api using our Test API key.
2. All orders should be in test mode.
3. All operations are available, and the flow is normal.

> Note: This mode is fit for automated testing (e2e, others).