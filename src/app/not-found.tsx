import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export default function NotFound() {
  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-8xl font-black text-white mb-4">404</h1>
          <p className="text-[#888] mb-8">This page doesn&apos;t exist yet. Create a <code className="bg-[#0a0a0a] px-2 py-0.5 text-sm font-mono">.md</code> file to add it.</p>
          <Link href="/" className="border border-white text-white px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-white hover:text-black transition-all duration-200 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </PublicLayout>
  )
}
