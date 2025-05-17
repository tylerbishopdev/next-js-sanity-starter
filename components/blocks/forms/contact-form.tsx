"use client"

import {useRouter} from "next/navigation"
import React from "react"
import {Button} from "@/components/ui/button"
import {useForm, ValidationError} from "@formspree/react"
import SectionContainer from "@/components/ui/section-container"

interface ContactFormProps {
  _type: string
  _key: string
  heading?: string
  padding?: any
  colorVariant?: any
  formspreeId: string
  redirectUrl?: string
}

export default function ContactForm({heading = "Send a Message", padding, colorVariant, formspreeId = "xaygkaee", redirectUrl = "/thankyou"}: ContactFormProps) {
  const router = useRouter()
  const [state, handleSubmit] = useForm(formspreeId || "xaygkaee")

  React.useEffect(() => {
    if (state.succeeded) {
      router.push(redirectUrl)
    }
  }, [state.succeeded, router, redirectUrl])

  return (
    <SectionContainer color={colorVariant} padding={padding}>
      <div className="container max-w-4xl mx-auto">
        <div className="rounded-lg border border-border bg-card/50 p-8 md:p-14">
          <h2 className="text-2xl font-bold mb-6 pt-4">{heading}</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs text-foreground/80">
                Name
              </label>
              <input id="name" type="text" name="name" className="w-full border border-input bg-muted/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs text-foreground/80">
                Email Address
              </label>
              <input id="email" type="email" name="email" className="w-full border border-input bg-muted/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-sm text-red-400" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-xs text-foreground/80">
                Message
              </label>
              <textarea id="message" name="message" rows={4} className="w-full border border-input bg-muted/10 px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your message" required />
              <ValidationError prefix="Message" field="message" errors={state.errors} className="text-sm text-destructive" />
            </div>
            <ValidationError errors={state.errors} className="text-sm text-destructive" />

            <Button type="submit" disabled={state.submitting} variant="default" size="sm">
              {state.submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  )
}
