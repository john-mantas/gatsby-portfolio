import React from 'react'
import Img from 'gatsby-image'

const FeaturedImage = ({ item, figureClass }) => {
  let imageAlt = item.featured_image.alt ? item.featured_image.alt : item.title[0].text
  let imageSharp = (item.featured_imageSharp && item.featured_imageSharp.childImageSharp) && item.featured_imageSharp.childImageSharp.fluid

  return (
    <>
      <figure {...(figureClass ? { className: figureClass } : {})}>
        {
          imageSharp
            ? <Img fluid={item.featured_imageSharp.childImageSharp.fluid} alt={imageAlt} />
            : item.featured_image
              ? <img src={item.featured_image.url} alt={imageAlt} />
              : <img src="/images/placeholder-img.jpg" alt="" />
        }
      </figure>
    </>
  )
}

export default FeaturedImage