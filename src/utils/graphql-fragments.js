import { graphql } from 'gatsby'

export const prismicProject = graphql`
  fragment prismicProject on PrismicProject {
    uid
    data {
      body {
        ... on PrismicProjectDataBodyImage {
          id
          items {
            image {
              alt
              dimensions {
                height
                width
              }
              gatsbyImageData(placeholder: BLURRED)
              url
            }
          }
          slice_type
        }
        ... on PrismicProjectDataBodyImageGallery {
          id
          items {
            gallery_image {
              alt
              dimensions {
                height
                width
              }
              gatsbyImageData(placeholder: BLURRED)
              url
            }
            image_caption {
              raw
              text
            }
          }
          primary {
            gallery_subtitle
            gallery_title {
              raw
              text
            }
          }
          slice_type
        }
        ... on PrismicProjectDataBodyText {
          id
          primary {
            text {
              raw
              text
            }
          }
          slice_type
        }
      }
      canonical {
        url
        link_type
        target
      }
      code_for_body {
        raw
        text
      }
      code_for_head {
        raw
        text
      }
      excerpt
      featured
      featured_gallery {
        gallery_image {
          alt
          dimensions {
            width
            height
          }
          gatsbyImageData(placeholder: BLURRED)
          url
        }
      }
      featured_image {
        alt
        dimensions {
          width
          height
        }
        gatsbyImageData(placeholder: BLURRED)
        url
      }
      live_url {
        link_type
        target
        url
      }
      meta_description
      meta_title
      project_url {
        link_type
        target
        url
      }
      title {
        raw
        text
      }
      type
    }
  }
`

export const prismicProfile = graphql`
  fragment prismicProfile on PrismicProfile {
    data {
      bio {
        raw
        text
      }
      email
      full_name {
        raw
        text
      }
      link_list {
        address {
          link_type
          target
          url
        }
      }
      logo {
        alt
        url
        dimensions {
          width
          height
        }
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
      role {
        raw
        text
      }
      twitter
    }
  }
`