/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  bonsai: [
    "intro",
    {
      label: "Product Feeds",
      type: "category",
      link: {
        type: "generated-index",
        description: "We currently provide access to our product catalogue via product feeds. This section includes implementation steps and best practices to start using our feeds."
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'product-feeds',
        },
      ]
    },
    {
      type: "category",
      label: "Bonsai API",
      link: {
        type: "doc",
        id: "api/index",
      },
      items: [
        {
          type: "category",
          label: "Products",
          link: {
            type: "doc",
            id: "api/products/products-api",
          },
          items: [
            {
              type: "doc",
              id: "api/products/get-products",
              label: "Get Products",
              className: "api-method get",
            },
          ],
        },
        {
          type: "category",
          label: "Orders",
          link: {
            type: "doc",
            id: "api/orders/orders-api",
          },
          items: [
            {
              type: "doc",
              id: "api/orders/checkout-totals",
              className: "api-method post",
            },
            {
              type: "doc",
              id: "api/orders/submit-orders",
              className:"api-method post",
            },
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "images/index",
      label: "Images",
    },
  ],
};

module.exports = sidebars;
