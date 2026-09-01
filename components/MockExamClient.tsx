"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { MOCK_EXAMS, generateRandomMockExam, QUESTION_POOL_STATS, type MockExam } from "@/data/mock-exam";

type Part1Answers = Record<string, number>; // id -> option index (0..3)
type Part2Answers = Record<string, Record<number, boolean>>; // questionId -> statementIndex -> boolean
type Part3Answers = Record<string, string>; // id -> input string

export default function MockExamClient() {
  const [examList, setExamList] = useState<MockExam[]>(MOCK_EXAMS);
  const [selectedExamId, setSelectedExamId] = useState<string>(MOCK_EXAMS[0].id);
  const [randomCount, setRandomCount] = useState<number>(0);

  const currentExam = examList.find((e) => e.id === selectedExamId) || examList[0];

  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(currentExam.durationMinutes * 60);

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
    setTimeLeft(currentExam.durationMinutes * 60);
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

  function handleCreateRandomExam() {
    const newCount = randomCount + 1;
    setRandomCount(newCount);
    const newExam = generateRandomMockExam(newCount);
    setExamList((prev) => [newExam, ...prev]);
    setSelectedExamId(newExam.id);
  }

  // Chấm điểm theo chuẩn Bộ GD&ĐT & Thống kê theo Khối lớp
  const scores = (() => {
    if (!submitted) {
      return {
        p1: 0,
        p2: 0,
        p3: 0,
        total: 0,
        grade12: 0,
        grade11: 0,
        grade10: 0,
      };
    }

    let p1 = 0;
    let g12_score = 0;
    let g11_score = 0;
    let g10_score = 0;

    // Phần I: 18 câu, mỗi câu 0.25đ
    currentExam.part1.forEach((q) => {
      if (part1Answers[q.id] === q.answer) {
        p1 += 0.25;
        if (q.grade === 12) g12_score += 0.25;
        else if (q.grade === 11) g11_score += 0.25;
        else if (q.grade === 10) g10_score += 0.25;
      }
    });

    // Phần II: 4 câu, chấm theo số ý đúng (1 ý: 0.1đ, 2 ý: 0.25đ, 3 ý: 0.5đ, 4 ý: 1.0đ)
    let p2 = 0;
    currentExam.part2.forEach((q) => {
      const userAns = part2Answers[q.id] || {};
      let correctCount = 0;
      q.statements.forEach((st, idx) => {
        if (userAns[idx] === st.answer) correctCount++;
      });
      let qScore = 0;
      if (correctCount === 1) qScore = 0.1;
      else if (correctCount === 2) qScore = 0.25;
      else if (correctCount === 3) qScore = 0.5;
      else if (correctCount === 4) qScore = 1.0;

      p2 += qScore;
      if (q.grade === 12) g12_score += qScore;
      else if (q.grade === 11) g11_score += qScore;
      else if (q.grade === 10) g10_score += qScore;
    });

    // Phần III: 6 câu, mỗi câu 0.25đ
    let p3 = 0;
    currentExam.part3.forEach((q) => {
      const userRaw = (part3Answers[q.id] || "").trim().replace(",", ".");
      const userVal = parseFloat(userRaw);
      if (!isNaN(userVal)) {
        const tol = q.tolerance ?? 0.01;
        if (Math.abs(userVal - q.answer) <= tol) {
          p3 += 0.25;
          if (q.grade === 12) g12_score += 0.25;
          else if (q.grade === 11) g11_score += 0.25;
          else if (q.grade === 10) g10_score += 0.25;
        }
      }
    });

    const total = Math.round((p1 + p2 + p3) * 100) / 100;
    return {
      p1: Math.round(p1 * 100) / 100,
      p2: Math.round(p2 * 100) / 100,
      p3: Math.round(p3 * 100) / 100,
      total,
      grade12: Math.round(g12_score * 100) / 100,
      grade11: Math.round(g11_score * 100) / 100,
      grade10: Math.round(g10_score * 100) / 100,
    };
  })();

  function getGradeBadge(grade: number) {
    if (grade === 12) {
      return (
        <span className="rounded-full border border-nebula/40 bg-nebula/20 px-2 py-0.5 font-mono text-[10px] font-bold text-nebula-glow">
          Lớp 12
        </span>
      );
    }
    if (grade === 11) {
      return (
        <span className="rounded-full border border-plasma/40 bg-plasma/20 px-2 py-0.5 font-mono text-[10px] font-bold text-plasma">
          Lớp 11
        </span>
      );
    }
    return (
      <span className="rounded-full border border-photon/40 bg-photon/20 px-2 py-0.5 font-mono text-[10px] font-bold text-photon">
        Lớp 10
      </span>
    );
  }

  if (!started) {
    return (
      <main className="cosmos stars relative min-h-screen pb-16">
        <div className="relative z-10 mx-auto max-w-4xl px-5 pt-10 text-center sm:px-8">
          <Link
            href="/"
            className="inline-block rounded-full glass px-3.5 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
          >
            ← Trang chủ
          </Link>

          <div className="mt-6 text-5xl">📝</div>
          <h1 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-nebula via-plasma to-photon bg-clip-text text-transparent">
              Luyện thi thử Tốt nghiệp THPT
            </span>
            <br />
            <span className="text-star text-2xl sm:text-3xl">
              Môn Vật lí — Chuẩn ma trận 3 khối 10 - 11 - 12
            </span>
          </h1>

          {/* Stats Bar */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl glass p-3 text-xs border border-nebula/25 shadow-glass">
            <span className="text-star-soft">
              📚 Ngân hàng nguồn: <strong className="text-photon">{QUESTION_POOL_STATS.total.grandTotalQuestions}+ câu hỏi lớn</strong>
            </span>
            <span className="text-nebula/40">•</span>
            <span className="text-star-soft">
              Lớp 12: <strong className="text-nebula-glow">{QUESTION_POOL_STATS.grade12.totalQuestions} câu (~70%)</strong>
            </span>
            <span className="text-nebula/40">•</span>
            <span className="text-star-soft">
              Lớp 11: <strong className="text-plasma">{QUESTION_POOL_STATS.grade11.totalQuestions} câu (~20%)</strong>
            </span>
            <span className="text-nebula/40">•</span>
            <span className="text-star-soft">
              Lớp 10: <strong className="text-photon">{QUESTION_POOL_STATS.grade10.totalQuestions} câu (~10%)</strong>
            </span>
          </div>

          {/* Action Bar for Random Exam */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="font-display text-lg font-bold text-star flex items-center gap-2">
              <span>🎯 Chọn đề thi thử:</span>
            </h2>
            <button
              onClick={handleCreateRandomExam}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-photon/20 to-nebula/20 px-4 py-2.5 font-display text-xs font-bold text-star border border-photon/40 shadow-glow transition-all hover:scale-105 hover:border-photon"
            >
              <span>🎲 Tạo đề thi ngẫu nhiên mới</span>
              <span className="rounded-md bg-photon/30 px-1.5 py-0.5 text-[10px] text-photon font-mono">
                Auto 10-11-12
              </span>
            </button>
          </div>

          {/* Exam Grid */}
          <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
            {examList.map((e) => {
              const isSelected = selectedExamId === e.id;
              return (
                <button
                  key={e.id}
                  onClick={() => setSelectedExamId(e.id)}
                  className={`rounded-2xl border-2 p-4 text-left transition-all ${
                    isSelected
                      ? "border-nebula bg-nebula/25 shadow-glow scale-[1.02]"
                      : "border-nebula/15 glass hover:border-nebula/40 hover:scale-[1.01]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-display text-sm font-bold text-star truncate">{e.title}</p>
                    {e.isGenerated && (
                      <span className="shrink-0 rounded-full bg-photon/20 px-2 py-0.5 font-mono text-[9px] font-bold text-photon border border-photon/30">
                        Ngẫu nhiên
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-star-soft line-clamp-2">{e.subtitle}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-nebula/15 pt-2 font-mono text-[11px] text-star-soft">
                    <span>⏱️ 50 phút</span>
                    <span>💯 28 câu (10.0đ)</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Matrix & Rules Info Card */}
          <div className="mt-8 rounded-2xl glass p-6 text-left shadow-glass space-y-3.5 border border-nebula/20">
            <h2 className="font-display text-base font-semibold text-star flex items-center gap-2">
              <span>📋 Cấu trúc & Ma trận chuẩn đề thi:</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-star-soft">
              <div className="space-y-2">
                <p className="font-bold text-star">✦ Phân bổ các phần thi (28 câu — 50 phút):</p>
                <ul className="space-y-1.5 pl-2">
                  <li>• <strong>Phần I (18 câu - 4,5đ):</strong> Trắc nghiệm nhiều phương án.</li>
                  <li>• <strong>Phần II (4 câu - 4,0đ):</strong> Trắc nghiệm Đúng / Sai (mỗi câu 4 ý).</li>
                  <li>• <strong>Phần III (6 câu - 1,5đ):</strong> Trả lời ngắn / Điền số thực tế.</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-star">✦ Phân bổ tỉ lệ 3 khối lớp:</p>
                <ul className="space-y-1.5 pl-2">
                  <li>• <strong className="text-nebula-glow">Lớp 12 (~70% = 7,0đ):</strong> 13 câu P1, 2 câu P2, 4 câu P3.</li>
                  <li>• <strong className="text-plasma">Lớp 11 (~20% = 2,0đ):</strong> 3 câu P1, 1 câu P2, 1 câu P3.</li>
                  <li>• <strong className="text-photon">Lớp 10 (~10% = 1,0đ):</strong> 2 câu P1, 1 câu P2, 1 câu P3.</li>
                </ul>
              </div>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="mt-8 w-full max-w-md rounded-2xl bg-gradient-to-r from-nebula via-plasma to-nebula-glow px-6 py-4 font-display text-lg font-bold text-white shadow-glow transition-all hover:shadow-glow-hover hover:scale-[1.01]"
          >
            Bắt đầu làm bài: {currentExam.title} 🚀
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
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-mono text-xs font-bold text-star">{currentExam.title}</span>
            {currentExam.isGenerated && (
              <span className="rounded-full bg-photon/20 px-2 py-0.5 font-mono text-[9px] text-photon border border-photon/30">
                Random
              </span>
            )}
          </div>
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
              Nộp bài 📤
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleStart}
                className="rounded-full bg-nebula px-3.5 py-1.5 font-display text-xs font-semibold text-white shadow-glow transition hover:opacity-90"
              >
                Làm lại 🔄
              </button>
              <button
                onClick={() => {
                  setStarted(false);
                  setSubmitted(false);
                }}
                className="rounded-full glass px-3.5 py-1.5 font-display text-xs font-semibold text-star-soft hover:text-star transition"
              >
                Chọn đề khác
              </button>
            </div>
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
                <p className="mt-1 font-mono text-xs text-star-soft">Tổng điểm đạt được</p>
              </div>
            </div>

            {/* Breakdown by Parts */}
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

            {/* Breakdown by Grade Levels */}
            <div className="mt-3 grid grid-cols-3 gap-2 rounded-2xl bg-void/40 p-3 font-mono text-xs border border-nebula/15">
              <div>
                <p className="text-star-soft">Khối 12 (~70%)</p>
                <p className="font-bold text-nebula-glow">{scores.grade12.toFixed(2)} / 7.00</p>
              </div>
              <div>
                <p className="text-star-soft">Khối 11 (~20%)</p>
                <p className="font-bold text-plasma">{scores.grade11.toFixed(2)} / 2.00</p>
              </div>
              <div>
                <p className="text-star-soft">Khối 10 (~10%)</p>
                <p className="font-bold text-photon">{scores.grade10.toFixed(2)} / 1.00</p>
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
            {currentExam.part1.map((q, idx) => {
              const selected = part1Answers[q.id];
              return (
                <div
                  key={q.id}
                  className="rounded-2xl glass p-5 shadow-glass border border-nebula/15"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-display text-xs font-bold text-nebula-glow">
                      Câu {idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {getGradeBadge(q.grade)}
                      {q.topic && (
                        <span className="rounded-md bg-void/50 px-2 py-0.5 font-mono text-[10px] text-star-soft">
                          {q.topic}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="font-display text-sm font-semibold text-star leading-relaxed">
                    {q.q}
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
              Thí sinh trả lời từ câu 1 đến câu 4. Trong mỗi ý a), b), c), d) ở mỗi câu, thí sinh chọn đúng hoặc sai. (4,0 điểm — đúng 1 ý 0.1đ, 2 ý 0.25đ, 3 ý 0.5đ, 4 ý 1.0đ)
            </p>
          </div>

          <div className="space-y-6">
            {currentExam.part2.map((q, idx) => {
              const userAns = part2Answers[q.id] || {};
              return (
                <div
                  key={q.id}
                  className="rounded-2xl glass p-5 shadow-glass border border-nebula/15"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-display text-xs font-bold text-plasma">
                      Câu {idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {getGradeBadge(q.grade)}
                      {q.topic && (
                        <span className="rounded-md bg-void/50 px-2 py-0.5 font-mono text-[10px] text-star-soft">
                          {q.topic}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="font-display text-sm font-semibold text-star leading-relaxed">
                    {q.context}
                  </p>

                  <div className="mt-4 space-y-3">
                    {q.statements.map((st, sIdx) => {
                      const val = userAns[sIdx];

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
              Thí sinh trả lời từ câu 1 đến câu 6. Nhập kết quả dạng số thập phân hoặc số nguyên theo yêu cầu. (1,5 điểm — mỗi câu 0.25đ)
            </p>
          </div>

          <div className="space-y-6">
            {currentExam.part3.map((q, idx) => {
              const val = part3Answers[q.id] || "";
              const userNum = parseFloat(val.replace(",", "."));
              const isRight = submitted && !isNaN(userNum) && Math.abs(userNum - q.answer) <= (q.tolerance ?? 0.01);

              return (
                <div
                  key={q.id}
                  className="rounded-2xl glass p-5 shadow-glass border border-nebula/15"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="font-display text-xs font-bold text-photon">
                      Câu {idx + 1}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {getGradeBadge(q.grade)}
                      {q.topic && (
                        <span className="rounded-md bg-void/50 px-2 py-0.5 font-mono text-[10px] text-star-soft">
                          {q.topic}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="font-display text-sm font-semibold text-star leading-relaxed">
                    {q.q}
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
