import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "How It Works — Moistello — Cocor Tech",
  description: "Learn how Moistello works: connect your wallet, join or create a savings circle, contribute USDC/XLM, receive payouts, and build MoiScore.",
}

export default function HowItWorksPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Products / Moistello / How It Works</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">How It Works</h1>
          <ol className="space-y-8">
            {[
              { step: "01", title: "Connect a Stellar Wallet", desc: "Use Freighter, Rabet, xBull, Albedo, WalletConnect, Ledger, or Passkey." },
              { step: "02", title: "Choose or Create a Circle", desc: "Browse public circles or create a private one. Set contribution amount, frequency, and payout type." },
              { step: "03", title: "Invite Members or Join", desc: "Public circles are open to anyone meeting the minimum MoiScore. Private circles use invite links." },
              { step: "04", title: "Contribute Each Cycle", desc: "Submit USDC or XLM per cycle. Smart contracts track every payment on-chain." },
              { step: "05", title: "Receive Payouts", desc: "When selected (random, fixed, auction, or vote), you receive the total pool minus the 0.5% protocol fee." },
              { step: "06", title: "Build MoiScore", desc: "Each on-time payment increases your MoiScore. Higher scores unlock better circles and lower fees." },
            ].map((item) => (
              <li key={item.step} className="border border-[#1a1a1a] bg-[#0a0a0a] p-6 md:p-8">
                <span className="text-[#333] text-xs font-mono">{item.step}</span>
                <h3 className="text-white font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-[#888] text-sm">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PublicLayout>
  )
}
