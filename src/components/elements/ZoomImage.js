import React from 'react'
import Img from 'gatsby-image'
import Zoom from 'react-medium-image-zoom'

const ZoomImage = ({ imageSharp, image, localImage, figcaption, alt, zoom, figureClass }) => {
  let altText = alt ? alt : image && image.alt ? image.alt : ""
  let zoomOptions = zoom ? zoom : { overlayBgColorStart: '#0000', overlayBgColorEnd: '#0008', transitionDuration: 200, zoomMargin: 50 }
  let content = 
    imageSharp && imageSharp.childImageSharp
      ? <Img fluid={imageSharp.childImageSharp.fluid} alt={altText} />
      : image
        ? <img src={image.url} alt={altText} />
        : localImage
          ? <img src={localImage} alt={altText} />
          : <img src="/images/placeholder-img.jpg" alt="" />

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