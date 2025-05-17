import { groq } from "next-sanity"

// This projection is used in the full query
const projection = `
  _type,
  _key,
  colorVariant,
  padding,
  title,
  subtitle,
  itemsPerPage,
  showFilters,
  tags
`

// The query for filtering blocks in a page or document
// @sanity-typegen-ignore
export const caseStudyGridQuery = groq`
  _type == "case-study-grid" => {
    ${projection}
  }
`

// Example direct query - this is what typegen can use
export const CASE_STUDY_GRID_TYPE_QUERY = groq`*[_type == "case-study-grid"][0]{
  ${projection}
}` 