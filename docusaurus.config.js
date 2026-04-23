const config = {
  title: 'Mi Sitio',
  tagline: 'Documentación Personal',
  url: 'https://CarlosLNS.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'CarlosLNS',
  projectName: 'CarlosLNS.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: {
        title: 'Mi Sitio',
        items: [
          {type: 'doc', docId: 'intro', position: 'left', label: 'Tutorial'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/CarlosLNS/CarlosLNS.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Mi Proyecto. Built with Docusaurus.`,
      },
    }),
};

module.exports = config;