import React from 'react'
import { RichText } from 'prismic-reactjs'
import Slider from 'react-slick'

import ZoomImage from '../elements/ZoomImage'
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
      return (
        <ZoomImage
          key={field.gallery_image.url}
          image={field.gallery_image}
          imageSharp={field.gallery_imageSharp}
          figcaption={RichText.render(field.image_caption)}
        />
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