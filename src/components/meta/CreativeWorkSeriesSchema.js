import React from 'react'
import { Helmet } from 'react-helmet'
import url from 'url'

import { siteUrl } from '../../utils/site-config'

const ItemListSchema = ({ title, description, image, canonical, listItems }) => {
  let hasPartItems = listItems.items.map((item) => `
    {
      "@type": "CreativeWork",
      "name": "${item.node.data.title.text}",
      "image": {
        "@type": "ImageObject",
        "url": "${item.node.data.featured_image.url}",
        "width": "${item.node.data.featured_image.dimensions.width}",
        "height": "${item.node.data.featured_image.dimensions.height}"
      },
      "url": "${url.resolve(siteUrl, item.node.uid)}"
    }
  `)
  
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "CreativeWorkSeries",
          "name": "${title}",
          "description": "${description}",
          "image": {
            "@type": "ImageObject",
            "url": "${image.url}",
            ${image.alt ? `"description":"${image.alt}",` : ``}
            "width": "${image.width}",
            "height": "${image.height}"
          },
          "url": "${canonical}",
          "hasPart": [${hasPartItems}]
        }
      `}</script>
    </Helmet>
  )
}

export default ItemListSchema