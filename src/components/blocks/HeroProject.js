import React from 'react'

import FeaturedSlider from '../elements/SliderHeroProject'
import FeaturedImage from '../elements/FeaturedImage'

import '../../styles/components/blocks/hero-project.scss'

const HeroProject = ({ item }) => {
  let typeHandle = item.type.replace(' ', '-').toLowerCase()
  let hasGallery = item.featured_gallery[0].gallery_image && item.featured_gallery[0].gallery_image.url !== ''

  return (
    <section className={`hero-project project--${typeHandle}`}>
      <div className="hero-project__container">
        <header className="hero-project__header">
          <div className="hero-project__header-content">
            <span className="project--type">{item.type}</span>
            <h1 className="hero-project__title">{item.title[0].text}</h1>
            <p className="hero-project__description">{item.excerpt}</p>
            <div className="hero-project__links">
              {item.project_url && <a href={item.project_url.url} title="Code files" className="link--dot">Read the code</a>}
              {item.live_url && <a href={item.live_url.url} title="Live preview" className="link--dot">See it live</a>}
            </div>
          </div>
        </header>
        {hasGallery
          ? <FeaturedSlider
              item={item}
            />
          : <FeaturedImage
              figureClass='hero-project__featured-media'
              item={item}
            />
        }
      </div>
    </section>
  )
}

export default HeroProject