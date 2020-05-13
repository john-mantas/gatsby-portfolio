import React from 'react'

import '../../styles/components/elements/section-header.scss'

const SectionHeader = ({ h, p }) => {
  return(
    <header className="section-header">
      <h2 className="section-header__heading h1">{h}</h2>
      {p && <p className="section-header__paragraph">{p}</p>}
    </header>
  )
}

export default SectionHeader