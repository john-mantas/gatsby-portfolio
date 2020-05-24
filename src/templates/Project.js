import React from 'react'
import { graphql } from 'gatsby'

import MetaData from '../components/meta/MetaData'
import Layout from '../components/common/Layout'

import HeroProject from '../components/blocks/HeroProject'
import BodyProject from '../components/blocks/BodyProject'

import '../styles/pages/project.scss'

export default ({ data, location }) => {
  const doc = data.prismic.allProjects.edges.slice(0, 1).pop();
  if (!doc) return null;

  return (
    <>
      <MetaData
        doc={doc.node}
        location={location}
      />
      <Layout>
        <article>
          <HeroProject item={doc.node} />
          <div className="body-project container boundary--around">
            <BodyProject body={doc.node.body} />
          </div>
        </article>
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