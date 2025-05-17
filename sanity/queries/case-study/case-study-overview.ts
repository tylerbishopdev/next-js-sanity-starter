import { groq } from "next-sanity"

// This projection is used in the full query
const projection = `
  _type,
  _key,
  colorVariant,
  padding,
  title,
  content[]{
    ...,
    _type == "image" => {
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
      }
    }
  }
`

// The query for filtering blocks in a page or document
// @sanity-typegen-ignore
export const caseStudyOverviewQuery = groq`
  _type == "case-study-overview" => {
    ${projection}
  }
`

// Example direct query - this is what typegen can use
export const CASE_STUDY_OVERVIEW_TYPE_QUERY = groq`*[_type == "case-study-overview"][0]{
  ${projection}
}` 