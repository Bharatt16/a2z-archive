"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as HTMLElement;
      const link = target.closest("a");

      if (!link) return;

      // Ignore external links
      if (link.origin !== window.location.origin) return;

      // Ignore new tab / modified clicks
      if (
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        event.button !== 0
      ) {
        return;
      }

      const href = link.getAttribute("href");

      if (!href || href.startsWith("#")) return;

      const url = new URL(href, window.location.origin);

      // Don't show loader when clicking the current URL
      const currentUrl =
        window.location.pathname +
        window.location.search;

      if (
        url.pathname + url.search === currentUrl
      ) {
        return;
      }

      setLoading(true);
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Hide loader once navigation finishes
  useEffect(() => {
    setLoading(false);
  }, [pathname, searchParams]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
      <div className="flex items-center gap-3 rounded-xl border border-border bg-bg-panel px-5 py-3 shadow-xl">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-700 border-t-brand" />

        <span className="text-sm font-medium text-zinc-300">
          Loading...
        </span>
      </div>
    </div>
  );
}