import React from 'react'

import HeaderSection from '../elements/HeaderSection'
import GalleryMasonry from '../elements/GalleryMasonry'

import '../../styles/components/blocks/body-project-image-gallery.scss'

const ImageGallery = ({ content }) => {
  

  return (
    <section className="body-project__image-gallery">
      <HeaderSection
        title={content.primary.gallery_title[0].text}
        description={content.primary.gallery_subtitle}
      />
      <GalleryMasonry fields={content.fields} />
    </section>
  )
}

export default ImageGallery