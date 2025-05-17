import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const fullRowQuery = groq`
  _type == "full-row" => {
    _type,
    _key,
    padding,
    colorVariant,
    items[] {
      _key,
      title,
      image {
        ...,
        asset-> {
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
      },
      icon,
      revenueRange,
      support,
      featuredBenefits,
      additionalBenefits
    }
  }
`;
