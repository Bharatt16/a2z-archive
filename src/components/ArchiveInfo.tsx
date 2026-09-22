export default function ArchiveInfo() {
  return (
    <section className="mb-8 rounded-2xl border border-border bg-bg-panel p-6 shadow-sm">
      <div className="mb-5">
        <h2 className="text-xl font-bold text-zinc-100">
          How Archive Categories Work
        </h2>

        <p className="mt-2 text-sm leading-6 text-zinc-400">
Some questions got removed. Some got merged. But the grind? That never got deleted.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Removed */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
              Removed
            </span>
          </div>

          <p className="text-sm leading-6 text-zinc-300">
            This question is no longer listed as a separate question in the
            current A2Z sheet.
          </p>
        </div>

        {/* Merged */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
              Merged
            </span>
          </div>

          <p className="text-sm leading-6 text-zinc-300">
            This question was combined into another question in the current
            A2Z sheet.
          </p>

          <p className="mt-3 text-xs leading-5 text-zinc-500">
            Example:{" "}
            <span className="text-zinc-400">
              Ninja and His Friends → Cherry Pickup II
            </span>
          </p>
        </div>

        {/* Renamed */}
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-4">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
              Renamed
            </span>
          </div>

          <p className="text-sm leading-6 text-zinc-300">
            The same question is still present, but its title was changed in
            the current A2Z sheet.
          </p>

          <p className="mt-3 text-xs leading-5 text-zinc-500">
            Example:{" "}
            <span className="text-zinc-400">
              Height of a Binary Tree → Maximum Depth in BT
            </span>
          </p>
        </div>
      </div>

      <div className="mt-5 border-t border-zinc-800 pt-4">
        <p className="text-xs leading-5 text-zinc-500">
          Classification is based on our comparison of the older and current
          A2Z sheets.
        </p>
      </div>
    </section>
  );
}