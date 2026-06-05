"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

type Theme = "dark" | "light"

interface ThemeCtx {
  theme: Theme
  toggle: () => void
}

const Context = createContext<ThemeCtx>({ theme: "dark", toggle: () => {} })

export function useTheme() { return useContext(Context) }

const LIGHT_RULES = `
.bg-\\[#0a0a0a\\] { background: #ffffff !important; }
.bg-\\[#000000\\] { background: #f2f2f2 !important; }
.bg-\\[#050505\\] { background: #e8e8e8 !important; }
.bg-\\[#1a1a1a\\] { background: #e0e0e0 !important; }
.bg-black { background: #f2f2f2 !important; }
.bg-black\\/95 { background: #f2f2f2 !important; }
.bg-black\\/40 { background: #e8e8e8 !important; }

.text-white { color: #111111 !important; }
.text-white\\/15 { color: #ddd !important; }
.text-white\\/20 { color: #ccc !important; }
.text-white\\/30 { color: #aaa !important; }
.text-white\\/35 { color: #999 !important; }
.text-white\\/40 { color: #888 !important; }
.text-white\\/50 { color: #777 !important; }
.text-white\\/60 { color: #555 !important; }
.text-white\\/70 { color: #333 !important; }
.text-white\\/80 { color: #222 !important; }
.text-\\[#888\\] { color: #777 !important; }
.text-\\[#555\\] { color: #999 !important; }
.text-\\[#505050\\] { color: #888 !important; }
.text-\\[#707070\\] { color: #999 !important; }
.text-\\[#404040\\] { color: #aaa !important; }
.text-\\[#606060\\] { color: #888 !important; }
.text-\\[#333\\] { color: #ccc !important; }
.text-\\[#00ff41\\] { color: #888 !important; }

.border-\\[#1a1a1a\\] { border-color: #e0e0e0 !important; }
.border-white { border-color: #ddd !important; }
.border-white\\/30 { border-color: #ddd !important; }

.hover\\:text-white:hover { color: #111 !important; }
.hover\\:bg-\\[#0a0a0a\\]:hover { background: #f5f5f5 !important; }
.hover\\:border-white:hover { border-color: #ddd !important; }
.hover\\:bg-white:hover { background: #222 !important; color: #fff !important; }

.group-hover\\:text-white:is(:where(.group):hover *) { color: #111 !important; }

.divide-\\[#1a1a1a\\] > :not(:last-child) { border-color: #e0e0e0 !important; }
`

function createSheet(rules: string): CSSStyleSheet | null {
  try {
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(rules)
    return sheet
  } catch {
    return null
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)
  const sheetRef = useCallback((node: HTMLStyleElement | null) => {
    if (!node) return
    // style.textContent bypasses Tailwind processing
  }, [])

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
      // Inject via style element — bypasses Tailwind
      if (!document.getElementById("cocor-light")) {
        const style = document.createElement("style")
        style.id = "cocor-light"
        style.textContent = LIGHT_RULES
        document.head.appendChild(style)
      }
    } else {
      root.classList.remove("light")
      const el = document.getElementById("cocor-light")
      if (el) el.remove()
    }
    localStorage.setItem("cocor_theme", theme)
  }, [theme, mounted])

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), [])

  return <Context.Provider value={{ theme, toggle }}>{children}</Context.Provider>
}
