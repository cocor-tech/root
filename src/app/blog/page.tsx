import Link from "next/link"
import path from "path"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { listContentRecursive } from "@/lib/content"

export const metadata: Metadata = {
  title: "Blog — Cocor Tech",
  description: "Insights on engineering, business, digital asset investing, and company building from Cocor Tech.",
  alternates: { canonical: "/blog" },
}

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export default function BlogPage() {
  const posts = listContentRecursive(BLOG_DIR)

  return (
    <PublicLayout>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen pt-8 px-6 pb-16">
        <p className="arch-label mb-4">Blog</p>
        <h1 className="text-3xl font-black text-white mb-2">Blog</h1>
        <p className="text-[#707070] text-sm mb-8">Insights from Cocor Tech.</p>
        <div className="space-y-3">
          {posts.length === 0 && <p className="text-[#505050] text-sm">No posts yet.</p>}
          {posts.map((post) => (
            <article key={post.slug} className="border border-[#1a1a1a] p-4">
              <div className="flex items-center gap-3 text-[10px] text-[#505050] uppercase tracking-[0.15em] mb-1">
                {post.category && <Link href={`/blog/category/${post.category}`} className="hover:text-white transition-colors">{post.category}</Link>}
                {post.published && <span>{post.published}</span>}
              </div>
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-white text-sm font-semibold hover:text-[#707070] transition-colors">{post.title}</h2>
              </Link>
              <p className="text-[#606060] text-xs mt-1 line-clamp-2">{post.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block min-h-screen pt-20 pb-24">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <p className="arch-label mb-4">Blog</p>
          <h1 className="text-6xl font-black text-white mb-4">Blog</h1>
          <p className="text-[#606060] text-sm max-w-lg mb-16">
            Insights on engineering, business, digital asset investing, and company building.
          </p>

          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
            {posts.length === 0 && (
              <div className="col-span-2 bg-[#0a0a0a] p-8">
                <p className="text-[#606060] text-sm">No posts yet. New content coming soon.</p>
              </div>
            )}
            {posts.map((post) => (
              <article key={post.slug} className="group bg-[#0a0a0a] p-8 hover:bg-black transition-colors">
                <div className="flex items-center gap-3 text-[10px] text-[#505050] uppercase tracking-[0.15em] mb-3">
                  {post.category && <Link href={`/blog/category/${post.category}`} className="hover:text-white transition-colors">{post.category}</Link>}
                  {post.published && <span>{post.published}</span>}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-white font-semibold text-lg group-hover:text-[#707070] transition-colors">{post.title}</h2>
                </Link>
                <p className="text-[#606060] text-sm mt-2 leading-relaxed">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
