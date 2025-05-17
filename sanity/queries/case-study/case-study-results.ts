import { groq } from "next-sanity"

// This projection is used in the full query
const projection = `
  _type,
  _key,
  colorVariant,
  padding,
  stats[]{
    _key,
    value,
    label
  }
`

// The query for filtering blocks in a page or document
// @sanity-typegen-ignore
export const caseStudyResultsQuery = groq`
  _type == "case-study-results" => {
    ${projection}
  }
`

// Example direct query - this is what typegen can use
export const CASE_STUDY_RESULTS_TYPE_QUERY = groq`*[_type == "case-study-results"][0]{
  ${projection}
}` 