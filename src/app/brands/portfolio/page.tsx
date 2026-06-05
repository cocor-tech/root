import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Portfolio — Brand Assets — Cocor Tech",
  description: "Cocor Tech's brand asset portfolio — premium domains and digital properties we own and operate.",
}

export default function BrandPortfolioPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Brands / Portfolio</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Portfolio</h1>
          <p className="text-[#888] text-sm md:text-base max-w-xl mb-12 leading-relaxed">
            Digital properties we own and operate. Our portfolio is not publicly disclosed in full, but here are select assets.
          </p>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-12 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 border border-[#333] flex items-center justify-center">
                <span className="text-[#555] text-xs font-mono">CT</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Cocor Tech</h3>
                <p className="text-[#555] text-xs uppercase tracking-[0.15em]">Parent Company</p>
              </div>
            </div>
            <p className="text-[#888] text-sm">cocor.tech — The operating company you're reading about right now.</p>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-12 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 border border-[#333] flex items-center justify-center">
                <span className="text-[#555] text-xs font-mono">M</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Moistello</h3>
                <p className="text-[#555] text-xs uppercase tracking-[0.15em]">Flagship Product</p>
              </div>
            </div>
            <p className="text-[#888] text-sm">moistello.com — Decentralized savings circles on the Stellar blockchain.</p>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-12">
            <p className="text-[#888] text-sm italic">
              Additional portfolio assets are not publicly listed. Contact us for partnership or acquisition inquiries.
            </p>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
