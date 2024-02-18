import React from 'react'
import { RichText } from 'prismic-reactjs'

import '../../styles/components/slices/text.scss'

const Text = ({ content }) => {
  return (
    <div className="body__text">
      {RichText.render(content.primary.text.raw)}
    </div>
  )
}

export default Text