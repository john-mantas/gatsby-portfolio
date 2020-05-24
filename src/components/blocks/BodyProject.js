import React from 'react'

import { Text, Image, ImageGallery } from '../slices'

const BodyProject = ({ body }) => {
  let bodyContent = body.map((slice, index) => {
    let sliceKey = slice.type + index

    switch(slice.type) {
      case 'text':
        return <Text key={sliceKey} content={slice} />
      case 'image':
        return <Image key={sliceKey} content={slice} />
      case 'image_gallery':
        return <ImageGallery key={sliceKey} content={slice} />
        default:
          return null
    }
  })

  return bodyContent
}

export default BodyProject