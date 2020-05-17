import React from 'react'
import Img from 'gatsby-image'

const Image = ({ content }) => {
  return (content.fields.map(field => <Img key={field.image.url} fluid={field.imageSharp.childImageSharp.fluid} alt={field.image.alt} className="body__image" />))
}

export default Image