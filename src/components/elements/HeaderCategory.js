import React from 'react'

import '../../styles/components/elements/header-category.scss'

const HeaderCategory = ({ title, description, pageContext }) => {
  return (
    <header className="header-category">
      {pageContext && <span className="header-category__page-counter h4">{pageContext.currentPage < 9 && '0'}{pageContext.currentPage}<sup>{pageContext.totalPages < 9 && '0'}{pageContext.totalPages}</sup></span>}
      <h1 className="header-category__title dec-text__end-dot">{title}</h1>
      {description && <p className="header-category__description">{description}</p>}
    </header>
  )
}

export default HeaderCategory