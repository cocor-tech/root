"use client"

import { useEffect, useState, useCallback, useRef, DragEvent } from "react"
import { useRouter } from "next/navigation"

interface ContentItem {
  slug: string
  title: string
  description: string
}

interface ContentSections {
  [section: string]: ContentItem[]
}

export default function AdminDashboard() {
  const [sections, setSections] = useState<ContentSections>({})
  const [loading, setLoading] = useState(true)
  const [authenticated, setAuthenticated] = useState(false)
  const [selectedSection, setSelectedSection] = useState("")
  const [selectedSlug, setSelectedSlug] = useState("")
  const [editorFrontmatter, setEditorFrontmatter] = useState("")
  const [editorBody, setEditorBody] = useState("")
  const [newSection, setNewSection] = useState("")
  const [newSlug, setNewSlug] = useState("")
  const [message, setMessage] = useState("")
  const [isLocal, setIsLocal] = useState(true)
  const [uploadSection, setUploadSection] = useState("")
  const [dragOver, setDragOver] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const checkAuth = useCallback(async () => {
    const res = await fetch("/api/admin/auth")
    if (res.ok) {
      setAuthenticated(true)
      fetchContent()
    } else {
      router.push("/admin/login")
    }
  }, [router])

  async function fetchContent() {
    const res = await fetch("/api/admin/content/list")
    const data = await res.json()
    setSections(data)
    setLoading(false)
  }

  async function loadEditor(section: string, slug: string) {
    setSelectedSection(section)
    setSelectedSlug(slug)
    setMessage("")

    const res = await fetch(`/api/admin/content/read?section=${section}&slug=${slug}`)
    if (res.ok) {
      const data = await res.json()
      const fmLines = Object.entries(data.frontmatter)
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")
      setEditorFrontmatter(fmLines)
      setEditorBody(data.body || "")
    }
  }

  async function handleSave() {
    if (!selectedSection || !selectedSlug) return

    const fm: Record<string, string> = {}
    editorFrontmatter.split("\n").forEach((line) => {
      const idx = line.indexOf(":")
      if (idx === -1) return
      fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
    })

    const res = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section: selectedSection,
        slug: selectedSlug,
        frontmatter: fm,
        body: editorBody,
      }),
    })

    setMessage(res.ok ? "Saved" : "Error saving")
    if (res.ok) fetchContent()
  }

  async function handleDelete(section: string, slug: string) {
    if (!confirm(`Delete ${slug}?`)) return

    const res = await fetch("/api/admin/content", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, slug }),
    })

    setMessage(res.ok ? "Deleted" : "Error deleting")
    if (res.ok) {
      setSelectedSlug("")
      setSelectedSection("")
      fetchContent()
    }
  }

  async function handleCreate() {
    if (!newSection || !newSlug) return

    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section: newSection,
        slug: newSlug,
        frontmatter: { title: newSlug.replace(/-/g, " "), description: "New page", order: 99 },
        body: `# ${newSlug.replace(/-/g, " ")}\n\nContent here.`,
      }),
    })

    setMessage(res.ok ? "Created" : "Error creating")
    if (res.ok) {
      setNewSection("")
      setNewSlug("")
      fetchContent()
    }
  }

  useEffect(() => {
    setIsLocal(
      typeof window !== "undefined" &&
      (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    )
  }, [])

  function parseMarkdownFile(file: File): Promise<{ section: string; slug: string; frontmatter: string; body: string } | null> {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.onload = (e) => {
        const text = e.target?.result as string
        if (!text) { resolve(null); return }

        // Detect section from filename or default
        const fileName = file.name.replace(/\.md$/i, "")
        const slug = fileName.replace(/[^a-zA-Z0-9-_]/g, "-").toLowerCase()

        const parts = text.split("---\n")
        let frontmatter = ""
        let body = text

        if (parts.length >= 3) {
          frontmatter = parts[1].trim()
          body = parts.slice(2).join("---\n").trim()
        }

        resolve({ section: uploadSection || "pages", slug, frontmatter, body })
      }
      reader.readAsText(file)
    })
  }

  async function handleFileUpload(file: File) {
    if (!file.name.endsWith(".md")) {
      setMessage("Only .md files are accepted")
      return
    }

    const parsed = await parseMarkdownFile(file)
    if (!parsed) { setMessage("Could not parse file"); return }

    const fm: Record<string, string> = {}
    parsed.frontmatter.split("\n").forEach((line) => {
      const idx = line.indexOf(":")
      if (idx === -1) return
      fm[line.slice(0, idx).trim()] = line.slice(idx + 1).trim()
    })

    if (!fm.title) fm.title = parsed.slug.replace(/-/g, " ")
    if (!fm.description) fm.description = ""
    if (!fm.order) fm.order = "99"

    const res = await fetch("/api/admin/content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        section: parsed.section,
        slug: parsed.slug,
        frontmatter: fm,
        body: parsed.body,
      }),
    })

    if (res.ok) {
      setMessage(`Uploaded: ${parsed.section}/${parsed.slug}.md`)
      fetchContent()
    } else {
      setMessage("Error uploading file")
    }
  }

  async function handleDrop(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragOver(false)
    const files = Array.from(e.dataTransfer.files)
    for (const file of files) {
      await handleFileUpload(file)
    }
  }

  function handleDragOver(e: DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setDragOver(true)
  }

  function handleDragLeave() {
    setDragOver(false)
  }

  function handleFileInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (files) {
      for (let i = 0; i < files.length; i++) {
        handleFileUpload(files[i])
      }
    }
    if (fileInputRef.current) fileInputRef.current.value = ""
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" })
    router.push("/admin/login")
  }

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (loading) {
    return (
      <div className="min-h-screen bg-bg-main flex items-center justify-center">
        <p className="text-muted text-xs uppercase tracking-[0.15em]">Loading...</p>
      </div>
    )
  }

  if (!authenticated) return null

  const sectionKeys = Object.keys(sections).sort()

  return (
    <div className="min-h-screen bg-bg-main">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-primary text-xl font-bold">Admin — Content</h1>
          <button
            onClick={handleLogout}
            className="text-muted text-xs uppercase tracking-[0.15em] hover:text-primary transition-colors"
          >
            Sign Out
          </button>
        </div>

        <div className="border border-strong bg-surface px-4 py-2 mb-6 flex items-center justify-between">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em]">
            {isLocal ? "● Local filesystem mode" : "● GitHub API mode (Vercel)"}
          </p>
          <a href="/" className="text-muted text-[10px] uppercase tracking-[0.15em] hover:text-primary transition-colors">
            View Site →
          </a>
        </div>

        {message && (
          <div className="border border-strong bg-surface px-4 py-2 mb-6">
            <p className="text-secondary text-sm">{message}</p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h2 className="text-primary text-xs uppercase tracking-[0.15em] font-semibold mb-3">Content</h2>
              <div className="space-y-4">
                {sectionKeys.map((section) => (
                  <div key={section}>
                    <h3 className="text-muted text-[10px] uppercase tracking-[0.2em] mb-2">{section}/</h3>
                    <div className="space-y-1">
                      {(sections[section] || []).map((item) => (
                        <div key={item.slug} className="group flex items-center gap-1">
                          <button
                            onClick={() => loadEditor(section, item.slug)}
                            className={`flex-1 text-left px-3 py-2 text-sm transition-colors ${
                              selectedSection === section && selectedSlug === item.slug
                                ? "bg-inverse text-primary"
                                : "text-secondary hover:bg-surface hover:text-primary"
                            }`}
                          >
                            {item.title}
                            <span className="block text-[10px] opacity-50">{item.slug}.md</span>
                          </button>
                          <button
                            onClick={() => handleDelete(section, item.slug)}
                            className="opacity-0 group-hover:opacity-100 text-muted text-[10px] px-1 hover:text-red-500 transition-all"
                            title="Delete"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Create new */}
            <div className="border-t border-default pt-4">
              <h2 className="text-primary text-xs uppercase tracking-[0.15em] font-semibold mb-3">Create New</h2>
              <div className="space-y-2">
                <input
                  placeholder="Section (e.g. blog/engineering)"
                  value={newSection}
                  onChange={(e) => setNewSection(e.target.value)}
                  className="w-full bg-surface border border-input px-3 py-2 text-primary text-sm focus:outline-none focus:border-primary"
                />
                <input
                  placeholder="Slug (e.g. my-new-post)"
                  value={newSlug}
                  onChange={(e) => setNewSlug(e.target.value)}
                  className="w-full bg-surface border border-input px-3 py-2 text-primary text-sm focus:outline-none focus:border-primary"
                />
                <button
                  onClick={handleCreate}
                  className="w-full border border-primary text-primary px-4 py-2 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all"
                >
                  Create
                </button>
              </div>
            </div>

            {/* Upload .md file */}
            <div className="border-t border-default pt-4">
              <h2 className="text-primary text-xs uppercase tracking-[0.15em] font-semibold mb-3">Upload .md File</h2>
              <div className="space-y-2">
                <input
                  placeholder="Target section (e.g. blog/engineering)"
                  value={uploadSection}
                  onChange={(e) => setUploadSection(e.target.value)}
                  className="w-full bg-surface border border-input px-3 py-2 text-primary text-sm focus:outline-none focus:border-primary"
                />
                {/* Drag-and-drop zone */}
                <div
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  className={`border-2 border-dashed p-4 text-center transition-colors cursor-pointer ${
                    dragOver ? "border-primary bg-inverse/5" : "border-strong hover:border-muted"
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                >
                  <p className="text-muted text-xs uppercase tracking-[0.15em]">
                    {dragOver ? "Drop here" : "Drag & drop or click"}
                  </p>
                  <p className="text-muted text-[10px] mt-1">.md files only</p>
                </div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".md"
                  multiple
                  onChange={handleFileInputChange}
                  className="hidden"
                />
              </div>
            </div>
          </div>

          {/* Editor */}
          <div className="lg:col-span-2">
            {selectedSection && selectedSlug ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-muted text-xs font-mono">{selectedSection}/{selectedSlug}.md</p>
                  <button
                    onClick={handleSave}
                    className="border border-primary text-primary px-6 py-2 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all"
                  >
                    Save
                  </button>
                </div>

                <div>
                  <label className="block text-muted text-[10px] uppercase tracking-[0.2em] mb-1">Frontmatter</label>
                  <textarea
                    value={editorFrontmatter}
                    onChange={(e) => setEditorFrontmatter(e.target.value)}
                    rows={5}
                    className="w-full bg-surface border border-input px-3 py-2 text-primary text-sm font-mono focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <div>
                  <label className="block text-muted text-[10px] uppercase tracking-[0.2em] mb-1">Body (Markdown)</label>
                  <textarea
                    value={editorBody}
                    onChange={(e) => setEditorBody(e.target.value)}
                    rows={24}
                    className="w-full bg-surface border border-input px-3 py-2 text-primary text-sm font-mono focus:outline-none focus:border-primary resize-none"
                    placeholder="Markdown content..."
                  />
                </div>
              </div>
            ) : (
              <div className="border border-default bg-surface p-8 text-center h-48 flex items-center justify-center">
                <p className="text-muted text-xs uppercase tracking-[0.15em]">Select a file to edit</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
