import React from 'react'
import { graphql } from 'gatsby'

import Metadata from '../components/meta/MetaData'

import Layout from '../components/common/Layout'
import GridColumns from '../components/common/GridColumns'

import HeroProfile from '../components/blocks/HeroProfile'
import CardProject from '../components/elements/CardProject'

import '../styles/pages/index.scss'
import SectionHeader from '../components/elements/SectionHeader'

export default ({ data, location }) => {
  const PROFILE = data.prismic.allProfiles.edges.slice(0, 1).pop();
  const PROJECTS = data.prismic.allProjects.edges;
  console.log(PROJECTS[0].node)
  if (!PROFILE || !PROJECTS) return null;

  let allProjects = PROJECTS.map(project => <CardProject key={project.node._meta.uid} item={project} />)

  return (
    <>
      <Metadata
        location={location} 
      />
      <Layout>
        <article className="boundary--around">
          <HeroProfile profile={PROFILE.node} />
          <section>
            <SectionHeader
              h='Latest Projects'
              p='See my last projects, including web apps, games, websites and more...'
              />
            <GridColumns>
              {allProjects}
            </GridColumns>
          </section>
          <section className="mt--large">
            <SectionHeader
              h='Contact Me'
              p='Find me on social media or just send me an e-mail...'
            />
          </section>
        </article>
      </Layout>
    </>
  )
}

export const query = graphql`
   {
    prismic {
      allProfiles {
        edges {
          node {
            ...prismicProfile
          }
        }
      }
      allProjects(first: 6,  sortBy: meta_firstPublicationDate_DESC) {
        edges {
          node {
            ...prismicProject
          }
        }
      }
    }
  }
`
