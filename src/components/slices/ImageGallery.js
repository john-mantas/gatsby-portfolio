import React from 'react'

import HeaderSection from '../elements/HeaderSection'
import GalleryMasonry from '../elements/GalleryMasonry'

import '../../styles/components/blocks/body-project-image-gallery.scss'

const ImageGallery = ({ content }) => {
  return (
    <section className="body-project__image-gallery">
      <HeaderSection
        title={content.primary.gallery_title.text}
        description={content.primary.gallery_subtitle}
      />
      <GalleryMasonry fields={content.items} />
    </section>
  )
}

export default ImageGallery