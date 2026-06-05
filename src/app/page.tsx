import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export default function Home() {
  return (
    <PublicLayout>
      {/* ═══════════════════════════════════════ */}
      {/* MOBILE HERO — Simple, minimal, clean */}
      {/* ═══════════════════════════════════════ */}
      <section className="block md:hidden min-h-[90dvh] flex items-center px-6 pt-12">
        <div className="w-full">
          <p className="text-[#505050] text-[10px] uppercase tracking-[0.25em] mb-4">Cocor Tech</p>
          <h1 className="text-[clamp(2.5rem,12vw,4rem)] font-black text-white leading-[0.92] tracking-[-0.03em] mb-4">
            BUILD.
            <br />
            ACQUIRE.
            <br />
            SCALE.
          </h1>
          <p className="text-[#707070] text-sm leading-relaxed mb-8 max-w-xs">
            An operating company that builds, acquires, and scales digital assets for profit.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/products" className="border border-white text-white text-center py-3 text-xs uppercase tracking-[0.2em]">
              Explore Products
            </Link>
            <Link href="/agency" className="border border-[#1a1a1a] text-[#707070] text-center py-3 text-xs uppercase tracking-[0.2em]">
              Hire the Agency
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* DESKTOP HERO — Elaborate, immersive   */}
      {/* ═══════════════════════════════════════ */}
      <section className="hidden md:block relative min-h-screen flex items-center overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 grid-bg opacity-50" />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
        {/* Decorative geometric lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" viewBox="0 0 400 800" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="400" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="300" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="200" y1="0" x2="200" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="300" y1="0" x2="100" y2="800" stroke="white" strokeWidth="0.5" />
          <line x1="400" y1="0" x2="0" y2="800" stroke="white" strokeWidth="0.5" />
        </svg>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 w-full">
          <div className="max-w-[900px]">
            <p className="text-[#505050] text-[10px] uppercase tracking-[0.3em] mb-6">
              An operating company
            </p>
            <h1 className="text-[clamp(4rem,8vw,8rem)] font-black text-white leading-[0.88] tracking-[-0.04em] mb-8">
              BUILD.
              <br />
              ACQUIRE.
              <br />
              <span className="relative inline-block">
                SCALE.
                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-white/20" />
              </span>
            </h1>
            <p className="text-[#707070] text-sm max-w-xl leading-relaxed mb-12">
              An operating company that builds, acquires, and scales digital assets for profit.
              Three divisions. One flywheel. A compounding return on ambition.
            </p>
            <div className="flex gap-4">
              <Link
                href="/products"
                className="border border-white text-white px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
              >
                Explore Products
              </Link>
              <Link
                href="/agency"
                className="border border-[#1a1a1a] text-[#707070] px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:border-white hover:text-white transition-all duration-300"
              >
                Hire the Agency →
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[#333] text-[8px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#333] to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* DIVISIONS — Mobile: simple list        */}
      {/*            Desktop: grid with hover    */}
      {/* ═══════════════════════════════════════ */}
      <section className="border-t border-[#1a1a1a]">
        {/* Mobile */}
        <div className="block md:hidden px-6 py-12 space-y-6">
          <p className="arch-label">Divisions</p>
          <h2 className="text-2xl font-bold text-white">Three divisions, one flywheel</h2>
          {divisions.map((d, i) => (
            <div key={d.title} className="border border-[#1a1a1a] p-5">
              <p className="text-[#333] text-[10px] font-mono mb-2">0{i + 1}</p>
              <h3 className="text-white font-semibold mb-2">{d.title}</h3>
              <p className="text-[#707070] text-sm leading-relaxed mb-3">{d.desc}</p>
              <Link href={d.href} className="text-white text-[10px] uppercase tracking-[0.2em]">
                {d.cta} →
              </Link>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <div className="hidden md:block max-w-[1440px] mx-auto px-8 py-24">
          <p className="arch-label mb-4">Divisions</p>
          <h2 className="text-4xl font-bold text-white mb-16 max-w-xl">
            Three divisions,<br />one compounding flywheel
          </h2>

          <div className="grid grid-cols-3 gap-px bg-[#1a1a1a]">
            {divisions.map((d, i) => (
              <Link key={d.title} href={d.href} className="group bg-[#0a0a0a] p-10 relative overflow-hidden">
                <span className="text-[#333] text-[10px] font-mono">Division 0{i + 1}</span>
                <h3 className="text-white text-xl font-bold mt-4 mb-3 group-hover:text-[#b0b0b0] transition-colors">
                  {d.title}
                </h3>
                <p className="text-[#606060] text-sm leading-relaxed mb-6">{d.desc}</p>
                <span className="text-white text-[10px] uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">
                  {d.cta} →
                </span>
                {/* Corner decoration */}
                <span className="absolute top-0 right-0 w-8 h-px bg-white/10" />
                <span className="absolute top-0 right-0 w-px h-8 bg-white/10" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* MOISTELLO FEATURE                     */}
      {/* ═══════════════════════════════════════ */}
      <section className="border-t border-[#1a1a1a]">
        {/* Mobile */}
        <div className="block md:hidden px-6 py-12">
          <p className="arch-label mb-4">Flagship Product</p>
          <h2 className="text-2xl font-bold text-white mb-2">Moistello</h2>
          <p className="text-[#707070] text-sm mb-6">Decentralized savings on Stellar.</p>
          <div className="space-y-3 mb-6">
            {moistelloFeatures.slice(0, 3).map((f) => (
              <div key={f} className="border border-[#1a1a1a] p-3">
                <p className="text-white text-xs">{f}</p>
              </div>
            ))}
          </div>
          <a href="https://moistello.com" target="_blank" rel="noopener noreferrer" className="block border border-white text-white text-center py-3 text-xs uppercase tracking-[0.2em]">
            Visit Moistello →
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden md:block max-w-[1440px] mx-auto px-8 py-24">
          <p className="arch-label mb-4">Flagship Product</p>
          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a] mb-12">
            <div className="bg-[#0a0a0a] p-10">
              <h2 className="text-4xl font-bold text-white mb-6">Moistello</h2>
              <p className="text-[#606060] text-sm leading-relaxed max-w-md mb-8">
                Decentralized savings circles on the Stellar blockchain. Trustless,
                transparent, sub-cent fees. Built for 1.7 billion unbanked adults.
              </p>
              <a
                href="https://moistello.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white text-white px-8 py-3 text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all"
              >
                Visit Moistello →
              </a>
            </div>
            <div className="bg-[#0a0a0a] p-10 grid grid-cols-2 gap-6">
              {moistelloFeatures.map((f) => (
                <div key={f} className="border-t border-[#1a1a1a] pt-3">
                  <p className="text-white text-xs font-semibold uppercase tracking-[0.1em]">{f.split("—")[0]}</p>
                  <p className="text-[#606060] text-[11px] mt-1 leading-relaxed">{f.split("—")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* AGENCY TERMINAL (Desktop only)        */}
      {/* ═══════════════════════════════════════ */}
      <section className="hidden md:block border-t border-[#1a1a1a]">
        <div className="max-w-[1440px] mx-auto px-8 py-24">
          <div className="grid grid-cols-2 gap-px bg-[#1a1a1a]">
            <div className="bg-[#0a0a0a] p-10">
              <p className="arch-label mb-4">Agency</p>
              <h2 className="text-4xl font-bold text-white mb-6">We build software.</h2>
              <p className="text-[#606060] text-sm leading-relaxed max-w-sm mb-8">
                Custom development, MVPs, staff augmentation, legacy modernization.
                Enterprise quality at competitive rates.
              </p>
              <Link
                href="/agency"
                className="inline-block border border-white text-white px-8 py-3 text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all"
              >
                Hire the Agency →
              </Link>
            </div>
            <div className="bg-black p-10 font-mono">
              <p className="text-[#00ff41] text-xs mb-4">$ ./cocor-agency --capabilities</p>
              <div className="space-y-1 text-xs text-[#606060]">
                <p><span className="text-[#00ff41]">├──</span> Custom Software Development</p>
                <p><span className="text-[#00ff41]">├──</span> MVP Development (4-12 weeks)</p>
                <p><span className="text-[#00ff41]">├──</span> Staff Augmentation</p>
                <p><span className="text-[#00ff41]">└──</span> Legacy Modernization</p>
                <p className="mt-4 text-[#333]">Stack: Next.js, Go, Rust, Stellar, PostgreSQL</p>
                <p className="text-[#333]">Status: <span className="text-[#00ff41]">Available</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile: simple agency block */}
      <section className="block md:hidden border-t border-[#1a1a1a] px-6 py-12">
        <p className="arch-label mb-4">Agency</p>
        <h2 className="text-2xl font-bold text-white mb-3">The Agency</h2>
        <p className="text-[#707070] text-sm mb-6">Custom software, MVPs, staff augmentation, legacy modernization.</p>
        <div className="border border-[#00ff41]/30 bg-black font-mono p-4 text-xs mb-6">
          <p className="text-[#00ff41] mb-2">$ ./cocor-agency</p>
          <p className="text-[#505050]">Status: Available for projects</p>
        </div>
        <Link href="/agency" className="block border border-white text-white text-center py-3 text-xs uppercase tracking-[0.2em]">
          Start a Project
        </Link>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* BRAND ASSETS                          */}
      {/* ═══════════════════════════════════════ */}
      <section className="border-t border-[#1a1a1a]">
        <div className="block md:hidden px-6 py-12">
          <p className="arch-label mb-4">Brand Assets</p>
          <h2 className="text-2xl font-bold text-white mb-2">Digital real estate</h2>
          <p className="text-[#707070] text-sm mb-6">Acquire, develop, hold or exit at multiples.</p>
          <Link href="/brands" className="block border border-white text-white text-center py-3 text-xs uppercase tracking-[0.2em]">
            Learn More
          </Link>
        </div>

        <div className="hidden md:block max-w-[1440px] mx-auto px-8 py-24">
          <p className="arch-label mb-4">Brand Assets</p>
          <div className="grid grid-cols-3 gap-px bg-[#1a1a1a] mb-12">
            {[
              { phase: "01", title: "Identify & Acquire", desc: "Undervalued digital properties with strong fundamentals." },
              { phase: "02", title: "Develop & Grow", desc: "Build MVPs, create content, drive traffic, establish revenue." },
              { phase: "03", title: "Hold or Exit", desc: "Hold cash-flowing assets or sell at 25-40x revenue multiples." },
            ].map((p) => (
              <div key={p.phase} className="bg-[#0a0a0a] p-10">
                <span className="text-[#333] text-[10px] font-mono">{p.phase}</span>
                <h3 className="text-white text-lg font-semibold mt-4 mb-3">{p.title}</h3>
                <p className="text-[#606060] text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/brands" className="inline-block border border-white text-white px-8 py-3 text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all">
            Our Strategy →
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════ */}
      {/* CTA                                   */}
      {/* ═══════════════════════════════════════ */}
      <section className="border-t border-[#1a1a1a]">
        <div className="block md:hidden px-6 py-16 text-center">
          <h2 className="text-3xl font-black text-white mb-4 leading-[0.95]">Let's build something durable.</h2>
          <p className="text-[#707070] text-sm mb-8">Get in touch.</p>
          <Link href="/contact" className="block border border-white text-white py-3 text-xs uppercase tracking-[0.2em]">
            Contact Us
          </Link>
        </div>

        <div className="hidden md:block max-w-[1440px] mx-auto px-8 py-32 text-center">
          <p className="arch-label mb-6">Contact</p>
          <h2 className="text-6xl font-black text-white mb-6 leading-[0.9] max-w-3xl mx-auto">
            Let's build<br />something durable.
          </h2>
          <p className="text-[#606060] text-sm max-w-md mx-auto mb-12 leading-relaxed">
            Whether you need a product, have a brand to sell, or want to partner.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white px-10 py-4 text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}

const divisions = [
  {
    title: "Products",
    desc: "We build and operate digital products. Moistello is a decentralized savings platform on the Stellar blockchain.",
    cta: "View Products",
    href: "/products",
  },
  {
    title: "Agency",
    desc: "Custom software for companies worldwide. Enterprise quality at competitive rates, delivered from Nigeria.",
    cta: "Hire the Agency",
    href: "/agency",
  },
  {
    title: "Brand Assets",
    desc: "We acquire premium digital properties, develop them into valuable assets, and hold or exit at multiples.",
    cta: "Learn More",
    href: "/brands",
  },
]

const moistelloFeatures = [
  "Savings Circles—4 types: Public, Private, Community, Premium",
  "Payout Modes—Random (VRF), Fixed, Auction, Vote-Based",
  "MoiScore—On-chain reputation from 0 to 1000",
  "Technology—Rust/Soroban, Go, Next.js, Stellar",
  "Multi-Wallet—Freighter, WalletConnect, Ledger, Passkey",
  "Security—Non-custodial smart contracts, audited",
]
