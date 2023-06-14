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
    'intro',
    {
      label: 'Product Feeds',
      type: 'category',
      link: {
        type: 'generated-index',
        description:
          'We currently provide access to our product catalogue via product feeds. This section includes implementation steps and best practices to start using our feeds.',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'product-feeds',
        },
      ],
    },
    {
      type: 'category',
      label: 'Bonsai API',
      link: {
        type: 'doc',
        id: 'api/index',
      },
      items: [
        {
          type: 'category',
          label: 'Products',
          link: {
            type: 'doc',
            id: 'api/products/products-api',
          },
          items: [
            {
              type: 'doc',
              id: 'api/products/get-products',
              label: 'Get Products',
              className: 'api-method get',
            },
          ],
        },
        {
          type: 'category',
          label: 'Carts',
          link: {
            type: 'doc',
            id: 'api/carts/carts-api',
          },
          items: [
            {
              type: 'doc',
              id: 'api/carts/get-a-cart-by-id',
              label: 'Get Cart',
              className: 'api-method get',
            },
            {
              type: 'doc',
              id: 'api/carts/add-product-to-cart',
              label: 'Add Product',
              className: 'api-method patch',
            },
            {
              type: 'doc',
              id: 'api/carts/remove-product-to-cart',
              label: 'Remove Product',
              className: 'api-method patch',
            },
            {
              type: 'doc',
              id: 'api/carts/submit-cart',
              label: 'Submit Cart',
              className: 'api-method post',
            },
            {
              type: 'doc',
              id: 'api/carts/delete-a-cart-by-id',
              label: 'Delete Cart',
              className: 'api-method delete',
            },
          ],
        },
        {
          type: 'category',
          label: 'Orders',
          link: {
            type: 'doc',
            id: 'api/orders/orders-api',
          },
          items: [
            {
              type: 'category',
              label: 'Checkout Totals',
              className: 'api-method post',
              link: {
                type: 'doc',
                id: 'api/orders/checkout-totals',
              },
              items: [
                {
                  type: 'doc',
                  id: 'api/orders/checkout-error-responses',
                },
              ],
            },
            {
              type: 'category',
              label: 'Submit Orders',
              className: 'api-method post',
              link: {
                type: 'doc',
                id: 'api/orders/submit-orders',
              },
              items: [
                {
                  type: 'doc',
                  id: 'api/orders/orders-error-responses',
                },
              ],
            },
            {
              type: 'category',
              label: 'v2',
              items: [
                {
                  type: 'doc',
                  id: 'api/orders/order-status',
                  label: 'Order Status',
                  className: 'api-method get',
                },
                {
                  type: 'doc',
                  id: 'api/orders/order-refunds',
                  label: 'Order Refunds',
                  className: 'api-method get',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'images/index',
      label: 'Images',
    },
    {
      type: 'doc',
      id: 'inventory-validation/index',
      label: 'Inventory Validation',
    },
    {
      type: 'doc',
      id: 'express-checkout/index',
      label: 'Express Checkout',
    },
    {
      type: 'doc',
      id: 'native-commerce/index',
      label: 'Native Commerce',
    },
    // ,
    // {
    //   label: 'Bonsai UI',
    //   type: 'category',
    //   link: {
    //     type: 'doc',
    //     id: 'bonsai-ui/introduction',
    //   },
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'bonsai-ui/express-checkout/index',
    //       label: 'Express Checkout',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'bonsai-ui/checkout/index',
    //       label: 'Bonsai Checkout',
    //     },
    //   ],
    // },
  ],
};

module.exports = sidebars;
