import { createClient } from "@/lib/supabase/server";
import type { Step, Lecture, Question } from "@/types";

export async function getCurrentUser() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/** Fetches the full sheet tree for a given sheet_version ('new' | 'archive'). */
export async function getSheet(sheetVersion: "new" | "archive"): Promise<Step[]> {
  const supabase = createClient();

  const { data: steps, error: stepErr } = await supabase
    .from("steps")
    .select("*")
    .order("order_index");
  if (stepErr) throw stepErr;

  const { data: lectures, error: lecErr } = await supabase
    .from("lectures")
    .select("*")
    .order("order_index");
  if (lecErr) throw lecErr;

  const { data: questions, error: qErr } = await supabase
    .from("questions")
    .select("*")
    .eq("sheet_version", sheetVersion)
    .order("order_index");
  if (qErr) throw qErr;

  const relevantStepSlugs =
    sheetVersion === "archive" ? new Set(["archive"]) : null;

  const tree: Step[] = (steps ?? [])
    .filter((s) => (relevantStepSlugs ? relevantStepSlugs.has(s.slug) : s.slug !== "archive"))
    .map((step) => {
      const stepLectures: Lecture[] = (lectures ?? [])
        .filter((l) => l.step_id === step.id)
        .map((lecture) => ({
          ...lecture,
          questions: (questions ?? []).filter(
            (q) => q.lecture_id === lecture.id
          ) as Question[],
        }))
        .filter((l) => l.questions.length > 0);

      return { ...step, lectures: stepLectures };
    })
    .filter((s) => s.lectures.length > 0);

  return tree;
}

export async function getUserState(userId: string | null) {
  if (!userId) {
    return { progress: new Map<number, string>(), bookmarks: new Set<number>(), notes: new Map<number, string>() };
  }
  const supabase = createClient();

  const [{ data: progress }, { data: bookmarks }, { data: notes }] = await Promise.all([
    supabase.from("user_progress").select("*").eq("user_id", userId),
    supabase.from("user_bookmarks").select("*").eq("user_id", userId),
    supabase.from("user_notes").select("*").eq("user_id", userId),
  ]);

  return {
    progress: new Map((progress ?? []).map((p) => [p.question_id, p.status])),
    bookmarks: new Set((bookmarks ?? []).map((b) => b.question_id)),
    notes: new Map((notes ?? []).map((n) => [n.question_id, n.content])),
  };
}

/** Builds a lookup of question id -> title, used to show "renamed/merged into X". */
// export async function getQuestionTitleLookup(): Promise<Map<number, string>> {
//   const supabase = createClient();
//   const { data } = await supabase.from("questions").select("id, title");
//   return new Map((data ?? []).map((q) => [q.id, q.title]));
// }
