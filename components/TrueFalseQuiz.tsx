"use client";

import { useEffect, useRef, useState } from "react";
import type { TFQuestion } from "@/lib/types";
import { getLessonProgress, saveAttempt } from "@/lib/progress";
import { scrollIntoViewIfNeeded } from "@/components/QuizClient";

type Answer = (boolean | null)[];

export default function TrueFalseQuiz({
  lessonId,
  lessonTitle,
  questions,
  onBack,
}: {
  lessonId: string;
  lessonTitle: string;
  questions: TFQuestion[];
  onBack: () => void;
}) {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Answer>(
    () => Array(questions[0]?.statements.length ?? 4).fill(null)
  );
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState<number | null>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const progressKey = `${lessonId}:ds`;

  useEffect(() => {
    setBest(getLessonProgress(progressKey)?.best ?? null);
  }, [progressKey]);

  useEffect(() => {
    if (submitted) scrollIntoViewIfNeeded(resultRef.current);
  }, [submitted]);

  const q = questions[current];
  if (!q) return null;

  function pick(idx: number, val: boolean) {
    if (submitted) return;
    setAnswers((prev) => {
      const next = [...prev];
      next[idx] = val;
      return next;
    });
  }

  function submit() {
    const correctCount = q.statements.reduce(
      (sum, s, i) => sum + (answers[i] === s.answer ? 1 : 0),
      0
    );
    let pts = 0;
    if (correctCount === 4) pts = 1;
    else if (correctCount === 3) pts = 0.25;
    setScores((prev) => [...prev, pts]);
    setSubmitted(true);
  }

  function next() {
    if (current + 1 >= questions.length) {
      const totalPts = [...scores].reduce((a, b) => a + b, 0);
      const pct = Math.round((totalPts / questions.length) * 100);
      saveAttempt(progressKey, pct);
      setFinished(true);
    } else {
      setCurrent((c) => c + 1);
      setAnswers(Array(questions[current + 1]?.statements.length ?? 4).fill(null));
      setSubmitted(false);
    }
  }

  if (finished) {
    const totalPts = scores.reduce((a, b) => a + b, 0);
    const pct = Math.round((totalPts / questions.length) * 100);
    const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "💪" : "📖";

    return (
      <div className="mx-auto max-w-2xl px-5 pt-12 sm:px-8">
        <div className="animate-pop-in rounded-2xl glass-bright p-8 text-center shadow-glow">
          <p className="text-6xl">{emoji}</p>
          <h1 className="mt-3 font-display text-2xl font-bold">
            <span className="bg-gradient-to-r from-nebula to-plasma bg-clip-text text-transparent">
              {totalPts.toFixed(2)}/{questions.length} điểm · {pct}%
            </span>
          </h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => window.location.reload()}
              className="rounded-full bg-gradient-to-r from-nebula to-plasma px-6 py-2.5 font-medium text-white shadow-glow transition hover:shadow-glow-hover"
            >
              Làm lại
            </button>
            <button
              onClick={onBack}
              className="rounded-full glass px-6 py-2.5 font-medium text-star-soft transition hover:text-star hover:border-nebula/40"
            >
              ← Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  const allPicked = answers.every((a) => a !== null);
  const labels = ["a", "b", "c", "d"];

  return (
    <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
      <header>
        <div className="flex items-center justify-between gap-3">
          <button
            onClick={onBack}
            className="rounded-full glass px-3 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
          >
            ← Quay lại
          </button>
          <p className="font-mono text-xs text-star-soft">
            Câu {current + 1}/{questions.length}
            {best !== null && ` · kỉ lục ${best}%`}
          </p>
        </div>
        <h1 className="mt-3 font-display text-lg font-semibold leading-snug text-star">
          {lessonTitle}
        </h1>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-void-card">
          <div
            className="h-full rounded-full bg-gradient-to-r from-nebula to-plasma transition-all duration-300 shadow-glow"
            style={{ width: `${Math.round((current / questions.length) * 100)}%` }}
          />
        </div>
      </header>

      <div key={q.id} className="mt-6 animate-pop-in">
        <div className="rounded-2xl glass-bright p-5 shadow-glass sm:p-6">
          <p className="text-sm font-medium leading-relaxed text-star">{q.context}</p>
          {q.code && (
            <pre className="mt-3 overflow-x-auto rounded-lg bg-void p-3 font-mono text-xs leading-relaxed text-nebula-glow">
              {q.code}
            </pre>
          )}
        </div>

        <div className="mt-4 space-y-2">
          {q.statements.map((s, i) => {
            const myAns = answers[i];
            const isCorrect = submitted ? myAns === s.answer : undefined;
            return (
              <div
                key={i}
                className={`rounded-xl glass px-4 py-3 transition-all ${
                  submitted
                    ? isCorrect
                      ? "border-correct/40 bg-correct/10"
                      : "border-wrong/40 bg-wrong/10"
                    : ""
                }`}
              >
                <p className="text-sm text-star">
                  <span className="font-semibold text-nebula-glow">{labels[i]})</span> {s.text}
                </p>
                <div className="mt-2 flex gap-2">
                  {[true, false].map((val) => (
                    <button
                      key={String(val)}
                      disabled={submitted}
                      onClick={() => pick(i, val)}
                      className={`rounded-full px-4 py-1.5 font-mono text-xs font-medium transition-all ${
                        myAns === val
                          ? submitted
                            ? val === s.answer
                              ? "bg-correct text-white"
                              : "bg-wrong text-white"
                            : "bg-nebula text-white shadow-glow"
                          : submitted && val === s.answer
                            ? "bg-correct/30 text-correct"
                            : "glass-subtle text-star-soft hover:text-star hover:border-nebula/40"
                      }`}
                    >
                      {val ? "Đúng" : "Sai"}
                    </button>
                  ))}
                </div>
                {submitted && (
                  <p className="mt-2 text-xs leading-relaxed text-star-soft animate-pop-in">
                    {s.explain}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div ref={resultRef} className="mt-4">
          {!submitted ? (
            <button
              disabled={!allPicked}
              onClick={submit}
              className={`w-full rounded-full px-5 py-2.5 font-medium text-white transition ${
                allPicked
                  ? "bg-gradient-to-r from-nebula to-plasma shadow-glow hover:shadow-glow-hover"
                  : "bg-star-mute/30 cursor-not-allowed text-star-mute"
              }`}
            >
              Chấm điểm
            </button>
          ) : (
            <button
              onClick={next}
              className="w-full rounded-full bg-gradient-to-r from-nebula to-plasma px-5 py-2.5 font-medium text-white shadow-glow transition hover:shadow-glow-hover"
            >
              {current + 1 >= questions.length ? "Xem kết quả 🏁" : "Câu tiếp theo →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
