import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import path from "path"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { listContentRecursive } from "@/lib/content"

export const metadata: Metadata = buildMetadata({
    title: "Blog",
    description: "Insights on engineering, business, digital asset investing, and company building from Cocor Tech.",
    slug: "blog",
    keywords: "blog, engineering, business, digital assets, cocor tech",
  })

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export default function BlogPage() {
  const posts = listContentRecursive(BLOG_DIR)

  return (
    <PublicLayout>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen pt-8 px-6 pb-16">
        <p className="arch-label mb-4">Blog</p>
        <h1 className="text-3xl font-black text-primary mb-2">Blog</h1>
        <p className="text-secondary text-sm mb-8">Insights from Cocor Tech.</p>
        <div className="space-y-3">
          {posts.length === 0 && <p className="text-muted text-sm">No posts yet.</p>}
          {posts.map((post) => (
            <article key={post.slug} className="border border-default p-4">
              <div className="flex items-center gap-3 text-[10px] text-muted uppercase tracking-[0.15em] mb-1">
                {post.category && <Link href={`/blog/category/${post.category}`} className="hover:text-primary transition-colors">{post.category}</Link>}
                {post.published && <span>{post.published}</span>}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-primary text-sm font-semibold hover:text-secondary transition-colors">{post.title}</h2>
              </Link>
              <p className="text-secondary text-xs mt-1 line-clamp-2">{post.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block min-h-screen pt-20 pb-24">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <p className="arch-label mb-4">Blog</p>
          <h1 className="text-6xl font-black text-primary mb-4">Blog</h1>
          <p className="text-secondary text-sm max-w-lg mb-16">
            Insights on engineering, business, digital asset investing, and company building.
          </p>

          <div className="grid grid-cols-2 gap-px bg-grid">
            {posts.length === 0 && (
              <div className="col-span-2 bg-surface p-8">
                <p className="text-secondary text-sm">No posts yet. New content coming soon.</p>
              </div>
            )}
            {posts.map((post) => (
              <article key={post.slug} className="group bg-surface p-8 hover:bg-bg-main transition-colors">
                <div className="flex items-center gap-3 text-[10px] text-muted uppercase tracking-[0.15em] mb-3">
                  {post.category && <Link href={`/blog/category/${post.category}`} className="hover:text-primary transition-colors">{post.category}</Link>}
                  {post.published && <span>{post.published}</span>}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-primary font-semibold text-lg group-hover:text-secondary transition-colors">{post.title}</h2>
                </Link>
                <p className="text-secondary text-sm mt-2 leading-relaxed">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
