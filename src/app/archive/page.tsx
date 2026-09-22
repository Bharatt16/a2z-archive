import { getSheet, getUserState, getCurrentUser } from "@/lib/data";
import StatsHeader from "@/components/StatsHeader";
import CollapsibleSection from "@/components/CollapsibleSection";
import QuestionRow from "@/components/QuestionRow";

export default async function ArchivePage() {
  const user = await getCurrentUser();
  const steps = await getSheet("archive");
  const { progress, bookmarks, notes } = await getUserState(user?.id ?? null);
  // const titleLookup = await getQuestionTitleLookup();

  const allQuestions = steps.flatMap((s) => s.lectures.flatMap((l) => l.questions));
  const counts = {
    removed: allQuestions.filter((q) => q.status === "removed").length,
    merged: allQuestions.filter((q) => q.status === "merged").length,
    renamed: allQuestions.filter((q) => q.status === "renamed").length,
  };

  return (
    <div>
      <StatsHeader
        title="A2Z Archive"
        subtitle="Every question from the older 455-question sheet that isn't a standalone entry in the current 442-question sheet — split into genuinely removed, merged into a broader problem, or simply renamed."
        solved={0}
        total={allQuestions.length}
      />

      <div className="mb-6 grid grid-cols-3 gap-3">
        <StatChip label="Removed" value={counts.removed} className="text-removed" />
        <StatChip label="Merged" value={counts.merged} className="text-merged" />
        <StatChip label="Renamed" value={counts.renamed} className="text-renamed" />
      </div>

      {steps.map((step) =>
        step.lectures.map((lecture) => (
          <CollapsibleSection
            key={lecture.id}
            title={lecture.title}
            solvedCount={0}
            totalCount={lecture.questions.length}
            level="step"
            defaultOpen
          >
            {lecture.questions.map((q) => (
              <QuestionRow
                key={q.id}
                question={q}
                userId={user?.id ?? null}
                initialSolved={progress.get(q.id) === "solved"}
                initialBookmarked={bookmarks.has(q.id)}
                initialNote={notes.get(q.id) ?? ""}
                equivalentTitle={q.equivalent_title}
              />
            ))}
          </CollapsibleSection>
        ))
      )}
    </div>
  );
}

function StatChip({ label, value, className }: { label: string; value: number; className: string }) {
  return (
    <div className="rounded-xl border border-border bg-bg-panel p-4 text-center">
      <div className={`text-2xl font-bold ${className}`}>{value}</div>
      <div className="mt-1 text-xs text-zinc-400">{label}</div>
    </div>
  );
}
