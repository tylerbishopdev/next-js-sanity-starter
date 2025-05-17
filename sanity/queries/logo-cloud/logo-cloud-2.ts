import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const logoCloud2Query = groq`
  _type == "logo-cloud-2" => {
    _type,
    _key,
    padding,
    colorVariant,
    title,
    subtitle,
    images[]{
      ...,
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
      alt
    },
  }
`; 