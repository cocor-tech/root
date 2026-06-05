import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import { ThemeProvider } from "@/providers/ThemeProvider"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://cocor.tech"),
  title: "Cocor Tech — Build. Acquire. Scale.",
  description:
    "An operating company that builds, acquires, and scales digital assets for profit.",
  keywords: "cocor tech, digital assets, software agency, brand investing, stellar, blockchain",
  authors: [{ name: "Nekwachukwu Ucheokoye" }],
  creator: "Cocor Tech",
  publisher: "Cocor Tech",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cocor.tech",
    siteName: "Cocor Tech",
    title: "Cocor Tech — Build. Acquire. Scale.",
    description:
      "An operating company that builds, acquires, and scales digital assets for profit.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Cocor Tech" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocor Tech — Build. Acquire. Scale.",
    description:
      "An operating company that builds, acquires, and scales digital assets for profit.",
    images: ["/og-image.jpg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script defer data-domain="cocor.tech" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  )
}
