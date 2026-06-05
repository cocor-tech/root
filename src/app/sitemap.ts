import { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

const STATIC_ROUTES = [
  "", "about", "vision", "contact", "privacy", "terms",
  "products", "agency", "brands", "blog", "docs",
]

function walkContentDir(dir: string, prefix = ""): string[] {
  const routes: string[] = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    if (entry.isDirectory()) {
      const nestedSlug = prefix ? `${prefix}/${entry.name}` : entry.name
      routes.push(nestedSlug)
      const nested = walkContentDir(path.join(dir, entry.name), nestedSlug)
      routes.push(...nested)
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const slugBase = entry.name.replace(/\.md$/, "")
      if (slugBase === "index") continue
      const slug = prefix ? `${prefix}/${slugBase}` : slugBase
      routes.push(slug)
    }
  }
  return routes
}

function getBlogRoutes(): string[] {
  const blogDir = path.join(process.cwd(), "content/blog")
  if (!fs.existsSync(blogDir)) return []
  return walkContentDir(blogDir)
}

function getDocsRoutes(): string[] {
  const docsDir = path.join(process.cwd(), "content/docs")
  if (!fs.existsSync(docsDir)) return []
  return walkContentDir(docsDir)
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = STATIC_ROUTES.map((route) => ({
    url: `https://cocor.tech/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const blogUrls = getBlogRoutes().map((route) => ({
    url: `https://cocor.tech/${route.startsWith("blog/") ? route : `blog/${route}`}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const docUrls = getDocsRoutes().map((route) => ({
    url: `https://cocor.tech/${route.startsWith("docs/") ? route : `docs/${route}`}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls, ...docUrls]
}
