import { buildMetadata } from "@/lib/seo"
import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { ContactForm } from "@/components/shared/ContactForm"

export const metadata: Metadata = buildMetadata({
    title: "Contact",
    description: "Get in touch with Cocor Tech. Agency inquiries, partnership opportunities, brand asset offers, or general questions.",
    slug: "contact",
    keywords: "contact cocor tech, software agency inquiry, partnership",
  })

export default function ContactPage() {
  return (
    <PublicLayout>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen pt-8 px-6 pb-16">
        <p className="arch-label mb-4">Contact</p>
        <h1 className="text-3xl font-black text-primary mb-4">Get in Touch</h1>
        <p className="text-secondary text-sm mb-8">Agency inquiries, brand offers, or just to say hello.</p>

        <ContactForm variant="surface" />

        <div className="mt-8 border-t border-default pt-6 space-y-3 text-sm">
          <p className="text-muted">Reach us on X: @cocortech</p>
          <p className="text-muted">Send a pull request: github.com/cocor-tech</p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block min-h-screen pt-20">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-5 gap-px bg-grid min-h-[600px]">
            <div className="col-span-2 bg-surface p-12">
              <p className="arch-label mb-4">Contact</p>
              <h1 className="text-5xl font-black text-primary mb-6 leading-[0.95]">Get in Touch</h1>
              <p className="text-secondary text-sm leading-relaxed mb-8 max-w-sm">
                Agency inquiries, partnership opportunities, brand asset offers, or just to say hello.
              </p>
              <div className="space-y-4 pt-8 border-t border-default">
                <p className="text-primary text-xs font-semibold uppercase tracking-[0.1em]">X (Twitter)</p>
                <p className="text-secondary text-sm">@cocortech</p>
                <p className="text-primary text-xs font-semibold uppercase tracking-[0.1em] mt-6">GitHub</p>
                <p className="text-secondary text-sm">github.com/cocor-tech</p>
                <p className="text-muted text-xs mt-2">Send a pull request or open an issue.</p>
              </div>
            </div>

            <div className="col-span-3 bg-surface p-12">
              <ContactForm variant="bg-main" className="max-w-xl" />
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
