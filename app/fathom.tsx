// Fathom.tsx
"use client"

import {load, trackPageview} from "fathom-client"
import {useEffect} from "react"

export default function Fathom() {
  // Load the Fathom script on mount
  useEffect(() => {
    load("ENDKUDGL", {
      auto: false
    })
  }, [])

  // Record a pageview when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      trackPageview()
    }

    // Track initial pageview
    handleRouteChange()

    // Add event listeners for route changes
    window.addEventListener("popstate", handleRouteChange)

    // Monkey patch history methods
    const originalPushState = history.pushState
    const originalReplaceState = history.replaceState

    history.pushState = function (...args) {
      originalPushState.apply(this, args)
      handleRouteChange()
    }

    history.replaceState = function (...args) {
      originalReplaceState.apply(this, args)
      handleRouteChange()
    }

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
      history.pushState = originalPushState
      history.replaceState = originalReplaceState
    }
  }, [])

  return null
}
