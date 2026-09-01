"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { FORMULAS, FORMULA_CHAPTERS } from "@/data/formulas";

export default function FormulaClient() {
  const [selectedChapter, setSelectedChapter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredFormulas = useMemo(() => {
    return FORMULAS.filter((f) => {
      const matchChapter = selectedChapter === "all" || f.chapterId === selectedChapter;
      const matchSearch =
        search.trim() === "" ||
        f.name.toLowerCase().includes(search.toLowerCase()) ||
        f.formula.toLowerCase().includes(search.toLowerCase()) ||
        f.explain.toLowerCase().includes(search.toLowerCase());
      return matchChapter && matchSearch;
    });
  }, [selectedChapter, search]);

  return (
    <main className="cosmos stars relative min-h-screen pb-16">
      <div className="relative z-10 mx-auto max-w-4xl px-5 pt-10 sm:px-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="rounded-full glass px-3.5 py-1.5 font-mono text-xs text-star-soft transition hover:text-star hover:border-nebula/40"
          >
            ← Trang chủ
          </Link>
          <span className="font-mono text-xs text-photon">
            📑 {FORMULAS.length} công thức trọng tâm
          </span>
        </div>

        <header className="mt-6 text-center">
          <h1 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
            <span className="bg-gradient-to-r from-nebula via-plasma to-photon bg-clip-text text-transparent">
              Sổ tay Công thức
            </span>
            <br />
            <span className="text-star">Vật lí 12 Toàn diện</span>
          </h1>
          <p className="mx-auto mt-2 max-w-xl text-sm text-star-soft">
            Tra cứu nhanh hệ thống công thức, đơn vị đo chuẩn SI và chú thích ý nghĩa đại lượng của cả 4 chương theo SGK Kết nối tri thức.
          </p>
        </header>

        {/* Search bar */}
        <div className="mt-6">
          <div className="relative">
            <input
              type="text"
              placeholder="🔍 Tìm kiếm công thức (vd: Boyle, Faraday, độ hụt khối, nhiệt lượng...)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl glass-bright px-5 py-3.5 font-mono text-sm text-star placeholder-star-mute shadow-glass outline-none transition focus:border-nebula focus:ring-2 focus:ring-nebula/30 border border-nebula/20"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-star-soft hover:text-star"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Chapter Filter Chips */}
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {FORMULA_CHAPTERS.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedChapter(c.id)}
              className={`whitespace-nowrap rounded-full px-4 py-2 font-display text-xs font-medium transition-all ${
                selectedChapter === c.id
                  ? "bg-gradient-to-r from-nebula to-plasma text-white shadow-glow"
                  : "glass text-star-soft hover:text-star hover:border-nebula/40"
              }`}
            >
              <span className="mr-1.5">{c.emoji}</span>
              {c.name}
            </button>
          ))}
        </div>

        {/* Formula Cards Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {filteredFormulas.map((f) => (
            <div
              key={f.id}
              className="rounded-2xl glass p-5 shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:border-nebula/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-display text-base font-semibold text-star">
                    {f.name}
                  </h2>
                  <span className="shrink-0 rounded-md bg-nebula/15 px-2 py-0.5 font-mono text-[11px] text-nebula-glow border border-nebula/20">
                    {f.unit}
                  </span>
                </div>

                <div className="mt-3 rounded-xl bg-void-card/90 p-3.5 font-mono text-sm font-bold text-photon shadow-inner border border-photon/20 text-center tracking-wide">
                  {f.formula}
                </div>

                <p className="mt-3 whitespace-pre-line text-xs leading-relaxed text-star-soft">
                  {f.explain}
                </p>
              </div>
            </div>
          ))}
        </div>

        {filteredFormulas.length === 0 && (
          <div className="mt-12 rounded-2xl glass p-8 text-center text-star-soft">
            <p className="text-3xl">🔍</p>
            <p className="mt-2 font-display text-base">Không tìm thấy công thức phù hợp</p>
            <p className="mt-1 text-xs text-star-mute">Hãy thử tìm kiếm với từ khoá khác</p>
          </div>
        )}

        <footer className="mt-12 text-center font-mono text-xs text-star-mute">
          <p>Tổ Toán - Tin, trường THPT Na Rì · Chinh phục Vật lí 12</p>
        </footer>
      </div>
    </main>
  );
}
