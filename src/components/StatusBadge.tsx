const CONFIG: Record<string, { label: string; className: string }> = {
  removed: { label: "Removed", className: "text-removed bg-removed/10 border-removed/30" },
  merged: { label: "Merged", className: "text-merged bg-merged/10 border-merged/30" },
  renamed: { label: "Renamed", className: "text-renamed bg-renamed/10 border-renamed/30" },
};

export default function StatusBadge({ status }: { status: string }) {
  const cfg = CONFIG[status];
  if (!cfg) return null;
  return (
    <span className={`rounded-full border px-2 py-0.5 text-[11px] font-medium ${cfg.className}`}>
      {cfg.label}
    </span>
  );
}
