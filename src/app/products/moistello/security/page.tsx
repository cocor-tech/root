import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Security — Moistello — Cocor Tech",
  description: "Moistello security architecture — smart contract security, access control, pause mechanism, and bug bounty program.",
}

export default function SecurityPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#555] text-[10px] uppercase tracking-[0.2em] mb-4">/ Products / Moistello / Security</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Security</h1>
          <div className="space-y-6">
            <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6">
              <h3 className="text-white font-semibold mb-2">Smart Contract Architecture</h3>
              <p className="text-[#888] text-sm">5 contracts: Circle Factory, Circle (per-instance), Treasury, Reputation Registry, Governance Token. Non-custodial, no central party controls funds.</p>
            </div>
            <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6">
              <h3 className="text-white font-semibold mb-2">Access Control</h3>
              <p className="text-[#888] text-sm">Role-based: Admin, Organizer, Member. Address-based caller verification.</p>
            </div>
            <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6">
              <h3 className="text-white font-semibold mb-2">Pause Mechanism</h3>
              <p className="text-[#888] text-sm">Emergency stop via Admin role in case of critical issues.</p>
            </div>
            <div className="border border-[#1a1a1a] bg-[#0a0a0a] p-6">
              <h3 className="text-white font-semibold mb-2">Audit Status</h3>
              <p className="text-[#888] text-sm">45 unit tests, 12 property tests, 8 integration tests, 3 fuzz tests across the contract suite.</p>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
