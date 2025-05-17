import CaseStudyHero from "./case-study-hero"
import CaseStudyOverview from "./case-study-overview"
import CaseStudyResults from "./case-study-results"
import CaseStudyGallery from "./case-study-gallery"
import CaseStudyGrid from "./case-study-grid"

// Object that maps _type values to the corresponding React components
const CaseStudyComponents = {
  // Removed case-study-hero as it's now handled directly in the page template
  "case-study-overview": CaseStudyOverview,
  "case-study-results": CaseStudyResults,
  "case-study-gallery": CaseStudyGallery,
  "case-study-grid": CaseStudyGrid
}

export default CaseStudyComponents
