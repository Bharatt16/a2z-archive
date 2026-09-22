import {
  getSheet,
  getUserState,
  getCurrentUser,
} from "@/lib/data";

import StatsHeader from "@/components/StatsHeader";
import CollapsibleSection from "@/components/CollapsibleSection";
import QuestionRow from "@/components/QuestionRow";
import ArchiveInfo from "@/components/ArchiveInfo";

export default async function ArchivePage() {
  const user = await getCurrentUser();
  const steps = await getSheet("archive");

  const { progress, bookmarks, notes } = await getUserState(
    user?.id ?? null,
  );

  const allQuestions = steps.flatMap((step) =>
    step.lectures.flatMap((lecture) => lecture.questions),
  );

  const counts = {
    removed: allQuestions.filter((q) => q.status === "removed").length,
    merged: allQuestions.filter((q) => q.status === "merged").length,
    renamed: allQuestions.filter((q) => q.status === "renamed").length,
  };

  const solvedQuestions = allQuestions.filter(
    (q) => progress.get(q.id) === "solved",
  ).length;

  return (
    <div>



      {/* Page Header */}
      <StatsHeader
        title="A2Z Archive"
        subtitle="Questions from the older A2Z sheet that are no longer standalone entries in the current A2Z sheet."
        solved={solvedQuestions}
        total={allQuestions.length}
      />

       {/* Archive Category Explanation */}
      <ArchiveInfo />

     

      {/* Category Counts */}
      <div className="mb-6 grid grid-cols-3 gap-3">
        <StatChip
          label="Removed"
          value={counts.removed}
          className="text-removed"
        />

        <StatChip
          label="Merged"
          value={counts.merged}
          className="text-merged"
        />

        <StatChip
          label="Renamed"
          value={counts.renamed}
          className="text-renamed"
        />
      </div>

      {/* Archive Questions */}
      <div className="mb-4">
        <h2 className="text-xl font-bold text-zinc-100">
          Archive Questions
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
          Browse questions from the older A2Z sheet and see how they were
          classified in the current A2Z sheet.
        </p>
      </div>

      {/* Filters / Question Sections */}
      {steps.map((step) =>
        step.lectures.map((lecture) => (
          <CollapsibleSection
            key={lecture.id}
            title={lecture.title}
            solvedCount={
              lecture.questions.filter(
                (q) => progress.get(q.id) === "solved",
              ).length
            }
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
        )),
      )}
    </div>
  );
}

function StatChip({
  label,
  value,
  className,
}: {
  label: string;
  value: number;
  className: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-bg-panel p-4 text-center">
      <div className={`text-2xl font-bold ${className}`}>
        {value}
      </div>

      <div className="mt-1 text-xs text-zinc-400">
        {label}
      </div>
    </div>
  );
}