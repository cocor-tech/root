import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Legacy Modernization — Cocor Tech Agency",
  description: "Upgrade aging systems to modern stacks. Reduce technical debt, improve performance, and enable faster feature development.",
}

export default function LegacyModPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Legacy Modernization</h1>
          <p className="text-secondary text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            Upgrade aging systems to modern stacks. Reduce technical debt, improve performance, and enable faster feature development.
          </p>

          <div className="space-y-6 mb-16">
            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Our Approach</h2>
              <ol className="space-y-2 text-secondary text-sm">
                <li>1. Audit — full assessment of current system, dependencies, and pain points</li>
                <li>2. Strategy — incremental migration plan with minimal business disruption</li>
                <li>3. Execution — phased modernization with parallel runs and rollback capability</li>
                <li>4. Validation — performance testing, security review, team handoff</li>
              </ol>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">What We Modernize</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— Monolithic to microservices architecture</li>
                <li>— Legacy frameworks to modern stacks (Next.js, Go, Rust)</li>
                <li>— On-premise to cloud infrastructure</li>
                <li>— Outdated databases to modern, scalable solutions</li>
                <li>— Manual workflows to automated pipelines</li>
              </ul>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Pricing</h2>
              <p className="text-secondary text-sm">Project-based from $30K. Pricing depends on system complexity and migration scope.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-inverse transition-all duration-200 inline-block">
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
