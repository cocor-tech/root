import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Philosophy — Brand Assets — Cocor Tech",
  description: "Why Cocor Tech invests in brand assets. Our philosophy on digital real estate, brand value, and long-term wealth creation.",
}

export default function PhilosophyPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Brands / Philosophy</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Our Philosophy</h1>
          <p className="text-secondary text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            We believe the greatest digital assets are still undervalued. Our approach is patient, strategic, and long-term.
          </p>

          <div className="space-y-8">
            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Digital Real Estate Compounds</h2>
              <p className="text-secondary text-sm leading-relaxed">
                Like physical real estate, premium digital properties appreciate over time. A great domain with a growing brand
                becomes more valuable every year. Unlike physical real estate, there are no property taxes, no maintenance costs,
                and global liquidity.
              </p>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Brands are Moats</h2>
              <p className="text-secondary text-sm leading-relaxed">
                A strong brand is the most durable competitive advantage. It takes years to build and cannot be copied.
                By acquiring established brands and developing them further, we create assets that are difficult to replicate.
              </p>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Value Creation, Not Speculation</h2>
              <p className="text-secondary text-sm leading-relaxed">
                We don't flip domains. We build businesses. Every acquisition gets developed — content, product, traffic, revenue.
                We create value through execution, not through waiting for someone else to build it.
              </p>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Patient Capital</h2>
              <p className="text-secondary text-sm leading-relaxed">
                We hold assets for years, not months. The Cocor Tech agency generates revenue that funds brand asset development,
                allowing us to be patient and strategic rather than forced to sell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
