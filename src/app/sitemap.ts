import { MetadataRoute } from "next"
import fs from "fs"
import path from "path"

const STATIC_ROUTES = [
  "", "about", "vision", "contact", "privacy", "terms", "careers",
  "products",
  "products/moistello",
  "products/moistello/how-it-works",
  "products/moistello/features",
  "products/moistello/faq",
  "products/moistello/docs",
  "products/moistello/security",
  "products/roadmap",
  "agency",
  "agency/services/custom-software-development",
  "agency/services/mvp-development",
  "agency/services/staff-augmentation",
  "agency/services/legacy-modernization",
  "agency/portfolio",
  "agency/portfolio/project-1",
  "agency/portfolio/project-2",
  "agency/process",
  "agency/technologies",
  "agency/pricing",
  "brands",
  "brands/philosophy",
  "brands/acquisition-criteria",
  "brands/portfolio",
  "brands/development-process",
  "brands/exit-strategy",
]

function getContentRoutes(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  const routes: string[] = []
  function walk(d: string, prefix = "") {
    const entries = fs.readdirSync(d, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isFile() && entry.name.endsWith(".md") && entry.name !== "index.md") {
        const slug = entry.name.replace(/\.md$/, "")
        routes.push(prefix ? `${prefix}/${slug}` : slug)
      }
    }
  }
  walk(dir)
  return routes
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticUrls = STATIC_ROUTES.map((route) => ({
    url: `https://cocor.tech/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  const blogDir = path.join(process.cwd(), "content/blog")
  const docsDir = path.join(process.cwd(), "content/docs")

  const blogUrls = getContentRoutes(blogDir).map((route) => ({
    url: `https://cocor.tech/blog/${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  const docUrls = getContentRoutes(docsDir).map((route) => ({
    url: `https://cocor.tech/docs/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }))

  return [...staticUrls, ...blogUrls, ...docUrls]
}
