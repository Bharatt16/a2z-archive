import { createClient } from "@/lib/supabase/server";
import { getCurrentUser } from "@/lib/data";
import QuestionRow from "@/components/QuestionRow";
import Link from "next/link";

export default async function BookmarksPage() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="rounded-xl border border-border bg-bg-panel p-8 text-center text-zinc-400">
        <p className="mb-3">Sign in to see your bookmarked questions.</p>
        <Link href="/login" className="text-brand hover:underline">
          Go to sign in
        </Link>
      </div>
    );
  }

  const supabase = createClient();
  const { data: bookmarkRows } = await supabase
    .from("user_bookmarks")
    .select("question_id")
    .eq("user_id", user.id);

  const ids = (bookmarkRows ?? []).map((b) => b.question_id);

  if (ids.length === 0) {
    return <p className="text-zinc-400">No bookmarks yet — tap the star on any question to save it here.</p>;
  }

  const { data: questions } = await supabase.from("questions").select("*").in("id", ids);
  const { data: notes } = await supabase.from("user_notes").select("*").eq("user_id", user.id);
  const { data: progress } = await supabase.from("user_progress").select("*").eq("user_id", user.id);

  const noteMap = new Map((notes ?? []).map((n) => [n.question_id, n.content]));
  const progressMap = new Map((progress ?? []).map((p) => [p.question_id, p.status]));

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-white">Your Bookmarks</h1>
      <div className="rounded-xl border border-border bg-bg-panel p-2">
        {(questions ?? []).map((q) => (
          <QuestionRow
            key={q.id}
            question={q}
            userId={user.id}
            initialSolved={progressMap.get(q.id) === "solved"}
            initialBookmarked
            initialNote={noteMap.get(q.id) ?? ""}
          />
        ))}
      </div>
    </div>
  );
}
