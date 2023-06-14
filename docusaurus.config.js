// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Bonsai Documentation',
  tagline: '',
  url: 'https://docs.shopbonsai.ca',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ShopBonsai', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/ShopBonsai/docs/tree/main/',
          docItemComponent: '@theme/ApiItem',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/ShopBonsai/docs/tree/main/',
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: 'Bonsai Docs',
        logo: {
          alt: 'Bonsai Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting Started',
          },
          {
            type: 'doc',
            docId: '/category/product-feeds',
            position: 'left',
            label: 'Product Feeds',
          },
          {
            type: 'doc',
            docId: 'api/index',
            position: 'left',
            label: 'API',
          },
          {
            type: 'doc',
            docId: 'images/index',
            position: 'left',
            label: 'Images',
          },
          {
            type: 'doc',
            docId: 'inventory-validation/index',
            position: 'left',
            label: 'Inventory Validation',
          },
          {
            type: 'doc',
            docId: 'express-checkout/index',
            position: 'left',
            label: 'Express Checkout',
          },
          {
            type: 'doc',
            docId: 'native-commerce/index',
            position: 'left',
            label: 'Native Commerce',
          },
          {
            type: 'doc',
            docId: 'bonsai-ui/introduction',
            position: 'left',
            label: 'Bonsai UI',
          },
        ],
      },
      footer: {
        style: 'dark',
        // No current need for footer containing the same navigation links as menu is fixed up top
        /*
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Product Feeds',
                to: '/docs/category/product-feeds',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
              {
                label: 'Images',
                to: '/docs/images',
              },
            ],
          }
        ], */
        copyright: `Copyright © ${new Date().getFullYear()} Shop Bonsai, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        docsPluginId: 'plugin-content-docs',
        config: {
          products: {
            specPath: 'spec/products.json',
            outputDir: 'docs/api/products',
            sidebarOptions: {
              categoryLinkSource: 'info',
            },
            downloadUrl:
              'https://raw.githubusercontent.com/ShopBonsai/docs/main/spec/products.json',
          },
          orders: {
            specPath: 'spec/orders.json',
            outputDir: 'docs/api/orders',
            sidebarOptions: {
              categoryLinkSource: 'info',
            },
            downloadUrl: 'https://raw.githubusercontent.com/ShopBonsai/docs/main/spec/orders.json',
          },
          carts: {
            specPath: 'spec/carts.json',
            outputDir: 'docs/api/carts',
            sidebarOptions: {
              categoryLinkSource: 'info',
            },
            downloadUrl: 'https://raw.githubusercontent.com/ShopBonsai/docs/main/spec/carts.json',
          },
        },
      },
    ],
  ],

  themes: ['docusaurus-theme-openapi-docs'],
};

module.exports = config;
