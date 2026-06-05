import { buildMetadata } from "@/lib/seo"
import Link from "next/link"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = buildMetadata({
    title: "Products",
    description: "Cocor Tech builds digital products. Our flagship is Moistello, a decentralized savings platform on the Stellar blockchain.",
    slug: "products",
    keywords: "products, cocor tech, digital assets, software",
  })

export default function ProductsPage() {
  return (
    <PublicLayout>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen pt-8 px-6">
        <p className="arch-label mb-4">Products</p>
        <h1 className="text-3xl font-black text-primary mb-4">Products</h1>
        <p className="text-secondary text-sm mb-8">We build and operate digital products.</p>

        <div className="border border-default p-5 mb-8">
          <p className="text-subtle text-[10px] font-mono mb-2">Flagship</p>
          <h2 className="text-xl font-bold text-primary mb-2">Moistello</h2>
          <p className="text-secondary text-sm mb-4">Decentralized savings on Stellar.</p>
          <div className="flex flex-col gap-2">
            <Link href="/products/moistello" className="border border-primary text-primary text-center py-2 text-xs uppercase tracking-[0.2em]">Overview</Link>
            <a href="https://moistello.com" target="_blank" rel="noopener noreferrer" className="border border-default text-secondary text-center py-2 text-xs uppercase tracking-[0.2em]">Visit Site →</a>
          </div>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block min-h-screen pt-20">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="max-w-[900px] mb-20">
            <p className="arch-label mb-4">Products</p>
            <h1 className="text-6xl font-black text-primary mb-6 leading-[0.95]">Products</h1>
            <p className="text-secondary text-sm max-w-xl leading-relaxed">We build and operate digital products that solve real problems.</p>
          </div>

          <div className="grid grid-cols-2 gap-px bg-grid">
            <div className="bg-surface p-12">
              <p className="arch-label mb-3">Flagship</p>
              <h2 className="text-3xl font-bold text-primary mb-4">Moistello</h2>
              <p className="text-secondary text-sm leading-relaxed max-w-sm mb-8">
                Decentralized savings circles on the Stellar blockchain. Join trustless ROSCAs with USDC/XLM.
              </p>
              <div className="flex gap-3">
                <Link href="/products/moistello" className="border border-primary text-primary px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] hover:bg-inverse hover:text-primary transition-all">Overview</Link>
                <a href="https://moistello.com" target="_blank" rel="noopener noreferrer" className="border border-default text-secondary px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] hover:border-primary hover:text-primary transition-all">Visit Site →</a>
              </div>
            </div>
            <div className="bg-surface p-12 flex flex-col justify-center">
              <div className="grid grid-cols-2 gap-6">
                {[
                  ["4 Circle Types", "Public, Private, Community, Premium"],
                  ["4 Payout Modes", "Random, Fixed, Auction, Vote"],
                  ["MoiScore", "0-1000 on-chain reputation"],
                  ["Security", "Non-custodial, audited contracts"],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-default pt-3">
                    <p className="text-primary text-xs font-semibold uppercase tracking-[0.1em]">{k}</p>
                    <p className="text-secondary text-[11px] mt-1">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
