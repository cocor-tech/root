import Link from "next/link"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Agency — Cocor Tech",
  description: "Cocor Tech Agency builds custom software, MVPs, staff augmentation, and legacy modernization for companies worldwide.",
  alternates: { canonical: "/agency" },
}

const services = [
  { title: "Custom Software Development", range: "From $20K", href: "/agency/services/custom-software-development" },
  { title: "MVP Development", range: "From $10K", href: "/agency/services/mvp-development" },
  { title: "Staff Augmentation", range: "From $5K/mo", href: "/agency/services/staff-augmentation" },
  { title: "Legacy Modernization", range: "From $30K", href: "/agency/services/legacy-modernization" },
]

export default function AgencyPage() {
  return (
    <PublicLayout>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen pt-8 px-6">
        <p className="arch-label mb-4">Agency</p>
        <h1 className="text-3xl font-black text-white mb-4">The Agency</h1>
        <p className="text-[#707070] text-sm mb-8">We build software that moves businesses forward.</p>

        <div className="border border-[#00ff41]/30 bg-black font-mono p-4 text-xs mb-8">
          <p className="text-[#00ff41] mb-2">$ ./cocor-agency --services</p>
          <div className="text-[#505050] space-y-1">
            <p><span className="text-[#00ff41]">├──</span> Custom Software</p>
            <p><span className="text-[#00ff41]">├──</span> MVP Development</p>
            <p><span className="text-[#00ff41]">├──</span> Staff Augmentation</p>
            <p><span className="text-[#00ff41]">└──</span> Legacy Modernization</p>
          </div>
        </div>

        <div className="space-y-3 mb-8">
          {services.map((s) => (
            <Link key={s.title} href={s.href} className="block border border-[#1a1a1a] p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-sm font-semibold">{s.title}</h3>
                <span className="text-[#505050] text-[10px]">{s.range}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {["/agency/portfolio", "/agency/process", "/agency/technologies", "/agency/pricing"].map((href) => {
            const label = href.split("/").pop() || ""
            return (
              <Link key={href} href={href} className="border border-[#1a1a1a] text-[#707070] px-3 py-1.5 text-[10px] uppercase tracking-[0.15em]">
                {label}
              </Link>
            )
          })}
        </div>

        <Link href="/contact" className="block border border-white text-white text-center py-3 text-xs uppercase tracking-[0.2em]">
          Start a Project
        </Link>
      </div>

      {/* Desktop */}
      <div className="hidden md:block min-h-screen pt-20">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a] mb-20">
            <div className="bg-[#0a0a0a] p-12">
              <p className="arch-label mb-4">Agency</p>
              <h1 className="text-5xl font-black text-white mb-6 leading-[0.95]">The Agency</h1>
              <p className="text-[#606060] text-sm leading-relaxed max-w-sm mb-8">
                We build software that moves businesses forward. Custom development, MVPs,
                staff augmentation, and legacy modernization. Enterprise quality at competitive rates.
              </p>
              <div className="flex gap-3">
                <Link href="/contact" className="border border-white text-white px-8 py-3 text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all">Start a Project</Link>
                <Link href="/agency/portfolio" className="border border-[#1a1a1a] text-[#707070] px-8 py-3 text-[10px] uppercase tracking-[0.25em] hover:border-white hover:text-white transition-all">View Portfolio</Link>
              </div>
            </div>

            <div className="bg-black p-12 font-mono flex items-center">
              <div>
                <p className="text-[#00ff41] text-xs mb-4">$ ./cocor-agency --capabilities</p>
                <div className="space-y-2 text-xs text-[#606060]">
                  <p><span className="text-[#00ff41]">├──</span> Custom Software Development — from $20K</p>
                  <p><span className="text-[#00ff41]">├──</span> MVP Development (4-12 weeks) — from $10K</p>
                  <p><span className="text-[#00ff41]">├──</span> Staff Augmentation — from $5K/month</p>
                  <p><span className="text-[#00ff41]">└──</span> Legacy Modernization — from $30K</p>
                  <p className="mt-4 text-[#333]">Stack: Next.js, Go, Rust, TypeScript, Stellar, PostgreSQL</p>
                  <p className="text-[#333]">Location: Nigeria → <span className="text-[#00ff41]">Global delivery</span></p>
                  <p className="text-[#333]">Status: <span className="text-[#00ff41]">Available for projects</span></p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-16">
            {[
              { label: "Portfolio", href: "/agency/portfolio" },
              { label: "Process", href: "/agency/process" },
              { label: "Technologies", href: "/agency/technologies" },
              { label: "Pricing", href: "/agency/pricing" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group panel p-6">
                <p className="text-white text-xs font-semibold uppercase tracking-[0.1em] mb-1">{item.label}</p>
                <p className="text-[#333] text-[10px]">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
