export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-6 h-6 border border-white/30 border-t-white rounded-full animate-spin" />
        <p className="text-[#555] text-xs uppercase tracking-[0.15em]">Loading</p>
      </div>
    </div>
  )
}
