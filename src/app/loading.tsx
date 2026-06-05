export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 border border-primary/30 border-t-primary rounded-full animate-spin" />
        <p className="text-muted text-xs uppercase tracking-[0.15em]">Loading</p>
      </div>
    </div>
  )
}
