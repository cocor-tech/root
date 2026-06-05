import Link from "next/link"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Brand Assets — Cocor Tech",
  description: "Cocor Tech acquires, develops, and scales digital properties.",
  alternates: { canonical: "/brands" },
}

const phases = [
  { num: "01", title: "Identify & Acquire", desc: "Undervalued digital properties with strong fundamentals." },
  { num: "02", title: "Develop & Grow", desc: "Build MVPs, create content, drive traffic, establish revenue." },
  { num: "03", title: "Hold or Exit", desc: "Hold cash-flowing assets or sell at multiples." },
]

export default function BrandsPage() {
  return (
    <PublicLayout>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen pt-8 px-6">
        <p className="arch-label mb-4">Brand Assets</p>
        <h1 className="text-3xl font-black text-primary mb-4">Brand Assets</h1>
        <p className="text-secondary text-sm mb-8">Acquire, develop, and scale digital properties.</p>
        <div className="space-y-3 mb-8">
          {phases.map((p) => (
            <div key={p.num} className="border border-default p-4">
              <span className="text-subtle text-[10px] font-mono">{p.num}</span>
              <h3 className="text-primary text-sm font-semibold mt-1">{p.title}</h3>
              <p className="text-secondary text-xs mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
        <Link href="/brands/philosophy" className="block border border-primary text-primary text-center py-3 text-xs uppercase tracking-[0.2em]">
          Our Philosophy
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden md:block min-h-screen pt-20">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <p className="arch-label mb-4">Brand Assets</p>
          <h1 className="text-6xl font-black text-primary mb-6 leading-[0.95]">Brand Assets</h1>
          <p className="text-secondary text-sm max-w-xl mb-16 leading-relaxed">
            We acquire premium domains and digital properties, develop them into valuable assets, and hold or exit at multiples.
          </p>

          <div className="grid grid-cols-3 gap-px bg-grid mb-16">
            {phases.map((p) => (
              <div key={p.num} className="bg-surface p-10">
                <span className="text-subtle text-[10px] font-mono">{p.num}</span>
                <h3 className="text-primary text-lg font-semibold mt-4 mb-3">{p.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Philosophy", href: "/brands/philosophy" },
              { label: "Acquisition Criteria", href: "/brands/acquisition-criteria" },
              { label: "Portfolio", href: "/brands/portfolio" },
              { label: "Development Process", href: "/brands/development-process" },
              { label: "Exit Strategy", href: "/brands/exit-strategy" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group panel p-6">
                <p className="text-primary text-xs font-semibold uppercase tracking-[0.1em] mb-1">{item.label}</p>
                <p className="text-subtle text-[10px]">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
