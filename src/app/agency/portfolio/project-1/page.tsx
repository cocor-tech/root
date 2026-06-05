import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Project 1 — Moistello — Cocor Tech Agency Portfolio",
  description: "Moistello: a decentralized savings platform on the Stellar blockchain. Built by Cocor Tech Agency.",
}

export default function Project1Page() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Portfolio / Project 1</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6">Moistello</h1>
          <p className="text-[#888] text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            A decentralized savings platform on the Stellar blockchain — our flagship product and a showcase of full-stack blockchain engineering.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a] mb-12">
            <div className="bg-[#0a0a0a] p-6">
              <h3 className="text-white text-xs uppercase tracking-[0.1em] font-semibold mb-2">Client</h3>
              <p className="text-[#888] text-sm">Cocor Tech (internal product)</p>
            </div>
            <div className="bg-[#0a0a0a] p-6">
              <h3 className="text-white text-xs uppercase tracking-[0.1em] font-semibold mb-2">Timeline</h3>
              <p className="text-[#888] text-sm">2025 - Present</p>
            </div>
            <div className="bg-[#0a0a0a] p-6">
              <h3 className="text-white text-xs uppercase tracking-[0.1em] font-semibold mb-2">Stack</h3>
              <p className="text-[#888] text-sm">Rust/Soroban, Go, Next.js, PostgreSQL, Redis, Stellar</p>
            </div>
            <div className="bg-[#0a0a0a] p-6">
              <h3 className="text-white text-xs uppercase tracking-[0.1em] font-semibold mb-2">Status</h3>
              <p className="text-[#00ff41] text-sm font-mono">Live (moistello.com)</p>
            </div>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 md:p-8 mb-6">
            <h2 className="text-white font-semibold mb-3">Problem</h2>
            <p className="text-[#888] text-sm leading-relaxed">1.7 billion unbanked adults lack access to savings, credit, and financial reputation. Traditional savings circles exist but are trust-based and limited in scale.</p>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 md:p-8 mb-6">
            <h2 className="text-white font-semibold mb-3">Solution</h2>
            <p className="text-[#888] text-sm leading-relaxed">A trustless, decentralized ROSCA platform on Stellar. Smart contracts handle member management, contribution tracking, payout distribution, and on-chain reputation scoring. Zero intermediaries.</p>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 md:p-8 mb-6">
            <h2 className="text-white font-semibold mb-3">Results</h2>
            <ul className="space-y-1 text-[#888] text-sm">
              <li>— 5 smart contracts deployed on Stellar testnet</li>
              <li>— 45+ unit tests across the contract suite</li>
              <li>— 47 API endpoints for platform operations</li>
              <li>— 7 supported wallet types (Freighter, WalletConnect, Ledger, etc.)</li>
            </ul>
          </div>

          <div className="text-center">
            <a href="https://moistello.com" target="_blank" rel="noopener noreferrer" className="border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-200 inline-block">
              Visit Live Site →
            </a>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
