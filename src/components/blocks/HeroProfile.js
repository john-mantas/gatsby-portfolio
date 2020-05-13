import React from 'react'
import { RichText } from 'prismic-reactjs'

import Logo from '../elements/Logo'

import '../../styles/components/blocks/hero-profile.scss'

const HeroProfile = ({ profile }) => {
  return (
    <section className="hero-profile">
      <Logo />
      {RichText.render(profile.full_name)}
      {RichText.render(profile.role)}
    </section>
  )
}

export default HeroProfile