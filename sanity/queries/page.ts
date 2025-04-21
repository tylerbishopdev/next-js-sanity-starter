import { groq } from "next-sanity";
import { hero1Query } from "./hero/hero-1";
import { hero2Query } from "./hero/hero-2";
import { mainHeroQuery } from "./hero/main-hero";
import { sectionHeaderQuery } from "./section-header";
import { splitRowQuery } from "./split/split-row";
import { gridRowQuery } from "./grid/grid-row";
import { threeGridQuery } from "./grid/three-grid";
import { threeGridAnimatedQuery } from "./grid/three-grid-animated";
import { FEATURES_STAGGERED_QUERY as featuresStaggeredQuery } from "./grid/features-staggered";
import { carousel1Query } from "./carousel/carousel-1";
import { carousel2Query } from "./carousel/carousel-2";
import { timelineQuery } from "./timeline";
import { cta1Query } from "./cta/cta-1";
import { logoCloud1Query } from "./logo-cloud/logo-cloud-1";
import { logoCloud2Query } from "./logo-cloud/logo-cloud-2";
import { faqsQuery } from "./faqs";
import { formNewsletterQuery } from "./forms/newsletter";
import { allPostsQuery } from "./all-posts";
import { bigStatsSectionQuery } from "./big-stats-section";
import { socialProofQuery } from "./social-proof";
import { featureCardQuery } from "./feature-card";
import { flexColumnsQuery } from "./flex-columns";
import { statsCardQuery } from "./stats-card";
import { cardsQuery } from "./cards";
import { tabbedContentQuery } from "./tabbed-content";

export const PAGE_QUERY = groq`
  *[_type == "page" && slug.current == $slug][0]{
    blocks[]{
      ${hero1Query},
      ${hero2Query},
      ${mainHeroQuery},
      ${sectionHeaderQuery},
      ${splitRowQuery},
      ${gridRowQuery},
      ${threeGridQuery},
      ${threeGridAnimatedQuery},
      ${featuresStaggeredQuery},
      ${carousel1Query},
      ${carousel2Query},
      ${timelineQuery},
      ${cta1Query},
      ${logoCloud1Query},
      ${logoCloud2Query},
      ${faqsQuery},
      ${formNewsletterQuery},
      ${allPostsQuery},
      ${bigStatsSectionQuery},
      ${socialProofQuery},
      ${featureCardQuery},
      ${flexColumnsQuery},
      ${statsCardQuery},
      ${cardsQuery},
      ${tabbedContentQuery},
    },
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
  }
`;

export const PAGES_SLUGS_QUERY = groq`*[_type == "page" && defined(slug)]{slug}`;
