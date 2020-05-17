import React from 'react'

import SectionHeader from '../elements/SectionHeader'
import GallerySlider from '../elements/SliderBodyProject'

import '../../styles/components/blocks/body-project-image-gallery.scss'

const ImageGallery = ({ content }) => {
  

  return (
    <section className="body-project__image-gallery">
      <SectionHeader
        h={content.primary.gallery_title[0].text}
        p={content.primary.gallery_subtitle}
      />
      <GallerySlider fields={content.fields} />
    </section>
  )
}

export default ImageGallery