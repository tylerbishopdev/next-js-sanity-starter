import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const customBlockQuery = groq`
  _type == "custom-block" {
    _type,
    _key,
    padding,
    colorVariant,
    selectedComponent
  }
`; 