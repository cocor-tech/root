"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Box, Zap, Diamond, BookOpen, FileText, User, Mail, ChevronRight } from "lucide-react"

const navLinks = [
  { label: "Products", href: "/products", icon: Box },
  { label: "Agency", href: "/agency", icon: Zap },
  { label: "Brands", href: "/brands", icon: Diamond },
  { label: "Docs", href: "/docs", icon: BookOpen },
  { label: "Blog", href: "/blog", icon: FileText },
  { label: "About", href: "/about", icon: User },
  { label: "Contact", href: "/contact", icon: Mail },
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

  const isActive = useCallback(
    (href: string) => pathname === href || pathname.startsWith(href + "/"),
    [pathname]
  )

  return (
    <>
      {/* ─── DESKTOP TOP NAV ─── */}
      <header
        className="desktop-nav fixed top-0 left-0 right-0 z-50"
        style={{
          willChange: "background-color",
          transition: "background-color 0.15s ease, backdrop-filter 0.15s ease",
          backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        }}
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
                  className={`text-[10px] uppercase tracking-[0.2em] ${
                    isActive(link.href)
                      ? "text-white"
                      : "text-[#505050] hover:text-white"
                  }`}
                  style={{ transition: "color 0.15s ease" }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="text-[10px] uppercase tracking-[0.2em] text-white border border-white px-4 py-1.5 hover:bg-white hover:text-black"
                style={{ transition: "background-color 0.15s ease, color 0.15s ease" }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ─── MOBILE HANGING HAMBURGER ─── */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="mobile-nav fixed right-0 top-1/2 -translate-y-1/2 z-[60] bg-white text-black w-10 h-10 flex items-center justify-center shadow-lg hover:bg-[#ccc]"
        style={{ transition: "background-color 0.15s ease" }}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={16} /> : <Menu size={16} />}
      </button>

      {/* ─── MOBILE SLIDE-OUT MENU ─── */}
      <div
        className={`mobile-nav fixed top-0 right-0 h-full w-[280px] z-50 bg-black/95 backdrop-blur-xl border-l border-[#1a1a1a] flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        {/* Brand header */}
        <div className="h-16 flex items-center px-6 border-b border-[#1a1a1a]">
          <span className="text-white text-xs uppercase tracking-[0.25em] font-light">Menu</span>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-4">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 text-sm ${
                    active
                      ? "bg-white text-black"
                      : "text-[#707070] hover:text-white hover:bg-[#0a0a0a]"
                  }`}
                  style={{ transition: "background-color 0.15s ease, color 0.15s ease" }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  <span className="flex-1">{link.label}</span>
                  <ChevronRight size={12} strokeWidth={1} className="text-[#333]" />
                </Link>
              )
            })}
          </div>

          <div className="mt-6 px-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block border border-white text-white text-center py-3 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-black"
              style={{ transition: "background-color 0.15s ease, color 0.15s ease" }}
            >
              Start a Project
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#1a1a1a]">
          <p className="text-[#333] text-[10px] uppercase tracking-[0.15em]">
            Cocor Tech
          </p>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="mobile-nav fixed inset-0 z-40 bg-black/40"
          onClick={() => setMenuOpen(false)}
          style={{ transition: "opacity 0.3s ease" }}
        />
      )}

      {/* Spacers */}
      <div className="desktop-nav h-14" />
    </>
  )
}
