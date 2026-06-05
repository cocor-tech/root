"use client"

import { createContext, useContext, useEffect, useState, useCallback } from "react"

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
html.light body { background: #f2f2f2 !important; color: #444444 !important; }
html.light ::selection { background: #000000 !important; color: #ffffff !important; }
html.light body::after, html.light body::before { display: none !important; }

html.light .text-white { color: #111111 !important; }
html.light h1, html.light h2, html.light h3, html.light h4, html.light h5 { color: #111111 !important; }
html.light [class*="text-white/"] { color: #444444 !important; }
html.light [class*="text-white/30"] { color: #999999 !important; }
html.light [class*="text-white/35"] { color: #777777 !important; }
html.light [class*="text-white/40"] { color: #666666 !important; }
html.light [class*="text-white/50"] { color: #555555 !important; }
html.light [class*="text-white/20"] { color: #bbbbbb !important; }
html.light [class*="text-white/15"] { color: #cccccc !important; }
html.light [class*="text-white/10"] { color: #dddddd !important; }
html.light [class*="text-white/60"] { color: #333333 !important; }
html.light [class*="text-white/70"] { color: #222222 !important; }
html.light [class*="text-white/80"] { color: #000000 !important; }

html.light .bg-black { background: #f2f2f2 !important; }
html.light .border-white { border-color: #dddddd !important; }
html.light [class*="border-white/"] { border-color: #e0e0e0 !important; }

html.light .text-[#505050] { color: #777777 !important; }
html.light .text-[#707070] { color: #999999 !important; }
html.light .text-[#404040] { color: #aaaaaa !important; }
html.light .text-[#606060] { color: #888888 !important; }
html.light .text-[#333] { color: #cccccc !important; }
html.light .border-[#1a1a1a] { border-color: #e0e0e0 !important; }
html.light .bg-[#0a0a0a] { background: #ffffff !important; }
html.light .bg-[#000000] { background: #f2f2f2 !important; }
html.light .bg-black\\/40 { background: #e8e8e8 !important; }
html.light .bg-black\\/95 { background: #f2f2f2 !important; }
html.light .bg-white\\/10 { background: rgba(0,0,0,0.05) !important; }

html.light [style*="rgba(255,255,255,0.03)"] { background: rgba(255,255,255,0.7) !important; }
html.light [style*="rgba(255,255,255,0.05)"] { background: rgba(255,255,255,0.85) !important; }
html.light [style*="rgba(255,255,255,0.06)"] { border-color: rgba(0,0,0,0.08) !important; }
html.light [style*="rgba(255,255,255,0.08)"] { border-color: rgba(0,0,0,0.1) !important; }
html.light [style*="radial-gradient"] { opacity: 0 !important; }
`

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

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
    } else {
      root.classList.remove("light")
    }
    localStorage.setItem("cocor_theme", theme)
  }, [theme, mounted])

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), [])

  return (
    <Context.Provider value={{ theme, toggle }}>
      {children}
      <style dangerouslySetInnerHTML={{ __html: LIGHT_CSS }} />
    </Context.Provider>
  )
}
