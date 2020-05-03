import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/common/Layout'
import Metadata from '../components/meta/MetaData'

export default ({ data, location }) => {
  const doc = data.prismic.allProjects.edges.slice(0, 1).pop().node;
  if (!doc) return null;

  return (
    <>
      <Metadata
        location={location} 
      />
      <Layout>
        <pre>{JSON.stringify(doc, null, 4)}</pre>
      </Layout>
    </>
  )
}

export const query = graphql`
   {
    prismic {
      allProjects {
        edges {
          node {
            ...prismicProject
          }
        }
      }
      allProfiles {
        edges {
          node {
            ...prismicProfile
          }
        }
      }
    }
  }
`
