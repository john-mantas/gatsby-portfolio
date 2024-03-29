import React from 'react'
import { Link } from 'gatsby'

import FeaturedImage from '../elements/FeaturedImage'

import '../../styles/components/elements/card-project.scss'

const CardProject = ({ item }) => {
  let {uid: project_uid, data: project} = item.node
  let typeHandle = project.type.replace(' ', '-').toLowerCase()

  return (
    <article className={`card-project project--${typeHandle}`}>
        <FeaturedImage item={project} figureClass='card-project__image' />
        <section className="card-project__body">
          <span className={"card-project__type project--type"}>{project.type}</span>
        <Link to={`/${project_uid}/`} title={`Learn more about "${project.title.text}"`}>
            <h2 className="card-project__header h3">{project.title.text}</h2>
          </Link>
          <p className="card-project__excerpt">{project.excerpt}</p>
        <Link to={`/${project_uid}/`} className="link--side-line" title={`Learn more about "${project.title.text}"`}>Read more</Link>
        </section>
      </article>
  )
}

export default CardProject