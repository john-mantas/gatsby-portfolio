import React from 'react'

import '../../styles/components/elements/category-header.scss'

const CategoryHeader = ({ title, description, pageContext }) => {
  return (
    <header className="category-header">
      {pageContext && <span className="category-header__page-counter h4">{pageContext.currentPage < 9 && '0'}{pageContext.currentPage}<sup>{pageContext.totalPages < 9 && '0'}{pageContext.totalPages}</sup></span>}
      <h1 className="category-header__title dec-text__end-dot">{title}</h1>
      {description && <p className="category-header__description">{description}</p>}
    </header>
  )
}

export default CategoryHeader