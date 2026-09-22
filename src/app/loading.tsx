export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-[2px]">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-panel px-5 py-3 shadow-xl">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-700 border-t-brand" />

        <span className="text-sm text-zinc-300">
          Loading...
        </span>
      </div>
    </div>
  );
}