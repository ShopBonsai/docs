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
    {
      type: "category",
      label: "Product Feeds",
      link: {
        type: "generated-index",
        title: "Product Feeds",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/product-feeds",
      },
      items: [
        {
          type: "doc",
          id: "product-feeds/getting-started",
          label: "Getting Started",
        },
        {
          type: "doc",
          id: "product-feeds/best-practices",
          label: "Best Practices",
        },
        {
          type: "doc",
          id: "product-feeds/product-validation",
          label: "Product Validation",
        },
        {
          type: "doc",
          id: "product-feeds/format",
          label: "Feed Format Reference",
        },
      ]
    },
    {
      type: "category",
      label: "Bonsai API",
      link: {
        type: "generated-index",
        title: "Bonsai API",
        description: "dfdf",
        slug: "/category/api",
      },
      items: [
        {
          type: "category",
          label: "Products",
          link: {
            type: "generated-index",
            title: "Products API",
            description:
              "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
            slug: "/category/products-api",
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
            type: "generated-index",
            title: "Orders API",
            description:
              "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
            slug: "/category/orders-api",
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
      type: "category",
      label: "Images",
      link: {
        type: "generated-index",
        title: "Images",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/category/images",
      },
      items: [
        {
          type: "doc",
          id: "images/use-cases",
          label: "Use Cases",
        },
      ]
    },
  ],
};

module.exports = sidebars;
