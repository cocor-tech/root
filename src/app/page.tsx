"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

const TYPED_LINES = ["BUILD.", "ACQUIRE.", "SCALE."]

export default function Home() {
  const [typed, setTyped] = useState<string[]>(["", "", ""])
  const [cursor, setCursor] = useState(true)
  const [lineIdx, setLineIdx] = useState(0)
  const [done, setDone] = useState(false)
  const charRef = useRef(0)
  const rafRef = useRef(0)
  const startRef = useRef(0)

  // Blinking cursor
  useEffect(() => {
    const iv = setInterval(() => setCursor((c) => !c), 530)
    return () => clearInterval(iv)
  }, [])

  // Typewriter
  useEffect(() => {
    const line = TYPED_LINES[lineIdx]
    if (!line) { setDone(true); return }

    const speed = 60 + Math.random() * 40

    function tick(now: number) {
      if (!startRef.current) startRef.current = now
      const elapsed = now - startRef.current
      if (elapsed >= speed) {
        startRef.current = now
        if (charRef.current < line.length) {
          charRef.current++
          setTyped((prev) => {
            const next = [...prev]
            next[lineIdx] = line.slice(0, charRef.current)
            return next
          })
        }
        if (charRef.current >= line.length) {
          if (lineIdx < TYPED_LINES.length - 1) {
            setTimeout(() => {
              charRef.current = 0
              setLineIdx((i) => i + 1)
            }, 400)
          } else {
            setDone(true)
          }
          return
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [lineIdx])

  return (
    <PublicLayout>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="w-full max-w-4xl mx-auto text-center md:text-left md:mx-0">
          <p className="text-white/30 text-[10px] md:text-[11px] uppercase tracking-[0.3em] mb-6 md:mb-8">
            Cocor Tech
          </p>

          <div className="inline-block text-left">
            {TYPED_LINES.map((_, i) => (
              <div key={i} className="flex items-baseline gap-0">
                <span
                  className={`text-[clamp(2.8rem,10vw,7rem)] font-black text-white leading-[0.9] tracking-[-0.03em] ${
                    i === lineIdx && !done ? "invisible" : ""
                  }`}
                >
                  {typed[i] || (i < lineIdx ? TYPED_LINES[i] : "")}
                </span>
                {i === lineIdx && !done && (
                  <span
                    className="text-[clamp(2.8rem,10vw,7rem)] font-black text-white leading-[0.9]"
                    style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
                  >
                    |
                  </span>
                )}
                {done && i === TYPED_LINES.length - 1 && (
                  <span
                    className="text-[clamp(2.8rem,10vw,7rem)] font-black text-white/70 leading-[0.9]"
                    style={{ opacity: cursor ? 1 : 0, transition: "opacity 0.1s" }}
                  >
                    |
                  </span>
                )}
              </div>
            ))}
          </div>

          <p
            className={`text-white/40 text-sm md:text-base max-w-lg leading-relaxed mt-8 md:mt-10 mx-auto md:mx-0 transition-all duration-700 ${
              done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            An operating company that builds, acquires, and scales digital assets for profit.
          </p>

          <div
            className={`flex flex-col md:flex-row gap-4 mt-8 md:mt-10 items-center md:items-start transition-all duration-700 delay-200 ${
              done ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Link
              href="/products"
              className="border border-white/30 text-white px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
            >
              Explore Products
            </Link>
            <Link
              href="/agency"
              className="border border-white/10 text-white/40 px-8 py-3 text-xs uppercase tracking-[0.25em] hover:border-white/40 hover:text-white/80 transition-all duration-300"
            >
              Hire the Agency →
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ DIVISIONS ═══ */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em] mb-4 text-center md:text-left">Divisions</p>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 md:mb-16 max-w-xl text-center md:text-left mx-auto md:mx-0">
            Three divisions, one flywheel
          </h2>

          <div className="grid md:grid-cols-3 gap-px md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {divisions.map((d, i) => (
              <Link
                key={d.title}
                href={d.href}
                className="group block py-8 md:p-10 md:first:pl-0 md:last:pr-0"
              >
                <p className="text-white/15 text-[10px] font-mono mb-3">0{i + 1}</p>
                <h3 className="text-white text-lg md:text-xl font-bold mb-3 group-hover:text-white/60 transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="text-white/30 text-sm leading-relaxed mb-4">{d.desc}</p>
                <span className="text-white/50 text-[10px] uppercase tracking-[0.2em] group-hover:text-white transition-colors duration-300">
                  {d.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MOISTELLO ═══ */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em] mb-4">Flagship Product</p>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[0.95]">Moistello</h2>
              <p className="text-white/30 text-sm leading-relaxed mb-8">
                Decentralized savings circles on the Stellar blockchain. Trustless, transparent, sub-cent fees.
              </p>
              <a
                href="https://moistello.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-white/30 text-white px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Visit Moistello →
              </a>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {moistelloFeatures.slice(0, 4).map((f) => (
                <div key={f} className="border-t border-white/10 pt-4">
                  <p className="text-white text-xs font-semibold uppercase tracking-[0.1em]">{f.split("—")[0]}</p>
                  <p className="text-white/30 text-xs mt-1 leading-relaxed">{f.split("—")[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ AGENCY ═══ */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-white/20 text-[10px] uppercase tracking-[0.25em] mb-4">Agency</p>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-[0.95]">We build software.</h2>
              <p className="text-white/30 text-sm leading-relaxed mb-8">
                Custom development, MVPs, staff augmentation, legacy modernization.
              </p>
              <Link
                href="/agency"
                className="inline-block border border-white/30 text-white px-8 py-3 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
              >
                Hire the Agency →
              </Link>
            </div>
            <div className="border border-white/10 p-6 md:p-8 font-mono">
              <p className="text-white/70 text-xs mb-4">$ ./cocor-agency --capabilities</p>
              <div className="space-y-2 text-xs text-white/30">
                <p><span className="text-white/70">├──</span> Custom Software Development</p>
                <p><span className="text-white/70">├──</span> MVP Development (4-12 weeks)</p>
                <p><span className="text-white/70">├──</span> Staff Augmentation</p>
                <p><span className="text-white/70">└──</span> Legacy Modernization</p>
                <p className="mt-4 text-white/15">Status: <span className="text-white/70">Available</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ BRAND ASSETS ═══ */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em] mb-4">Brand Assets</p>
          <div className="grid md:grid-cols-3 gap-px md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5 mb-12">
            {[
              { num: "01", title: "Identify & Acquire", desc: "Undervalued properties with strong fundamentals." },
              { num: "02", title: "Develop & Grow", desc: "Build MVPs, drive traffic, establish revenue." },
              { num: "03", title: "Hold or Exit", desc: "Hold cash-flowing assets or sell at multiples." },
            ].map((p) => (
              <div key={p.num} className="py-8 md:p-10 md:first:pl-0 md:last:pr-0">
                <p className="text-white/15 text-[10px] font-mono mb-3">{p.num}</p>
                <h3 className="text-white text-lg md:text-xl font-bold mb-3">{p.title}</h3>
                <p className="text-white/30 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 text-center">
          <p className="text-white/20 text-[10px] uppercase tracking-[0.25em] mb-6">Contact</p>
          <h2 className="text-4xl md:text-7xl font-black text-white mb-6 leading-[0.9]">
            Let&apos;s build<br />something durable.
          </h2>
          <p className="text-white/30 text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Whether you need a product, have a brand to sell, or want to partner.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white/30 text-white px-10 py-4 text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-black hover:border-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </PublicLayout>
  )
}

const divisions = [
  { title: "Products", desc: "We build and operate digital products. Moistello is a decentralized savings platform on the Stellar blockchain.", cta: "View Products", href: "/products" },
  { title: "Agency", desc: "Custom software for companies worldwide. Enterprise quality at competitive rates, delivered from Nigeria.", cta: "Hire the Agency", href: "/agency" },
  { title: "Brand Assets", desc: "We acquire premium digital properties, develop them into valuable assets, and hold or exit at multiples.", cta: "Learn More", href: "/brands" },
]

const moistelloFeatures = [
  "Savings Circles—4 types: Public, Private, Community, Premium",
  "Payout Modes—Random (VRF), Fixed, Auction, Vote-Based",
  "MoiScore—On-chain reputation from 0 to 1000",
  "Technology—Rust/Soroban, Go, Next.js, Stellar",
]
