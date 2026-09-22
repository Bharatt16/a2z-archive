"use client";

import { useEffect, useState } from "react";
import QuestionRow from "./QuestionRow";
import type { Question } from "@/types";

export default function BookmarksList({
  questions,
  userId,
  noteMap,
  progressMap,
}: {
  questions: Question[];
  userId: string;
  noteMap: Record<string, string>;
  progressMap: Record<string, string>;
}) {
  const [visibleQuestions, setVisibleQuestions] = useState(questions);

  useEffect(() => {
    function handleBookmarkChange(event: Event) {
      const customEvent = event as CustomEvent<{
        questionId: number;
        bookmarked: boolean;
      }>;

      const { questionId, bookmarked } = customEvent.detail;

      // Remove the question immediately from Bookmarks
      if (!bookmarked) {
        setVisibleQuestions((current) =>
          current.filter(
            (question) => question.id !== questionId
          )
        );
      }
    }

    window.addEventListener(
      "a2z-bookmark-change",
      handleBookmarkChange
    );

    return () => {
      window.removeEventListener(
        "a2z-bookmark-change",
        handleBookmarkChange
      );
    };
  }, []);

  if (visibleQuestions.length === 0) {
    return (
      <p className="text-zinc-400">
        No bookmarks yet — tap the star on any question to save it here.
      </p>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-bg-panel p-2">
      {visibleQuestions.map((q) => (
        <QuestionRow
          key={q.id}
          question={q}
          userId={userId}
          initialSolved={progressMap[q.id] === "solved"}
          initialBookmarked
          initialNote={noteMap[q.id] ?? ""}
        />
      ))}
    </div>
  );
}