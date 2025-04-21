import { groq } from "next-sanity";

export const mainHeroQuery = `
  _type == "main-hero" => {
    _type,
    _key,
    preherobold,
    heroheading1,
    heroheading2,
    heroDescription,
    heroButtonText,
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
    }
  }
` 