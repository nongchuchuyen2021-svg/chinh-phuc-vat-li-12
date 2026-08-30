"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { EssayQuestion, LessonTheory, Question, TFQuestion } from "@/lib/types";
import { getLessonProgress, theoryKey } from "@/lib/progress";
import QuizClient from "@/components/QuizClient";
import TrueFalseQuiz from "@/components/TrueFalseQuiz";
import EssayViewer from "@/components/EssayViewer";
import TheoryViewer from "@/components/TheoryViewer";

type Mode = "menu" | "theory" | "mcq" | "tf" | "essay";

export default function LessonClient({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  mcq,
  tf,
  essay,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory | null;
  mcq: Question[];
  tf: TFQuestion[];
  essay: EssayQuestion[];
}) {
  const [mode, setMode] = useState<Mode>("menu");
  const [bestMcq, setBestMcq] = useState<number | null>(null);
  const [bestTf, setBestTf] = useState<number | null>(null);
  const [readTheory, setReadTheory] = useState(false);

  useEffect(() => {
    if (mode === "menu") {
      setBestMcq(getLessonProgress(lessonId)?.best ?? null);
      setBestTf(getLessonProgress(`${lessonId}:ds`)?.best ?? null);
      setReadTheory(getLessonProgress(theoryKey(lessonId)) !== null);
    }
  }, [mode, lessonId]);

  function leaveTheory(next: Mode) {
    window.scrollTo({ top: 0 });
    setMode(next);
  }

  if (mode === "theory" && theory) {
    return (
      <main className="cosmos stars relative min-h-screen pb-16">
        <div className="relative z-10">
          <TheoryViewer
            lessonId={lessonId}
            lessonTitle={lessonTitle}
            topicName={topicName}
            theory={theory}
            onBack={() => leaveTheory("menu")}
            onGoQuiz={() => leaveTheory("mcq")}
          />
        </div>
      </main>
    );
  }

  if (mode === "mcq") {
    return (
      <QuizClient
        lessonId={lessonId}
        lessonTitle={lessonTitle}
        topicName={topicName}
        questions={mcq}
        onBack={() => setMode("menu")}
      />
    );
  }

  if (mode === "tf") {
    return (
      <main className="cosmos stars relative min-h-screen pb-16">
        <div className="relative z-10">
          <TrueFalseQuiz
            lessonId={lessonId}
            lessonTitle={lessonTitle}
            questions={tf}
            onBack={() => setMode("menu")}
          />
        </div>
      </main>
    );
  }

  if (mode === "essay") {
    return (
      <main className="cosmos stars relative min-h-screen pb-16">
        <div className="relative z-10">
          <EssayViewer
            lessonTitle={lessonTitle}
            questions={essay}
            onBack={() => setMode("menu")}
          />
        </div>
      </main>
    );
  }

  const options = [
    {
      key: "theory" as Mode,
      emoji: "📖",
      name: "Lý thuyết",
      desc: theory
        ? `~${theory.minutes} phút đọc · ${theory.sections.length} mục, có hình vẽ và ví dụ minh hoạ`
        : "",
      best: null,
      done: readTheory,
      enabled: theory !== null,
    },
    {
      key: "mcq" as Mode,
      emoji: "🎯",
      name: "Trắc nghiệm",
      desc: `${mcq.length} câu · chọn 1 trong 4 phương án, chấm ngay từng câu`,
      best: bestMcq,
      done: false,
      enabled: mcq.length > 0,
    },
    {
      key: "tf" as Mode,
      emoji: "⚖️",
      name: "Đúng / Sai",
      desc: `${tf.length} câu tình huống · mỗi câu 4 ý, chấm điểm như thi tốt nghiệp`,
      best: bestTf,
      done: false,
      enabled: tf.length > 0,
    },
    {
      key: "essay" as Mode,
      emoji: "✍️",
      name: "Tự luận",
      desc: `${essay.length} câu · tự trả lời rồi đối chiếu gợi ý đáp án`,
      best: null,
      done: false,
      enabled: essay.length > 0,
    },
  ];

  const enabledOptions = options.filter((o) => o.enabled);

  return (
    <main className="cosmos stars relative min-h-screen pb-16">
      <div className="relative z-10 mx-auto max-w-2xl px-5 pt-10 sm:px-8">
        <Link
          href="/"
          className="rounded-full glass px-3 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
        >
          ← Trang chủ
        </Link>
        <h1 className="mt-5 font-display text-2xl font-bold leading-snug">
          <span className="bg-gradient-to-r from-nebula-glow to-plasma bg-clip-text text-transparent">
            {lessonTitle}
          </span>
        </h1>
        <p className="mt-1 font-mono text-xs text-star-mute">{topicName}</p>

        {enabledOptions.length === 0 ? (
          <div className="mt-8 rounded-2xl glass p-8 text-center shadow-glass">
            <p className="text-4xl">🚧</p>
            <p className="mt-3 font-display text-lg font-semibold text-star">
              Bài này đang được biên soạn
            </p>
            <p className="mt-2 text-sm text-star-soft">
              Câu hỏi và lý thuyết sẽ sớm được cập nhật. Hãy quay lại sau nhé!
            </p>
          </div>
        ) : (
          <div className="stagger mt-6 space-y-3">
            {enabledOptions.map((o) => (
              <button
                key={o.key}
                onClick={() => setMode(o.key)}
                className="group flex w-full items-start gap-4 rounded-2xl glass p-5 text-left shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:border-nebula/40"
              >
                <span className="shrink-0 text-3xl leading-none">{o.emoji}</span>
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="font-display text-base font-semibold text-star group-hover:text-nebula-glow transition-colors">
                      {o.name}
                    </span>
                    {o.done && (
                      <span className="rounded-full bg-correct/20 px-2.5 py-0.5 font-mono text-xs font-medium text-correct">
                        ✓ đã đọc
                      </span>
                    )}
                    {o.best !== null && (
                      <span
                        className={`rounded-full px-2.5 py-0.5 font-mono text-xs font-medium ${
                          o.best >= 80
                            ? "bg-correct/20 text-correct"
                            : o.best >= 50
                              ? "bg-photon/20 text-photon"
                              : "bg-wrong/15 text-wrong"
                        }`}
                      >
                        {o.best >= 80 ? "⭐ " : ""}
                        {o.best}%
                      </span>
                    )}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-star-soft">{o.desc}</span>
                </span>
                <span className="shrink-0 self-center text-star-mute transition-all group-hover:translate-x-0.5 group-hover:text-nebula">
                  →
                </span>
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
