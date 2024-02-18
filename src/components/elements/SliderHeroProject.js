import React from 'react'
import Slider from 'react-slick'

import ZoomImage from '../elements/ZoomImage'
import { ArrowRightThin, ArrowLeftThin } from '../common/Icons'

import '../../styles/components/elements/slider-hero-project.scss'

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
    let sliderContent = this.props.item.featured_gallery.map(image => {
      return <ZoomImage
        key={image.gallery_image.url}
        image={image.gallery_image}
      />
    })
    const sliderOptions = {
      className: 'featured-slider',
      lazyload: 'ondemand',
      adaptiveHeight: true,
      arrows: false,
      dots: true
    }

    return (
      <div className="hero-project__featured-slider">
        <Slider {...sliderOptions} ref={slider => this.slider = slider}>
          {sliderContent}
        </Slider>
        <div className="featured-slider__arrows">
          <button className="featured-slider__arrow btn--square" onClick={this.previousSlide}>
            <ArrowLeftThin fill="#fff" />
          </button>
          <button className="featured-slider__arrow btn--square" onClick={this.nextSlide}>
            <ArrowRightThin fill="#fff" />
          </button>
        </div>
      </div>
    )
  }
}

export default SliderHeroProject