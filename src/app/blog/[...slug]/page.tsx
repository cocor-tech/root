import path from "path"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { loadContent, listContentRecursive } from "@/lib/content"
import { mdToHtml } from "@/lib/markdown"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export async function generateStaticParams() {
  const posts = listContentRecursive(BLOG_DIR)
  return posts.map((post) => ({
    slug: post.slug.split("/"),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug: slugArr } = await params
  const postSlug = slugArr.join("/")
  const doc = loadContent(BLOG_DIR, postSlug)

  if (!doc) return { title: "Post Not Found — Cocor Tech" }

  return {
    title: `${doc.meta.title} — Cocor Tech Blog`,
    description: doc.meta.description,
    alternates: { canonical: `/blog/${postSlug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      title: doc.meta.title,
      description: doc.meta.description,
      url: `https://cocor.tech/blog/${postSlug}`,
      siteName: "Cocor Tech",
      publishedTime: doc.meta.published,
      authors: doc.meta.author ? [doc.meta.author] : [],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug: slugArr } = await params
  const postSlug = slugArr.join("/")
  const doc = loadContent(BLOG_DIR, postSlug)

  if (!doc) {
    return (
      <PublicLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center max-w-md px-6">
            <h1 className="text-6xl font-black text-white mb-4">404</h1>
            <p className="text-[#888] mb-6">Post not found.</p>
            <a href="/blog" className="inline-block border border-white text-white px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-200">
              Back to Blog
            </a>
          </div>
        </div>
      </PublicLayout>
    )
  }

  const html = mdToHtml(doc.content)

  return (
    <PublicLayout>
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="flex items-center gap-3 text-[10px] text-[#555] uppercase tracking-[0.15em] mb-6">
          {doc.meta.category && <span>{doc.meta.category}</span>}
          {doc.meta.published && <span>{doc.meta.published}</span>}
          {doc.meta.author && <span>By {doc.meta.author}</span>}
        </div>
        <div className="bg-[#0a0a0a] border border-[#1a1a1a] p-6 md:p-10">
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </PublicLayout>
  )
}
