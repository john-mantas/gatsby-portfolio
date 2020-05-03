import { graphql } from 'gatsby'

export const prismicProject = graphql`
  fragment prismicProject on PRISMIC_Project {
    #Main
    title
    excerpt
    featured_image
    featured_gallery {
      gallery_image
    }
    featured
    project_url {
      ... on PRISMIC__ExternalLink {
        url
      }
    }
    type
    
    #SEO
    _meta {
      uid
      type
      firstPublicationDate
      lastPublicationDate
      tags
    }
    meta_title
    meta_description
    canonical {
      ... on PRISMIC__ExternalLink {
        url
      }
    }


    #Code injection
    code_for_head
    code_for_body

    #Slices
    body {
      ... on PRISMIC_ProjectBodyText {
        type
        label
        primary {
          text
        }
      }
      ... on PRISMIC_ProjectBodyImage_gallery {
        type
        label
        primary {
          gallery_title
        }
        fields {
          gallery_image
          image_caption
        }
      }
      ... on PRISMIC_ProjectBodyImage {
        type
        label
        fields {
          image
        }
      }
    }
  }
`

export const prismicProfile = graphql`
  fragment prismicProfile on PRISMIC_Profile {
    full_name
    role
    logo
    bio
    twitter
    link_list {
      address {
        ... on PRISMIC__ExternalLink {
          url
        }
      }
    }
  }
`