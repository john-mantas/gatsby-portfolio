import React from 'react'
import Snuggle from 'react-snuggle'
import { RichText } from 'prismic-reactjs'

import ZoomImage from '../elements/ZoomImage'

const GalleryMasonry = ({ fields }) => {
  let galleryFields = fields.map(field => {
    return (
      <ZoomImage
        key={field.gallery_image.url}
        image={field.gallery_image}
        imageSharp={field.gallery_imageSharp}
        figcaption={RichText.render(field.image_caption)}
      />
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