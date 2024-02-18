import React from 'react'

import { Text, Image, ImageGallery } from '../slices'

const BodyProject = ({ body }) => {
  let bodyContent = body && body.map((slice) => {
    switch(slice.slice_type) {
      case 'text':
        return <Text key={slice.id} content={slice} />
      case 'image':
        return <Image key={slice.id} content={slice} />
      case 'image_gallery':
        return <ImageGallery key={slice.id} content={slice} />
        default:
          return null
    }
  })

  return bodyContent
}

export default BodyProject