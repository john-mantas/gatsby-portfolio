import React from 'react'
import { Helmet } from 'react-helmet'

import { siteUrl } from '../../utils/site-config'

const CreativeWorkSchema = ({ title, image, profile }) => {
  let sameAsLinks = profile.link_list.map(link=>`"${link.address.url}"`)

  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "CreativeWork",
          "name": "${title}",
          "image": {
            "@type": "ImageObject",
            "url": "${image.url}",
            ${image.alt ? `"description":"${image.alt}",` : ``}
            "width": "${image.width}",
            "height": "${image.height}"
          },
          "author": {
            "@context": "https://schema.org/",
            "@type": "Person",
            "name": "${profile.full_name[0].text}",
            "url": "${siteUrl}",
            "image": {
              "@type": "ImageObject",
              "url": "${profile.logo.url}",
              "width": "${profile.logo.dimensions.width}",
              "height": "${profile.logo.dimensions.height}"
            },
            "sameAs": [${sameAsLinks}],
            "jobTitle": "${profile.role[0].text}"
          }
        }
      `}</script>
    </Helmet>
  )
}

export default CreativeWorkSchema