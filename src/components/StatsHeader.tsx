"use client";

import { useEffect, useState } from "react";

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
  const [currentSolved, setCurrentSolved] = useState(solved);

  useEffect(() => {
    function handleProgressChange(event: Event) {
      const customEvent = event as CustomEvent<{
        questionId: string;
        solved: boolean;
      }>;

      setCurrentSolved((prev) =>
        customEvent.detail.solved ? prev + 1 : prev - 1
      );
    }

    window.addEventListener(
      "a2z-progress-change",
      handleProgressChange
    );

    return () => {
      window.removeEventListener(
        "a2z-progress-change",
        handleProgressChange
      );
    };
  }, []);

  // Calculate percentage using live solved count
  const pct =
    total > 0
      ? Math.round((currentSolved / total) * 100)
      : 0;

  return (
    <div className="mb-6 rounded-xl border border-border bg-bg-panel p-5">
      {/* Title */}
      <h1 className="text-xl font-bold text-white">
        {title}
      </h1>

      {/* Subtitle */}
      <p className="mt-1 text-sm text-zinc-400">
        {subtitle}
      </p>

      {/* Progress */}
      <div className="mt-4 flex items-center gap-4">
        {/* Percentage */}
        <span className="text-2xl font-bold text-brand">
          {pct}%
        </span>

        {/* Progress Bar */}
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-bg-hover">
          <div
            className="h-full rounded-full bg-brand transition-all duration-300"
            style={{
              width: `${pct}%`,
            }}
          />
        </div>

        {/* Solved Count */}
        <span className="whitespace-nowrap text-sm text-zinc-400">
          {currentSolved} / {total} problems
        </span>
      </div>
    </div>
  );
}