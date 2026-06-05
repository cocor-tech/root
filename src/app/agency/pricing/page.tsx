import { buildMetadata } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = buildMetadata({
    title: "Pricing",
    description: "Cocor Tech Agency pricing — project-based, fixed-price, and monthly retainer options for custom software, MVPs, staff augmentation, and modernization.",
    slug: "agency/pricing",
    keywords: "software development pricing, agency rates, project cost",
  })

const services = [
  { name: "Custom Software Development", model: "Project-based", range: "$20K - $200K" },
  { name: "MVP Development", model: "Fixed-price", range: "$10K - $50K" },
  { name: "Staff Augmentation", model: "Monthly retainer", range: "$5K - $30K/month" },
  { name: "Legacy Modernization", model: "Project-based", range: "$30K - $150K" },
  { name: "Maintenance & Support", model: "Monthly retainer", range: "$2K - $10K/month" },
]

export default function PricingPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Pricing</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Pricing</h1>
          <p className="text-secondary text-sm md:text-base max-w-xl mb-12 leading-relaxed">
            We offer transparent pricing across all services. Every project starts with a conversation to understand scope and requirements.
          </p>

          <div className="border border-default divide-y divide-default mb-12">
            {services.map((s) => (
              <div key={s.name} className="bg-surface p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-primary font-semibold">{s.name}</h3>
                  <p className="text-muted text-xs uppercase tracking-[0.1em] mt-1">{s.model}</p>
                </div>
                <span className="text-secondary text-sm font-mono whitespace-nowrap">{s.range}</span>
              </div>
            ))}
          </div>

          <div className="border border-default bg-surface p-6 md:p-8 mb-12">
            <h2 className="text-primary font-semibold mb-3">Our Pricing Philosophy</h2>
            <ul className="space-y-2 text-secondary text-sm">
              <li>— Project-based pricing for well-defined scope</li>
              <li>— Fixed-price for MVPs and smaller engagements</li>
              <li>— Monthly retainer for ongoing work and staff augmentation</li>
              <li>— Custom quotes for large or complex engagements</li>
              <li>— Operating from Nigeria means competitive global rates</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
