"use client";

import { useState } from "react";
import { CheckCircle2, Circle, Star, StickyNote, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import DifficultyBadge from "./DifficultyBadge";
import StatusBadge from "./StatusBadge";
import PlatformLinks from "./PlatformLinks";
import NotesModal from "./NotesModal";
import type { Question } from "@/types";

export default function QuestionRow({
  question,
  userId,
  initialSolved,
  initialBookmarked,
  initialNote,
  equivalentTitle,
}: {
  question: Question;
  userId: string | null;
  initialSolved: boolean;
  initialBookmarked: boolean;
  initialNote: string;
  equivalentTitle?: string | null;
}) {
  const [solved, setSolved] = useState(initialSolved);
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [notesOpen, setNotesOpen] = useState(false);
  const [note, setNote] = useState(initialNote);
  const supabase = createClient();

  async function toggleSolved() {
    if (!userId) return signInPrompt();
    const next = !solved;
    setSolved(next);
    await supabase.from("user_progress").upsert({
      user_id: userId,
      question_id: question.id,
      status: next ? "solved" : "not_started",
      updated_at: new Date().toISOString(),
    });
  }

  async function toggleBookmark() {
    if (!userId) return signInPrompt();
    const next = !bookmarked;
    setBookmarked(next);
    if (next) {
      await supabase.from("user_bookmarks").insert({ user_id: userId, question_id: question.id });
    } else {
      await supabase
        .from("user_bookmarks")
        .delete()
        .eq("user_id", userId)
        .eq("question_id", question.id);
    }
  }

  function signInPrompt() {
    alert("Sign in to track progress, bookmark, and save notes.");
  }

  return (
    <>
      <div className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 hover:border-border hover:bg-bg-hover">
        <button onClick={toggleSolved} className="shrink-0 text-zinc-500 hover:text-easy">
          {solved ? <CheckCircle2 size={19} className="text-easy" /> : <Circle size={19} />}
        </button>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`truncate text-sm ${solved ? "text-zinc-500 line-through" : "text-zinc-100"}`}>
              {question.title}
            </span>
            {question.status && <StatusBadge status={question.status} />}
          </div>
          {question.status && question.reason && (
            <p className="mt-0.5 text-xs text-zinc-500">
              {question.reason}
              {equivalentTitle && (
                <span className="ml-1 inline-flex items-center gap-1 text-zinc-400">
                  <ArrowRight size={11} className="inline" />
                  <span className="text-zinc-300">{equivalentTitle}</span>
                </span>
              )}
            </p>
          )}
        </div>

        <PlatformLinks
          leetcode_url={question.leetcode_url}
          gfg_url={question.gfg_url}
          tuf_url={question.tuf_url}
          yt_url={question.yt_url}
        />

        <DifficultyBadge level={question.difficulty} />

        <button
          onClick={toggleBookmark}
          className={`shrink-0 ${bookmarked ? "text-brand" : "text-zinc-600 hover:text-brand"}`}
        >
          <Star size={17} fill={bookmarked ? "currentColor" : "none"} />
        </button>

        <button
          onClick={() => setNotesOpen(true)}
          className={`shrink-0 ${note ? "text-blue-400" : "text-zinc-600 hover:text-blue-400"}`}
        >
          <StickyNote size={16} />
        </button>
      </div>

      {notesOpen && (
        <NotesModal
          questionId={question.id}
          title={question.title}
          initialContent={note}
          userId={userId}
          onClose={(saved?: string) => {
            if (typeof saved === "string") setNote(saved);
            setNotesOpen(false);
          }}
        />
      )}
    </>
  );
}
