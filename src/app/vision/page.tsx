import { Metadata } from "next"
import { PublicLayout } from "@/components/layout/PublicLayout"
import { contentMetadata, getContentHTML } from "@/lib/content-page"

export const metadata: Metadata = contentMetadata("vision")

export default function VisionPage() {
  const html = getContentHTML("vision")
  return (
    <PublicLayout>
      <div className="max-w-3xl mx-auto px-4 py-24">
        {html ? <article dangerouslySetInnerHTML={{ __html: html }} /> : <p className="text-[#888]">Page not found.</p>}
      </div>
    </PublicLayout>
  )
}
