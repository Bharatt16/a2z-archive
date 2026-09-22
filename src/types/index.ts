export type Difficulty = "Basic" | "Easy" | "Medium" | "Hard";
export type SheetVersion = "new" | "archive";
export type ArchiveStatus = "removed" | "merged" | "renamed";
export type ProgressStatus = "not_started" | "attempted" | "solved";

export interface Question {
  id: number;
  lecture_id: number;
  title: string;
  difficulty: Difficulty;
  order_index: number;

  sheet_version: SheetVersion;
  status: ArchiveStatus | null;
equivalent_question_id: number | null;
equivalent_title: string | null;
reason: string | null;

  leetcode_url: string | null;
  gfg_url: string | null;
  tuf_url: string | null;
  yt_url: string | null;

  tags: string[];
}

export interface Lecture {
  id: number;
  step_id: number;
  slug: string;
  title: string;
  order_index: number;
  questions: Question[];
}

export interface Step {
  id: number;
  slug: string;
  title: string;
  order_index: number;
  lectures: Lecture[];
}

export interface UserProgressRow {
  user_id: string;
  question_id: number;
  status: ProgressStatus;
}

export interface UserBookmarkRow {
  user_id: string;
  question_id: number;
}

export interface UserNoteRow {
  user_id: string;
  question_id: number;
  content: string;
}
