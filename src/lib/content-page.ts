import path from "path"
import { buildMetadata } from "./seo"
import { loadContent } from "./content"
import { mdToHtml } from "./markdown"

const CONTENT_DIR = path.join(process.cwd(), "content/pages")

export function contentMetadata(slug: string) {
  const doc = loadContent(CONTENT_DIR, slug)
  if (!doc) return { title: "Not Found — Cocor Tech" }
  return buildMetadata({
    title: doc.meta.title,
    description: doc.meta.description,
    slug: slug === "index" ? "" : slug,
    keywords: `${doc.meta.title.toLowerCase()}, cocor tech, digital assets`,
  })
}

export function getContentHTML(slug: string): string | null {
  const doc = loadContent(CONTENT_DIR, slug)
  if (!doc) return null
  return mdToHtml(doc.content)
}
