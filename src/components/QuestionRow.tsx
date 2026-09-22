"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Circle,
  Star,
  StickyNote,
  ArrowRight,
} from "lucide-react";

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
  // Current UI state
  const [solved, setSolved] = useState(initialSolved);
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const [notesOpen, setNotesOpen] = useState(false);
  const [note, setNote] = useState(initialNote);

  const supabase = createClient();
  const router = useRouter();

  // --------------------------------------------------
  // SOLVED / UNSOLVED
  // --------------------------------------------------
async function toggleSolved() {
  if (!userId) {
    return signInPrompt();
  }

  const nextSolved = !solved;

  // ⚡ Update question UI immediately
  setSolved(nextSolved);

  // ⚡ Update progress header immediately
  window.dispatchEvent(
    new CustomEvent("a2z-progress-change", {
      detail: {
        questionId: question.id,
        solved: nextSolved,
      },
    })
  );

  try {
    if (nextSolved) {
      // Mark as solved
      const { error } = await supabase
        .from("user_progress")
        .upsert(
          {
            user_id: userId,
            question_id: question.id,
            status: "solved",
          },
          {
            onConflict: "user_id,question_id",
          }
        );

      if (error) {
        // Rollback
        setSolved(false);

        window.dispatchEvent(
          new CustomEvent("a2z-progress-change", {
            detail: {
              questionId: question.id,
              solved: false,
            },
          })
        );

        console.error("Failed to mark question as solved:", error);
        return;
      }
    } else {
      // Mark as unsolved
      const { error } = await supabase
        .from("user_progress")
        .delete()
        .eq("user_id", userId)
        .eq("question_id", question.id);

      if (error) {
        // Rollback
        setSolved(true);

        window.dispatchEvent(
          new CustomEvent("a2z-progress-change", {
            detail: {
              questionId: question.id,
              solved: true,
            },
          })
        );

        console.error("Failed to mark question as unsolved:", error);
        return;
      }
    }

    // Server synchronization
    router.refresh();
  } catch (error) {
    // Rollback
    setSolved(!nextSolved);

    window.dispatchEvent(
      new CustomEvent("a2z-progress-change", {
        detail: {
          questionId: question.id,
          solved: !nextSolved,
        },
      })
    );

    console.error("Failed to update progress:", error);
  }
}

  // --------------------------------------------------
  // BOOKMARK
  // --------------------------------------------------
async function toggleBookmark() {
  if (!userId) {
    return signInPrompt();
  }

  const nextBookmarked = !bookmarked;

  // ⚡ Update star immediately
  setBookmarked(nextBookmarked);

  // ⚡ Tell Bookmarks page immediately
  window.dispatchEvent(
    new CustomEvent("a2z-bookmark-change", {
      detail: {
        questionId: question.id,
        bookmarked: nextBookmarked,
      },
    })
  );

  try {
    if (nextBookmarked) {
      // Add bookmark
      const { error } = await supabase
        .from("user_bookmarks")
        .upsert(
          {
            user_id: userId,
            question_id: question.id,
          },
          {
            onConflict: "user_id,question_id",
          }
        );

      if (error) {
        // Rollback star
        setBookmarked(false);

        window.dispatchEvent(
          new CustomEvent("a2z-bookmark-change", {
            detail: {
              questionId: question.id,
              bookmarked: false,
            },
          })
        );

        console.error("Failed to add bookmark:", error);
        return;
      }
    } else {
      // Remove bookmark
      const { error } = await supabase
        .from("user_bookmarks")
        .delete()
        .eq("user_id", userId)
        .eq("question_id", question.id);

      if (error) {
        // Rollback star
        setBookmarked(true);

        window.dispatchEvent(
          new CustomEvent("a2z-bookmark-change", {
            detail: {
              questionId: question.id,
              bookmarked: true,
            },
          })
        );

        console.error("Failed to remove bookmark:", error);
        return;
      }
    }

    // Keep server state synchronized
    router.refresh();
  } catch (error) {
    // Rollback
    setBookmarked(!nextBookmarked);

    window.dispatchEvent(
      new CustomEvent("a2z-bookmark-change", {
        detail: {
          questionId: question.id,
          bookmarked: !nextBookmarked,
        },
      })
    );

    console.error("Failed to update bookmark:", error);
  }
}

  // --------------------------------------------------
  // SIGN-IN PROMPT
  // --------------------------------------------------
  function signInPrompt() {
    alert("Sign in to track progress, bookmark, and save notes.");
  }

  return (
    <>
      <div className="group flex items-center gap-3 rounded-lg border border-transparent px-3 py-2.5 hover:border-border hover:bg-bg-hover">
        {/* SOLVED BUTTON */}
        <button
          onClick={toggleSolved}
          className="shrink-0 text-zinc-500 hover:text-easy"
          aria-label={solved ? "Mark as unsolved" : "Mark as solved"}
        >
          {solved ? (
            <CheckCircle2 size={19} className="text-easy" />
          ) : (
            <Circle size={19} />
          )}
        </button>

        {/* QUESTION DETAILS */}
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`truncate text-sm ${
                solved
                  ? "text-zinc-500 line-through"
                  : "text-zinc-100"
              }`}
            >
              {question.title}
            </span>

            {question.status && (
              <StatusBadge status={question.status} />
            )}
          </div>

          {/* STATUS REASON + EQUIVALENT TITLE */}
          {question.status && question.reason && (
            <p className="mt-0.5 text-xs text-zinc-500">
              {question.reason}

              {equivalentTitle && (
                <span className="ml-1 inline-flex items-center gap-1 text-zinc-400">
                  <ArrowRight size={11} className="inline" />

                  <span className="text-zinc-300">
                    {equivalentTitle}
                  </span>
                </span>
              )}
            </p>
          )}
        </div>

        {/* PLATFORM LINKS */}
        <PlatformLinks
          leetcode_url={question.leetcode_url}
          gfg_url={question.gfg_url}
          tuf_url={question.tuf_url}
          yt_url={question.yt_url}
        />

        {/* DIFFICULTY */}
        <DifficultyBadge level={question.difficulty} />

        {/* BOOKMARK */}
        <button
          onClick={toggleBookmark}
          className={`shrink-0 ${
            bookmarked
              ? "text-brand"
              : "text-zinc-600 hover:text-brand"
          }`}
          aria-label={
            bookmarked ? "Remove bookmark" : "Bookmark question"
          }
        >
          <Star
            size={17}
            fill={bookmarked ? "currentColor" : "none"}
          />
        </button>

        {/* NOTES */}
        <button
          onClick={() => setNotesOpen(true)}
          className={`shrink-0 ${
            note
              ? "text-blue-400"
              : "text-zinc-600 hover:text-blue-400"
          }`}
          aria-label="Open notes"
        >
          <StickyNote size={16} />
        </button>
      </div>

      {/* NOTES MODAL */}
      {notesOpen && (
        <NotesModal
          questionId={question.id}
          title={question.title}
          initialContent={note}
          userId={userId}
          onClose={(saved?: string) => {
            if (typeof saved === "string") {
              setNote(saved);
            }

            setNotesOpen(false);
          }}
        />
      )}
    </>
  );
}