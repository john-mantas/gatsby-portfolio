import React from 'react'
import { graphql } from 'gatsby'

import Metadata from '../components/meta/MetaData'

import Layout from '../components/common/Layout'
import GridColumns from '../components/common/GridColumns'

import CategoryHeader from '../components/elements/CategoryHeader'
import CardProject from '../components/elements/CardProject'
import Pagination from '../components/elements/Pagination'

export default ({ data, location, pageContext }) => {
  const PROJECTS = data.prismic.allProjects.edges;
  if (!PROJECTS) return;

  let pageProjects = PROJECTS.map(project => <CardProject key={project.node._meta.uid} item={project} />)

  return (
    <>
      <Metadata
        location={location}
      />
      <Layout>
        <CategoryHeader
          title='All Projects'
          description='Web apps, games, websites and more...'
          pageContext={pageContext}
        />
        <div className="boundary--around">
          <GridColumns>
            {pageProjects}
          </GridColumns>
          <Pagination pageContext={pageContext} />
        </div>
      </Layout>
    </>
  )
}

export const AllProjectsQuery = graphql`
query AllProjectsQuery($itemsPerPage: Int, $after: String) {
  prismic {
    allProjects(first: $itemsPerPage, after: $after, sortBy: meta_firstPublicationDate_DESC) {
      edges {
        node {
          ...prismicProject
        }
      }
    }
  }
}`