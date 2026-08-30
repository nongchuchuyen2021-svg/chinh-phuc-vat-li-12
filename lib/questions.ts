import type { Question } from "./types";
import bai01 from "@/data/questions/bai-01";

// Ngân hàng câu hỏi trắc nghiệm Vật lí 12.
export const QUESTION_BANK: Record<string, Question[]> = {
  "bai-01": bai01,
};

export function getQuestions(lessonId: string): Question[] {
  return QUESTION_BANK[lessonId] ?? [];
}
