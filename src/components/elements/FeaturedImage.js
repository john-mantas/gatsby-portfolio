import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";

const FeaturedImage = ({ item, figureClass }) => {
  let imageAlt = item.featured_image.alt ? item.featured_image.alt : item.title.text
  let imageGatsby = item.featured_image && item.featured_image.gatsbyImageData

  return <>
    <figure {...(figureClass ? { className: figureClass } : {})}>
      {
        imageGatsby
          ? <GatsbyImage
          image={item.featured_image.gatsbyImageData}
          alt={imageAlt} />
          : item.featured_image
            ? <img src={item.featured_image.url} alt={imageAlt} />
            : <img src="/images/placeholder-img.jpg" alt="" />
      }
    </figure>
  </>;
}

export default FeaturedImage