import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@next/third-parties/google"
import { GoogleTagManager } from "@next/third-parties/google"
import Fathom from "./fathom"

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production"

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: {
    template: "%s",
    default: "Humix | Creator Video Channel Platform"
  },
  openGraph: {
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.jpg`,
        width: 1200,
        height: 630
      }
    ],
    locale: "en_US",
    type: "website",
    siteName: "Humix"
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/images/favicon/apple-touch-icon.png",
    other: {
      rel: "icon",
      url: "/images/favicon.svg",
      type: "image/svg+xml"
    }
  },
  robots: !isProduction ? "noindex, nofollow" : "index, follow"
}

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans"
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen font-sans antialiased overscroll-none hide-scrollbar-until-scroll", fontSans.variable)}>
        <Fathom />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Toaster position="top-center" richColors />
        <Analytics />
        <GoogleAnalytics gaId="G-EMKBFM69RM" />
        <GoogleTagManager gtmId="GT-5R7R3QZS" />
      </body>
    </html>
  )
}
