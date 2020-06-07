import React from 'react'
import { Helmet } from 'react-helmet'

const ContactPageSchema = ({ title, description, canonical, image }) => {
  return(
    <Helmet>
      <script type="application/ld+json">{`
        {
          "@context": "http://schema.org",
          "@type": "ContactPage",
          "name": "${title}",
          "description": "${description}",
          "image": {
            "@type": "ImageObject",
            "url": "${image.url}",
            ${image.alt ? `"description":"${image.alt}",` : ``}
            "width": "${image.width}",
            "height": "${image.height}"
          },
          "url": "${canonical}"
        }
      `}</script>
    </Helmet>
  )
}

export default ContactPageSchema