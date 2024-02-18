import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import Zoom from 'react-medium-image-zoom'

const ZoomImage = ({ image, localImage, figcaption, alt, zoom, figureClass }) => {
  let altText = alt ? alt : image && image.alt ? image.alt : ""
  let zoomOptions = zoom ? zoom : { overlayBgColorStart: '#0000', overlayBgColorEnd: '#0008', transitionDuration: 200, zoomMargin: 50 }
  let content = 
    image
      ? image.gatsbyImageData
        ? <GatsbyImage image={image.gatsbyImageData} alt={altText} />
        : image.url
          ? <img src={image.url} alt={altText} />
          : localImage
            ? <img src={localImage} alt={altText} />
            : <img src="/images/placeholder-img.jpg" alt="" />
      : null
  
  if (!content) return null

  return (
    <figure className={figureClass ? `figure-caption ${figureClass}` : `figure-caption`}>
      <Zoom {...zoomOptions}>
        {content}
      </Zoom>
      {figcaption && <figcaption>{figcaption}</figcaption>}
    </figure>
  )
}

export default ZoomImage