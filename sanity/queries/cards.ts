import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const cardsQuery = groq`
  _type == "cards" => {
    _type,
    _key,
    title,
    description,
    padding,
    colorVariant,
    cards[]{
      _key,
      title,
      description,
      image{
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
      actionText,
      actionUrl
    }
  }
`; 