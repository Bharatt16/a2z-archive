import { Youtube, ExternalLink } from "lucide-react";

function Chip({ href, label, className }: { href: string; label: string; className: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      className={`inline-flex h-6 w-6 items-center justify-center rounded-md text-[10px] font-bold hover:opacity-80 ${className}`}
    >
      {label[0]}
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
        <Chip href={leetcode_url} label="LC" className="bg-orange-500/15 text-orange-400" />
      )}
      {gfg_url && <Chip href={gfg_url} label="GFG" className="bg-green-600/15 text-green-400" />}
      {tuf_url && <Chip href={tuf_url} label="TUF" className="bg-blue-500/15 text-blue-400" />}
      {yt_url && (
        <a
          href={yt_url}
          target="_blank"
          rel="noopener noreferrer"
          title="Watch on YouTube"
          className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-red-500/15 text-red-400 hover:opacity-80"
        >
          <Youtube size={13} />
        </a>
      )}
      {!leetcode_url && !gfg_url && !tuf_url && !yt_url && (
        <ExternalLink size={13} className="text-zinc-600" />
      )}
    </div>
  );
}
