import type React from "react"
import type { Metadata } from "next"
import { Inter, Lora, Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const lora = Lora({ subsets: ["latin"], variable: "--font-serif" })
const cairo = Cairo({ subsets: ["arabic"], variable: "--font-arabic" })

export const metadata: Metadata = {
  title: "Value In Pass | Premium Event & Tent Solutions",
  description:
    "Luxury tent setup and event management for weddings, corporate events, and celebrations across UAE and Egypt.",
  generator: "v0.app",
  openGraph: {
    title: "Value In Pass | Premium Event & Tent Solutions",
    description: "Luxury tent setup and event management services.",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/value-in-pass-logo.png",
        type: "image/png",
      },
    ],
    apple: "/value-in-pass-logo.png",
  },
}

import { LanguageProvider } from "@/components/language-provider"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} ${cairo.variable}`}>
      <head>
        <link rel="icon" href="/value-in-pass-logo.png" type="image/png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover, user-scalable=no" />
        <meta name="theme-color" content="#faf8f3" />
      </head>
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
