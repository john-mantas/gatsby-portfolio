const btoa = require('btoa')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Create local pages from utils/test-pages (development only)
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

  // Query data to be used in gatsby actions
  const results = await graphql(`
    {
      allPrismicProject {
        totalCount
      }
    }
  `)

  // Check for graphql errors
  if (results.errors) {
    throw new Error(results.errors)
  }

  // Create project pages pagination
  const totalProjects = results.data.allPrismicProject.totalCount
  const projectsPerPage = 6
  const totalProjectPages = Math.ceil(totalProjects / projectsPerPage)
  const baseProjectPath = `/projects/`

  Array.from({ length: totalProjectPages }).forEach((_, index) => {
    const isFirstPage = index === 0
    const currentPage = index + 1
    const previousPage = isFirstPage
      ? null 
      : {
          path: currentPage > 2 ? `${baseProjectPath}page/${currentPage - 1}/` : baseProjectPath,
          number: currentPage - 1
        }

    const nextPage = currentPage < totalProjectPages
      ? {
          path: `${baseProjectPath}page/${currentPage + 1}/`,
          number: currentPage + 1
        }
      : null

    createPage({
      path: isFirstPage ? baseProjectPath : `${baseProjectPath}page/${currentPage}/`,
      component: require.resolve(`./src/templates/AllProjects.js`),
      context: {
        itemsPerPage: projectsPerPage,
        after: isFirstPage ? null : btoa(`arrayconnection:${projectsPerPage * index - 1}`),
        currentPage: currentPage,
        previousPage: previousPage,
        nextPage: nextPage,
        totalPages: totalProjectPages,
        totalCount: totalProjects
      }
    })
  })
}