"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();
  const supabase = createClient();

  return (
    <button
      onClick={async () => {
        await supabase.auth.signOut();
        router.refresh();
      }}
      className="rounded-lg border border-border px-3 py-1.5 text-zinc-300 hover:border-brand hover:text-white"
    >
      Sign out
    </button>
  );
}
