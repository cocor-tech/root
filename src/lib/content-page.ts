import path from "path"
import { Metadata } from "next"
import { loadContent } from "./content"
import { mdToHtml } from "./markdown"

const CONTENT_DIR = path.join(process.cwd(), "content/pages")

export function contentMetadata(slug: string): Metadata {
  const doc = loadContent(CONTENT_DIR, slug)
  if (!doc) return { title: "Not Found — Cocor Tech" }

  return {
    title: `${doc.meta.title} — Cocor Tech`,
    description: doc.meta.description,
    alternates: { canonical: `/${slug === "index" ? "" : slug}` },
    openGraph: {
      title: `${doc.meta.title} — Cocor Tech`,
      description: doc.meta.description,
      url: `https://cocor.tech/${slug === "index" ? "" : slug}`,
      siteName: "Cocor Tech",
    },
  }
}

export function getContentHTML(slug: string): string | null {
  const doc = loadContent(CONTENT_DIR, slug)
  if (!doc) return null
  return mdToHtml(doc.content)
}
