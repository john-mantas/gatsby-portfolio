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