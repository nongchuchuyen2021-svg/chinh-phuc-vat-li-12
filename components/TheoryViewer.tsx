"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { LessonTheory, TheoryBlock, Tone } from "@/lib/types";
import { markTheoryRead } from "@/lib/progress";

const TONE: Record<Tone, { box: string; title: string; badge: string }> = {
  nebula: {
    box: "border-nebula/30 bg-nebula/10 shadow-glow",
    title: "text-nebula-glow",
    badge: "bg-nebula/20 text-nebula-glow border-nebula/30",
  },
  plasma: {
    box: "border-plasma/30 bg-plasma/10 shadow-glow-blue",
    title: "text-plasma",
    badge: "bg-plasma/20 text-plasma border-plasma/30",
  },
  correct: {
    box: "border-correct/30 bg-correct/10",
    title: "text-correct",
    badge: "bg-correct/20 text-correct border-correct/30",
  },
  photon: {
    box: "border-photon/30 bg-photon/10 shadow-glow-gold",
    title: "text-photon",
    badge: "bg-photon/20 text-photon border-photon/30",
  },
  wrong: {
    box: "border-wrong/30 bg-wrong/10",
    title: "text-wrong",
    badge: "bg-wrong/20 text-wrong border-wrong/30",
  },
};

function Rich({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-star">
              {p.slice(2, -2)}
            </strong>
          );
        }
        if (p.startsWith("*") && p.endsWith("*") && p.length > 2) {
          return (
            <em key={i} className="text-star-soft/90">
              {p.slice(1, -1)}
            </em>
          );
        }
        if (p.startsWith("`") && p.endsWith("`") && p.length > 2) {
          return (
            <code
              key={i}
              className="rounded bg-void-card px-1.5 py-0.5 font-mono text-xs text-nebula-glow border border-nebula/20"
            >
              {p.slice(1, -1)}
            </code>
          );
        }
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

function QuickCheck({
  q,
  options,
  answer,
  explain,
}: {
  q: string;
  options: string[];
  answer: number;
  explain: string;
}) {
  const [picked, setPicked] = useState<number | null>(null);
  const correct = picked === answer;

  return (
    <div className="rounded-2xl border-2 border-dashed border-nebula/40 bg-void-card/60 p-5 shadow-glow">
      <div className="flex items-center gap-2">
        <span className="text-lg">🤔</span>
        <p className="font-display text-sm font-semibold text-nebula-glow">
          Thử kiểm tra xem em đã hiểu chưa
        </p>
      </div>
      <p className="mt-2.5 text-[15px] leading-relaxed text-star">
        <Rich text={q} />
      </p>
      <div className="mt-3.5 space-y-2">
        {options.map((o, i) => {
          const chosen = picked === i;
          const reveal = picked !== null;
          const isRight = i === answer;
          return (
            <button
              key={i}
              onClick={() => picked === null && setPicked(i)}
              disabled={picked !== null}
              className={`flex w-full items-start gap-3 rounded-xl border-2 px-4 py-2.5 text-left text-sm transition-all duration-200 ${
                reveal && isRight
                  ? "border-correct bg-correct/20 text-correct"
                  : chosen
                    ? "border-wrong bg-wrong/20 text-wrong animate-wiggle"
                    : "border-nebula/15 glass text-star hover:border-nebula/50 hover:bg-nebula/10"
              } ${picked === null ? "cursor-pointer" : "cursor-default"}`}
            >
              <span className="font-mono text-xs font-bold opacity-70">
                {String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1">{o}</span>
              {reveal && isRight && <span className="font-bold">✓</span>}
              {reveal && chosen && !isRight && <span className="font-bold">✕</span>}
            </button>
          );
        })}
      </div>
      {picked !== null && (
        <div className="mt-3.5 animate-pop-in rounded-xl glass-bright p-3.5 border border-nebula/20">
          <p
            className={`font-display text-sm font-semibold ${
              correct ? "text-correct" : "text-photon"
            }`}
          >
            {correct ? "🎉 Chính xác!" : "💡 Chưa đúng, em xem lại nhé"}
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-star-soft">
            <Rich text={explain} />
          </p>
        </div>
      )}
    </div>
  );
}

function Block({ block }: { block: TheoryBlock }) {
  switch (block.kind) {
    case "text":
      return (
        <p className="text-[15px] leading-[1.8] text-star-soft">
          <Rich text={block.text} />
        </p>
      );

    case "list": {
      const Tag = block.ordered ? "ol" : "ul";
      return (
        <Tag className="space-y-2.5 pl-1">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-[1.7] text-star-soft">
              <span className="mt-[2px] shrink-0 font-mono text-xs font-bold text-nebula-glow">
                {block.ordered ? `${i + 1}.` : "✦"}
              </span>
              <span>
                <Rich text={it} />
              </span>
            </li>
          ))}
        </Tag>
      );
    }

    case "cards": {
      const tone = TONE[block.tone ?? "nebula"];
      return (
        <div className="grid gap-3.5 sm:grid-cols-2">
          {block.items.map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl border ${tone.box} p-4.5 transition-all duration-300 hover:-translate-y-0.5`}
            >
              <p className="text-2xl">{c.emoji}</p>
              <p className={`mt-2 font-display text-[15px] font-semibold ${tone.title}`}>
                {c.title}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-star-soft">
                <Rich text={c.text} />
              </p>
            </div>
          ))}
        </div>
      );
    }

    case "compare":
      return (
        <div className="grid gap-3.5 sm:grid-cols-2">
          {[
            { pane: block.left, tone: TONE.photon },
            { pane: block.right, tone: TONE.plasma },
          ].map(({ pane, tone }, i) => (
            <div key={i} className={`rounded-2xl border ${tone.box} p-4.5`}>
              <p className={`font-display text-[15px] font-semibold ${tone.title}`}>
                {pane.emoji} {pane.title}
              </p>
              <ul className="mt-3 space-y-2">
                {pane.items.map((it, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-star-soft">
                    <span className="mt-[2px] shrink-0 opacity-40">–</span>
                    <span>
                      <Rich text={it} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      );

    case "steps":
      return (
        <ol className="relative ml-2 space-y-4 border-l-2 border-dashed border-nebula/30 pl-5">
          {block.items.map((s, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-[27px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-void bg-nebula shadow-glow" />
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-nebula/20 px-2.5 py-0.5 font-mono text-xs font-bold text-nebula-glow border border-nebula/30">
                  {s.label}
                </span>
                <p className="font-display text-[15px] font-semibold text-star">{s.title}</p>
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-star-soft">
                <Rich text={s.text} />
              </p>
            </li>
          ))}
        </ol>
      );

    case "code":
      return (
        <div>
          {block.caption && (
            <p className="mb-2 font-mono text-xs text-star-mute">{block.caption}</p>
          )}
          <pre className="overflow-x-auto rounded-xl bg-void-card/90 p-4 font-mono text-[13px] leading-relaxed text-nebula-glow border border-nebula/20 shadow-glass">
            {block.code}
          </pre>
        </div>
      );

    case "example":
      return (
        <div className="rounded-2xl border-l-4 border-plasma bg-plasma/10 px-5 py-4 shadow-glass">
          <p className="font-display text-sm font-semibold text-plasma flex items-center gap-2">
            <span>💡</span> {block.title}
          </p>
          <p className="mt-1.5 text-[15px] leading-relaxed text-star-soft">
            <Rich text={block.text} />
          </p>
        </div>
      );

    case "note":
      return (
        <div className="rounded-2xl border-2 border-dashed border-photon/40 bg-photon/10 p-5 shadow-glow-gold">
          <p className="font-display text-sm font-semibold text-photon flex items-center gap-2">
            <span>📌</span> Ghi nhớ trọng tâm
          </p>
          <p className="mt-2 text-[15px] leading-[1.8] text-star">
            <Rich text={block.text} />
          </p>
        </div>
      );

    case "update":
      return (
        <div className="rounded-2xl border-2 border-dashed border-nebula/40 bg-void-card/60 p-5 shadow-glow">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <span className="rounded-full bg-nebula px-2.5 py-0.5 font-mono text-[11px] font-semibold text-white">
              🚀 Mở rộng kiến thức
            </span>
          </div>
          <p className="mt-2.5 font-display text-[15px] font-semibold text-star">
            {block.title}
          </p>
          <p className="mt-1.5 text-[15px] leading-[1.7] text-star-soft">
            <Rich text={block.text} />
          </p>
          {block.items && (
            <ul className="mt-3.5 space-y-2.5">
              {block.items.map((it, i) => (
                <li key={i} className="flex gap-3 rounded-xl glass p-3.5 border border-nebula/15">
                  <span className="shrink-0 text-xl">{it.emoji}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-sm font-semibold text-star">
                      {it.title}
                    </span>
                    <span className="mt-0.5 block text-sm leading-relaxed text-star-soft">
                      <Rich text={it.text} />
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      );

    case "check":
      return (
        <QuickCheck
          q={block.q}
          options={block.options}
          answer={block.answer}
          explain={block.explain}
        />
      );

    default:
      return null;
  }
}

export default function TheoryViewer({
  lessonId,
  lessonTitle,
  topicName,
  theory,
  onBack,
  onGoQuiz,
}: {
  lessonId: string;
  lessonTitle: string;
  topicName: string;
  theory: LessonTheory;
  onBack: () => void;
  onGoQuiz: () => void;
}) {
  const [percent, setPercent] = useState(0);
  const bodyRef = useRef<HTMLDivElement>(null);
  const sectionIds = useMemo(() => theory.sections.map((s) => s.id), [theory]);
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    function onScroll() {
      const el = bodyRef.current;
      if (!el) return;
      const total = el.scrollHeight - window.innerHeight;
      const done = total > 0 ? Math.min(100, Math.max(0, (window.scrollY / total) * 100)) : 100;
      setPercent(done);
      if (done > 90) markTheoryRead(lessonId);

      let seen = sectionIds[0];
      for (const id of sectionIds) {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= 140) seen = id;
      }
      setActiveId(seen);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lessonId, sectionIds]);

  return (
    <div ref={bodyRef}>
      {/* Thanh tiến độ đọc bám trên đỉnh màn hình */}
      <div className="fixed inset-x-0 top-0 z-30 h-1 bg-void-card">
        <div
          className="h-full bg-gradient-to-r from-nebula via-plasma to-photon transition-[width] duration-150 shadow-glow"
          style={{ width: `${percent}%` }}
        />
      </div>

      <div className="mx-auto max-w-2xl px-5 pt-8 sm:px-8">
        <header>
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={onBack}
              className="rounded-full glass px-3.5 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
            >
              ← Quay lại
            </button>
            <p className="font-mono text-xs text-star-soft">
              📖 Lý thuyết · ~{theory.minutes} phút đọc
            </p>
          </div>
          <h1 className="mt-3.5 font-display text-2xl font-bold leading-snug">
            <span className="bg-gradient-to-r from-nebula-glow to-plasma bg-clip-text text-transparent">
              {lessonTitle}
            </span>
          </h1>
          <p className="mt-1 font-mono text-xs text-star-mute">{topicName}</p>
          <div className="mt-4 rounded-2xl glass-bright p-4.5 text-[15px] leading-[1.75] text-star-soft shadow-glass border border-nebula/20">
            <Rich text={theory.intro} />
          </div>
        </header>

        {/* Mục lục dạng chip bám đỉnh */}
        <nav className="sticky top-2 z-20 -mx-5 mt-5 overflow-x-auto px-5 py-2.5 backdrop-blur-md bg-void/80 border-y border-nebula/10 sm:-mx-8 sm:px-8">
          <div className="flex w-max gap-2">
            {theory.sections.map((s, i) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={`whitespace-nowrap rounded-full px-3.5 py-1.5 font-mono text-xs transition-all ${
                  activeId === s.id
                    ? "bg-gradient-to-r from-nebula to-plasma text-white shadow-glow"
                    : "glass text-star-soft hover:text-star hover:border-nebula/40"
                }`}
              >
                {i + 1}. {s.heading}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-6 space-y-9 pb-8">
          {theory.sections.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-20">
              <h2 className="flex items-center gap-2.5 font-display text-xl font-bold text-star">
                <span className="text-2xl">{s.emoji}</span>
                <span className="bg-gradient-to-r from-star to-nebula-glow bg-clip-text text-transparent">
                  {s.heading}
                </span>
              </h2>
              <div className="mt-4 space-y-4">
                {s.blocks.map((b, i) => (
                  <Block key={i} block={b} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Ghi nhớ tổng kết */}
        <div className="rounded-2xl glass-bright p-5.5 shadow-glow border border-nebula/30 sm:p-6">
          <p className="font-display text-lg font-bold text-star flex items-center gap-2">
            <span>🎒</span> Ghi nhớ nhanh cả bài
          </p>
          <ul className="mt-3.5 space-y-2.5">
            {theory.summary.map((s, i) => (
              <li key={i} className="flex gap-2.5 text-[15px] leading-[1.7] text-star-soft">
                <span className="mt-[3px] shrink-0 text-correct font-bold">✔</span>
                <span>
                  <Rich text={s} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={onGoQuiz}
          className="mt-5 w-full rounded-full bg-gradient-to-r from-nebula via-plasma to-nebula-glow px-5 py-3 font-medium text-white shadow-glow transition-all hover:shadow-glow-hover hover:opacity-95"
        >
          Đã hiểu rồi — làm trắc nghiệm thôi 🎯
        </button>
        <button
          onClick={onBack}
          className="mt-2.5 w-full rounded-full glass px-5 py-2.5 text-sm font-medium text-star-soft transition hover:text-star hover:border-nebula/40"
        >
          ← Về danh sách phần luyện tập
        </button>
      </div>
    </div>
  );
}
