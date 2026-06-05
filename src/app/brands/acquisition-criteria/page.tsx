import { buildMetadata } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = buildMetadata({
    title: "Acquisition Criteria",
    description: "What Cocor Tech looks for when acquiring digital properties — traffic, revenue, niche, domain quality, and more.",
    slug: "brands/acquisition-criteria",
    keywords: "acquisition criteria, buy websites, digital property",
  })

export default function AcquisitionCriteriaPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Brands / Acquisition Criteria</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Acquisition Criteria</h1>
          <p className="text-secondary text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            We are actively acquiring digital properties. Here is what we look for.
          </p>

          <div className="border border-default divide-y divide-default mb-12">
            {[
              { factor: "Monthly Traffic", min: "1,000+ unique visitors", pref: "10,000+" },
              { factor: "Revenue", min: "Any", pref: "$500+/month" },
              { factor: "Niche", min: "Any growing industry", pref: "Fintech, SaaS, DeFi, Education" },
              { factor: "Domain Quality", min: "Premium TLD (.com, .io)", pref: "Brandable, short, keyword-rich" },
              { factor: "Existing Content", min: "Some", pref: "Well-established" },
              { factor: "Technical Debt", min: "Low", pref: "Clean codebase" },
              { factor: "Ask Price", min: "Negotiable", pref: "Under $50K" },
            ].map((row) => (
              <div key={row.factor} className="bg-surface p-6 grid grid-cols-3 gap-4">
                <span className="text-primary text-sm font-semibold">{row.factor}</span>
                <span className="text-secondary text-sm">{row.min}</span>
                <span className="text-muted text-sm">{row.pref}</span>
              </div>
            ))}
          </div>

          <div className="border border-default bg-surface p-6 md:p-8 mb-12">
            <h2 className="text-primary font-semibold mb-3">How to Submit a Proposal</h2>
            <p className="text-secondary text-sm leading-relaxed mb-4">
              If you own a digital property that meets our criteria, we want to hear from you.
            </p>
            <ul className="space-y-2 text-secondary text-sm">
              <li>— Message us on X at @cocortech with details about your property</li>
              <li>— Include traffic, revenue, and asking price</li>
              <li>— We respond within 5 business days</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
              Submit Your Property
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
