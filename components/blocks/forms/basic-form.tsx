"use client"

import {useRouter} from "next/navigation"
import React from "react"
import {Button} from "@/components/ui/button"
import {useForm, ValidationError} from "@formspree/react"
import SectionContainer from "@/components/ui/section-container"

interface BasicFormProps {
  _type: string
  _key: string
  heading?: string
  padding?: any
  colorVariant?: any
  formspreeId: string
  buttonText?: string
  redirectUrl?: string
}

export default function BasicForm({heading = "Quick Contact", padding, colorVariant, formspreeId = "mrbgqbql", buttonText = "Subscribe", redirectUrl = "/thankyou"}: BasicFormProps) {
  const router = useRouter()
  const [state, handleSubmit] = useForm(formspreeId || "mrbgqbql")

  React.useEffect(() => {
    if (state.succeeded) {
      router.push(redirectUrl)
    }
  }, [state.succeeded, router, redirectUrl])

  return (
    <SectionContainer color={colorVariant} padding={padding}>
      <div className="container max-w-6xl mx-auto " id="partners">
        <div className="rounded-lg border border-border bg-bento p-8 lg:p-20">
          <h2 className="text-3xl font-bold text-primary mb-2">{heading}</h2>
          <p className="text-sm mb-8">Fill out the form and our team will processs the submission shortly.</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-xs font-medium">
                Name
              </label>
              <input id="name" type="text" name="name" className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" required />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-xs font-medium">
                Email Address
              </label>
              <input id="email" type="email" name="email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary" placeholder="your@email.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-destructive" />
            </div>
            <ValidationError errors={state.errors} className="text-xs text-destructive" />
            <div className="fs-field">
              <label className="fs-label text-xs" htmlFor="number">
                Phone Number
              </label>
              <input className="fs-input w-full rounded-md my-2  border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary" id="number" name="number" />
            </div>
            <div className="fs-field">
              <label className="fs-label text-xs" htmlFor="message">
                Inquiry Message
              </label>
              <textarea className="fs-textarea w-full my-4 rounded-md border border-input bg-background px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-primary" id="message" name="message" required />
            </div>

            <Button type="submit" disabled={state.submitting} variant="outline">
              {state.submitting ? "Sending..." : buttonText}
            </Button>
          </form>
        </div>
      </div>
    </SectionContainer>
  )
}
