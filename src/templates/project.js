import React from 'react'
import { graphql } from 'gatsby'

import MetaData from '../components/meta/MetaData'
import Layout from '../components/common/Layout'

export default ({ data, location }) => {
  const doc = data.prismic.allProjects.edges.slice(0, 1).pop().node;
  if (!doc) return null;

  return (
    <>
      <MetaData
        doc={doc}
        location={location}
      />
      <Layout>
        <pre>{JSON.stringify(doc, null, 4)}</pre>
      </Layout>
    </>
  )
}

export const projectQuery = graphql`
query ProjectQuery($lang: String!, $uid: String) {
  prismic {
    allProjects(lang: $lang, uid: $uid) {
      edges {
        node {
          ...prismicProject
        }
      }
    }
  }
}`