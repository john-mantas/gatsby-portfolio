import React from 'react'
import ZoomImage from '../elements/ZoomImage'

const Image = ({ content }) => {
  return (
    content.fields.map(field => {
      return <ZoomImage
        key={field.image.url}
        image={field.image}
        imageSharp={field.imageSharp}
        figureClass="body__image"
      />
    })
  )
}

export default Image