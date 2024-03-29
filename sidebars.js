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
              id: 'api/carts/remove-product-from-cart',
              label: 'Remove Product',
              className: 'api-method patch',
            },
            {
              type: 'doc',
              id: 'api/carts/set-cart',
              label: 'Set Cart',
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
                  id: 'api/orders/orders-live-testing',
                },
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
                  id: 'api/orders/submit-pending-orders',
                  label: 'Submit Pending Orders',
                  className: 'api-method post',
                },
                {
                  type: 'doc',
                  id: 'api/orders/submit-order-payment',
                  label: 'Submit Order Payment',
                  className: 'api-method post',
                },
                {
                  type: 'category',
                  label: 'Order Status',
                  items: [
                    {
                      type: 'doc',
                      id: 'api/orders/order-fulfillment-statuses',
                    },
                    {
                      type: 'doc',
                      id: 'api/orders/order-status-by-id',
                      label: 'By public id',
                      className: 'api-method get',
                    },
                    {
                      type: 'doc',
                      id: 'api/orders/order-status-by-external-order-id',
                      label: 'By external order id',
                      className: 'api-method get',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Refunds',
                  items: [
                    {
                      type: 'doc',
                      id: 'api/orders/order-refunds-by-id',
                      label: 'By public id',
                      className: 'api-method get',
                    },
                    {
                      type: 'doc',
                      id: 'api/orders/order-refunds-by-external-order-id',
                      label: 'By external order id',
                      className: 'api-method get',
                    },
                  ],
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
      label: 'Bonsai UI',
      type: 'category',
      link: {
        type: 'doc',
        id: 'bonsai-ui/introduction',
      },
      items: [
        {
          label: 'Bonsai Checkout',
          type: 'category',
          link: {
            type: 'doc',
            id: 'bonsai-ui/checkout/index',
          },
          items: [
            {
              type: 'doc',
              id: 'bonsai-ui/checkout/events',
              label: 'Events',
            },
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'data/index',
      label: 'Data',
    },
  ],
};

module.exports = sidebars;
