import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'

import { siteLang } from '../../utils/site-config'

import Footer from './Footer'

import Logo from '../elements/Logo'
import PageProgress from '../elements/pageProgress'

import '../../styles/main.scss'

const Layout = ({ children }) => {
  return(
    <>
      <Helmet>
        <html lang={siteLang} />
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;700&family=Quicksand:wght@300;400&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="site-body">
      <PageProgress direction="horizontal" />

        <header className="site-header">
          <Link to='/' className="site-logo">
            <Logo />
          </Link>
        </header>

        <main className="site-main">
          {children}
        </main>

        <Footer />

      </div>
    </>
  )
}

export default Layout