import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UXUY Help',
  tagline: 'UXUY Product Guide and Help Center',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://uxuy-help-docs.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uxuyprotocol', // Usually your GitHub org/user name.
  projectName: 'uxuy-help-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/uxuyprotocol/uxuy-help-docs/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/uxuy-social-card.jpg',
    navbar: {
      title: 'UXUY Help',
      logo: {
        alt: 'UXUY Logo',
        src: 'img/logo-dark.svg',
        srcDark: 'img/logo-dark.svg',
        href: '/',
      },
      items: [
        // {
        //   position: 'left',
        //   label: 'Blog',
        //   href: 'https://github.com/uxuyprotocol',
        // },
        {
          href: 'https://uxuy.com',
          label: 'Official Website',
          position: 'right',
        },
        {
          href: 'https://github.com/uxuyprotocol',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Quick Start',
              to: '/',
            },
            {
              label: 'Product Overview',
              to: '/#platform-introduction',
            },
            // {
            //   label: 'FAQ',
            //   to: '/#faq',
            // },
          ],
        },
        {
          title: 'Community',
          items: [
            // {
            //   label: 'Technical Support',
            //   href: 'https://support.uxuy.com',
            // },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/BZwZA27Zkv',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/uxuycom',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/UXUYbot',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Official Website',
              href: 'https://uxuy.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/uxuyprotocol',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UXUY. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
