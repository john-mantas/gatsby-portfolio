import React from 'react'
import url from 'url'
import { StaticQuery, graphql } from 'gatsby'

import config from '../../utils/site-config'

import SiteMeta from './SiteMeta'
import SocialMeta from './SocialMeta'
import WebsiteSchema from './WebsiteSchema'
import CreativeWorkSchema from './CreativeWorkSchema'
import CreativeWorkSeriesSchema from './CreativeWorkSeriesSchema'
import PersonSchema from './PersonSchema'
import OrganizationSchema from './OrganizationSchema'
import ContactPageSchema from './ContactPageSchema'

const MetaData = ({ doc, title, description, settings, location, type, listItems }) => {
  title = title || (doc && (doc.meta_title || doc.title.text)) || config.siteName
  description = description || (doc && (doc.meta_description || doc.excerpt)) || config.siteDescription

  let image = doc && (doc.featured_image || doc.featured_gallery[0].gallery_image)
  let imageData = {}
  imageData.url = (image && image.url) ? image.url : config.defaultImage
  imageData.width = (image && image.dimensions) ? image.dimensions.width : config.defaultImageWidth
  imageData.height = (image && image.dimensions) ? image.dimensions.height : config.defaultImageHeight
  imageData.alt = (image && image.alt && image.alt !== '') ? image.alt : config.defaultImageAlt

  let canonical = url.resolve(config.siteUrl, location.pathname)
  let profile = settings.allPrismicProfile.edges[0].node.data
  type = type || (doc && doc.type)

  let schemaMarkup
  if (type === 'project') {
    schemaMarkup = <CreativeWorkSchema 
      title={title}
      description={description}
      image={imageData}
      profile={profile}
      canonical={canonical}
    />
  } else if (type === 'category') {
    schemaMarkup = <CreativeWorkSeriesSchema
      title={title}
      description={description}
      image={imageData}
      canonical={canonical}
      listItems={listItems}
    />
  } else if (type === 'contact') {
    schemaMarkup = <>
      <OrganizationSchema profile={profile} />
      <ContactPageSchema
        title={title}
        description={description}
        image={imageData}
        canonical={canonical}
      />
    </>
  } else {
    schemaMarkup = <WebsiteSchema
      title={title}
      description={description}
      image={imageData}
      canonical={canonical}
    />
  }

  return (
    <>
      <SiteMeta
        title={title}
        description={description}
        canonical={canonical}
      />

      <SocialMeta
        title={title}
        description={description}
        image={imageData}
        canonical={canonical}
        profile={profile}
      />

      {schemaMarkup}

      <PersonSchema profile={profile} />
    </>
  )
}

const MetaDataQuery = props => (
  <StaticQuery 
    query={graphql`
      query MetadataProfiles {
        allPrismicProfile {
          edges {
            node {
              ...prismicProfile
            }
          }
        }
      }
    `}
    render={data => <MetaData settings={data} {...props} />}
  />
)

export default MetaDataQuery