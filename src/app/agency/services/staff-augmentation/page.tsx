import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Staff Augmentation — Cocor Tech Agency",
  description: "Senior engineers integrated into your team. Monthly retainer, full-time dedication, Nigeria-based with global delivery.",
}

export default function StaffAugPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Staff Augmentation</h1>
          <p className="text-secondary text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            Senior engineers integrated into your team. Monthly retainer, full-time dedication, seamless collaboration.
          </p>

          <div className="space-y-6 mb-16">
            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">How It Works</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— We match engineers to your tech stack and culture</li>
                <li>— Engineers work your hours (overlap with your timezone)</li>
                <li>— They use your tools, join your standups, follow your processes</li>
                <li>— Monthly retainer with no long-term commitment</li>
              </ul>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Available Roles</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— Full-stack engineers (Next.js, React, TypeScript, Node.js)</li>
                <li>— Backend engineers (Go, Rust, Python, PostgreSQL)</li>
                <li>— Blockchain engineers (Stellar/Soroban, Solidity)</li>
                <li>— DevOps engineers (Docker, CI/CD, cloud infrastructure)</li>
              </ul>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Pricing</h2>
              <p className="text-secondary text-sm">Monthly retainer from $5K/month per engineer. Volume discounts available for teams of 3+.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
              Hire an Engineer
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
