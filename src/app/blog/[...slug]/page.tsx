import path from "path"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { loadContent, listContentRecursive } from "@/lib/content"
import { mdToHtml } from "@/lib/markdown"
import { buildMetadata } from "@/lib/seo"
import { articleSchema, breadcrumbSchema } from "@/lib/jsonld"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export async function generateStaticParams() {
  const posts = listContentRecursive(BLOG_DIR)
  return posts.map((post) => ({ slug: post.slug.split("/") }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug: slugArr } = await params
  const postSlug = slugArr.join("/")
  const doc = loadContent(BLOG_DIR, postSlug)
  if (!doc) return { title: "Post Not Found — Cocor Tech" }

  return buildMetadata({
    title: doc.meta.title,
    description: doc.meta.description,
    slug: `blog/${postSlug}`,
    keywords: `${doc.meta.category || "blog"}, cocor tech, ${doc.meta.title.toLowerCase()}`,
    publishedTime: doc.meta.published,
    author: doc.meta.author,
    category: doc.meta.category,
    type: "article",
  })
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
            <h1 className="text-6xl font-black text-primary mb-4">404</h1>
            <p className="text-secondary mb-6">Post not found.</p>
            <a href="/blog" className="inline-block border border-primary text-primary px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200">Back to Blog</a>
          </div>
        </div>
      </PublicLayout>
    )
  }

  const html = mdToHtml(doc.content)
  const articleJson = articleSchema({
    title: doc.meta.title,
    description: doc.meta.description,
    url: `/blog/${postSlug}`,
    publishedTime: doc.meta.published || "",
    author: doc.meta.author || "Nekwachukwu Ucheokoye",
    category: doc.meta.category,
  })
  const breadcrumb = breadcrumbSchema([
    { name: "Blog", url: "/blog" },
    { name: doc.meta.title, url: `/blog/${postSlug}` },
  ])

  return (
    <PublicLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="flex items-center gap-3 text-[10px] text-muted uppercase tracking-[0.15em] mb-6">
          {doc.meta.category && <span>{doc.meta.category}</span>}
          {doc.meta.published && <span>{doc.meta.published}</span>}
          {doc.meta.author && <span>By {doc.meta.author}</span>}
        </div>
        <div className="bg-surface border border-default p-6 md:p-10">
          <article dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>
    </PublicLayout>
  )
}
