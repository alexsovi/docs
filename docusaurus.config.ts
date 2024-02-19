import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Legacy Launcher Wiki',
  tagline: 'Документация Legacy Launcher',
  favicon: 'img/favicon.ico',
  url: 'https://docs.llaun.ch',
  baseUrl: '/',
  organizationName: 'LegacyLauncher',
  projectName: 'docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        blog: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Legacy Launcher Wiki',
      logo: {
        alt: 'Legacy Launcher logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Часто задаваемые вопросы',
              to: '/faq',
            },
            {
              label: 'Решение проблем',
              to: '/troubleshooting',
            },
            {
              label: 'Использование модов',
              to: '/mods',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
            {
              label: 'Наш сайт',
              href: 'https://llaun.ch',
            },
            {
              label: 'Группа ВК',
              href: 'https://llaun.ch/vk',
            },
            {
              label: 'Наш Discord',
              href: 'https://llaun.ch/discord',
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} Legacy Launcher. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
