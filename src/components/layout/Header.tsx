"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Products", href: "/products", icon: "◆" },
  { label: "Agency", href: "/agency", icon: "⚡" },
  { label: "Brands", href: "/brands", icon: "◈" },
  { label: "Docs", href: "/docs", icon: "▣" },
  { label: "Blog", href: "/blog", icon: "◇" },
  { label: "About", href: "/about", icon: "○" },
  { label: "Contact", href: "/contact", icon: "◎" },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <>
      {/* ─── DESKTOP TOP NAV ─── */}
      <header
        className={`desktop-nav fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="border-b border-[#1a1a1a]">
          <div className="max-w-[1440px] mx-auto px-8 h-14 flex items-center justify-between">
            <Link href="/" className="text-white text-xs uppercase tracking-[0.25em] font-light">
              Cocor Tech
            </Link>

            <nav className="flex items-center gap-6">
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                    pathname === link.href || pathname.startsWith(link.href + "/")
                      ? "text-white"
                      : "text-[#505050] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="text-[10px] uppercase tracking-[0.2em] text-white border border-white px-4 py-1.5 hover:bg-white hover:text-black transition-all"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ─── MOBILE BOTTOM NAV ─── */}
      <nav className="mobile-nav fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-t border-[#1a1a1a]">
        <div className="flex items-center justify-around h-14">
          {navLinks.slice(0, 5).map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-0.5 ${
                  isActive ? "text-white" : "text-[#505050]"
                }`}
              >
                <span className="text-[10px] leading-none">{link.icon}</span>
                <span className="text-[8px] uppercase tracking-[0.15em]">{link.label}</span>
              </Link>
            )
          })}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col items-center gap-0.5 text-[#505050]"
          >
            <span className="text-[10px] leading-none">⋯</span>
            <span className="text-[8px] uppercase tracking-[0.15em]">More</span>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#1a1a1a] bg-black/95 backdrop-blur-xl px-6 py-4">
            <div className="flex flex-col gap-3">
              {navLinks.slice(5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 text-sm ${
                    pathname === link.href ? "text-white" : "text-[#707070]"
                  }`}
                >
                  <span className="text-[10px]">{link.icon}</span>
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="border border-white text-white text-center py-2 text-xs uppercase tracking-[0.15em] mt-2"
              >
                Start a Project
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navs */}
      <div className="desktop-nav h-14" />
      <div className="mobile-nav h-14" />
    </>
  )
}
