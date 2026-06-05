import { buildMetadata } from "@/lib/seo"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = buildMetadata({
    title: "Features — Moistello",
    description: "Moistello features: 4 payout types, 4 circle types, MoiScore reputation, multi-wallet support, smart contract security.",
    slug: "products/moistello/features",
    keywords: "moistello features, payout modes, MoiScore, savings",
  })

export default function FeaturesPage() {
  const features = [
    { label: "Circle Types", value: "Public, Private, Community, Premium" },
    { label: "Payout Modes", value: "Random (VRF), Fixed Order, Auction, Vote-Based" },
    { label: "MoiScore", value: "0-1000 based on Streak, Completions, Volume, Recency" },
    { label: "Smart Contracts", value: "Rust/Soroban, non-custodial, audited" },
    { label: "Multi-Wallet", value: "Freighter, Rabet, xBull, Albedo, WalletConnect, Ledger, Passkey" },
    { label: "Blockchain", value: "Stellar (testnet + mainnet)" },
    { label: "Stablecoins", value: "USDC, XLM" },
    { label: "Protocol Fee", value: "0.5% on all payouts" },
  ]
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Products / Moistello / Features</p>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-8">Features</h1>
          <div className="grid md:grid-cols-2 gap-px bg-grid">
            {features.map((f) => (
              <div key={f.label} className="bg-surface p-6">
                <h3 className="text-primary text-sm font-semibold uppercase tracking-[0.1em] mb-2">{f.label}</h3>
                <p className="text-secondary text-sm">{f.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
