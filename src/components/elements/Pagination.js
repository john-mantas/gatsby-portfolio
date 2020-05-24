import React from 'react'
import { Link } from 'gatsby'

import { ArrowRightThin, ArrowLeftThin } from '../elements/Icons'

import '../../styles/components/elements/pagination.scss'

const Pagination = ({ pageContext }) => {
  let { previousPage, currentPage, nextPage } = pageContext

  return ( (previousPage || nextPage) &&
    <nav className="page-navigation">
      {
        previousPage && 
          <Link to={previousPage.path} className="page-navigation__button btn--square" rel="prev" title="Previous page">
            <ArrowLeftThin fill="#fff" />
          </Link>
      }
      <div className="page-navigation__numbers">
        {previousPage && <small className="h6">{previousPage.number < 9 && '0'}{previousPage.number}</small>}
        <span className="h4">{currentPage < 9 && '0'}{currentPage}</span>
        {nextPage && <small className="h6">{nextPage.number < 9 && '0'}{nextPage.number}</small>}
      </div>
      {
        nextPage && 
          <Link to={nextPage.path} className="page-navigation__button btn--square" rel="next" title="Next page">
            <ArrowRightThin fill="#fff" />
          </Link>
      }
    </nav>
  )
}

export default Pagination