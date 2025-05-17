import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const aboutQuery = groq`
  _type == "about" => {
    _type,
    _key,
    title,
    introText[]{
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
    mission,
    introImages[]{
      _key,
      alt,
      asset->{
        _id,
        url,
        metadata {
          lqip,
          dimensions {
            width,
            height
          }
        }
      }
    },
    coreValues[]{
      _key,
      title,
      description,
      image{
        alt,
        asset->{
          _id,
          url,
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
    teamSection{
      title,
      description,
      members[]{
        _key,
        name,
        role,
        bio,
        image{
          alt,
          asset->{
            _id,
            url,
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
      staffMembers[]{
        _key,
        name,
        role,
        bio,
        image{
          alt,
          asset->{
            _id,
            url,
            metadata {
              lqip,
              dimensions {
                width,
                height
              }
            }
          }
        }
      }
    },
    locations[]{
      _key,
      name,
      address
    }
  }
`;
