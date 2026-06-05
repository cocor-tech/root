import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Exit Strategy — Brand Assets — Cocor Tech",
  description: "How Cocor Tech exits brand assets — when we sell, how we package, valuation multiples, and sale channels.",
}

export default function ExitStrategyPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Brands / Exit Strategy</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Exit Strategy</h1>
          <p className="text-secondary text-sm md:text-base max-w-xl mb-12 leading-relaxed">
            We build assets to hold. But when the right offer comes, we exit strategically.
          </p>

          <div className="space-y-6 mb-12">
            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">When We Sell</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— Monthly revenue exceeds $5K consistently</li>
                <li>— Monthly traffic exceeds 50K unique visitors</li>
                <li>— A buyer offers 25-40x monthly revenue (multiples depend on niche and growth)</li>
                <li>— The asset has reached a plateau and further growth requires more resources than we can allocate</li>
              </ul>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">How We Package</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— Domain and brand trademark</li>
                <li>— Fully built product or website</li>
                <li>— User base and traffic history</li>
                <li>— Revenue data and growth trajectory</li>
                <li>— Documentation and operational playbook</li>
              </ul>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Valuation Multiples</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-primary font-semibold">Content Sites</p>
                  <p className="text-secondary">25-40x monthly revenue</p>
                </div>
                <div>
                  <p className="text-primary font-semibold">SaaS Products</p>
                  <p className="text-secondary">10-20x monthly revenue</p>
                </div>
                <div>
                  <p className="text-primary font-semibold">E-commerce</p>
                  <p className="text-secondary">15-30x monthly net profit</p>
                </div>
                <div>
                  <p className="text-primary font-semibold">Premium Domains</p>
                  <p className="text-secondary">Valuation based on comparable sales</p>
                </div>
              </div>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Sale Channels</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— Acquire.com — marketplace for digital assets</li>
                <li>— FE International — M&A advisory for online businesses</li>
                <li>— Quiet Light — brokerage for content and e-commerce sites</li>
                <li>— Direct outreach — strategic buyers in the same niche</li>
                <li>— Private network — connections and referrals</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
