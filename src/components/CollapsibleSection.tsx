"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function CollapsibleSection({
  title,
  solvedCount,
  totalCount,
  level = "step",
  defaultOpen = false,
  children,
}: {
  title: string;
  solvedCount: number;
  totalCount: number;
  level?: "step" | "lecture";
  defaultOpen?: boolean;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const isStep = level === "step";

  return (
    <div
      className={
        isStep
          ? "mb-3 overflow-hidden rounded-xl border border-border bg-bg-panel"
          : "mb-2 overflow-hidden rounded-lg border border-border/60 bg-bg-card"
      }
    >
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between px-4 py-3 text-left hover:bg-bg-hover ${
          isStep ? "text-base font-semibold text-white" : "text-sm font-medium text-zinc-200"
        }`}
      >
        <span>{title}</span>
        <span className="flex items-center gap-3 text-xs font-normal text-zinc-400">
          {solvedCount} / {totalCount}
          {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        </span>
      </button>
      {open && <div className="space-y-0.5 px-2 pb-3">{children}</div>}
    </div>
  );
}
