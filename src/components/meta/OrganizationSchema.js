import React from 'react'
import { Helmet } from 'react-helmet'

import { siteName, siteUrl } from './../../utils/site-config'

const OrganizationSchema = ({ profile }) => {
  let sameAsLinks = profile.link_list.map(link => `"${link.address.url}"`)

  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "${profile.full_name[0].text}",
          "alternateName": "${siteName}",
          "url": "${siteUrl}",
          "email": "${profile.email}",
          "logo": {
            "@type": "ImageObject",
            "url": "${profile.logo.url}",
            "width": "${profile.logo.dimensions.width}",
            "height": "${profile.logo.dimensions.height}"
          },
          "sameAs": [${sameAsLinks}]
        }
      `}</script>
    </Helmet>
  )
}

export default OrganizationSchema