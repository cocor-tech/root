import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Pricing — Cocor Tech Agency",
  description: "Cocor Tech Agency pricing — project-based, fixed-price, and monthly retainer options for custom software, MVPs, staff augmentation, and modernization.",
}

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
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Pricing</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Pricing</h1>
          <p className="text-[#888] text-sm md:text-base max-w-xl mb-12 leading-relaxed">
            We offer transparent pricing across all services. Every project starts with a conversation to understand scope and requirements.
          </p>

          <div className="border border-[#1a1a1a] divide-y divide-[#1a1a1a] mb-12">
            {services.map((s) => (
              <div key={s.name} className="bg-[#0a0a0a] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-2">
                <div>
                  <h3 className="text-white font-semibold">{s.name}</h3>
                  <p className="text-[#555] text-xs uppercase tracking-[0.1em] mt-1">{s.model}</p>
                </div>
                <span className="text-[#888] text-sm font-mono whitespace-nowrap">{s.range}</span>
              </div>
            ))}
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 md:p-8 mb-12">
            <h2 className="text-white font-semibold mb-3">Our Pricing Philosophy</h2>
            <ul className="space-y-2 text-[#888] text-sm">
              <li>— Project-based pricing for well-defined scope</li>
              <li>— Fixed-price for MVPs and smaller engagements</li>
              <li>— Monthly retainer for ongoing work and staff augmentation</li>
              <li>— Custom quotes for large or complex engagements</li>
              <li>— Operating from Nigeria means competitive global rates</li>
            </ul>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-200 inline-block">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
