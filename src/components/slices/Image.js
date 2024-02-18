import React from 'react'
import ZoomImage from '../elements/ZoomImage'

const Image = ({ content }) => {
  return (
    content.items.map(item => {
      return <ZoomImage
        key={item.image.url}
        image={item.image}
        figureClass="body__image"
      />
    })
  )
}

export default Image