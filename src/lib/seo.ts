import { Metadata } from "next"

const SITE_NAME = "Cocor Tech"
const SITE_URL = "https://cocor.tech"
const DEFAULT_OG_IMAGE = "/og-image.jpg"
const TWITTER_HANDLE = "@cocortech"
const TWITTER_SITE = "@cocortech"

interface SEOProps {
  title: string
  description: string
  slug?: string
  keywords?: string
  ogImage?: string
  publishedTime?: string
  author?: string
  category?: string
  type?: "website" | "article"
  noindex?: boolean
}

export function buildMetadata({
  title,
  description,
  slug = "",
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  publishedTime,
  author,
  category,
  type = "website",
  noindex = false,
}: SEOProps): Metadata {
  const fullTitle = `${title} — ${SITE_NAME}`
  const url = slug ? `${SITE_URL}/${slug}` : SITE_URL
  const canonical = slug ? `/${slug}` : "/"

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords || `${title.toLowerCase()}, cocor tech, digital assets`,
    authors: author ? [{ name: author }] : [{ name: "Nekwachukwu Ucheokoye" }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      type,
      locale: "en_US",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      ...(publishedTime && type === "article"
        ? { publishedTime, authors: author ? [author] : ["Nekwachukwu Ucheokoye"] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      site: TWITTER_SITE,
      creator: TWITTER_HANDLE,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    ...(category
      ? { classification: category }
      : {}),
  }

  return metadata
}
