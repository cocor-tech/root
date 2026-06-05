import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Careers — Cocor Tech",
  description: "Join Cocor Tech. We're building digital assets for the long term. Remote-first, ambitious, and always building.",
  alternates: { canonical: "/careers" },
}

export default function CareersPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Careers</p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Join Us</h1>
          <p className="text-[#888] text-sm md:text-base max-w-lg mb-12 leading-relaxed">
            We're building the infrastructure for the next generation of digital assets. Remote-first, ambitious, and always building.
          </p>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-8 mb-6">
            <h2 className="text-white font-semibold mb-3">No Openings Right Now</h2>
            <p className="text-[#888] text-sm leading-relaxed mb-4">
              We're not actively hiring, but we're always interested in connecting with talented people. If you build software, write, or operate digital assets, reach out.
            </p>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-2 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-200 inline-block"
            >
              Get in Touch
            </Link>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-8">
            <h2 className="text-white font-semibold mb-3">What We Value</h2>
            <ul className="space-y-2 text-[#888] text-sm">
              <li>— Ownership and initiative</li>
              <li>— Long-term thinking</li>
              <li>— Clear communication</li>
              <li>— Craftsmanship in code and content</li>
              <li>— Remote-first, async-friendly workflow</li>
            </ul>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
