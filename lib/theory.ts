import type { LessonTheory } from "./types";
import bai01 from "@/data/theory/bai-01";

// Bài lí thuyết tự học của từng bài.
export const THEORY_BANK: Record<string, LessonTheory> = {
  "bai-01": bai01,
};

export function getTheory(lessonId: string): LessonTheory | null {
  return THEORY_BANK[lessonId] ?? null;
}

export function hasTheory(lessonId: string): boolean {
  return lessonId in THEORY_BANK;
}
