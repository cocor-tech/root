import { Metadata } from "next"
import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Project 2 — Cocor Tech Agency Portfolio",
  description: "Custom software development project by Cocor Tech Agency. Details available on request.",
}

export default function Project2Page() {
  return (
    <PublicLayout>
      <div className="min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-muted text-[10px] uppercase tracking-[0.2em] mb-4">/ Agency / Portfolio / Project 2</p>
          <h1 className="text-5xl md:text-6xl font-black text-primary mb-6">Client Project</h1>
          <p className="text-secondary text-sm md:text-base max-w-2xl mb-12 leading-relaxed">
            A custom software development project delivered for a client. Full details available on request.
          </p>

          <div className="border border-default bg-surface p-6 md:p-8 mb-6">
            <h2 className="text-primary font-semibold mb-3">Project Scope</h2>
            <p className="text-secondary text-sm leading-relaxed">Details of this project are confidential. Contact us for a full portfolio review and relevant case studies.</p>
          </div>

          <div className="border border-default bg-surface p-6 md:p-8 mb-12">
            <h2 className="text-primary font-semibold mb-3">Technologies Used</h2>
            <p className="text-secondary text-sm">Varies by project. Our stack includes Next.js, React, TypeScript, Go, Rust, PostgreSQL, and more.</p>
          </div>

          <div className="text-center">
            <Link href="/contact" className="border border-primary text-primary px-10 py-4 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
              Request Portfolio Details
            </Link>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
