import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/data";
import Link from "next/link";
import BookmarksList from "@/components/BookmarksList";

export default async function BookmarksPage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="rounded-xl border border-border bg-bg-panel p-8 text-center text-zinc-400">
        <p className="mb-3">
          Sign in to see your bookmarked questions.
        </p>

        <Link
          href="/login"
          className="text-brand hover:underline"
        >
          Go to sign in
        </Link>
      </div>
    );
  }

  const supabase = createClient();

  // Get bookmarked question IDs
  const { data: bookmarkRows } = await supabase
    .from("user_bookmarks")
    .select("question_id")
    .eq("user_id", user.id);

  const ids = (bookmarkRows ?? []).map(
    (bookmark) => bookmark.question_id
  );

  if (ids.length === 0) {
    return (
      <p className="text-zinc-400">
        No bookmarks yet — tap the star on any question to save it here.
      </p>
    );
  }

  // Get questions
  const { data: questions } = await supabase
    .from("questions")
    .select("*")
    .in("id", ids);

  // Get notes
  const { data: notes } = await supabase
    .from("user_notes")
    .select("*")
    .eq("user_id", user.id);

  // Get progress
  const { data: progress } = await supabase
    .from("user_progress")
    .select("*")
    .eq("user_id", user.id);

  // Convert DB data to serializable objects
  const noteMap: Record<string, string> = Object.fromEntries(
    (notes ?? []).map((note) => [
      note.question_id,
      note.content,
    ])
  );

  const progressMap: Record<string, string> = Object.fromEntries(
    (progress ?? []).map((item) => [
      item.question_id,
      item.status,
    ])
  );

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-white">
        Your Bookmarks
      </h1>

      <BookmarksList
        questions={questions ?? []}
        userId={user.id}
        noteMap={noteMap}
        progressMap={progressMap}
      />
    </div>
  );
}