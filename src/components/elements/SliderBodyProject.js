import React from 'react'
import { RichText } from 'prismic-reactjs'
import Slider from 'react-slick'
import Img from 'gatsby-image'

import { ArrowRightThin, ArrowLeftThin } from '../elements/Icons'

import '../../styles/components/elements/slider-body-project.scss'

class SliderHeroProject extends React.Component {
  constructor(props) {
    super(props);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }

  previousSlide() {
    this.slider.slickPrev();
  }

  nextSlide() {
    this.slider.slickNext();
  }

  render() {
    const sliderOptions = {
      className: 'gallery-slider',
      lazyload: 'ondemand',
      slidesToShow: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    }

    let fields = this.props.fields.map(field => {
      let hasImageCaption = field.image_caption && field.image_caption[0].text !== ''

      return (
        <figure key={field.gallery_image.url}>
          <Img fluid={field.gallery_imageSharp.childImageSharp.fluid} alt={field.gallery_image.alt} />
          {hasImageCaption && <figcaption>{RichText.render(field.image_caption)}</figcaption>}
        </figure>
      )
    })

    return (
      <div className="body-project__slider">
        <Slider {...sliderOptions} ref={slider => this.slider = slider}>
          {fields}
        </Slider>
        <div className="body-slider__arrows">
          <button className="body-slider__arrow arrow--prev" onClick={this.previousSlide}>
            <ArrowLeftThin fill="#fff" />
          </button>
          <button className="body-slider__arrow arrow--next" onClick={this.nextSlide}>
            <ArrowRightThin fill="#fff" />
          </button>
        </div>
      </div>
    )
  }
}

export default SliderHeroProject