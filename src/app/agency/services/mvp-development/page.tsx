import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "MVP Development — Cocor Tech Agency",
  description: "From idea to working product in 4-12 weeks. Cocor Tech builds MVPs fast — rapid iteration, validated learning, production-ready code.",
}

export default function MVPPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">MVP Development</h1>
          <p className="text-secondary text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            From idea to working product in 4-12 weeks. Rapid iteration, validated learning, and production-ready code.
          </p>

          <div className="space-y-6 mb-16">
            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Our MVP Process</h2>
              <ol className="space-y-2 text-secondary text-sm">
                <li>1. Product strategy session (1 week)</li>
                <li>2. Core feature scoping &amp; prioritization</li>
                <li>3. Rapid design &amp; prototyping</li>
                <li>4. Build sprints (2-8 weeks)</li>
                <li>5. User testing &amp; iteration</li>
                <li>6. Launch &amp; handoff</li>
              </ol>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">What You Get</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— Production-ready codebase</li>
                <li>— Deployed and accessible MVP</li>
                <li>— Documentation and handoff guide</li>
                <li>— Recommendations for next phase</li>
              </ul>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Pricing</h2>
              <p className="text-secondary text-sm">Fixed-price from $10K. Scope, timeline, and price are locked before development begins.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
              Start Your MVP
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
