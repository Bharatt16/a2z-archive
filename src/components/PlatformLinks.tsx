import { ExternalLink } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks, SiYoutube } from "react-icons/si";


function Chip({
  href,
  title,
  children,
  className,
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  className: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`inline-flex h-6 min-w-6 items-center justify-center rounded-md px-1.5 text-[11px] font-bold transition hover:opacity-80 ${className}`}
    >
      {children}
    </a>
  );
}

export default function PlatformLinks({
  leetcode_url,
  gfg_url,
  tuf_url,
  yt_url,
}: {
  leetcode_url?: string | null;
  gfg_url?: string | null;
  tuf_url?: string | null;
  yt_url?: string | null;
}) {
  return (
    <div className="flex items-center gap-1.5">
      {leetcode_url && (
        <Chip
          href={leetcode_url}
          title="LeetCode"
          className="bg-orange-500/15 text-orange-400"
        >
          <SiLeetcode size={13} />
        </Chip>
      )}

      {gfg_url && (
        <Chip
          href={gfg_url}
          title="GeeksforGeeks"
          className="bg-green-600/15 text-green-400"
        >
          <SiGeeksforgeeks size={14} />
        </Chip>
      )}

      {tuf_url && (
        <Chip
          href={tuf_url}
          title="TakeUForward"
          className="bg-blue-500/15 text-blue-400"
        >
          <span className="text-[9px] font-extrabold tracking-tight">
            TUF
          </span>
        </Chip>
      )}

      {yt_url && (
        <Chip
          href={yt_url}
          title="Watch Striver's video"
          className="bg-red-500/15 text-red-400"
        >
          <SiYoutube size={14} />
        </Chip>
      )}

      {!leetcode_url && !gfg_url && !tuf_url && !yt_url && (
        <ExternalLink size={13} className="text-zinc-600" />
      )}
    </div>
  );
}