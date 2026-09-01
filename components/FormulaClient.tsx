"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  FORMULAS,
  FORMULA_CHAPTERS,
  GRADE_TABS,
  type GradeLevel,
  type FormulaItem,
} from "@/data/formulas";

const QUICK_SEARCH_KEYWORDS = [
  "Boyle",
  "Clapeyron",
  "Faraday",
  "Phóng xạ",
  "Con lắc",
  "Young",
  "Coulomb",
  "Định luật Ôm",
  "Newton",
  "Bảo toàn cơ năng",
  "Động lượng",
];

export default function FormulaClient() {
  const [selectedGrade, setSelectedGrade] = useState<"all" | GradeLevel>("all");
  const [selectedChapter, setSelectedChapter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter available chapters dynamically based on selected grade
  const availableChapters = useMemo(() => {
    if (selectedGrade === "all") {
      return FORMULA_CHAPTERS;
    }
    return FORMULA_CHAPTERS.filter((c) => c.grade === selectedGrade);
  }, [selectedGrade]);

  // Handle grade change
  const handleGradeChange = (gradeId: "all" | GradeLevel) => {
    setSelectedGrade(gradeId);
    setSelectedChapter("all"); // Reset chapter filter when changing grade
  };

  // Filter formulas
  const filteredFormulas = useMemo(() => {
    return FORMULAS.filter((f) => {
      const matchGrade = selectedGrade === "all" || f.grade === selectedGrade;
      const matchChapter =
        selectedChapter === "all" || f.chapterId === selectedChapter;

      const query = search.trim().toLowerCase();
      const matchSearch =
        query === "" ||
        f.name.toLowerCase().includes(query) ||
        f.formula.toLowerCase().includes(query) ||
        f.explain.toLowerCase().includes(query) ||
        f.unit.toLowerCase().includes(query) ||
        f.chapterName.toLowerCase().includes(query) ||
        (f.tip && f.tip.toLowerCase().includes(query));

      return matchGrade && matchChapter && matchSearch;
    });
  }, [selectedGrade, selectedChapter, search]);

  // Count formulas by grade for badges
  const gradeCounts = useMemo(() => {
    return {
      all: FORMULAS.length,
      "12": FORMULAS.filter((f) => f.grade === "12").length,
      "11": FORMULAS.filter((f) => f.grade === "11").length,
      "10": FORMULAS.filter((f) => f.grade === "10").length,
    };
  }, []);

  // Copy formula text
  const handleCopyFormula = (id: string, formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  // Helper for grade tag style
  const getGradeBadge = (grade: GradeLevel) => {
    switch (grade) {
      case "12":
        return {
          label: "Lớp 12",
          emoji: "⚛️",
          className:
            "bg-nebula/20 text-nebula-glow border-nebula/40 shadow-sm",
        };
      case "11":
        return {
          label: "Lớp 11",
          emoji: "⚡",
          className:
            "bg-plasma/20 text-sky-300 border-plasma/40 shadow-sm",
        };
      case "10":
        return {
          label: "Lớp 10",
          emoji: "🚀",
          className:
            "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-sm",
        };
    }
  };

  return (
    <main className="cosmos stars relative min-h-screen pb-20">
      <div className="relative z-10 mx-auto max-w-5xl px-4 pt-8 sm:px-6 lg:px-8">
        {/* Navigation Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 font-mono text-xs font-medium text-star-soft transition-all hover:text-star hover:border-nebula/50 hover:shadow-glow"
          >
            <span>←</span>
            <span>Trang chủ</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full glass-bright px-3.5 py-1.5 font-mono text-xs font-semibold text-photon border border-photon/25">
              <span>📑</span>
              <span>{FORMULAS.length} công thức chuẩn 3 khối</span>
            </span>
          </div>
        </div>

        {/* Header Hero */}
        <header className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-nebula/10 px-3.5 py-1 font-mono text-xs font-semibold text-nebula-glow border border-nebula/30">
            🎯 Ôn thi Tốt nghiệp THPT · Chương trình GDPT 2018
          </div>
          <h1 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-nebula via-plasma to-photon bg-clip-text text-transparent">
              Sổ tay Công thức
            </span>
            <br />
            <span className="text-star">Vật lí Toàn diện 10 - 11 - 12</span>
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-star-soft sm:text-base">
            Tra cứu nhanh toàn bộ hệ thống công thức, đơn vị đo chuẩn SI, giải
            thích ý nghĩa đại lượng và mẹo làm bài thi chuẩn ma trận 3 khối lớp.
          </p>
        </header>

        {/* LEVEL 1: GRADE TABS SWITCHER */}
        <div className="mt-8 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {GRADE_TABS.map((tab) => {
            const isSelected = selectedGrade === tab.id;
            const count = gradeCounts[tab.id];

            return (
              <button
                key={tab.id}
                onClick={() => handleGradeChange(tab.id)}
                className={`relative flex flex-col items-start justify-between rounded-2xl p-3.5 text-left transition-all duration-300 ${
                  isSelected
                    ? "bg-gradient-to-br from-nebula-deep/90 via-void-card to-plasma-deep/80 text-white shadow-glow border border-nebula/60 scale-[1.02]"
                    : "glass text-star-soft hover:text-star hover:border-nebula/40 hover:bg-void-card/60"
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span className="text-xl">{tab.emoji}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 font-mono text-[11px] font-bold ${
                      isSelected
                        ? "bg-photon text-void font-extrabold"
                        : "bg-void/80 text-star-mute border border-star-mute/20"
                    }`}
                  >
                    {count}
                  </span>
                </div>

                <div className="mt-2.5">
                  <p className="font-display text-sm font-bold text-star">
                    {tab.name}
                  </p>
                  <p
                    className={`mt-0.5 font-mono text-[11px] font-medium ${
                      isSelected ? "text-photon" : "text-star-mute"
                    }`}
                  >
                    {tab.weightBadge}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* SEARCH BAR */}
        <div className="mt-6">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-star-soft">
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="🔍 Tìm theo tên định luật, công thức, ký hiệu, đơn vị (vd: Boyle, Faraday, Young, Newton, lò xo, phóng xạ...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl glass-bright py-3.5 pl-11 pr-10 font-mono text-sm text-star placeholder-star-mute shadow-glass outline-none transition focus:border-nebula focus:ring-2 focus:ring-nebula/40 border border-nebula/20"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute inset-y-0 right-0 flex items-center pr-4 font-mono text-sm text-star-soft hover:text-star transition"
                title="Xóa tìm kiếm"
              >
                ✕
              </button>
            )}
          </div>

          {/* Fast search keywords */}
          <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
            <span className="font-mono text-[11px] text-star-mute">
              Gợi ý nhanh:
            </span>
            {QUICK_SEARCH_KEYWORDS.map((kw) => (
              <button
                key={kw}
                onClick={() => setSearch(kw)}
                className={`rounded-lg px-2 py-0.5 font-mono text-[11px] transition ${
                  search.toLowerCase() === kw.toLowerCase()
                    ? "bg-photon text-void font-bold"
                    : "glass text-star-soft hover:text-photon hover:border-photon/30"
                }`}
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* LEVEL 2: DYNAMIC CHAPTER FILTER CHIPS */}
        <div className="mt-5">
          <div className="flex items-center justify-between pb-1.5">
            <span className="font-mono text-xs font-medium text-star-soft">
              📂 Lọc theo chương:
            </span>
            <span className="font-mono text-xs text-star-mute">
              Hiển thị:{" "}
              <strong className="text-photon">{filteredFormulas.length}</strong>{" "}
              / {FORMULAS.length} công thức
            </span>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedChapter("all")}
              className={`whitespace-nowrap rounded-full px-3.5 py-1.5 font-display text-xs font-semibold transition-all ${
                selectedChapter === "all"
                  ? "bg-gradient-to-r from-nebula to-plasma text-white shadow-glow border border-white/20"
                  : "glass text-star-soft hover:text-star hover:border-nebula/40"
              }`}
            >
              🌟 Tất cả các chương{" "}
              {selectedGrade !== "all" ? `(Lớp ${selectedGrade})` : ""}
            </button>

            {availableChapters.map((c) => {
              const isSelected = selectedChapter === c.id;
              const chapterCount = FORMULAS.filter(
                (f) => f.chapterId === c.id
              ).length;

              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedChapter(c.id)}
                  className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-1.5 font-display text-xs font-medium transition-all ${
                    isSelected
                      ? "bg-gradient-to-r from-nebula to-plasma text-white shadow-glow border border-white/20 font-semibold"
                      : "glass text-star-soft hover:text-star hover:border-nebula/40"
                  }`}
                >
                  <span>{c.emoji}</span>
                  <span>{c.name}</span>
                  <span
                    className={`ml-1 rounded-full px-1.5 py-0.2 font-mono text-[10px] ${
                      isSelected ? "bg-black/30 text-photon" : "text-star-mute"
                    }`}
                  >
                    {chapterCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* FORMULA CARDS GRID */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filteredFormulas.map((f) => {
            const gradeBadge = getGradeBadge(f.grade);
            const isCopied = copiedId === f.id;

            return (
              <div
                key={f.id}
                className="group relative flex flex-col justify-between rounded-2xl glass p-5 shadow-glass transition-all duration-300 hover:-translate-y-1 hover:border-nebula/50 hover:shadow-glow"
              >
                <div>
                  {/* Card Header: Grade badge & Unit */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5">
                      <span
                        className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 font-mono text-[11px] font-bold border ${gradeBadge.className}`}
                      >
                        <span>{gradeBadge.emoji}</span>
                        <span>{gradeBadge.label}</span>
                      </span>
                      <span className="font-mono text-[11px] text-star-mute truncate max-w-[170px] sm:max-w-[200px]">
                        {f.chapterName}
                      </span>
                    </div>

                    <span className="shrink-0 rounded-md bg-void/80 px-2 py-0.5 font-mono text-[11px] font-medium text-star-soft border border-star-mute/25">
                      {f.unit}
                    </span>
                  </div>

                  {/* Formula Name */}
                  <h2 className="mt-3 font-display text-base font-bold text-star group-hover:text-white transition">
                    {f.name}
                  </h2>

                  {/* Formula Display Box */}
                  <div className="relative mt-3">
                    <div className="rounded-xl bg-void-card/95 p-3.5 pr-14 font-mono text-sm font-bold text-photon shadow-inner border border-photon/25 tracking-wide overflow-x-auto">
                      {f.formula}
                    </div>

                    {/* Copy Button */}
                    <button
                      onClick={() => handleCopyFormula(f.id, f.formula)}
                      className={`absolute right-2 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 font-mono text-[11px] font-semibold transition-all ${
                        isCopied
                          ? "bg-correct text-white shadow-sm"
                          : "bg-void/80 text-star-soft hover:text-photon hover:bg-void border border-star-mute/30"
                      }`}
                      title="Sao chép công thức"
                    >
                      {isCopied ? "✓ Đã chép" : "Copy"}
                    </button>
                  </div>

                  {/* Variables Explanation */}
                  <p className="mt-3.5 whitespace-pre-line text-xs leading-relaxed text-star-soft">
                    {f.explain}
                  </p>

                  {/* Tip / Exam Warning if available */}
                  {f.tip && (
                    <div className="mt-3 flex items-start gap-2 rounded-xl bg-photon/10 p-2.5 border border-photon/25">
                      <span className="shrink-0 text-sm">💡</span>
                      <p className="text-[11px] leading-snug font-medium text-photon">
                        <strong className="text-photon">Mẹo thi:</strong>{" "}
                        {f.tip}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* EMPTY STATE */}
        {filteredFormulas.length === 0 && (
          <div className="mt-12 rounded-3xl glass p-10 text-center text-star-soft border border-nebula/30 shadow-glass">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-nebula/15 text-3xl">
              🔍
            </div>
            <h3 className="mt-4 font-display text-lg font-bold text-star">
              Không tìm thấy công thức phù hợp
            </h3>
            <p className="mx-auto mt-1 max-w-md text-xs text-star-mute">
              Không có công thức nào khớp với từ khoá &quot;{search}&quot; trong
              khối lớp hoặc chương đang chọn.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <button
                onClick={() => {
                  setSearch("");
                  setSelectedGrade("all");
                  setSelectedChapter("all");
                }}
                className="rounded-full bg-gradient-to-r from-nebula to-plasma px-5 py-2 font-display text-xs font-bold text-white shadow-glow transition hover:opacity-90"
              >
                🔄 Đặt lại tất cả bộ lọc
              </button>
            </div>
          </div>
        )}

        {/* Footer */}
        <footer className="mt-16 text-center font-mono text-xs text-star-mute">
          <p className="mb-1">
            THPT Na Rì · Chinh phục Vật lí 10 - 11 - 12 (GDPT 2018)
          </p>
          <p className="text-[11px] text-star-mute/60">
            Hệ thống công thức được chuẩn hoá bám sát đề tham khảo Kỳ thi Tốt
            nghiệp THPT của Bộ Giáo dục & Đào tạo
          </p>
        </footer>
      </div>
    </main>
  );
}
