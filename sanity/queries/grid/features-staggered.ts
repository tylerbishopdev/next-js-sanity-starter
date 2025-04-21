import { groq } from "next-sanity";

export const FEATURES_STAGGERED_QUERY = `
  _type == "features-staggered" => {
    _type,
    _key,
    title,
    description,
    padding,
    colorVariant,
    features[] {
      _key,
      title,
      description,
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
      }
    }
  }
` 