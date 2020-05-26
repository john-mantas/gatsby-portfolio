import React, { useEffect } from 'react'

import '../../styles/components/elements/page-progress.scss'

const PageProgress = ({ direction = 'vertical' }) => {
  useEffect(() => {
      const bar = document.getElementById('page_progress')
      const doc = document.documentElement
      const bod = document.body
      let scrollTimer = -1
      
      document.addEventListener('scroll', () => {
        bar.classList.add('scrolling')
        scrollTimer !== -1 && clearTimeout(scrollTimer)
        scrollTimer = setTimeout(() => {bar.classList.remove('scrolling')}, 100)
        bar.style.setProperty('--progress', (doc.scrollTop || bod.scrollTop) / ((doc.scrollHeight || bod.scrollHeight) - doc.clientHeight))
      })
  })

  return (
    <div className={`page-progress page-progress--${direction}`} style={{'--progress': '0'}} id="page_progress" aria-hidden="true" /> 
  )
}

export default PageProgress