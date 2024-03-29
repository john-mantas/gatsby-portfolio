import React from 'react'
import { graphql, Link } from 'gatsby'

import Metadata from '../components/meta/MetaData'

import Layout from '../components/common/Layout'
import GridColumns from '../components/common/GridColumns'

import HeroProfile from '../components/blocks/HeroProfile'
import HeaderSection from '../components/elements/HeaderSection'
import CardProject from '../components/elements/CardProject'
import { ArrowRightThin } from '../components/common/Icons'
import ProfileLinks from '../components/elements/ProfileLinks'
import ContactForm from '../components/elements/ContactForm'

import '../styles/pages/index.scss'

const Index = ({ data, location }) => {
  const PROFILE = data.allPrismicProfile.edges.slice(0, 1).pop();
  const PROJECTS = data.allPrismicProject.edges;
  if (!PROFILE || !PROJECTS) return null;

  let allProjects = PROJECTS.map(project => <CardProject key={project.node.uid} item={project} />)

  return (
    <>
      <Metadata
        location={location} 
      />
      <Layout>
        <article className="boundary--around">
          <HeroProfile profile={PROFILE.node} />
          <section>
            <HeaderSection
              title='Latest Projects'
              description='See my last projects, including web apps, games, websites and more...'
              />
            <GridColumns>
              {allProjects}
            </GridColumns>
            <div className="text-right">
              <Link to={'/projects/'} className="link--more" title="All projects">See all projects <ArrowRightThin fill="#fff" /></Link>
            </div>
          </section>
          <section className="home-contact mt--large">
            <HeaderSection
              title='Contact Me'
              description='Find me on social media or just send me an e-mail...'
            />
            <GridColumns>
              <ProfileLinks profile={PROFILE} />
              <ContactForm />
            </GridColumns>
          </section>
        </article>
      </Layout>
    </>
  )
}

export const query = graphql`
   {
    allPrismicProfile {
      edges {
        node {
          ...prismicProfile
        }
      }
    }
    allPrismicProject(limit: 4) {
      edges {
        node {
          ...prismicProject
        }
      }
    }
  }
`

export default Index