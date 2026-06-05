import { buildMetadata } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = buildMetadata({
    title: "Portfolio",
    description: "Selected projects from Cocor Tech Agency — custom software, MVPs, and digital products we have built.",
    slug: "agency/portfolio",
    keywords: "software portfolio, case studies, web development projects",
  })

export default function PortfolioPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Portfolio</h1>
          <p className="text-secondary text-sm md:text-base max-w-xl mb-16 leading-relaxed">
            Selected projects we've built. Each one reflects our commitment to quality and craftsmanship.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-grid">
            <Link href="/agency/portfolio/project-1" className="bg-surface p-8 md:p-10 hover:bg-elevated transition-colors group">
              <p className="text-subtle text-xs font-mono mb-2">2026</p>
              <h3 className="text-primary font-semibold text-lg mb-2 group-hover:text-secondary transition-colors">Moistello</h3>
              <p className="text-secondary text-sm leading-relaxed">Decentralized savings platform on Stellar. Full-stack: Rust smart contracts, Go backend, Next.js frontend.</p>
            </Link>

            <Link href="/agency/portfolio/project-2" className="bg-surface p-8 md:p-10 hover:bg-elevated transition-colors group">
              <p className="text-subtle text-xs font-mono mb-2">2025</p>
              <h3 className="text-primary font-semibold text-lg mb-2 group-hover:text-secondary transition-colors">Client Project</h3>
              <p className="text-secondary text-sm leading-relaxed">Custom software build for a client. Details available on request.</p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
