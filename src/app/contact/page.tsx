import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"

export const metadata: Metadata = {
  title: "Contact — Cocor Tech",
  description: "Get in touch with Cocor Tech. Agency inquiries, partnership opportunities, brand asset offers, or general questions.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return (
    <PublicLayout>
      {/* Mobile */}
      <div className="block md:hidden min-h-screen pt-8 px-6 pb-16">
        <p className="arch-label mb-4">Contact</p>
        <h1 className="text-3xl font-black text-white mb-4">Get in Touch</h1>
        <p className="text-[#707070] text-sm mb-8">Agency inquiries, brand offers, or just to say hello.</p>

        <form action={process.env.FORMSPREE_URL || "https://formspree.io/f/your-form-id"} method="POST" className="space-y-4">
          <input type="text" name="name" placeholder="Name" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white"/>
          <input type="email" name="email" placeholder="Email" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white"/>
          <select name="subject" required className="w-full bg-[#0a0a0a] border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white">
            <option value="" className="bg-[#0a0a0a]">Subject</option>
            <option value="agency" className="bg-[#0a0a0a]">Agency Inquiry</option>
            <option value="partnership" className="bg-[#0a0a0a]">Partnership</option>
            <option value="brand-asset" className="bg-[#0a0a0a]">Brand Asset Offer</option>
            <option value="general" className="bg-[#0a0a0a]">General</option>
          </select>
          <textarea name="message" placeholder="Message" required rows={5} className="w-full bg-[#0a0a0a] border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white resize-none"/>
          <button type="submit" className="w-full border border-white text-white py-3 text-xs uppercase tracking-[0.2em]">Send Message</button>
        </form>

        <div className="mt-8 border-t border-[#1a1a1a] pt-6 space-y-1 text-sm">
          <p className="text-[#505050]">hi@cocor.tech</p>
          <p className="text-[#505050]">@moistello on X</p>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden md:block min-h-screen pt-20">
        <div className="max-w-[1440px] mx-auto px-8 py-16">
          <div className="grid grid-cols-5 gap-px bg-[#1a1a1a] min-h-[600px]">
            <div className="col-span-2 bg-[#0a0a0a] p-12">
              <p className="arch-label mb-4">Contact</p>
              <h1 className="text-5xl font-black text-white mb-6 leading-[0.95]">Get in Touch</h1>
              <p className="text-[#606060] text-sm leading-relaxed mb-8 max-w-sm">
                Agency inquiries, partnership opportunities, brand asset offers, or just to say hello.
              </p>
              <div className="space-y-4 pt-8 border-t border-[#1a1a1a]">
                <p className="text-white text-xs font-semibold uppercase tracking-[0.1em]">Email</p>
                <p className="text-[#606060] text-sm">hi@cocor.tech</p>
                <p className="text-white text-xs font-semibold uppercase tracking-[0.1em] mt-6">Social</p>
                <p className="text-[#606060] text-sm">@moistello on X</p>
                <p className="text-[#606060] text-sm">github.com/cocor-tech</p>
              </div>
            </div>

            <div className="col-span-3 bg-[#0a0a0a] p-12">
              <form action={process.env.FORMSPREE_URL || "https://formspree.io/f/your-form-id"} method="POST" className="space-y-5 max-w-xl">
                <div className="grid grid-cols-2 gap-5">
                  <input type="text" name="name" placeholder="Name" required className="bg-black border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"/>
                  <input type="email" name="email" placeholder="Email" required className="bg-black border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors"/>
                </div>
                <select name="subject" required className="w-full bg-black border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors">
                  <option value="" className="bg-black">Select a subject</option>
                  <option value="agency" className="bg-black">Agency Inquiry</option>
                  <option value="partnership" className="bg-black">Partnership</option>
                  <option value="brand-asset" className="bg-black">Brand Asset Offer</option>
                  <option value="general" className="bg-black">General</option>
                </select>
                <textarea name="message" placeholder="Message" required rows={6} className="w-full bg-black border border-[#1a1a1a] px-4 py-3 text-white text-sm focus:outline-none focus:border-white transition-colors resize-none"/>
                <button type="submit" className="border border-white text-white px-10 py-3 text-[10px] uppercase tracking-[0.25em] hover:bg-white hover:text-black transition-all duration-200">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  )
}
