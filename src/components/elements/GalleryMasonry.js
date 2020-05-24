import React from 'react'
import Img from 'gatsby-image'
import Snuggle from 'react-snuggle'
import { RichText } from 'prismic-reactjs'

const GalleryMasonry = ({ fields }) => {
  let galleryFields = fields.map(field => {
    let hasImageCaption = field.image_caption && field.image_caption[0].text !== ''

    return (
      <figure key={field.gallery_image.url} className="figure-caption">
        <Img fluid={field.gallery_imageSharp.childImageSharp.fluid} alt={field.gallery_image.alt} />
        {hasImageCaption && <figcaption>{RichText.render(field.image_caption)}</figcaption>}
      </figure>
    )
  })

  return (
    <div className="gallery-masonry">
      <Snuggle
        columnWidth={300}
        rowGap={5}
      >
        {galleryFields}
      </Snuggle>
    </div>
  )
}

export default GalleryMasonry