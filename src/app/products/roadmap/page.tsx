import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Roadmap — Cocor Tech Products",
  description: "Cocor Tech product roadmap — upcoming features and products.",
}

export default function RoadmapPage() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Products / Roadmap</p>
          <h1 className="text-4xl md:text-5xl font-black text-primary mb-4">Roadmap</h1>
          <p className="text-secondary text-sm mb-8">What we're building next.</p>
          <div className="border border-default bg-surface p-6">
            <p className="text-secondary text-sm">More details coming soon. Moistello is live and actively developed.</p>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
