const PRISMIC_PAGES = require('./src/utils/prismic-pages');
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
    {
      resolve: `gatsby-source-prismic-graphql`,
      options: {
        repositoryName: `johnmantas`,
        defaultLang: `en-us`,
        pages: PRISMIC_PAGES,
        sharpKeys: [
          /image|photo|picture/
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: ['/preview']
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
    {
      resolve: `gatsby-plugin-webpack-bundle-analyzer`,
      options: {
        analyzerPort: 8001,
        openAnalyzer: false,
        logLevel: `error`
      }
    }
  ]
}