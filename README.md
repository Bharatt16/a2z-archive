# A2Z Archive

Striver's A2Z DSA Sheet, rebuilt — plus an "Archive" section for every question the
newer 442-question update removed, merged, or renamed from the older 455-question sheet.
Auth + per-user progress, bookmarks, and notes via Supabase.

## Stack
- Next.js 14 (App Router, TypeScript, Tailwind)
- Supabase (Postgres + Auth), Row Level Security for all per-user data

## 1. Install

```bash
npm install
```

## 2. Create a Supabase project

1. Go to https://supabase.com → New project.
2. In **Project Settings → API**, copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (seed script only — never expose client-side)
3. Copy `.env.local.example` → `.env.local` and fill in the three values.

## 3. Create the database schema

Open the Supabase SQL Editor and run the contents of `supabase/schema.sql`.
This creates:
- `steps`, `lectures`, `questions` (public, read-only to everyone)
- `user_progress`, `user_bookmarks`, `user_notes` (private per-user, RLS-protected)

## 4. Seed the dataset

`scripts/seed-data.ts` now contains the reconstructed **442-entry current A2Z sheet**
with its Step → Lecture hierarchy, plus a source-derived archive of **57 older-sheet
entries** that are no longer standalone in the current structure: **45 removed,
8 merged, and 4 renamed**. The archive intentionally keeps these categories separate
rather than calling everything "removed".

The current-sheet export did not expose YouTube URLs, so `yt_url` is intentionally left
empty until the Striver video links are supplied. Platform URLs are populated where the
supplied older export gave an unambiguous LC/GFG/TUF mapping.

```bash
npm run seed
```

## 5. Run it

```bash
npm run dev
```

Visit http://localhost:3000. Sign up, confirm the email Supabase sends you, sign in —
checkboxes, bookmarks (star), and notes now persist to your account.

## Where things live

| Feature | File |
|---|---|
| Main sheet UI | `src/app/page.tsx` |
| Archive (removed/merged/renamed) | `src/app/archive/page.tsx` |
| Bookmarks | `src/app/bookmarks/page.tsx` |
| Question row (checkbox, links, star, notes) | `src/components/QuestionRow.tsx` |
| DB schema + RLS | `supabase/schema.sql` |
| Seed data (current 442 + archive diff) | `scripts/seed-data.ts` |

## Extending the dataset

The current 442-entry sheet is already seeded. For future corrections/additions, each **new-sheet** question needs: `title`, `difficulty`, a step + lecture, and
`leetcode_url` / `gfg_url` / `tuf_url` / `yt_url` (add your Striver YouTube links here —
that field is already wired into the UI, just populate it in `seed-data.ts`).

Each **archive** question additionally needs:
- `status`: `"removed"` | `"merged"` | `"renamed"`
- `reason`: one line shown under the title
- `equivalentTitle` (merged/renamed only): the exact title of the new-sheet question it
  maps to — the seed script resolves this to a real foreign key automatically.

## Next steps you'll likely want

- Search + topic/platform/difficulty/status filters on both pages (client-side over the
  already-fetched list is enough at this size — no need for server-side search).
- A "solved / attempted / not started" 3-state toggle instead of the current binary
  checkbox (the `user_progress.status` column already supports `attempted`).
- Deploy: Vercel (frontend) + Supabase (already hosted) is the path of least resistance —
  just add the same three env vars in Vercel's project settings.
