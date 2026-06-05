import path from "path"
import Link from "next/link"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { loadContent, listContent } from "@/lib/content"
import { mdToHtml } from "@/lib/markdown"

const DOCS_DIR = path.join(process.cwd(), "content/docs")

export async function generateMetadata({ params }: { params: Promise<{ slug?: string[] }> }): Promise<Metadata> {
  const { slug: slugArr } = await params
  const targetSlug = slugArr?.join("/") || "index"
  const doc = loadContent(DOCS_DIR, targetSlug)

  if (!doc) return { title: "Doc Not Found — Cocor Tech" }

  return {
    title: `${doc.meta.title} — Cocor Tech Docs`,
    description: doc.meta.description,
    robots: { index: true, follow: true },
  }
}

export default async function DocsPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug: slugArr } = await params
  const targetSlug = slugArr?.join("/") || "index"
  const doc = loadContent(DOCS_DIR, targetSlug)
  const allDocs = listContent(DOCS_DIR)

  if (!doc) {
    return (
      <PublicLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <h1 className="text-6xl font-black text-primary mb-4">404</h1>
            <p className="text-secondary mb-6">Doc not found. Create a file in <code className="bg-surface px-2 py-0.5 text-sm font-mono">content/docs/</code> to add it.</p>
            <Link href="/docs" className="inline-block border border-primary text-primary px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-inverse transition-all duration-200">
              Back to Docs
            </Link>
          </div>
        </div>
      </PublicLayout>
    )
  }

  const html = mdToHtml(doc.content)

  return (
    <PublicLayout>
      <div className="min-h-screen pt-24 pb-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <aside className="lg:w-56 shrink-0">
              <nav className="lg:sticky lg:top-28 space-y-1">
                <Link href="/docs" className="block text-primary text-sm font-semibold uppercase tracking-[0.15em] mb-4">
                  Docs
                </Link>
                {allDocs.map((d) => (
                  <Link
                    key={d.slug}
                    href={`/docs/${d.slug}`}
                    className={`block rounded-none px-3 py-2 text-sm transition-colors ${
                      targetSlug === d.slug
                        ? "bg-inverse text-inverse font-medium"
                        : "text-secondary hover:text-primary hover:bg-surface"
                    }`}
                  >
                    {d.title}
                  </Link>
                ))}
              </nav>
            </aside>

            <main className="flex-1 min-w-0">
              <div className="bg-surface border border-default p-6 md:p-10">
                <article dangerouslySetInnerHTML={{ __html: html }} />
              </div>
            </main>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
