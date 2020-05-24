import React from 'react'

import '../../styles/components/elements/section-header.scss'

const SectionHeader = ({ title, description }) => {
  return(
    <header className="section-header">
      <h2 className="section-header__heading h1">{title}</h2>
      {description && <p className="section-header__paragraph">{description}</p>}
    </header>
  )
}

export default SectionHeader