// Run with: npm run seed
// Requires SUPABASE_SERVICE_ROLE_KEY in your .env.local (Project Settings -> API -> service_role).
// This key bypasses RLS — never expose it to the browser, only use it here on your machine.

import { createClient } from "@supabase/supabase-js";
import { archiveQuestions } from "./seed-data";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in .env.local",
  );
  process.exit(1);
}

const supabase = createClient(url, serviceKey);

async function main() {
  console.log("Seeding archive (removed / merged / renamed) questions...");

  // Archive questions live under a synthetic "Archive" step/lecture per topic,
  // so they render in the same UI shell but are visually separated.
  const { data: archiveStep, error: archiveStepErr } = await supabase
    .from("steps")
    .upsert(
      {
        slug: "archive",
        title: "A2Z Archive — Old Sheet Only",
        order_index: 999,
      },
      { onConflict: "slug" },
    )
    .select()
    .single();
  if (archiveStepErr) throw archiveStepErr;

  const topics = Array.from(new Set(archiveQuestions.map((q) => q.topic)));
  let topicOrder = 0;
  for (const topic of topics) {
    topicOrder++;
    const lecSlug = `archive__${slugify(topic)}`;
    const { data: lecRow, error: lecErr } = await supabase
      .from("lectures")
      .upsert(
        {
          slug: lecSlug,
          title: topic,
          step_id: archiveStep.id,
          order_index: topicOrder,
        },
        { onConflict: "slug" },
      )
      .select()
      .single();
    if (lecErr) throw lecErr;

    const questionsInTopic = archiveQuestions.filter((q) => q.topic === topic);
    let qOrder = 0;
    for (const q of questionsInTopic) {
      qOrder++;

      let equivalentId: number | null = null;
      if (q.equivalentTitle) {
        const { data: match } = await supabase
          .from("questions")
          .select("id")
          .eq("title", q.equivalentTitle)
          .eq("sheet_version", "new")
          .maybeSingle();
        equivalentId = match?.id ?? null;
      }

      const { error: qErr } = await supabase.from("questions").upsert(
        {
          lecture_id: lecRow.id,
          title: q.title,
          difficulty: q.difficulty,
          order_index: qOrder,
          sheet_version: "archive",
          status: q.status,
          equivalent_question_id: null,
          equivalent_title: q.equivalentTitle ?? null,
          reason: q.reason,
          leetcode_url: q.leetcode_url ?? null,
          gfg_url: q.gfg_url ?? null,
          tuf_url: q.tuf_url ?? null,
          yt_url: q.yt_url ?? null,
          tags: q.tags ?? [],
        },
        { onConflict: "lecture_id,title" },
      );
      if (qErr) throw qErr;
    }
  }

  console.log("Done.");
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
