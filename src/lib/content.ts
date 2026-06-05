import fs from "fs"
import path from "path"
import type { ContentMeta, ContentDoc } from "@/types/content"

export function parseFrontmatter(file: string): {
  meta: Partial<ContentMeta>
  content: string
} {
  const parts = file.split("---\n")
  if (parts.length < 3) {
    return { meta: { title: "", description: "", order: 999 }, content: file }
  }

  const meta: Record<string, string> = {}
  const lines = parts[1].split("\n").filter(Boolean)

  for (const line of lines) {
    const colonIndex = line.indexOf(":")
    if (colonIndex === -1) continue
    const key = line.slice(0, colonIndex).trim()
    const value = line.slice(colonIndex + 1).trim()
    meta[key] = value
  }

  return {
    meta: {
      title: meta.title || "",
      description: meta.description || "",
      order: parseInt(meta.order || "999"),
      category: meta.category,
      author: meta.author,
      published: meta.published,
      image: meta.image,
    },
    content: parts.slice(2).join("---\n").trim(),
  }
}

export function loadContent(baseDir: string, slug: string): ContentDoc | null {
  const exactPath = path.join(baseDir, `${slug}.md`)
  if (fs.existsSync(exactPath)) {
    const fileContent = fs.readFileSync(exactPath, "utf-8")
    const { meta, content } = parseFrontmatter(fileContent)
    return { meta: { ...meta, slug } as ContentMeta, content }
  }

  const indexPath = path.join(baseDir, slug, "index.md")
  if (fs.existsSync(indexPath)) {
    const raw = fs.readFileSync(indexPath, "utf-8")
    const { meta, content } = parseFrontmatter(raw)
    return { meta: { ...meta, slug } as ContentMeta, content }
  }

  return null
}

export function listContent(baseDir: string): ContentMeta[] {
  if (!fs.existsSync(baseDir)) return []

  const entries = fs.readdirSync(baseDir, { withFileTypes: true })
  const docs: ContentMeta[] = []

  for (const entry of entries) {
    if (entry.isFile() && entry.name.endsWith(".md")) {
      const slug = entry.name.replace(/\.md$/, "")
      if (slug === "index") continue
      const raw = fs.readFileSync(path.join(baseDir, entry.name), "utf-8")
      const { meta } = parseFrontmatter(raw)
      docs.push({ ...meta, slug } as ContentMeta)
    }
  }

  return docs.sort((a, b) => a.order - b.order)
}

export function listContentRecursive(baseDir: string, prefix = ""): ContentMeta[] {
  if (!fs.existsSync(baseDir)) return []

  const entries = fs.readdirSync(baseDir, { withFileTypes: true })
  const docs: ContentMeta[] = []

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const subDir = path.join(baseDir, entry.name)
      const nestedSlug = prefix ? `${prefix}/${entry.name}` : entry.name
      const nested = listContentRecursive(subDir, nestedSlug)
      docs.push(...nested)
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const slugBase = entry.name.replace(/\.md$/, "")
      if (slugBase === "index") continue
      const slug = prefix ? `${prefix}/${slugBase}` : slugBase
      const raw = fs.readFileSync(path.join(baseDir, entry.name), "utf-8")
      const { meta } = parseFrontmatter(raw)
      docs.push({ ...meta, slug } as ContentMeta)
    }
  }

  return docs.sort((a, b) => a.order - b.order)
}

export function writeContent(baseDir: string, slug: string, frontmatter: Record<string, string>, body: string): void {
  const fm = Object.entries(frontmatter)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")
  const content = `---\n${fm}\n---\n\n${body}`
  const filePath = path.join(baseDir, `${slug}.md`)
  const dir = path.dirname(filePath)
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }
  fs.writeFileSync(filePath, content, "utf-8")
}

export function deleteContent(baseDir: string, slug: string): boolean {
  const filePath = path.join(baseDir, `${slug}.md`)
  if (!fs.existsSync(filePath)) return false
  fs.unlinkSync(filePath)
  return true
}

export function contentExists(baseDir: string, slug: string): boolean {
  return fs.existsSync(path.join(baseDir, `${slug}.md`))
}
