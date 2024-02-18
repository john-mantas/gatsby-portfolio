import React from 'react'
import { graphql } from 'gatsby'

import MetaData from '../components/meta/MetaData'
import Layout from '../components/common/Layout'

import HeroProject from '../components/blocks/HeroProject'
import BodyProject from '../components/blocks/BodyProject'

import '../styles/pages/project.scss'

const Project = ({ data, location }) => {
  const doc = data.allPrismicProject.edges[0].node.data;
  if (!doc) return null;

  return (
    <>
      <MetaData
        doc={doc}
        type='project'
        location={location}
      />
      <Layout>
        <article>
          <HeroProject item={doc} />
          <div className="body-project container boundary--around">
            <BodyProject body={doc.body} />
          </div>
        </article>
      </Layout>
    </>
  )
}

export const projectQuery = graphql`
query ProjectQuery($uid: String) {
  allPrismicProject(filter: {uid: {eq: $uid}}) {
    edges {
      node {
        ...prismicProject
      }
    }
  }
}`

export default Project