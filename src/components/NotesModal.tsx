"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";

export default function NotesModal({
  questionId,
  title,
  initialContent,
  userId,
  onClose,
}: {
  questionId: number;
  title: string;
  initialContent: string;
  userId: string | null;
  onClose: (savedContent?: string) => void;
}) {
  const [content, setContent] = useState(initialContent);
  const [saving, setSaving] = useState(false);
  const supabase = createClient();

  async function save() {
    if (!userId) return;
    setSaving(true);
    await supabase
      .from("user_notes")
      .upsert({ user_id: userId, question_id: questionId, content, updated_at: new Date().toISOString() });
    setSaving(false);
    onClose(content);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-lg rounded-xl border border-border bg-bg-card p-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-white">Notes — {title}</h3>
          <button onClick={() => onClose()} className="text-zinc-400 hover:text-white">
            <X size={18} />
          </button>
        </div>

        {!userId ? (
          <p className="text-sm text-zinc-400">Sign in to save notes for this question.</p>
        ) : (
          <>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              placeholder="Approach, edge cases, complexity, links to your solution..."
              className="w-full rounded-lg border border-border bg-bg p-3 text-sm text-zinc-200 outline-none focus:border-brand"
            />
            <div className="mt-3 flex justify-end gap-2">
              <button
                onClick={() => onClose()}
                className="rounded-lg px-3 py-1.5 text-sm text-zinc-400 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={save}
                disabled={saving}
                className="rounded-lg bg-brand px-3 py-1.5 text-sm font-medium text-black hover:bg-brand-dark disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save note"}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
