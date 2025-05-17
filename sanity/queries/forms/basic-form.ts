import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const basicFormQuery = groq`
  _type == "basic-form" => {
    _type,
    _key,
    padding,
    colorVariant,
    heading,
    formspreeId,
    buttonText,
    redirectUrl,
  }
`; 