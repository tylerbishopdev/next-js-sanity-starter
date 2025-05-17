"use client"

import CaseStudyHero from "./case-study-hero"
import CaseStudyOverview from "./case-study-overview"
import CaseStudyResults from "./case-study-results"

interface CaseStudyBlockProps {
  block: any
  caseStudy?: any // The parent case study document data
}

export default function CaseStudyBlock({block, caseStudy}: CaseStudyBlockProps) {
  const {_type} = block

  // Render the appropriate block based on type
  switch (_type) {
    case "case-study-hero":
      // Skip hero component as it's redundant with the page template
      return null
    case "case-study-overview":
      return <CaseStudyOverview data={block} />
    case "case-study-results":
      return <CaseStudyResults data={block} />
    default:
      return null
  }
}
