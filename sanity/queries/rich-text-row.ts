import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const richTextRowQuery = groq`
  _type == "rich-text-row" => {
    _type,
    _key,
    title,
    colorVariant,
    padding,
    width,
    textAlign,
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
        },
        alt
      },
      _type == "youtube" => {
        ...,
        videoId
      },
      _type == "code" => {
        ...,
        code,
        language,
        filename
      },
      markDefs[]{
        ...,
        _type == "link" => {
          ...,
          href
        }
      }
    }
  }
`; 