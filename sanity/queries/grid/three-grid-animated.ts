import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const threeGridAnimatedQuery = groq`
  _type == "three-grid-animated" => {
    _type,
    _key,
    title,
    description,
    padding,
    colorVariant,
    items[]{
      _key,
      title,
      description,
      componentKey,
      link{
        href,
        label,
      },
    },
  }
`; 