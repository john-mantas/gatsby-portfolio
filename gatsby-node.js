// Workaround for the caching error caused by source plugin using
// image sharp query for gatsby-image
// Source: https://github.com/birkir/gatsby-source-prismic-graphql/issues/162
// TODO: Remove it when there is a fix on the plugin
const fs = require('fs');
const dir = "./.cache/caches/gatsby-source-prismic-graphql"

exports.onPreBootstrap = () => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  if (process.env.NODE_ENV === 'development') {
    const testPagesResult = await graphql(`
      {
        allFile(filter: { sourceInstanceName: { eq: "test-pages" } }) {
          edges {
            node {
              extension
              name
              relativePath
            }
          }
        }
      }
    `)

    const testPages = testPagesResult.data.allFile.edges

    testPages.forEach(({ node }) => {
      if (node.extension === 'js') {
        createPage({
          path: `/test-pages/${node.name}`,
          component: require.resolve(`./src/utils/test-pages/${node.relativePath}`)
        })
      }
    })
  }
}