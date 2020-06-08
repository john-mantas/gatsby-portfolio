import { graphql } from 'gatsby'

export const prismicProject = graphql`
  fragment prismicProject on PRISMIC_Project {
    #Main
    title
    excerpt
    featured_image
    featured_imageSharp {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    featured_gallery {
      gallery_image
      gallery_imageSharp {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
    featured
    project_url {
      ... on PRISMIC__ExternalLink {
        url
      }
    }
    live_url {
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
          gallery_subtitle
        }
        fields {
          gallery_image
          gallery_imageSharp {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
          image_caption
        }
      }
      ... on PRISMIC_ProjectBodyImage {
        type
        label
        fields {
          image
          imageSharp {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
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
    email
    link_list {
      address {
        ... on PRISMIC__ExternalLink {
          url
        }
      }
    }
  }
`