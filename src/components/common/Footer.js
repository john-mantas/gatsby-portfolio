import React, { useEffect } from 'react'

import '../../styles/components/blocks/footer.scss'

const Footer = () => {

  useEffect(() => {
    document.getElementById('site_footer_year').innerHTML = new Date().getFullYear();
  }, [])

  return (
    <footer className="site-footer">
      <p>©<span id="site_footer_year">2081</span>&nbsp;&bull;&nbsp;Made late at night by John...</p>
    </footer>
  )
}

export default Footer