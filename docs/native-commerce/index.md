---
title: Native Commerce
---

## Description

Native Commerce is an _embeddable_ widget that enables checking out with a Bonsai product. Once embedded on a webpage, it adds interactivity to product placeholders which can then open _Product detail page (PDP)_ modals.

`PDP` displays basic product information, images, allows for variant selection (colors, sizes, etc.), and has a `Buy now` button which redirects to Bonsai [Express Checkout](/docs/express-checkout).

:::info
Native Commerce works by detecting all anchor tags that contain links to Bonsai products and adds event listeners that open `PDP` once clicked.
:::

## Installation

### Add Native Commerce scripts to your webpage

```html
<head>
  <link
    href="https://natcommx.shopbonsai.ca/bonsai/index.f3d6b63a.css"
    rel="stylesheet"
    type="text/css"
  />
  <script type="module" src="https://natcommx.shopbonsai.ca/bonsai/index.89f17aff.js"></script>
  <script type="module" src="https://natcommx.shopbonsai.ca/bonsai/index.ee37ef32.js"></script>
</head>
```

### Create a product link

Add a product link anywhere inside your `HTML`.

```html
<a href="https://your.website.com/?bonsai=product_{ID}"></a>
```

:::info
A product link is any `a` tag with `href` that contains query parameter `?bonsai=product_{ID}`
:::

### Programatically trigger PDP

Alternatively, `PDP` can be open programatically by using exposed function `openBonsaiProduct` that's available as soon as the script loads.

```typescript
// Open PDP
window.openBonsaiProduct('product-id');
```
