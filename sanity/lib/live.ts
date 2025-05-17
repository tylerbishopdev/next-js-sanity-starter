import { defineLive } from "next-sanity";
import { client } from "./client";
import { token } from "./token";

// Using type assertion to bypass type mismatch
export const { sanityFetch, SanityLive } = defineLive({
  client: client as any,
  // Required for showing draft content when the Sanity Presentation Tool is used, or to enable the Vercel Toolbar Edit Mode
  serverToken: token,
  // Required for stand-alone live previews, the token is only shared to the browser if it's a valid Next.js Draft Mode session
  browserToken: token,
});
