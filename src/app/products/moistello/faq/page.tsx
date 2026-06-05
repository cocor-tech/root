import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "FAQ — Moistello — Cocor Tech",
  description: "Frequently asked questions about Moistello, Stellar savings circles, MoiScore, and how decentralized ROSCAs work.",
}

const faqs = [
  { q: "What is a ROSCA?", a: "A Rotating Savings and Credit Association. A group of people who contribute money regularly and take turns receiving the pooled amount." },
  { q: "How is my money safe?", a: "Funds are held in Soroban smart contracts — non-custodial and trustless. No one can access the pool except according to the programmed rules." },
  { q: "What happens if someone misses a payment?", a: "A grace period is applied (default 24h). After that, a late fee is charged. After exceeding max strikes (default 3), the member is removed." },
  { q: "How is MoiScore calculated?", a: "0-1000 scale: Streak (35%), Completions (30%), Volume (20%), Recency (15%)." },
  { q: "What are the fees?", a: "0.5% protocol fee on payouts. Stellar network fees are sub-$0.001 per transaction." },
  { q: "Can I withdraw early?", a: "Early withdrawal is not possible once a circle is active. This ensures trust and reliability for all members." },
  { q: "What blockchains are supported?", a: "Currently Stellar (testnet and mainnet)." },
  { q: "Is it available in my country?", a: "Moistello is a decentralized protocol — anyone with a Stellar wallet and internet connection can participate." },
]

export default function FAQPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Products / Moistello / FAQ</p>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-8">FAQ</h1>
          <div className="space-y-4">
            {faqs.map((item) => (
              <div key={item.q} className="border border-default bg-surface p-6">
                <h3 className="text-primary font-semibold mb-2">{item.q}</h3>
                <p className="text-secondary text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
