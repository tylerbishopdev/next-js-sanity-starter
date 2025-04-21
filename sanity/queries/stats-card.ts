import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const statsCardQuery = groq`
  _type == "stats-card" => {
    _type,
    _key,
    title,
    description,
    image {
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      },
      alt,
      hotspot,
      crop
    },
    padding,
    colorVariant,
    metrics[]{
      _key,
      label,
      sublabel,
      percentage,
      barWidth,
    },
  }
`; 