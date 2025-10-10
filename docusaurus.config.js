// @ts-check
const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'L&T Sales Tracker',
  tagline: 'Track sales activities and manage member journeys efficiently',
url: 'https://rutujakagwade.github.io',
baseUrl: '/WebSiteDoc_L-T/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

 organizationName: 'rutujakagwade',
projectName: 'WebSiteDoc_L-T',

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
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'L&T Sales Tracker',
        logo: {
          alt: 'L&T Sales Tracker Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/quickstart',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} L&T Sales Tracker. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};