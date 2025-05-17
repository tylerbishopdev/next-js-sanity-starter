import { groq } from "next-sanity";
import { caseStudyHeroQuery } from "./case-study/case-study-hero";
import { caseStudyOverviewQuery } from "./case-study/case-study-overview";
import { caseStudyResultsQuery } from "./case-study/case-study-results";
import { caseStudyGalleryQuery } from "./case-study/case-study-gallery";

export const CASE_STUDY_QUERY = groq`*[_type == "caseStudy" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    client,
    projectDate,
    summary,
    tags,
    featuredImage{
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
    },
    blocks[]{
      ${caseStudyHeroQuery},
      ${caseStudyOverviewQuery},
      ${caseStudyResultsQuery},
      ${caseStudyGalleryQuery},
      _key,
      _type
    },
    _createdAt,
    _updatedAt,
    meta_title,
    meta_description,
    noindex,
    ogImage {
      asset->{
        _id,
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      },
    }
}`;

export const CASE_STUDIES_QUERY = groq`*[_type == "caseStudy" && defined(slug)] | order(projectDate desc, _createdAt desc){
    title,
    slug,
    client,
    projectDate,
    summary,
    tags,
    _createdAt,
    featuredImage{
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
}`;

export const CASE_STUDIES_BY_TAGS_QUERY = groq`*[_type == "caseStudy" && defined(slug) && $tags match [] || count((tags[])[@ in $tags]) > 0] | order(projectDate desc, _createdAt desc){
    title,
    slug,
    client,
    projectDate,
    summary,
    tags,
    _createdAt,
    featuredImage{
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
}`;

export const CASE_STUDY_TAGS_QUERY = groq`*[_type == "caseStudy" && defined(tags) && count(tags) > 0].tags[]`;

export const CASE_STUDIES_SLUGS_QUERY = groq`*[_type == "caseStudy" && defined(slug)]{slug}`; 