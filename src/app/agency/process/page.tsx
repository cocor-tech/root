import { buildMetadata } from "@/lib/seo"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = buildMetadata({
    title: "Process",
    description: "How Cocor Tech Agency delivers projects — from discovery and design to development, deployment, and ongoing support.",
    slug: "agency/process",
    keywords: "software development process, agile, delivery pipeline",
  })

const steps = [
  { num: "01", title: "Discovery", desc: "We learn about your business, goals, and technical requirements. Deliverable: project brief and estimated timeline." },
  { num: "02", title: "Architecture", desc: "We design the system architecture, select technologies, and plan the development approach. Deliverable: architecture document." },
  { num: "03", title: "Development", desc: "Agile development in 2-week sprints. Regular demos and progress updates. Deliverable: working software every sprint." },
  { num: "04", title: "Testing & QA", desc: "Automated tests, manual QA, performance testing, and security review. Deliverable: tested, production-ready code." },
  { num: "05", title: "Deployment", desc: "We deploy to your infrastructure, set up monitoring, and configure CI/CD. Deliverable: live, running system." },
  { num: "06", title: "Support", desc: "Ongoing maintenance, monitoring, and feature development. Deliverable: reliable, evolving software." },
]

export default function ProcessPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Process</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Our Process</h1>
          <p className="text-secondary text-sm md:text-base max-w-xl mb-16 leading-relaxed">How we deliver projects, from first conversation to ongoing partnership.</p>

          <div className="space-y-px bg-grid">
            {steps.map((step) => (
              <div key={step.num} className="bg-surface p-6 md:p-8 flex gap-6">
                <span className="text-subtle text-2xl font-mono shrink-0 w-10">{step.num}</span>
                <div>
                  <h3 className="text-primary font-semibold mb-2">{step.title}</h3>
                  <p className="text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
