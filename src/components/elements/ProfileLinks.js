import React from 'react'

import '../../styles/components/elements/profile-links.scss'

const ProfileLinks = ({ profile }) => {
  let allProfileLinks = profile.node.data.link_list.map(link => (
    <li key={link.address.url}>
      <a href={link.address.url} className="link--dot h6" title="john mantas profile" target="_blank" rel="nofollow noopener noreferrer">
        {new URL(link.address.url).hostname.replace('www.', '')}
      </a>
    </li>
  ))

  return (
    <ul className="profile-links list--clean">{allProfileLinks}</ul>
  )
}

export default ProfileLinks