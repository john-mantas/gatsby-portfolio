import React from 'react'
import { Helmet } from 'react-helmet'

import { siteLang, siteUrl } from '../../utils/site-config'

const SiteMeta = ({ title, description, canonical }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" href={canonical} hreflang={siteLang} />
      <link type="text/plain" rel="author" href={`${siteUrl}/humans.txt`} />
    </Helmet>
  )
}

export default SiteMeta