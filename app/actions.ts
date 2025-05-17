"use server"

import { track } from "@vercel/analytics"

export async function trackSignup() {
  await track("signup")
}
