"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MOCK_EXAM_2025 } from "@/data/mock-exam";

type Part1Answers = Record<string, number>; // id -> option index (0..3)
type Part2Answers = Record<string, Record<number, boolean>>; // questionId -> statementIndex -> boolean
type Part3Answers = Record<string, string>; // id -> input string

export default function MockExamClient() {
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(MOCK_EXAM_2025.durationMinutes * 60);

  const [part1Answers, setPart1Answers] = useState<Part1Answers>({});
  const [part2Answers, setPart2Answers] = useState<Part2Answers>({});
  const [part3Answers, setPart3Answers] = useState<Part3Answers>({});

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (started && !submitted) {
      timerRef.current = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timerRef.current!);
            handleSubmit();
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [started, submitted]);

  function formatTime(seconds: number) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  }

  function handleStart() {
    setStarted(true);
    setSubmitted(false);
    setTimeLeft(MOCK_EXAM_2025.durationMinutes * 60);
    setPart1Answers({});
    setPart2Answers({});
    setPart3Answers({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleSubmit() {
    setSubmitted(true);
    if (timerRef.current) clearInterval(timerRef.current);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Chấm điểm theo chuẩn Bộ GD&ĐT
  const scores = (() => {
    if (!submitted) return { p1: 0, p2: 0, p3: 0, total: 0 };

    // Phần I: 18 câu, mỗi câu 0.25đ
    let p1 = 0;
    MOCK_EXAM_2025.part1.forEach((q) => {
      if (part1Answers[q.id] === q.answer) p1 += 0.25;
    });

    // Phần II: 4 câu, chấm theo số ý đúng (1 ý: 0.1đ, 2 ý: 0.25đ, 3 ý: 0.5đ, 4 ý: 1.0đ)
    let p2 = 0;
    MOCK_EXAM_2025.part2.forEach((q) => {
      const userAns = part2Answers[q.id] || {};
      let correctCount = 0;
      q.statements.forEach((st, idx) => {
        if (userAns[idx] === st.answer) correctCount++;
      });
      if (correctCount === 1) p2 += 0.1;
      else if (correctCount === 2) p2 += 0.25;
      else if (correctCount === 3) p2 += 0.5;
      else if (correctCount === 4) p2 += 1.0;
    });

    // Phần III: 6 câu, mỗi câu 0.25đ
    let p3 = 0;
    MOCK_EXAM_2025.part3.forEach((q) => {
      const userRaw = (part3Answers[q.id] || "").trim().replace(",", ".");
      const userVal = parseFloat(userRaw);
      if (!isNaN(userVal)) {
        const tol = q.tolerance ?? 0.01;
        if (Math.abs(userVal - q.answer) <= tol) p3 += 0.25;
      }
    });

    const total = Math.round((p1 + p2 + p3) * 100) / 100;
    return { p1, p2, p3, total };
  })();

  if (!started) {
    return (
      <main className="cosmos stars relative min-h-screen pb-16">
        <div className="relative z-10 mx-auto max-w-2xl px-5 pt-12 text-center sm:px-8">
          <Link
            href="/"
            className="inline-block rounded-full glass px-3.5 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
          >
            ← Trang chủ
          </Link>

          <div className="mt-8 text-5xl">📝</div>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-nebula via-plasma to-photon bg-clip-text text-transparent">
              Luyện thi thử Tốt nghiệp THPT
            </span>
            <br />
            <span className="text-star">Môn Vật lí — Cấu trúc 2025 - 2026</span>
          </h1>

          <div className="mt-6 rounded-2xl glass p-6 text-left shadow-glass space-y-3.5 border border-nebula/20">
            <h2 className="font-display text-base font-semibold text-star">
              📋 Cấu trúc đề thi chuẩn Bộ GD&ĐT:
            </h2>
            <ul className="space-y-2 text-sm text-star-soft">
              <li className="flex items-start gap-2">
                <span className="text-nebula-glow font-bold">✦ Phần I:</span>
                <span><strong>18 câu</strong> trắc nghiệm nhiều phương án (4,5 điểm)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-plasma font-bold">✦ Phần II:</span>
                <span><strong>4 câu</strong> trắc nghiệm Đúng/Sai (4,0 điểm — đúng 1 ý 0.1đ, 2 ý 0.25đ, 3 ý 0.5đ, 4 ý 1.0đ)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-photon font-bold">✦ Phần III:</span>
                <span><strong>6 câu</strong> trắc nghiệm trả lời ngắn / điền số (1,5 điểm)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-correct font-bold">⏱️ Thời gian:</span>
                <span><strong>50 phút</strong> làm bài tự động chấm và giải thích chi tiết</span>
              </li>
            </ul>
          </div>

          <button
            onClick={handleStart}
            className="mt-8 w-full rounded-2xl bg-gradient-to-r from-nebula via-plasma to-nebula-glow px-6 py-4 font-display text-lg font-bold text-white shadow-glow transition-all hover:shadow-glow-hover hover:scale-[1.01]"
          >
            Bắt đầu làm bài thi ngay 🚀
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="cosmos stars relative min-h-screen pb-20">
      {/* Sticky top timer bar */}
      <div className="sticky top-0 z-40 border-b border-nebula/20 bg-void/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-5 py-3 sm:px-8">
          <Link
            href="/"
            className="font-mono text-xs text-star-soft hover:text-star"
          >
            ← Trang chủ
          </Link>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-star-soft">Thời gian:</span>
            <span
              className={`font-mono text-base font-bold px-3 py-1 rounded-full border ${
                timeLeft < 300
                  ? "bg-wrong/20 text-wrong border-wrong/40 animate-pulse"
                  : "bg-nebula/20 text-nebula-glow border-nebula/30"
              }`}
            >
              ⏱️ {formatTime(timeLeft)}
            </span>
          </div>
          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="rounded-full bg-correct px-4 py-1.5 font-display text-xs font-semibold text-white shadow-glow transition hover:opacity-90"
            >
              Nộp bài thi 📤
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="rounded-full bg-nebula px-4 py-1.5 font-display text-xs font-semibold text-white shadow-glow transition hover:opacity-90"
            >
              Làm lại đề này 🔄
            </button>
          )}
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-5 pt-8 sm:px-8">
        {/* Result banner if submitted */}
        {submitted && (
          <div className="animate-pop-in mb-8 rounded-3xl glass-bright p-6 text-center shadow-glow border border-nebula/40">
            <p className="text-4xl">🎉</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-star">
              Kết quả thi của em
            </h2>
            <div className="mt-4 flex items-center justify-center gap-6">
              <div>
                <p className="font-mono text-4xl font-extrabold text-photon">
                  {scores.total}
                  <span className="text-lg text-star-soft"> / 10.0</span>
                </p>
                <p className="mt-1 font-mono text-xs text-star-soft">Tổng điểm</p>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-void/60 p-3 font-mono text-xs border border-nebula/15">
              <div>
                <p className="text-star-soft">Phần I (MCQ)</p>
                <p className="font-bold text-nebula-glow">{scores.p1.toFixed(2)} / 4.5</p>
              </div>
              <div>
                <p className="text-star-soft">Phần II (Đúng/Sai)</p>
                <p className="font-bold text-plasma">{scores.p2.toFixed(2)} / 4.0</p>
              </div>
              <div>
                <p className="text-star-soft">Phần III (Điền số)</p>
                <p className="font-bold text-photon">{scores.p3.toFixed(2)} / 1.5</p>
              </div>
            </div>
          </div>
        )}

        {/* ─── PHẦN I: TRẮC NGHIỆM NHIỀU LỰA CHỌN ─── */}
        <section className="space-y-6">
          <div className="rounded-2xl bg-nebula/15 p-4 border border-nebula/30">
            <h2 className="font-display text-lg font-bold text-nebula-glow">
              PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn
            </h2>
            <p className="mt-1 text-xs text-star-soft">
              Thí sinh trả lời từ câu 1 đến câu 18. Mỗi câu hỏi thí sinh chỉ chọn một phương án. (4,5 điểm)
            </p>
          </div>

          <div className="space-y-6">
            {MOCK_EXAM_2025.part1.map((q, idx) => {
              const selected = part1Answers[q.id];
              return (
                <div
                  key={q.id}
                  className="rounded-2xl glass p-5 shadow-glass border border-nebula/15"
                >
                  <p className="font-display text-sm font-semibold text-star">
                    <span className="text-nebula-glow">Câu {idx + 1}:</span> {q.q}
                  </p>

                  <div className="mt-3.5 space-y-2">
                    {q.options.map((opt, optIdx) => {
                      const isChosen = selected === optIdx;
                      const isRight = q.answer === optIdx;
                      let btnStyle = "border-nebula/15 glass text-star hover:border-nebula/40";
                      if (submitted) {
                        if (isRight) btnStyle = "border-correct bg-correct/20 text-correct";
                        else if (isChosen && !isRight) btnStyle = "border-wrong bg-wrong/20 text-wrong";
                      } else if (isChosen) {
                        btnStyle = "border-nebula bg-nebula/25 text-white shadow-glow";
                      }

                      return (
                        <button
                          key={optIdx}
                          disabled={submitted}
                          onClick={() =>
                            setPart1Answers((prev) => ({ ...prev, [q.id]: optIdx }))
                          }
                          className={`flex w-full items-start gap-3 rounded-xl border-2 px-4 py-2.5 text-left text-sm transition-all ${btnStyle}`}
                        >
                          <span className="font-mono text-xs font-bold opacity-70">
                            {String.fromCharCode(65 + optIdx)}.
                          </span>
                          <span className="flex-1">{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="mt-3.5 rounded-xl glass-bright p-3.5 text-xs text-star-soft border border-nebula/20">
                      <p className="font-display font-semibold text-photon">💡 Lời giải chi tiết:</p>
                      <p className="mt-1 leading-relaxed">{q.explain}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── PHẦN II: TRẮC NGHIỆM ĐÚNG / SAI ─── */}
        <section className="mt-12 space-y-6">
          <div className="rounded-2xl bg-plasma/15 p-4 border border-plasma/30">
            <h2 className="font-display text-lg font-bold text-plasma">
              PHẦN II. Câu trắc nghiệm Đúng / Sai
            </h2>
            <p className="mt-1 text-xs text-star-soft">
              Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai. (4,0 điểm)
            </p>
          </div>

          <div className="space-y-6">
            {MOCK_EXAM_2025.part2.map((q, idx) => {
              const userAns = part2Answers[q.id] || {};
              return (
                <div
                  key={q.id}
                  className="rounded-2xl glass p-5 shadow-glass border border-nebula/15"
                >
                  <p className="font-display text-sm font-semibold text-star">
                    <span className="text-plasma">Câu {idx + 1}:</span> {q.context}
                  </p>

                  <div className="mt-4 space-y-3">
                    {q.statements.map((st, sIdx) => {
                      const val = userAns[sIdx];
                      const isCorrect = val === st.answer;

                      return (
                        <div
                          key={sIdx}
                          className="rounded-xl glass-bright p-3.5 border border-nebula/15 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
                        >
                          <p className="text-sm text-star flex-1">
                            <span className="font-mono font-bold text-star-soft mr-2">
                              {String.fromCharCode(97 + sIdx)})
                            </span>
                            {st.text}
                          </p>

                          <div className="flex shrink-0 items-center gap-2">
                            <button
                              disabled={submitted}
                              onClick={() =>
                                setPart2Answers((prev) => ({
                                  ...prev,
                                  [q.id]: { ...(prev[q.id] || {}), [sIdx]: true },
                                }))
                              }
                              className={`rounded-lg px-3 py-1 font-mono text-xs font-semibold border transition ${
                                val === true
                                  ? "bg-correct text-white border-correct"
                                  : "glass text-star-soft hover:text-star hover:border-nebula/40"
                              }`}
                            >
                              ĐÚNG
                            </button>
                            <button
                              disabled={submitted}
                              onClick={() =>
                                setPart2Answers((prev) => ({
                                  ...prev,
                                  [q.id]: { ...(prev[q.id] || {}), [sIdx]: false },
                                }))
                              }
                              className={`rounded-lg px-3 py-1 font-mono text-xs font-semibold border transition ${
                                val === false
                                  ? "bg-wrong text-white border-wrong"
                                  : "glass text-star-soft hover:text-star hover:border-nebula/40"
                              }`}
                            >
                              SAI
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="mt-4 space-y-2 rounded-xl glass-bright p-3.5 text-xs text-star-soft border border-nebula/20">
                      <p className="font-display font-semibold text-photon">💡 Lời giải từng ý:</p>
                      {q.statements.map((st, sIdx) => (
                        <p key={sIdx} className="leading-relaxed">
                          <strong>{String.fromCharCode(97 + sIdx)}:</strong> ({st.answer ? "Đúng" : "Sai"}) {st.explain}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ─── PHẦN III: TRẮC NGHIỆM TRẢ LỜI NGẮN ─── */}
        <section className="mt-12 space-y-6">
          <div className="rounded-2xl bg-photon/15 p-4 border border-photon/30">
            <h2 className="font-display text-lg font-bold text-photon">
              PHẦN III. Câu trắc nghiệm trả lời ngắn (Điền số)
            </h2>
            <p className="mt-1 text-xs text-star-soft">
              Thí sinh trả lời từ câu 1 đến câu 6. Nhập kết quả dạng số thập phân hoặc số nguyên theo yêu cầu. (1,5 điểm)
            </p>
          </div>

          <div className="space-y-6">
            {MOCK_EXAM_2025.part3.map((q, idx) => {
              const val = part3Answers[q.id] || "";
              const userNum = parseFloat(val.replace(",", "."));
              const isRight = submitted && !isNaN(userNum) && Math.abs(userNum - q.answer) <= (q.tolerance ?? 0.01);

              return (
                <div
                  key={q.id}
                  className="rounded-2xl glass p-5 shadow-glass border border-nebula/15"
                >
                  <p className="font-display text-sm font-semibold text-star">
                    <span className="text-photon">Câu {idx + 1}:</span> {q.q}
                  </p>

                  <div className="mt-3.5 flex items-center gap-3">
                    <input
                      type="text"
                      disabled={submitted}
                      placeholder="Nhập đáp số..."
                      value={val}
                      onChange={(e) =>
                        setPart3Answers((prev) => ({ ...prev, [q.id]: e.target.value }))
                      }
                      className={`w-48 rounded-xl px-4 py-2 font-mono text-sm outline-none border transition ${
                        submitted
                          ? isRight
                            ? "bg-correct/20 text-correct border-correct"
                            : "bg-wrong/20 text-wrong border-wrong"
                          : "glass text-star focus:border-photon focus:ring-2 focus:ring-photon/20"
                      }`}
                    />
                    {q.unit && <span className="font-mono text-xs text-star-soft">{q.unit}</span>}
                    {submitted && (
                      <span className="font-mono text-xs font-bold">
                        {isRight ? "✓ Chính xác" : `✕ Đáp án: ${q.answer}`}
                      </span>
                    )}
                  </div>

                  {submitted && (
                    <div className="mt-3.5 rounded-xl glass-bright p-3.5 text-xs text-star-soft border border-nebula/20">
                      <p className="font-display font-semibold text-photon">💡 Hướng dẫn giải:</p>
                      <p className="mt-1 leading-relaxed">{q.explain}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Submit bottom bar */}
        {!submitted && (
          <div className="mt-10 text-center">
            <button
              onClick={handleSubmit}
              className="rounded-2xl bg-gradient-to-r from-correct via-nebula to-plasma px-8 py-4 font-display text-base font-bold text-white shadow-glow transition hover:shadow-glow-hover hover:scale-[1.01]"
            >
              Hoàn thành và Nộp bài chấm điểm 🎯
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
