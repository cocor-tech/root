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
      <head>
        <script id="cocor-theme-init" dangerouslySetInnerHTML={{
          __html: `!function(){try{var t=localStorage.getItem("cocor_theme");if(t==="light"){document.documentElement.classList.add("light");var e=document.getElementById("cocor-light")||document.createElement("style");e.id="cocor-light",e.textContent=".bg-\\[#0a0a0a\\]{background:#fff!important}.bg-\\[#000000\\]{background:#f2f2f2!important}.bg-\\[#050505\\]{background:#e8e8e8!important}.bg-\\[#1a1a1a\\]{background:#e0e0e0!important}.bg-black{background:#f2f2f2!important}.bg-black\\/95{background:#f2f2f2!important}.bg-black\\/40{background:#e8e8e8!important}.text-white{color:#111!important}.text-white\\/15{color:#ddd!important}.text-white\\/20{color:#ccc!important}.text-white\\/30{color:#aaa!important}.text-white\\/35{color:#999!important}.text-white\\/40{color:#888!important}.text-white\\/50{color:#777!important}.text-white\\/60{color:#555!important}.text-white\\/70{color:#333!important}.text-white\\/80{color:#222!important}.text-\\[#888\\]{color:#777!important}.text-\\[#555\\]{color:#999!important}.text-\\[#505050\\]{color:#888!important}.text-\\[#707070\\]{color:#999!important}.text-\\[#404040\\]{color:#aaa!important}.text-\\[#606060\\]{color:#888!important}.text-\\[#333\\]{color:#ccc!important}.text-\\[#00ff41\\]{color:#888!important}.border-\\[#1a1a1a\\]{border-color:#e0e0e0!important}.border-white{border-color:#ddd!important}.border-white\\/30{border-color:#ddd!important}.hover\\:text-white:hover{color:#111!important}.hover\\:bg-\\[#0a0a0a\\]:hover{background:#f5f5f5!important}.hover\\:border-white:hover{border-color:#ddd!important}.hover\\:bg-white:hover{background:#222!important;color:#fff!important}";document.head.appendChild(e)}}catch(e){}}()`}}></script>
      </head>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Script defer data-domain="cocor.tech" src="https://plausible.io/js/script.js" />
      </body>
    </html>
  )
}
