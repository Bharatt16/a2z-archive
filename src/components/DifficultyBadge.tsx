const COLORS: Record<string, string> = {
  Basic: "text-zinc-400 bg-zinc-400/10",
  Easy: "text-easy bg-easy/10",
  Medium: "text-medium bg-medium/10",
  Hard: "text-hard bg-hard/10",
};

export default function DifficultyBadge({ level }: { level: string }) {
  return (
    <span
      className={`rounded-md px-2 py-0.5 text-xs font-medium ${COLORS[level] ?? COLORS.Medium}`}
    >
      {level}
    </span>
  );
}
