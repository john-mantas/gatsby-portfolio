import React from'react'
import { Link } from 'gatsby'

import '../styles/pages/404.scss'

export default () => {
  return (
    <div className="for-o-for boundary--around">
      <img src="/images/404.png" alt="" />
      <h1 className="sr-only">404</h1>
      <p className="h2">Page not found!</p>
      <p>Maybe you found a bug instead of a page<br /> or maybe you just wanted to see how this page looks...</p>
      <br />
      <p>Anyway, you can now go back to...</p>
      <nav className="for-o-for__links">
        <Link to="/" className="btn--border">Home</Link>
        <Link to="/projects/" className="btn--border">Projects</Link>
        <Link to="/contact/" className="btn--border">Contact</Link>
      </nav>
    </div>
  )
}