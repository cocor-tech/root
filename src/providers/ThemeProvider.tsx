"use client"

import { createContext, useContext, useEffect, useState, useCallback, useRef } from "react"

type Theme = "dark" | "light"

interface ThemeCtx {
  theme: Theme
  toggle: () => void
}

const Context = createContext<ThemeCtx>({ theme: "dark", toggle: () => {} })

export function useTheme() {
  return useContext(Context)
}

const LIGHT_CSS = `
html.light, html.light body { background: #f2f2f2 !important; color: #444 !important; }
html.light ::selection { background: #000 !important; color: #fff !important; }
html.light body::after, html.light body::before { display: none !important; }

html.light .text-white,
html.light h1, html.light h2, html.light h3, html.light h4,
html.light p, html.light span, html.light a, html.light li { color: #111 !important; }

html.light .text-\\[#888\\] { color: #777 !important; }
html.light .text-\\[#555\\] { color: #999 !important; }
html.light .text-\\[#505050\\] { color: #888 !important; }
html.light .text-\\[#707070\\] { color: #999 !important; }
html.light .text-\\[#404040\\] { color: #aaa !important; }
html.light .text-\\[#606060\\] { color: #888 !important; }
html.light .text-\\[#333\\] { color: #ccc !important; }
html.light .text-\\[#00ff41\\] { color: #888 !important; }

html.light .bg-\\[#0a0a0a\\] { background: #fff !important; }
html.light .bg-\\[#000000\\] { background: #f2f2f2 !important; }
html.light .bg-\\[#050505\\] { background: #e8e8e8 !important; }
html.light .bg-\\[#1a1a1a\\] { background: #e0e0e0 !important; }
html.light .bg-black { background: #f2f2f2 !important; }
html.light .bg-black\\/95 { background: #f2f2f2 !important; }
html.light .bg-black\\/40 { background: #e8e8e8 !important; }
html.light .bg-white\\/10 { background: rgba(0,0,0,0.05) !important; }

html.light .border-\\[#1a1a1a\\] { border-color: #e0e0e0 !important; }
html.light .border-white { border-color: #ddd !important; }
html.light .border-white\\/30 { border-color: #ddd !important; }

html.light .hover\\:text-white:hover { color: #111 !important; }
html.light .hover\\:bg-\\[#0a0a0a\\]:hover { background: #f5f5f5 !important; }
html.light .hover\\:border-white:hover { border-color: #ddd !important; }
html.light .hover\\:bg-white:hover { background: #222 !important; color: #fff !important; }

html.light [style*="rgba(255,255,255,0.03)"] { background: rgba(255,255,255,0.7) !important; }
html.light [style*="rgba(255,255,255,0.05)"] { background: rgba(255,255,255,0.85) !important; }
html.light [style*="radial-gradient"] { opacity: 0 !important; }
`

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)
  const styleRef = useRef<HTMLStyleElement | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem("cocor_theme") as Theme | null
    if (stored === "light" || stored === "dark") setTheme(stored)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement

    if (theme === "light") {
      root.classList.add("light")
      // Inject CSS via DOM API to avoid React escaping issues
      if (!styleRef.current) {
        const style = document.createElement("style")
        style.id = "cocor-light-theme"
        style.textContent = LIGHT_CSS
        document.head.appendChild(style)
        styleRef.current = style
      }
    } else {
      root.classList.remove("light")
      if (styleRef.current) {
        styleRef.current.remove()
        styleRef.current = null
      }
    }
    localStorage.setItem("cocor_theme", theme)
  }, [theme, mounted])

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), [])

  return <Context.Provider value={{ theme, toggle }}>{children}</Context.Provider>
}
