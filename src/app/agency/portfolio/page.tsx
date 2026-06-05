import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Portfolio — Cocor Tech Agency",
  description: "Selected projects from Cocor Tech Agency — custom software, MVPs, and digital products we've built.",
}

export default function PortfolioPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Portfolio</h1>
          <p className="text-[#888] text-sm md:text-base max-w-xl mb-16 leading-relaxed">
            Selected projects we've built. Each one reflects our commitment to quality and craftsmanship.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a]">
            <Link href="/agency/portfolio/project-1" className="bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#050505] transition-colors group">
              <p className="text-[#333] text-xs font-mono mb-2">2026</p>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#888] transition-colors">Moistello</h3>
              <p className="text-[#888] text-sm leading-relaxed">Decentralized savings platform on Stellar. Full-stack: Rust smart contracts, Go backend, Next.js frontend.</p>
            </Link>

            <Link href="/agency/portfolio/project-2" className="bg-[#0a0a0a] p-8 md:p-10 hover:bg-[#050505] transition-colors group">
              <p className="text-[#333] text-xs font-mono mb-2">2025</p>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#888] transition-colors">Client Project</h3>
              <p className="text-[#888] text-sm leading-relaxed">Custom software build for a client. Details available on request.</p>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/contact" className="border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-200 inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
