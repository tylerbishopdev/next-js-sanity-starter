import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const threeGridQuery = groq`
  _type == "three-grid" => {
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
      content[]{
        ...,
        _type == "image" => {
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
          }
        }
      },
      link{
        href,
        label,
      },
    },
  }
`; 