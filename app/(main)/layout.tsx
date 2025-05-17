import Header from "@/components/header"
import Footer from "@/components/footer"
import { DisableDraftMode } from "@/components/disable-draft-mode"
import { VisualEditing } from "next-sanity"
import { draftMode } from "next/headers"
import { SanityLive } from "@/sanity/lib/live"

export const dynamic = "force-dynamic"

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <SanityLive />
      {(await draftMode()).isEnabled && (
        <>
          <DisableDraftMode />
          <VisualEditing />
        </>
      )}
      <Footer />
    </>
  )
}
