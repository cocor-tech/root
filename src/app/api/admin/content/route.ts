import path from "path"
import fs from "fs"
import { checkAuth } from "@/lib/auth"
import { isGitHubMode, githubCommitFile, githubDeleteFile } from "@/lib/github"

const CONTENT_BASE = path.join(process.cwd(), "content")

function sanitizeSlug(slug: string): string {
  return slug.replace(/[^a-zA-Z0-9-_/]/g, "").replace(/\.\.\//g, "")
}

function buildContent(frontmatter: Record<string, string>, body: string): string {
  const fm = Object.entries(frontmatter)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")
  return `---\n${fm}\n---\n\n${body || ""}`
}

export async function POST(request: Request) {
  if (!(await checkAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { section, slug, frontmatter, body } = await request.json()
  if (!section || !slug) {
    return Response.json({ error: "section and slug required" }, { status: 400 })
  }

  const safeSlug = sanitizeSlug(slug)
  const content = buildContent(frontmatter || {}, body || "")
  const repoPath = `content/${section}/${safeSlug}.md`

  if (isGitHubMode()) {
    const ok = await githubCommitFile(repoPath, content, `Create ${section}/${safeSlug}.md`)
    if (!ok) return Response.json({ error: "GitHub commit failed" }, { status: 500 })
  } else {
    const filePath = path.join(CONTENT_BASE, section, `${safeSlug}.md`)
    const dir = path.dirname(filePath)
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
    fs.writeFileSync(filePath, content, "utf-8")
  }

  return Response.json({ success: true, slug: safeSlug, mode: isGitHubMode() ? "github" : "local" })
}

export async function PUT(request: Request) {
  if (!(await checkAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { section, slug, frontmatter, body } = await request.json()
  if (!section || !slug) {
    return Response.json({ error: "section and slug required" }, { status: 400 })
  }

  const safeSlug = sanitizeSlug(slug)
  const content = buildContent(frontmatter || {}, body || "")
  const repoPath = `content/${section}/${safeSlug}.md`

  if (isGitHubMode()) {
    const ok = await githubCommitFile(repoPath, content, `Update ${section}/${safeSlug}.md`)
    if (!ok) return Response.json({ error: "GitHub commit failed" }, { status: 500 })
  } else {
    const filePath = path.join(CONTENT_BASE, section, `${safeSlug}.md`)
    if (!fs.existsSync(filePath)) {
      return Response.json({ error: "File not found" }, { status: 404 })
    }
    fs.writeFileSync(filePath, content, "utf-8")
  }

  return Response.json({ success: true, mode: isGitHubMode() ? "github" : "local" })
}

export async function DELETE(request: Request) {
  if (!(await checkAuth())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { section, slug } = await request.json()
  if (!section || !slug) {
    return Response.json({ error: "section and slug required" }, { status: 400 })
  }

  const safeSlug = sanitizeSlug(slug)
  const repoPath = `content/${section}/${safeSlug}.md`

  if (isGitHubMode()) {
    const ok = await githubDeleteFile(repoPath, `Delete ${section}/${safeSlug}.md`)
    if (!ok) return Response.json({ error: "GitHub delete failed" }, { status: 500 })
  } else {
    const filePath = path.join(CONTENT_BASE, section, `${safeSlug}.md`)
    if (!fs.existsSync(filePath)) {
      return Response.json({ error: "File not found" }, { status: 404 })
    }
    fs.unlinkSync(filePath)
  }

  return Response.json({ success: true, mode: isGitHubMode() ? "github" : "local" })
}
