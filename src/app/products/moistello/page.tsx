import Link from "next/link"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Moistello — Cocor Tech Products",
  description: "Decentralized savings circles on the Stellar blockchain. Trustless ROSCAs with USDC/XLM, MoiScore reputation, and sub-cent fees.",
  alternates: { canonical: "/products/moistello" },
}

export default function MoistelloPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">
            / Products / Moistello
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">Moistello</h1>
          <p className="text-[#888] text-sm md:text-base max-w-2xl mb-16 leading-relaxed">
            Moistello digitizes traditional savings circles (esusu, tontine, chit fund)
            using Soroban smart contracts on Stellar. Members contribute USDC/XLM regularly,
            receiving periodic payouts based on programmed rules.
          </p>

          <div className="grid md:grid-cols-2 gap-px bg-[#1a1a1a] mb-16">
            <div className="bg-[#0a0a0a] p-8 md:p-10">
              <h3 className="text-white font-semibold mb-3 uppercase text-xs tracking-[0.1em]">Problem</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                1.7 billion unbanked adults with no access to savings, credit, or financial reputation.
              </p>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-10">
              <h3 className="text-white font-semibold mb-3 uppercase text-xs tracking-[0.1em]">Solution</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Trustless, decentralized ROSCA platform. Smart contracts enforce rules, handle payouts, and track reputation.
              </p>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-10">
              <h3 className="text-white font-semibold mb-3 uppercase text-xs tracking-[0.1em]">Revenue Model</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                0.5% protocol fee on all payouts. Stellar network fees sub $0.001 per transaction.
              </p>
            </div>
            <div className="bg-[#0a0a0a] p-8 md:p-10">
              <h3 className="text-white font-semibold mb-3 uppercase text-xs tracking-[0.1em]">Technology</h3>
              <p className="text-[#888] text-sm leading-relaxed">
                Rust/Soroban smart contracts, Go backend, Next.js frontend, Stellar blockchain.
              </p>
            </div>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Circle Types</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Public</h4>
                <p className="text-[#888] text-sm">Anyone meeting minimum MoiScore can join. Permissionless.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Private</h4>
                <p className="text-[#888] text-sm">Invite-only via link or code. Restricted access.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Community</h4>
                <p className="text-[#888] text-sm">Token-gated (DAO or token holder only). Multi-sig.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Premium</h4>
                <p className="text-[#888] text-sm">Higher limits, priority support, collateralized. Permissioned.</p>
              </div>
            </div>
          </div>

          <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-8 md:p-12 mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Payout Modes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Random</h4>
                <p className="text-[#888] text-sm">VRF selects recipient. Provably fair.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Fixed Order</h4>
                <p className="text-[#888] text-sm">Pre-defined sequential distribution.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Auction</h4>
                <p className="text-[#888] text-sm">Members bid discount. Winner gets pool minus discount.</p>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Vote-Based</h4>
                <p className="text-[#888] text-sm">Community votes recipient each round.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://moistello.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-white text-white px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-200"
            >
              Visit Moistello →
            </a>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
