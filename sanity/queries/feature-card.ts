import { groq } from "next-sanity";

export const featureCardQuery = `
  _type == "feature-card" => {
    _type,
    _key,
    heading,
    description,
    padding,
    colorVariant,
    "image": image {
      "asset": {
        "url": asset->url,
        "_id": asset->_id,
        "mimeType": asset->mimeType,
        "metadata": asset->metadata {
          "lqip": lqip,
          "dimensions": dimensions {
            "width": width,
            "height": height
          }
        }
      }
    },
    cards[] {
      _key,
      header,
      subheader,
      icon
    }
  }
` 