"use client"

import SectionContainer from "@/components/ui/section-container"
import CaseStudyCard from "@/components/ui/case-study-card"
import Link from "next/link"
import {stegaClean} from "next-sanity"
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {useState, useEffect} from "react"
import {ChevronLeft, ChevronRight} from "lucide-react"

interface CaseStudyGridProps {
  padding?: {top?: boolean; bottom?: boolean} | null
  colorVariant?: string | null
  title?: string
  subtitle?: string
  itemsPerPage?: number
  showFilters?: boolean
  tags?: string[]
  _type: "case-study-grid"
}

export default function CaseStudyGrid({padding, colorVariant, title, subtitle, itemsPerPage = 6, showFilters = true, tags: initialTags}: CaseStudyGridProps) {
  // Client-side state for pagination and filtering
  const [caseStudies, setCaseStudies] = useState<any[]>([])
  const [allTags, setAllTags] = useState<string[]>([])
  const [activeTags, setActiveTags] = useState<string[]>(initialTags || [])
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [isLoading, setIsLoading] = useState(true)

  const color = stegaClean(colorVariant)

  // Fetch case studies and tags
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        // Build URL with tags if needed
        const url = activeTags && activeTags.length > 0 ? `/api/case-studies?tags=${activeTags.join(",")}` : "/api/case-studies"

        const res = await fetch(url)
        const {data: studies} = await res.json()

        // Filter out any empty or invalid case study objects
        const validStudies = (studies || []).filter((study: any) => study && Object.keys(study).length > 0 && typeof study.slug !== "undefined")

        setCaseStudies(validStudies)
        setTotalPages(Math.ceil((validStudies?.length || 0) / itemsPerPage))

        // Only fetch tags if we need to show filters
        if (showFilters) {
          const tagsRes = await fetch("/api/case-study-tags")
          const {data: fetchedTags} = await tagsRes.json()

          // Ensure we're working with string[] by filtering out non-strings
          const stringTags = (fetchedTags || []).filter((tag: unknown): tag is string => typeof tag === "string")
          setAllTags(stringTags)
        }
      } catch (error) {
        console.error("Error fetching case studies:", error)
        setCaseStudies([])
      }
      setIsLoading(false)
    }

    fetchData()
  }, [activeTags, itemsPerPage, showFilters])

  // Get current page items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = caseStudies.slice(indexOfFirstItem, indexOfLastItem)

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber)

  // Toggle tag filter
  const toggleTag = (tag: string) => {
    setCurrentPage(1) // Reset to first page when changing filters

    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag))
    } else {
      setActiveTags([...activeTags, tag])
    }
  }

  return (
    <SectionContainer color={color as any} padding={padding as any}>
      <div className="mt-32  py-6 rounded-t-xl text-left px-6 border-x border-t  bg-muted/10 w-11/12   ">
        {title && <h2 className="text-xl md:text-2xl font-diatype text-primary">{title}</h2>}
        {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
      </div>

      {/* Tag filters */}
      {showFilters && allTags.length > 0 && (
        <div className="pt-2  border-t border-x border-border/90  mr-4 rounded-tr-lg px-4 mx-auto mb-0 bg-muted/10">
          <div className="flex flex-wrap gap-1 ">
            {allTags.map((tag) => (
              <Badge key={tag} variant={activeTags.includes(tag) ? "default" : "outline"} className="cursor-pointer rounded-none px-3 pb-2 rounded-t-lg border pt-2" onClick={() => toggleTag(tag)}>
                {tag}
              </Badge>
            ))}
            {activeTags.length > 0 && (
              <Badge variant="outline" className="cursor-pointer text-xs bg-secondary/20 px-4 py-1 mb-1 hover:brightness-150" onClick={() => setActiveTags([])}>
                Clear filters
              </Badge>
            )}
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({length: 3}).map((_, index) => (
            <div key={index} className="border rounded-3xl p-4 animate-pulse">
              <div className="h-[12rem] bg-muted rounded-2xl mb-4"></div>
              <div className="h-7 bg-muted rounded mb-2 w-3/4"></div>
              <div className="h-5 bg-muted rounded mb-4 w-1/2"></div>
              <div className="h-4 bg-muted rounded mb-4"></div>
              <div className="flex space-x-2 mb-4">
                <div className="h-6 bg-muted rounded w-16"></div>
                <div className="h-6 bg-muted rounded w-16"></div>
              </div>
              <div className="h-10 w-10 bg-muted rounded-full ml-auto"></div>
            </div>
          ))}
        </div>
      ) : caseStudies.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border rounded-r-xl p-4 w-full bg-dots">
            {currentItems.map((caseStudy, index) => (
              <Link
                key={caseStudy?.slug?.current || `case-study-${index}`}
                className="flex w-full rounded-3xl ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                href={`/case-studies/${caseStudy?.slug?.current}`}
              >
                <CaseStudyCard title={caseStudy?.title} client={caseStudy?.client} summary={caseStudy?.summary} projectDate={caseStudy?.projectDate} tags={caseStudy?.tags} featuredImage={caseStudy?.featuredImage} slug={caseStudy?.slug} />
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="icon" onClick={() => currentPage > 1 && paginate(currentPage - 1)} disabled={currentPage === 1}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex items-center space-x-2">
                  {[...Array(totalPages)].map((_, index) => (
                    <Button key={index} variant={currentPage === index + 1 ? "default" : "outline"} size="sm" onClick={() => paginate(index + 1)}>
                      {index + 1}
                    </Button>
                  ))}
                </div>

                <Button variant="outline" size="icon" onClick={() => currentPage < totalPages && paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12">
          <h3 className="text-lg font-medium mb-2">No case studies found</h3>
          <p className="text-muted-foreground">Try changing your filters or check back later.</p>
          {activeTags.length > 0 && (
            <Button variant="outline" className="mt-4 " onClick={() => setActiveTags([])}>
              Clear filters
            </Button>
          )}
        </div>
      )}
    </SectionContainer>
  )
}
