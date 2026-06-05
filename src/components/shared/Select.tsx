"use client"

import { useState, useRef, useEffect } from "react"

interface Option {
  value: string
  label: string
}

interface SelectProps {
  name: string
  options: Option[]
  placeholder?: string
  required?: boolean
  className?: string
  variant?: "surface" | "bg-main"
}

export function Select({
  name,
  options,
  placeholder = "Select",
  required = false,
  className = "",
  variant = "surface",
}: SelectProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("")
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  const bg = variant === "bg-main" ? "bg-bg-main" : "bg-surface"

  return (
    <div ref={ref} className={`relative ${className}`}>
      <input type="hidden" name={name} value={selected} required={required} />
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`w-full ${bg} border border-default px-4 py-3 pr-10 text-sm text-left cursor-pointer transition-colors hover:border-strong focus:outline-none focus:border-primary ${
          selected ? "text-primary" : "text-muted"
        }`}
      >
        {selected
          ? options.find((o) => o.value === selected)?.label
          : placeholder}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted" />
          </svg>
        </div>
      </button>

      {open && (
        <div className={`absolute z-50 w-full mt-1 ${bg} border border-default shadow-xl`}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => {
                setSelected(opt.value)
                setOpen(false)
              }}
              className={`w-full px-4 py-3 text-sm text-left transition-colors ${
                selected === opt.value
                  ? "bg-inverse text-primary"
                  : "text-primary hover:bg-surface"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
