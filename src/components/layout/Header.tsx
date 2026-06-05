"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Sun, Moon, Home, Box, Zap, Diamond, BookOpen, FileText, User, Mail, ChevronRight } from "lucide-react"
import { useTheme } from "@/providers/ThemeProvider"

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
  const { theme, toggle } = useTheme()

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
        <div className="border-b border-default">
          <div className="max-w-[1440px] mx-auto px-8 h-14 flex items-center justify-between">
            <Link href="/" className="text-primary text-xs uppercase tracking-[0.25em] font-light">
              Cocor Tech
            </Link>

            <nav className="flex items-center gap-6">
              {navLinks.slice(0, 5).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-[10px] uppercase tracking-[0.2em] ${
                    isActive(link.href)
                      ? "text-primary"
                      : "text-muted hover:text-primary"
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
                className="text-[10px] uppercase tracking-[0.2em] text-primary border border-primary px-4 py-1.5 hover:bg-inverse hover:text-primary"
                style={{ transition: "background-color 0.15s ease, color 0.15s ease" }}
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ─── MOBILE HANGING CONTROLS ─── */}
      <div className="mobile-nav fixed right-0 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center gap-1">
        <Link
          href="/"
          className="w-10 h-10 flex items-center justify-center bg-inverse text-primary border border-primary/20 shadow-lg"
          style={{ transition: "background-color 0.15s ease, border-color 0.15s ease" }}
          aria-label="Home"
        >
          <Home size={15} />
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="w-10 h-10 flex items-center justify-center bg-inverse text-primary border border-primary/20 shadow-lg"
          style={{ transition: "background-color 0.15s ease, border-color 0.15s ease" }}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X size={15} /> : <Menu size={15} />}
        </button>
        <button
          onClick={toggle}
          className="w-10 h-10 flex items-center justify-center bg-inverse text-primary border border-primary/20 shadow-lg"
          style={{ transition: "background-color 0.15s ease, border-color 0.15s ease" }}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Moon size={14} /> : <Sun size={14} />}
        </button>
      </div>

      {/* ─── MOBILE SLIDE-OUT MENU ─── */}
      <div
        className={`mobile-nav fixed top-0 right-0 h-full w-[280px] z-50 bg-bg-main/95 backdrop-blur-xl border-l border-default flex flex-col ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)" }}
      >
        {/* Brand header */}
        <div className="h-16 flex items-center px-6 border-b border-default">
          <span className="text-primary text-xs uppercase tracking-[0.25em] font-light">Menu</span>
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
                      ? "bg-inverse text-primary"
                      : "text-secondary hover:text-primary hover:bg-surface"
                  }`}
                  style={{ transition: "background-color 0.15s ease, color 0.15s ease" }}
                >
                  <Icon size={14} strokeWidth={1.5} />
                  <span className="flex-1">{link.label}</span>
                  <ChevronRight size={12} strokeWidth={1} className="text-subtle" />
                </Link>
              )
            })}
          </div>

          <div className="mt-6 px-4">
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block border border-primary text-primary text-center py-3 text-xs uppercase tracking-[0.2em] hover:bg-inverse hover:text-primary"
              style={{ transition: "background-color 0.15s ease, color 0.15s ease" }}
            >
              Start a Project
            </Link>
          </div>
        </nav>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-default">
          <p className="text-subtle text-[10px] uppercase tracking-[0.15em]">
            Cocor Tech
          </p>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="mobile-nav fixed inset-0 z-40 bg-bg-main/40"
          onClick={() => setMenuOpen(false)}
          style={{ transition: "opacity 0.3s ease" }}
        />
      )}

      {/* Spacers */}
      <div className="desktop-nav h-14" />
    </>
  )
}
