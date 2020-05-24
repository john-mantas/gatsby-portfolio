import React from 'react'
import { graphql, Link } from 'gatsby'

import Metadata from '../components/meta/MetaData'

import Layout from '../components/common/Layout'
import GridColumns from '../components/common/GridColumns'

import HeroProfile from '../components/blocks/HeroProfile'
import SectionHeader from '../components/elements/SectionHeader'
import CardProject from '../components/elements/CardProject'
import { ArrowRightThin } from '../components/elements/Icons'
import ContactForm from '../components/elements/ContactForm'

import '../styles/pages/index.scss'

export default ({ data, location }) => {
  const PROFILE = data.prismic.allProfiles.edges.slice(0, 1).pop();
  const PROJECTS = data.prismic.allProjects.edges;
  if (!PROFILE || !PROJECTS) return null;

  let allProjects = PROJECTS.map(project => <CardProject key={project.node._meta.uid} item={project} />)
  let allProfileLinks = PROFILE.node.link_list.map(link => (
    <li key={link.address.url}>
      <a href={link.address.url} className="link--dot h6" title="john mantas profile" target="_blank" rel="nofollow noopener noreferrer">
        {new URL(link.address.url).hostname.replace('www.', '')}
      </a>
    </li>
  ))

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
            <SectionHeader
              title='Contact Me'
              description='Find me on social media or just send me an e-mail...'
            />
            <GridColumns>
              <ul className="list--clean">{allProfileLinks}</ul>
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
    prismic {
      allProfiles {
        edges {
          node {
            ...prismicProfile
          }
        }
      }
      allProjects(first: 4,  sortBy: meta_firstPublicationDate_DESC) {
        edges {
          node {
            ...prismicProject
          }
        }
      }
    }
  }
`
