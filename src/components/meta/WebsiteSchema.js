import React from 'react'
import { Helmet } from 'react-helmet'

import { siteUrl } from '../../utils/site-config'

const WebsiteSchema = ({ title, description, image, canonical }) => {
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "WebSite",
          "url": "${canonical}",
          "name": "${title}",
          "description": "${description}",
          "image": {
            "@type": "ImageObject",
            "url": "${image.url}",
            ${image.alt ? `"description":"${image.alt}",` : ``}
            "width": "${image.width}",
            "height": "${image.height}"
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "${siteUrl}"
          }
        }
      `}</script>
    </Helmet>
  )
}

export default WebsiteSchema