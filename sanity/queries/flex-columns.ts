import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const flexColumnsQuery = groq`
  _type == "flex-columns" => {
    _type,
    _key,
    columns[] {
      lightImage {
        asset->,
        alt,
      },
      darkImage {
        asset->,
        alt,
      },
    },
    stackAlign,
    colorVariant,
    padding
  }
`; 