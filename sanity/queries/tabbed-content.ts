import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const tabbedContentQuery = groq`
  _type == "tabbed-content" => {
    _type,
    _key,
    title,
    description,
    padding,
    colorVariant,
    showBrowserFrame,
    tabs[]{
      _key,
      id{
        current
      },
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
      }
    }
  }
`; 