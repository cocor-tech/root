import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Docs — Moistello — Cocor Tech",
  description: "Moistello documentation index — getting started, API reference, smart contracts, circles guide, reputation system, wallet setup, and security.",
}

const links = [
  { title: "Getting Started", href: "https://moistello.com/docs/getting-started" },
  { title: "API Reference", href: "https://moistello.com/docs/api" },
  { title: "Smart Contracts", href: "https://moistello.com/docs/contracts" },
  { title: "Circles Guide", href: "https://moistello.com/docs/circles" },
  { title: "Reputation System", href: "https://moistello.com/docs/reputation" },
  { title: "Wallet Setup", href: "https://moistello.com/docs/wallet-setup" },
  { title: "Security", href: "https://moistello.com/docs/security" },
]

export default function MoistelloDocsPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Products / Moistello / Docs</p>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Documentation</h1>
          <p className="text-secondary text-sm mb-8">Full Moistello documentation is hosted at moistello.com/docs.</p>
          <div className="space-y-3">
            {links.map((link) => (
              <a key={link.title} href={link.href} target="_blank" rel="noopener noreferrer" className="block border border-default bg-surface p-4 hover:border-strong transition-colors text-primary text-sm">
                {link.title} →
              </a>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
