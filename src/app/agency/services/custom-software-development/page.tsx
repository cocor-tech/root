import { buildMetadata } from "@/lib/seo"
import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = buildMetadata({
    title: "Custom Software Development",
    description: "Cocor Tech builds custom software — full-stack applications, APIs, internal tools, and platforms tailored to your business needs.",
    slug: "agency/services/custom-software-development",
    keywords: "custom software development, software agency, web development",
  })

export default function CustomSoftwarePage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Services</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Custom Software Development</h1>
          <p className="text-secondary text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            We build full-stack applications, APIs, internal tools, and platforms tailored to your business needs. From architecture to deployment to maintenance.
          </p>

          <div className="space-y-6 mb-16">
            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">What We Build</h2>
              <ul className="space-y-2 text-secondary text-sm">
                <li>— Web and mobile applications</li>
                <li>— REST and GraphQL APIs</li>
                <li>— Internal tools and dashboards</li>
                <li>— SaaS platforms and marketplaces</li>
                <li>— Blockchain and DeFi applications</li>
                <li>— Data processing pipelines</li>
              </ul>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Our Approach</h2>
              <ol className="space-y-2 text-secondary text-sm">
                <li>1. Discovery &amp; requirements gathering</li>
                <li>2. Architecture &amp; technology selection</li>
                <li>3. Agile development in 2-week sprints</li>
                <li>4. Continuous testing &amp; QA</li>
                <li>5. Deployment &amp; monitoring</li>
                <li>6. Ongoing maintenance &amp; support</li>
              </ol>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Technologies</h2>
              <p className="text-secondary text-sm">Next.js, React, TypeScript, Go, Rust, Python, PostgreSQL, Redis, Docker, Stellar/Soroban, Tailwind CSS, and more.</p>
            </div>

            <div className="border border-default bg-surface p-6 md:p-8">
              <h2 className="text-primary font-semibold mb-3">Pricing</h2>
              <p className="text-secondary text-sm">Project-based pricing from $20K. Contact us for a quote tailored to your scope.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
