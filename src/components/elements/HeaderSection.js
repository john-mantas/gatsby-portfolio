import React from 'react'

import '../../styles/components/elements/header-section.scss'

const HeaderSection = ({ title, description }) => {
  return(
    <header className="header-section">
      <h2 className="header-section__heading h1">{title}</h2>
      {description && <p className="header-section__paragraph">{description}</p>}
    </header>
  )
}

export default HeaderSection