import type { BankMCQuestion, BankTFQuestion, BankShortAnswerQuestion, MockExam } from "./types";
import { GRADE_10_MCQ, GRADE_10_TF, GRADE_10_SHORT_ANSWER } from "./grade10";
import { GRADE_11_MCQ, GRADE_11_TF, GRADE_11_SHORT_ANSWER } from "./grade11";
import { GRADE_12_MCQ, GRADE_12_TF, GRADE_12_SHORT_ANSWER } from "./grade12";

// Helper shuffle function (Fisher-Yates)
function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function pickRandom<T>(pool: T[], count: number): T[] {
  const shuffled = shuffle(pool);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

/**
 * Sinh một đề thi thử ngẫu nhiên theo ma trận chuẩn 3 khối lớp:
 * - Phần I (18 câu MCQ): 13 câu Lớp 12 + 3 câu Lớp 11 + 2 câu Lớp 10
 * - Phần II (4 câu TF): 2 câu Lớp 12 + 1 câu Lớp 11 + 1 câu Lớp 10
 * - Phần III (6 câu Trả lời ngắn): 4 câu Lớp 12 + 1 câu Lớp 11 + 1 câu Lớp 10
 */
export function generateRandomMockExam(index = 1): MockExam {
  const p1_12 = pickRandom(GRADE_12_MCQ, 13);
  const p1_11 = pickRandom(GRADE_11_MCQ, 3);
  const p1_10 = pickRandom(GRADE_10_MCQ, 2);
  const part1 = [...p1_12, ...p1_11, ...p1_10];

  const p2_12 = pickRandom(GRADE_12_TF, 2);
  const p2_11 = pickRandom(GRADE_11_TF, 1);
  const p2_10 = pickRandom(GRADE_10_TF, 1);
  const part2 = [...p2_12, ...p2_11, ...p2_10];

  const p3_12 = pickRandom(GRADE_12_SHORT_ANSWER, 4);
  const p3_11 = pickRandom(GRADE_11_SHORT_ANSWER, 1);
  const p3_10 = pickRandom(GRADE_10_SHORT_ANSWER, 1);
  const part3 = [...p3_12, ...p3_11, ...p3_10];

  return {
    id: `random-exam-${Date.now()}-${index}`,
    title: `Đề thi ngẫu nhiên #${index}`,
    subtitle: `Ma trận chuẩn 10-11-12: Lớp 12 (~70%), Lớp 11 (~20%), Lớp 10 (~10%)`,
    durationMinutes: 50,
    totalPoints: 10.0,
    part1,
    part2,
    part3,
    isGenerated: true,
  };
}

// ─── 6 BỘ ĐỀ THI MẪU CỐ ĐỊNH CHUẨN MA TRẬN 10-11-12 ──────────────────────────

export function createStandardExams(): MockExam[] {
  const exams: MockExam[] = [];

  // Tạo 6 bộ đề mẫu chuẩn phân bố đều câu hỏi từ ngân hàng
  for (let i = 0; i < 6; i++) {
    // Phần I (18 câu = 13 câu L12 + 3 câu L11 + 2 câu L10)
    const p1_12 = GRADE_12_MCQ.slice(i * 13, (i + 1) * 13);
    const p1_11 = GRADE_11_MCQ.slice(i * 3, (i + 1) * 3);
    const p1_10 = GRADE_10_MCQ.slice(i * 2, (i + 1) * 2);
    const part1 = [...p1_12, ...p1_11, ...p1_10];

    // Phần II (4 câu = 2 câu L12 + 1 câu L11 + 1 câu L10)
    const p2_12 = GRADE_12_TF.slice((i * 2) % GRADE_12_TF.length, ((i + 1) * 2) % GRADE_12_TF.length || GRADE_12_TF.length);
    const p2_11 = [GRADE_11_TF[i % GRADE_11_TF.length]];
    const p2_10 = [GRADE_10_TF[i % GRADE_10_TF.length]];
    const part2 = [...p2_12, ...p2_11, ...p2_10];

    // Phần III (6 câu = 4 câu L12 + 1 câu L11 + 1 câu L10)
    const p3_12 = GRADE_12_SHORT_ANSWER.slice((i * 4) % GRADE_12_SHORT_ANSWER.length, (i * 4 + 4) % GRADE_12_SHORT_ANSWER.length || GRADE_12_SHORT_ANSWER.length);
    const p3_11 = [GRADE_11_SHORT_ANSWER[i % GRADE_11_SHORT_ANSWER.length]];
    const p3_10 = [GRADE_10_SHORT_ANSWER[i % GRADE_10_SHORT_ANSWER.length]];
    const part3 = [...p3_12, ...p3_11, ...p3_10];

    exams.push({
      id: `de-chuan-0${i + 1}`,
      title: `Đề thi thử 0${i + 1} — Chuẩn ma trận 10-11-12`,
      subtitle: `Cấu trúc chuẩn Bộ GD&ĐT: Lớp 12 (70%), Lớp 11 (20%), Lớp 10 (10%)`,
      durationMinutes: 50,
      totalPoints: 10.0,
      part1,
      part2,
      part3,
      isGenerated: false,
    });
  }

  return exams;
}

export const STANDARD_EXAMS: MockExam[] = createStandardExams();

export const QUESTION_POOL_STATS = {
  grade10: {
    mcq: GRADE_10_MCQ.length,
    tf: GRADE_10_TF.length,
    tfStatements: GRADE_10_TF.length * 4,
    shortAnswer: GRADE_10_SHORT_ANSWER.length,
    totalQuestions: GRADE_10_MCQ.length + GRADE_10_TF.length + GRADE_10_SHORT_ANSWER.length,
  },
  grade11: {
    mcq: GRADE_11_MCQ.length,
    tf: GRADE_11_TF.length,
    tfStatements: GRADE_11_TF.length * 4,
    shortAnswer: GRADE_11_SHORT_ANSWER.length,
    totalQuestions: GRADE_11_MCQ.length + GRADE_11_TF.length + GRADE_11_SHORT_ANSWER.length,
  },
  grade12: {
    mcq: GRADE_12_MCQ.length,
    tf: GRADE_12_TF.length,
    tfStatements: GRADE_12_TF.length * 4,
    shortAnswer: GRADE_12_SHORT_ANSWER.length,
    totalQuestions: GRADE_12_MCQ.length + GRADE_12_TF.length + GRADE_12_SHORT_ANSWER.length,
  },
  total: {
    mcq: GRADE_10_MCQ.length + GRADE_11_MCQ.length + GRADE_12_MCQ.length,
    tf: GRADE_10_TF.length + GRADE_11_TF.length + GRADE_12_TF.length,
    tfStatements: (GRADE_10_TF.length + GRADE_11_TF.length + GRADE_12_TF.length) * 4,
    shortAnswer: GRADE_10_SHORT_ANSWER.length + GRADE_11_SHORT_ANSWER.length + GRADE_12_SHORT_ANSWER.length,
    grandTotalQuestions:
      GRADE_10_MCQ.length +
      GRADE_10_TF.length +
      GRADE_10_SHORT_ANSWER.length +
      GRADE_11_MCQ.length +
      GRADE_11_TF.length +
      GRADE_11_SHORT_ANSWER.length +
      GRADE_12_MCQ.length +
      GRADE_12_TF.length +
      GRADE_12_SHORT_ANSWER.length,
  },
};
