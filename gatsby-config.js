const SITE_CONFIG = require('./src/utils/site-config');

module.exports = {
  siteMetadata: {
    siteUrl: SITE_CONFIG.siteUrl
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `test-pages`,
        path: `${__dirname}/src/utils/test-pages/`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: "johnmantas",
        schemas: {
          project: require('./schemas/repeatables/project.json'),
          test: require('./schemas/repeatables/test.json'),
          metadata: require('./schemas/singletons/metadata.json'),
          page_not_found: require('./schemas/singletons/page_not_found.json'),
          profile: require('./schemas/singletons/profile.json'),
        }
        // accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        // customTypesApiToken: process.env.PRISMIC_CUSTOM_TYPES_API_TOKEN,
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: ['/preview/', '/preview/*']
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        lang: SITE_CONFIG.siteLang.split('-')[0],
        name: SITE_CONFIG.siteName,
        short_name: SITE_CONFIG.siteShortName,
        description: SITE_CONFIG.siteDescription,
        background_color: SITE_CONFIG.siteBackgroundColor,
        theme_color: SITE_CONFIG.siteThemeColor,
        display: `minimal-ui`,
        icon: SITE_CONFIG.siteIcon
      }
    },
    `gatsby-plugin-offline`,
  ]
}