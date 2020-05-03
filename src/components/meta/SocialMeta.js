import React from 'react'
import { Helmet } from 'react-helmet'

import { siteShortName } from '../../utils/site-config'

const SocialMedia = ({ title, description, image, canonical, profile }) => {
  return (
    <Helmet>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteShortName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image.url} />
      <meta property="og:image:width" content={image.width} />
      <meta property="og:image:height" content={image.height} />
      {(image && image.alt) && <meta property="og:image:alt" content={image.alt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={profile.twitter} />
      <meta name="twitter:creator" content={profile.twitter} />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image.url} />
    </Helmet>
  )
}

export default SocialMedia