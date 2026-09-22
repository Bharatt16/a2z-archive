import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";

export default async function Navbar() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-white"
        >
          <span className="rounded-md bg-brand px-2 py-1 text-xs font-bold text-black">
            A2Z
          </span>
          Archive
        </Link>
        <nav className="flex items-center gap-5 text-sm text-zinc-300">
          <Link href="/archive" className="hover:text-white">
            Archive
          </Link>
          <Link href="/bookmarks" className="hover:text-white">
            Bookmarks
          </Link>
          {user ? (
            <LogoutButton />
          ) : (
            <Link
              href="/login"
              className="rounded-lg bg-brand px-3 py-1.5 font-medium text-black hover:bg-brand-dark"
            >
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
