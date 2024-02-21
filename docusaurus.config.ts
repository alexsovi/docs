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
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          editUrl: 'https://github.com/LegacyLauncher/docs/edit/main/',
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
				{
					'aria-label': 'GitHub',
					'className': 'navbar--github-link',
					'href': 'https://github.com/LegacyLauncher/docs',
					'position': 'right',
				},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Ресурсы',
          items: [
            {
              label: 'Наш сайт',
              href: 'https://llaun.ch',
            },
            {
              label: 'Исходные коды Вики',
              href: 'https://github.com/LegacyLauncher/docs/',
            },
          ],
        },
        {
          title: 'Сообщество',
          items: [
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
        {
          title: 'Партнеры',
          items: [
            {
              label: 'Система скинов Ely.by',
              href: 'https://ely.by',
            },
          ],
        },
      ],
      copyright: '<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/">Text is available under the <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg"></a><br/>Additional terms may apply.</p>',
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'bash',
        'log',
        'properties',
        'json',
        'ini',
      ],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      config: {
        container: {
          top: 72,
          left: 0,
          right: 0,
          bottom: 16,
        },
      }
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      'docusaurus-plugin-yandex-metrica',
      {
        counterID: '96541553',
      }
    ],
    'docusaurus-plugin-image-zoom',
  ],
};

export default config;
