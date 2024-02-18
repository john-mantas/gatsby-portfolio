import React from 'react'
import { Helmet } from 'react-helmet'

import { siteUrl } from '../../utils/site-config'

const PersonSchema = ({ profile }) => {
  let sameAsLinks = profile.link_list.map(link => `"${link.address.url}"`)

  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "Person",
          "name": "${profile.full_name.text}",
          "description": "${profile.bio.text}",
          "url": "${siteUrl}",
          "email": "${profile.email}",
          "image": {
            "@type": "ImageObject",
            "url": "${profile.logo.url}",
            "width": "${profile.logo.dimensions.width}",
            "height": "${profile.logo.dimensions.height}"
          },
          "sameAs": [${sameAsLinks}],
          "jobTitle": "${profile.role.text}"
        }
        `}</script>
      </Helmet>
  )
}

export default PersonSchema