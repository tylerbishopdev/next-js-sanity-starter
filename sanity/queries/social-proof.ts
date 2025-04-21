import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const socialProofQuery = groq`
  _type == "social-proof" => {
    _type,
    _key,
    title,
    description,
    padding,
    colorVariant,
    testimonials[]{
      _key,
      name,
      position,
      quote,
      companyName,
      image{
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
        },
        alt,
      },
      companyLogo{
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
        },
        alt,
      },
      stats[]{
        _key,
        value,
        label,
        subLabel
      }
    }
  }
`; 