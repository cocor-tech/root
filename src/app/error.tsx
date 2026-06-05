"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center max-w-md px-6">
        <h1 className="text-6xl font-black text-primary mb-4">Error</h1>
        <p className="text-secondary mb-6">Something went wrong.</p>
        <button
          onClick={reset}
          className="border border-primary text-primary px-8 py-3 text-xs uppercase tracking-[0.15em] hover:bg-inverse hover:text-primary transition-all duration-200"
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
