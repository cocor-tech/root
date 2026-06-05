import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Development Process — Brand Assets — Cocor Tech",
  description: "How Cocor Tech develops acquired digital properties — from audit and strategy to growth, monetization, and exit.",
}

const phases = [
  {
    num: "01",
    title: "Audit & Strategy",
    duration: "1-2 weeks",
    tasks: ["Traffic analysis", "Technical audit", "SEO review", "Market assessment", "Competitor analysis"],
  },
  {
    num: "02",
    title: "MVP Build",
    duration: "4-8 weeks",
    tasks: ["Core product development", "Essential feature set", "Launch-ready deployment", "Basic content foundation"],
  },
  {
    num: "03",
    title: "Growth",
    duration: "3-6 months",
    tasks: ["SEO optimization", "Content strategy execution", "Outreach & partnerships", "Traffic acquisition"],
  },
  {
    num: "04",
    title: "Monetization",
    duration: "Ongoing",
    tasks: ["Revenue optimization", "Conversion rate optimization", "Pricing strategy", "New revenue streams"],
  },
  {
    num: "05",
    title: "Optimization",
    duration: "Ongoing",
    tasks: ["A/B testing", "User experience refinement", "Scalability improvements", "Team building"],
  },
  {
    num: "06",
    title: "Exit or Hold",
    duration: "As needed",
    tasks: ["Package for sale", "Find buyer or broker", "Negotiate multiples", "Transfer or hold for cash flow"],
  },
]

export default function DevProcessPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Brands / Development Process</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Development Process</h1>
          <p className="text-secondary text-sm md:text-base max-w-xl mb-12 leading-relaxed">
            How we transform acquired digital properties into valuable assets.
          </p>

          <div className="space-y-px bg-grid mb-12">
            {phases.map((phase) => (
              <div key={phase.num} className="bg-surface p-6 md:p-8">
                <div className="flex items-start gap-6">
                  <span className="text-subtle text-2xl font-mono shrink-0 w-10">{phase.num}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-primary font-semibold">{phase.title}</h3>
                      <span className="text-muted text-xs uppercase tracking-[0.1em] font-mono">{phase.duration}</span>
                    </div>
                    <ul className="space-y-1">
                      {phase.tasks.map((task) => (
                        <li key={task} className="text-secondary text-sm">— {task}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
