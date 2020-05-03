import React from 'react'
import { Helmet } from 'react-helmet'

import { siteLang } from '../../utils/site-config'

import '../../styles/main.scss'

const Layout = ({ children }) => {
  return(
    <>
      <Helmet>
        <html lang={siteLang} />
      </Helmet>

      <div className="site-body">

        <header className="site-header"></header>

        <main className="site-main">
          {children}
        </main>

        <footer className="site-footer"></footer>

      </div>
    </>
  )
}

export default Layout