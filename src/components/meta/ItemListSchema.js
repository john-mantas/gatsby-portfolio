import React from 'react'
import { Helmet } from 'react-helmet'
import url from 'url'

import { siteUrl } from '../../utils/site-config'

const ItemListSchema = ({ title, description, image, canonical, listItems }) => {
  console.log(listItems)

  let itemListElement = listItems.items.map((item, index) => `
    {
      "@type": "ListItem",
      "position": ${index + 1},
      "url": "${url.resolve(siteUrl, item.node._meta.uid)}"
    }
  `)
  return (
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "ItemList",
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
          "itemListElement": [${itemListElement}],
          "itemListOrder": "Descending",
          "numberOfItems": ${listItems.itemCount}
        }
      `}</script>
    </Helmet>
  )
}

export default ItemListSchema