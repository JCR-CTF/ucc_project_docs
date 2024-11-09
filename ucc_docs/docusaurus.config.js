// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UCC Project Docs', // CHANGED: Updated site title
  tagline: 'Documentation for UCC Project', // CHANGED: Updated tagline
  favicon: 'img/favicon.ico',

  // CHANGED: Updated URL for GitHub Pages
  url: 'https://jcr-ctf.github.io',
  // CHANGED: Updated baseUrl for your repository
  baseUrl: '/ucc_project_docs/',

  // CHANGED: Updated GitHub pages deployment config
  organizationName: 'JCR-CTF', // Changed to your GitHub org name
  projectName: 'ucc_project_docs', // Changed to your repo name
  trailingSlash: false, // ADDED: Recommended for GitHub Pages
  deploymentBranch: 'gh-pages', // ADDED: Specify deployment branch

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: './sidebars.js',
          // CHANGED: Updated to your repository
          editUrl:
            'https://github.com/JCR-CTF/ucc_project_docs/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // CHANGED: Updated to your repository
          editUrl:
            'https://github.com/JCR-CTF/ucc_project_docs/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'UCC Project Docs', // CHANGED: Updated navbar title
        logo: {
          alt: 'UCC Project Logo', // CHANGED: Updated logo alt text
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation', // CHANGED: Updated label
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            // CHANGED: Updated GitHub link
            href: 'https://github.com/JCR-CTF/ucc_project_docs',
            label: 'GitHub',
            position: 'right',
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
                label: 'Documentation', // CHANGED: Updated label
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                // CHANGED: Updated GitHub link
                label: 'GitHub',
                href: 'https://github.com/JCR-CTF/ucc_project_docs',
              },
            ],
          },
        ],
        // CHANGED: Updated copyright
        copyright: `Copyright © ${new Date().getFullYear()} UCC Project. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;