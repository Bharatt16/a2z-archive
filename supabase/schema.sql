-- ============================================================
-- A2Z ARCHIVE — Supabase schema
-- Run this in the Supabase SQL editor (Project -> SQL Editor)
-- ============================================================

-- ---------- STEPS (top level, e.g. "Step 4: Binary Search") ----------
create table if not exists steps (
  id            serial primary key,
  slug          text unique not null,
  title         text not null,
  order_index   int not null
);

-- ---------- LECTURES (sub-group inside a step, e.g. "Lec 1: Basic and Easy") ----------
create table if not exists lectures (
  id            serial primary key,
  step_id       int references steps(id) on delete cascade,
  slug          text unique not null,
  title         text not null,
  order_index   int not null
);

-- ---------- QUESTIONS ----------
-- sheet_version: 'new'    -> exists in the current 442 sheet
--                'archive'-> only exists in this table because it was in the OLD sheet
-- status (only meaningful for sheet_version='archive'):
--   'removed'  -> no equivalent in the new sheet at all
--   'merged'   -> folded into a broader/renamed new-sheet question (see equivalent_question_id)
--   'renamed'  -> same question, new title (see equivalent_question_id)
create table if not exists questions (
  id                    serial primary key,
  lecture_id            int references lectures(id) on delete cascade,
  title                 text not null,
  difficulty            text check (difficulty in ('Basic','Easy','Medium','Hard')) default 'Medium',
  order_index            int not null,

  sheet_version         text not null check (sheet_version in ('new','archive')) default 'new',
  status                text check (status in ('removed','merged','renamed')),
equivalent_question_id int references questions(id),
equivalent_title      text,
reason                text

  leetcode_url          text,
  gfg_url               text,
  tuf_url               text,
  yt_url                text,

  tags                  text[] default '{}',
  created_at            timestamptz default now()
);

create unique index if not exists uq_questions_lecture_title on questions(lecture_id, title);
create index if not exists idx_questions_lecture on questions(lecture_id);
create index if not exists idx_questions_sheet_version on questions(sheet_version);
create index if not exists idx_questions_status on questions(status);

-- ============================================================
-- PER-USER DATA (protected by Row Level Security)
-- ============================================================

create table if not exists user_progress (
  user_id       uuid references auth.users(id) on delete cascade,
  question_id   int references questions(id) on delete cascade,
  status        text check (status in ('not_started','attempted','solved')) not null default 'not_started',
  updated_at    timestamptz default now(),
  primary key (user_id, question_id)
);

create table if not exists user_bookmarks (
  user_id       uuid references auth.users(id) on delete cascade,
  question_id   int references questions(id) on delete cascade,
  created_at    timestamptz default now(),
  primary key (user_id, question_id)
);

create table if not exists user_notes (
  user_id       uuid references auth.users(id) on delete cascade,
  question_id   int references questions(id) on delete cascade,
  content       text not null default '',
  updated_at    timestamptz default now(),
  primary key (user_id, question_id)
);

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

alter table steps enable row level security;
alter table lectures enable row level security;
alter table questions enable row level security;
alter table user_progress enable row level security;
alter table user_bookmarks enable row level security;
alter table user_notes enable row level security;

-- Public read access to the sheet content itself
create policy "public read steps" on steps for select using (true);
create policy "public read lectures" on lectures for select using (true);
create policy "public read questions" on questions for select using (true);

-- Users can only see/edit their own progress, bookmarks, notes
create policy "own progress select" on user_progress for select using (auth.uid() = user_id);
create policy "own progress upsert" on user_progress for insert with check (auth.uid() = user_id);
create policy "own progress update" on user_progress for update using (auth.uid() = user_id);
create policy "own progress delete" on user_progress for delete using (auth.uid() = user_id);

create policy "own bookmarks select" on user_bookmarks for select using (auth.uid() = user_id);
create policy "own bookmarks insert" on user_bookmarks for insert with check (auth.uid() = user_id);
create policy "own bookmarks delete" on user_bookmarks for delete using (auth.uid() = user_id);

create policy "own notes select" on user_notes for select using (auth.uid() = user_id);
create policy "own notes upsert" on user_notes for insert with check (auth.uid() = user_id);
create policy "own notes update" on user_notes for update using (auth.uid() = user_id);
create policy "own notes delete" on user_notes for delete using (auth.uid() = user_id);
