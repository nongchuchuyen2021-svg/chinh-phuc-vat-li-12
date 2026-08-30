"use client";

import { useState } from "react";
import type { EssayQuestion } from "@/lib/types";

export default function EssayViewer({
  lessonTitle,
  questions,
  onBack,
}: {
  lessonTitle: string;
  questions: EssayQuestion[];
  onBack: () => void;
}) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
      <button
        onClick={onBack}
        className="rounded-full glass px-3 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
      >
        ← Quay lại
      </button>
      <h1 className="mt-5 font-display text-2xl font-bold leading-snug">
        <span className="bg-gradient-to-r from-nebula to-plasma bg-clip-text text-transparent">
          ✍️ Tự luận
        </span>
      </h1>
      <p className="mt-1 text-sm text-star-soft">{lessonTitle}</p>

      <div className="mt-6 space-y-4">
        {questions.map((q, idx) => (
          <div key={q.id} className="rounded-2xl glass p-5 shadow-glass animate-fade-in-up" style={{ animationDelay: `${idx * 80}ms` }}>
            <p className="text-sm font-medium text-star">
              <span className="text-nebula-glow">Câu {idx + 1}.</span> {q.q}
            </p>
            {q.code && (
              <pre className="mt-2 overflow-x-auto rounded-lg bg-void p-3 font-mono text-xs leading-relaxed text-nebula-glow">
                {q.code}
              </pre>
            )}
            <button
              onClick={() => toggle(q.id)}
              className="mt-3 rounded-full glass-subtle px-4 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
            >
              {revealed.has(q.id) ? "Ẩn gợi ý" : "Xem gợi ý đáp án"}
            </button>
            {revealed.has(q.id) && (
              <div className="mt-3 animate-pop-in rounded-xl bg-correct/10 p-3 border border-correct/20">
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-star-soft">
                  {q.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
