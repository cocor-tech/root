import path from "path"
import fs from "fs"
import { checkAuth } from "@/lib/auth"

const CONTENT_BASE = path.join(process.cwd(), "content")

export async function GET() {
  if (!(await checkAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const result: Record<string, { slug: string; title: string; description: string }[]> = {}

  function walk(dir: string): void {
    if (!fs.existsSync(dir)) return
    const entries = fs.readdirSync(dir, { withFileTypes: true })
    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name))
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const relativeDir = path.relative(CONTENT_BASE, dir)
        const section = relativeDir || "root"
        if (!result[section]) result[section] = []

        const raw = fs.readFileSync(path.join(dir, entry.name), "utf-8")
        let title = entry.name.replace(/\.md$/, "")
        let description = ""

        const parts = raw.split("---\n")
        if (parts.length >= 3) {
          const metaLines = parts[1].split("\n").filter(Boolean)
          for (const line of metaLines) {
            const idx = line.indexOf(":")
            if (idx === -1) continue
            const key = line.slice(0, idx).trim()
            const val = line.slice(idx + 1).trim()
            if (key === "title") title = val
            if (key === "description") description = val
          }
        }

        result[section].push({
          slug: entry.name.replace(/\.md$/, ""),
          title,
          description,
        })
      }
    }
  }

  walk(CONTENT_BASE)
  return Response.json(result)
}
