import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Technologies — Cocor Tech Agency",
  description: "Technologies we use at Cocor Tech Agency — Next.js, React, TypeScript, Go, Rust, Stellar/Soroban, PostgreSQL, Redis, Docker, and more.",
}

const categories = [
  {
    name: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Backend",
    items: ["Go", "Rust", "Node.js", "Python", "GraphQL", "REST"],
  },
  {
    name: "Blockchain",
    items: ["Stellar", "Soroban", "Rust Smart Contracts", "Horizon API", "Freighter SDK"],
  },
  {
    name: "Database & Cache",
    items: ["PostgreSQL", "Redis", "RabbitMQ"],
  },
  {
    name: "DevOps",
    items: ["Docker", "CI/CD", "Vercel", "Linux", "Cloud Infrastructure"],
  },
  {
    name: "Tools & Workflow",
    items: ["Git", "Agile/Scrum", "Figma", "Sentry", "Plausible"],
  },
]

export default function TechnologiesPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Technologies</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Technologies</h1>
          <p className="text-secondary text-sm md:text-base max-w-xl mb-16 leading-relaxed">Our core technology stack. We choose tools based on project needs.</p>

          <div className="grid md:grid-cols-2 gap-px bg-grid">
            {categories.map((cat) => (
              <div key={cat.name} className="bg-surface p-6 md:p-8">
                <h3 className="text-primary text-xs uppercase tracking-[0.15em] font-semibold mb-4">{cat.name}</h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="text-secondary text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
