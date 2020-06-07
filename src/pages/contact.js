import React from 'react'
import { graphql } from 'gatsby'

import Metadata from '../components/meta/MetaData'

import Layout from '../components/common/Layout'
import GridColumns from '../components/common/GridColumns'

import HeaderPage from '../components/elements/HeaderPage'
import ProfileLinks from '../components/elements/ProfileLinks'
import ContactForm from '../components/elements/ContactForm'

export default ({ data, location }) => {
  const PROFILE = data.prismic.allProfiles.edges.slice(0, 1).pop();
  if (!PROFILE) return null;

  return (
    <>
      <Metadata
        location={location}
      />
      <Layout>
        <article className="contact boundary--around">
          <div className="container--small">
            <HeaderPage
              title="Contact"
              description="Find me on social media or just send me an e-mail"
            />
          </div>
          <GridColumns>
            <ProfileLinks profile={PROFILE} />
            <ContactForm />
          </GridColumns>
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
    }
  }
`