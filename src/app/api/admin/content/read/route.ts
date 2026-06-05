import path from "path"
import fs from "fs"
import { checkAuth } from "@/lib/auth"

const CONTENT_BASE = path.join(process.cwd(), "content")

export async function GET(request: Request) {
  if (!(await checkAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const url = new URL(request.url)
  const section = url.searchParams.get("section")
  const slug = url.searchParams.get("slug")

  if (!section || !slug) {
    return Response.json({ error: "section and slug required" }, { status: 400 })
  }

  const filePath = path.join(CONTENT_BASE, section, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    return Response.json({ error: "Not found" }, { status: 404 })
  }

  const raw = fs.readFileSync(filePath, "utf-8")
  const parts = raw.split("---\n")
  const frontmatter: Record<string, string> = {}
  let body = raw

  if (parts.length >= 3) {
    const metaLines = parts[1].split("\n").filter(Boolean)
    for (const line of metaLines) {
      const idx = line.indexOf(":")
      if (idx === -1) continue
      frontmatter[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
    }
    body = parts.slice(2).join("---\n").trim()
  }

  return Response.json({ frontmatter, body })
}
