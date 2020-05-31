import React from 'react'
import { Link } from 'gatsby'

import '../../styles/components/blocks/menu.scss'

const Menu = () => {
  return (
    <div className="site-menu">
      <aside className="site-menu__person text-right">
        <p className="h1">John Mantas</p>
        <a href="mailto:contact@johnmantas.com">contact@johnmantas.com</a>
      </aside>
      <nav className="site-nav">
        <ul className="list--clean">
          <li className="site-nav__item h3">
            <Link to="/">HOME</Link>
          </li>
          <li className="site-nav__item h3">
            <Link to="/projects/">PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu