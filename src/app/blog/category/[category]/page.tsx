import Link from "next/link"
import path from "path"
import { Metadata } from "next"
import { notFound } from "next/navigation"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { listContent } from "@/lib/content"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
  const { category } = await params
  return {
    title: `${category.charAt(0).toUpperCase() + category.slice(1)} — Cocor Tech Blog`,
    description: `Articles about ${category} from Cocor Tech.`,
    robots: { index: true, follow: true },
  }
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryDir = path.join(BLOG_DIR, category)

  const posts = listContent(categoryDir)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Blog / {category}</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-2 capitalize">{category}</h1>
          <p className="text-[#888] text-sm max-w-lg mb-12">Articles about {category} from Cocor Tech.</p>

          <div className="space-y-4">
            {posts.map((post) => (
              <article key={post.slug} className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 hover:border-[#333] transition-colors">
                <div className="flex items-center gap-3 text-[10px] text-[#555] uppercase tracking-[0.15em] mb-2">
                  {post.published && <span>{post.published}</span>}
                </div>
                <Link href={`/blog/${category}/${post.slug}`}>
                  <h2 className="text-white font-semibold text-lg hover:text-[#888] transition-colors">{post.title}</h2>
                </Link>
                <p className="text-[#888] text-sm mt-2">{post.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
