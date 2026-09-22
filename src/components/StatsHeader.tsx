export default function StatsHeader({
  title,
  subtitle,
  solved,
  total,
}: {
  title: string;
  subtitle: string;
  solved: number;
  total: number;
}) {
  const pct = total > 0 ? Math.round((solved / total) * 100) : 0;

  return (
    <div className="mb-6 rounded-xl border border-border bg-bg-panel p-5">
      <h1 className="text-xl font-bold text-white">{title}</h1>
      <p className="mt-1 text-sm text-zinc-400">{subtitle}</p>

      <div className="mt-4 flex items-center gap-4">
        <span className="text-2xl font-bold text-brand">{pct}%</span>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-bg-hover">
          <div
            className="h-full rounded-full bg-brand transition-all"
            style={{ width: `${pct}%` }}
          />
        </div>
        <span className="whitespace-nowrap text-sm text-zinc-400">
          {solved} / {total} problems
        </span>
      </div>
    </div>
  );
}
