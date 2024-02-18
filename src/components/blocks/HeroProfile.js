import React from 'react'
import { RichText } from 'prismic-reactjs'

import Logo from '../common/Logo'

import '../../styles/components/blocks/hero-profile.scss'

const HeroProfile = ({ profile }) => {
  return (
    <section className="hero-profile">
      <Logo />
      {RichText.render(profile.data.full_name.raw)}
      {RichText.render(profile.data.role.raw)}
    </section>
  )
}

export default HeroProfile