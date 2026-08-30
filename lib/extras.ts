import type { EssayQuestion, LessonExtra, TFQuestion } from "./types";
import bai01 from "@/data/extra/bai-01";

// Câu hỏi đúng/sai và tự luận của từng bài.
export const EXTRA_BANK: Record<string, LessonExtra> = {
  "bai-01": bai01,
};

export function getTF(lessonId: string): TFQuestion[] {
  return EXTRA_BANK[lessonId]?.tf ?? [];
}

export function getEssay(lessonId: string): EssayQuestion[] {
  return EXTRA_BANK[lessonId]?.essay ?? [];
}
