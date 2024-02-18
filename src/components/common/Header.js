import React from 'react'
import { Link } from 'gatsby'

import Logo from './Logo'
import { HamburgerMenu, CloseThin } from './Icons'
import PageProgress from '../elements/PageProgress'

import '../../styles/components/blocks/header.scss'

const Header = ({ toggleMenu }) => {
  return (
    <header className="site-header">
      <Link to='/' className="site-logo" title="Home">
        <Logo />
      </Link>
      <button className="site-menu__btn" id="site_menu" onClick={toggleMenu}>
        <span className="sr-only">Toggle menu</span>
        <HamburgerMenu fill="#fff" />
        <CloseThin fill="#fff" />
      </button>
      <PageProgress direction="horizontal" />
    </header>
  )
}

export default Header