import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const contactFormQuery = groq`
  _type == "contact-form" => {
    _type,
    _key,
    padding,
    colorVariant,
    heading,
    formspreeId,
    redirectUrl,
  }
`; 