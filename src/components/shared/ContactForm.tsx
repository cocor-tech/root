"use client"

import { useState, FormEvent } from "react"
import { Select } from "./Select"

const subjectOptions = [
  { value: "agency", label: "Agency Inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "brand-asset", label: "Brand Asset Offer" },
  { value: "general", label: "General" },
]

interface ContactFormProps {
  variant?: "surface" | "bg-main"
  className?: string
}

export function ContactForm({ variant = "surface", className = "" }: ContactFormProps) {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const res = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/your-form-id", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })

    if (res.ok) {
      setSent(true)
      form.reset()
    } else {
      setError("Something went wrong. Try again or reach us on X.")
    }
  }

  if (sent) {
    return (
      <div className={`${className} border border-default p-8 text-center`}>
        <p className="text-primary font-semibold mb-2">Message sent</p>
        <p className="text-secondary text-sm">We'll get back to you soon.</p>
      </div>
    )
  }

  const bg = variant === "bg-main" ? "bg-bg-main" : "bg-surface"

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <input type="text" name="name" placeholder="Name" required className={`w-full ${bg} border border-default px-4 py-3 text-primary text-sm focus:outline-none focus:border-primary transition-colors`} />
      <input type="email" name="email" placeholder="Email" required className={`w-full ${bg} border border-default px-4 py-3 text-primary text-sm focus:outline-none focus:border-primary transition-colors`} />
      <Select name="subject" options={subjectOptions} placeholder="Subject" required variant={variant} />
      <textarea name="message" placeholder="Message" required rows={5} className={`w-full ${bg} border border-default px-4 py-3 text-primary text-sm focus:outline-none focus:border-primary transition-colors resize-none`} />
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <button type="submit" className="w-full border border-primary text-primary py-3 text-xs uppercase tracking-[0.2em] hover:bg-inverse hover:text-primary transition-all duration-200">
        Send Message
      </button>
    </form>
  )
}
