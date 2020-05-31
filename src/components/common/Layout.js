import React, { useState } from 'react'
import { Helmet } from 'react-helmet'

import { siteLang } from '../../utils/site-config'

import Header from './Header'
import Menu from './Menu'
import Footer from './Footer'

import '../../styles/main.scss'

const Layout = ({ children }) => {
  let [isMenuActive, setMenuActive] = useState(false)

  let toggleMenu = () => {
    setMenuActive(!isMenuActive)
  }

  return(
    <>
      <Helmet>
        <html lang={siteLang} />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;700&family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
        <body {...(isMenuActive ? {className: 'site-menu--active'} : {})} />
      </Helmet>

      <Header toggleMenu={toggleMenu} />
      <Menu />

      <div className="site-body">

        <main className="site-main">
          {children}
        </main>

        <Footer />

      </div>
    </>
  )
}

export default Layout