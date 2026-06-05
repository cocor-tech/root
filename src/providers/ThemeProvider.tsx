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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("cocor_theme") as Theme | null
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
    }
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

  return <Context.Provider value={{ theme, toggle }}>{children}</Context.Provider>
}
