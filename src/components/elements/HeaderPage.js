import React from 'react'

import '../../styles/components/elements/header-page.scss'

const HeaderPage = ({ title, description }) => {
  return (
    <header className="header-page">
      <h1 className="header-page__title">{title}</h1>
      {description && <p className="header-page__description">{description}</p>}
    </header>
  )
}

export default HeaderPage