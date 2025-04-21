import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const bigStatsSectionQuery = groq`
  _type == "big-stats-section" => {
    _type,
    _key,
    title,
    description,
    padding,
    colorVariant,
    stats[]{
      _key,
      value,
      label,
      prefix,
      suffix,
    },
  }
`; 