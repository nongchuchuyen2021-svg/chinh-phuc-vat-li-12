import type { Question, TFQuestion } from "@/lib/types";

export type GradeLevel = 10 | 11 | 12;

export type BankMCQuestion = Question & {
  grade: GradeLevel;
  topic: string;
};

export type BankTFQuestion = TFQuestion & {
  grade: GradeLevel;
  topic: string;
};

export type BankShortAnswerQuestion = {
  id: string;
  q: string;
  answer: number;
  tolerance?: number;
  unit?: string;
  explain: string;
  grade: GradeLevel;
  topic: string;
};

export type MockExam = {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  totalPoints: number;
  part1: BankMCQuestion[]; // 18 câu trắc nghiệm nhiều lựa chọn (4,5 điểm)
  part2: BankTFQuestion[]; // 4 câu đúng/sai (4,0 điểm)
  part3: BankShortAnswerQuestion[]; // 6 câu trả lời ngắn (1,5 điểm)
  isGenerated?: boolean;
};
