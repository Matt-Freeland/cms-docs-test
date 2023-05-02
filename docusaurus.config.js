// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'docs Site',
    tagline: 'software stuff are cool',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-test-site.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'sonatype', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

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
            ({
                docs: {
                    path: 'repo',
                    // id: 'default',
                    routeBasePath: 'repo',
                    sidebarPath: require.resolve('./sidebars/docsSidebars.js'),
                }, 
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],
    plugins: [
        [ 
            '@docusaurus/plugin-content-docs', 
            {
                id: 'iq',
                path: 'iq',
                routeBasePath: 'iq',
                sidebarPath: require.resolve('./sidebars/iqSidebars.js'),
                // includeCurrentVersion: false,
                //  disableVersioning: false,
            },
        ],
        ['@docusaurus/plugin-content-docs',
            {
                id: 'lift',
                path: 'lift',
                routeBasePath: 'lift',
                sidebarPath: require.resolve('./sidebars/liftSidebars.js'),
            },
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'Sonatype Help',
            logo: {
                alt: 'Sonatype Help Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Repo',
                },
                {
                    type: 'docsVersionDropdown',
                    docsPluginId: 'default',
                    position: 'left',
                },
                {
                    type: 'docsVersion',
                    docsPluginId: 'iq',
                    docId: 'intro',
                    label: 'Lifecycle & Firewall',
                    position: 'left',
                },
                {
                    type: 'docsVersionDropdown',
                    docsPluginId: 'iq',
                    dropdownItemsBefore: [{to: '/iq_versions', label: 'IQ Versions'}],
                },
                {
                    type: 'doc',
                    docsPluginId: 'lift',
                    docId: 'lift',
                    position: 'left',
                    label: 'Developer',
                },
                {
                    href: 'https://github.com/facebook/docusaurus',
                    label: 'GitHub',
                    position: 'right',
                },
            ],

        },

        footer: {
            style: 'dark',
            // footer stuff
            /*  links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Repo',
                                to: '/repo/intro',
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
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ], */
            copyright: `Copyright © ${new Date().getFullYear()} Sonatype, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
