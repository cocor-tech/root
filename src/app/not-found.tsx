import Link from "next/link"
import { PublicLayout } from "@/components/layout/PublicLayout"

export default function NotFound() {
  return (
    <PublicLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <h1 className="text-8xl font-black text-primary mb-4">404</h1>
          <p className="text-secondary mb-8">Looks like this page doesn&apos;t exist. Let&apos;s get you back on track.</p>
          <Link href="/" className="border border-primary text-primary px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200 inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    </PublicLayout>
  )
}
