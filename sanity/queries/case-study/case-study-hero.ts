import { groq } from "next-sanity"

// This projection is used in the full query
const projection = `
  _type,
  _key,
  colorVariant,
  padding,
  title,
  subtitle,
  image{
    ...,
    asset->{
      _id,
      url,
      mimeType,
      metadata {
        lqip,
        dimensions {
          width,
          height
        }
      }
    },
    alt
  }
`

// The query for filtering blocks in a page or document
// @sanity-typegen-ignore
export const caseStudyHeroQuery = groq`
  _type == "case-study-hero" => {
    ${projection}
  }
`

// Example direct query - this is what typegen can use
export const CASE_STUDY_HERO_TYPE_QUERY = groq`*[_type == "case-study-hero"][0]{
  ${projection}
}` 