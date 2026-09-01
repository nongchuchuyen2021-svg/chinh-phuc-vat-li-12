"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CURRICULUM } from "@/data/curriculum";
import { getProgress } from "@/lib/progress";
import type { LessonCounts, ProgressMap } from "@/lib/types";

/* ─── Particle Background ─────────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = [];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    // Tạo hạt
    const count = Math.min(60, Math.floor((window.innerWidth * window.innerHeight) / 15000));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        a: Math.random() * 0.5 + 0.2,
      });
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas!.width;
        if (p.x > canvas!.width) p.x = 0;
        if (p.y < 0) p.y = canvas!.height;
        if (p.y > canvas!.height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(139, 92, 246, ${p.a})`;
        ctx!.fill();
      }

      // Vẽ đường nối giữa các hạt gần nhau
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 120)})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

/* ─── Progress Ring ───────────────────────────────────────────────────────── */
function ProgressRing({ done, total, size = 80 }: { done: number; total: number; size?: number }) {
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = total > 0 ? done / total : 0;
  const offset = circumference * (1 - pct);

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="drop-shadow-lg">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="rgba(139,92,246,0.15)"
          strokeWidth={strokeWidth}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="progress-ring-circle"
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display text-lg font-bold text-star">{done}</span>
        <span className="font-mono text-[10px] text-star-soft">/{total}</span>
      </div>
    </div>
  );
}

/* ─── Score Badge ─────────────────────────────────────────────────────────── */
function ScoreBadge({ best }: { best: number }) {
  if (best >= 80) {
    return (
      <span className="rounded-full bg-correct/20 px-2.5 py-1 font-mono text-xs font-medium text-correct">
        ⭐ {best}%
      </span>
    );
  }
  if (best >= 50) {
    return (
      <span className="rounded-full bg-photon/20 px-2.5 py-1 font-mono text-xs font-medium text-photon">
        {best}%
      </span>
    );
  }
  return (
    <span className="rounded-full bg-wrong/15 px-2.5 py-1 font-mono text-xs font-medium text-wrong">
      {best}%
    </span>
  );
}

/* ─── Atom decoration ─────────────────────────────────────────────────────── */
function AtomIcon({ className }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="h-3 w-3 rounded-full bg-nebula shadow-glow" />
      <div className="absolute -inset-3 animate-spin-slow rounded-full border border-nebula/30" />
      <div
        className="absolute -inset-3 animate-spin-slow rounded-full border border-plasma/20"
        style={{ animationDuration: "15s", transform: "rotate(60deg)" }}
      />
      <div
        className="absolute -inset-3 animate-spin-slow rounded-full border border-photon/20"
        style={{ animationDuration: "25s", transform: "rotate(-60deg)" }}
      />
    </div>
  );
}

/* ─── Main HomeClient ─────────────────────────────────────────────────────── */
export default function HomeClient({ counts }: { counts: Record<string, LessonCounts> }) {
  const [progress, setProgress] = useState<ProgressMap>({});
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setProgress(getProgress());
    setLoaded(true);
  }, []);

  const availableLessons = CURRICULUM.flatMap((t) => t.lessons).filter((l) => l.available);
  const doneCount = availableLessons.filter((l) => (progress[l.id]?.best ?? 0) >= 80).length;
  const totalLessons = CURRICULUM.flatMap((t) => t.lessons).length;

  return (
    <main className="cosmos stars relative min-h-screen pb-16">
      <ParticleCanvas />

      <div className="relative z-10 mx-auto max-w-3xl px-5 pt-12 sm:px-8">
        {/* ── Header ── */}
        <header className="text-center">
          <div className="inline-flex items-center gap-3 rounded-full glass px-5 py-2.5 shadow-glow">
            <AtomIcon />
            <span className="font-display text-base font-semibold text-star sm:text-lg">
              🏫 Trường THPT Na Rì — Tỉnh Thái Nguyên
            </span>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <span className="animate-float text-5xl" style={{ animationDelay: "0s" }}>⚛️</span>
            <span className="animate-float text-4xl" style={{ animationDelay: "0.5s" }}>🔬</span>
            <span className="animate-float text-5xl" style={{ animationDelay: "1s" }}>🌌</span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-nebula via-plasma to-nebula-glow bg-clip-text text-transparent">
              Chinh phục
            </span>
            <br />
            <span className="bg-gradient-to-r from-plasma via-nebula-glow to-photon bg-clip-text text-transparent">
              Vật lí 12
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-star-soft sm:text-base">
            Mỗi bài có phần lý thuyết tự học, rồi tới trắc nghiệm, đúng/sai và tự luận
            — làm đến đâu chấm đến đó, có giải thích từng câu. Đạt từ 80% trở lên sẽ
            nhận sao ⭐. Tiến độ được lưu ngay trên máy của em.
          </p>

          {/* Quick Action Cards: Sổ tay công thức & Thi thử THPT */}
          <div className="mt-7 grid grid-cols-2 gap-3.5 sm:gap-4">
            <Link
              href="/cong-thuc"
              className="group flex flex-col items-center justify-center rounded-2xl glass-bright p-4 text-center shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow hover:border-nebula/40"
            >
              <span className="text-2xl sm:text-3xl">📑</span>
              <span className="mt-2 font-display text-sm font-bold text-star group-hover:text-nebula-glow transition-colors sm:text-base">
                Sổ tay Công thức
              </span>
              <span className="mt-0.5 font-mono text-[11px] text-star-mute sm:text-xs">
                Trọn bộ 3 khối 10 - 11 - 12
              </span>
            </Link>

            <Link
              href="/thi-thu"
              className="group flex flex-col items-center justify-center rounded-2xl glass-bright p-4 text-center shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-gold hover:border-photon/40"
            >
              <span className="text-2xl sm:text-3xl">📝</span>
              <span className="mt-2 font-display text-sm font-bold text-star group-hover:text-photon transition-colors sm:text-base">
                Thi thử Tốt nghiệp
              </span>
              <span className="mt-0.5 font-mono text-[11px] text-star-mute sm:text-xs">
                Đề chuẩn cấu trúc 2025 - 2026
              </span>
            </Link>
          </div>

          {/* Progress ring */}
          {loaded && (
            <div className="mt-7 inline-flex flex-col items-center gap-2">
              <ProgressRing done={doneCount} total={availableLessons.length || totalLessons} />
              <span className="font-mono text-xs text-star-soft">
                {availableLessons.length > 0
                  ? `Đã chinh phục ${doneCount}/${availableLessons.length} bài (Trọn bộ 25 bài)`
                  : `${totalLessons} bài · đang biên soạn`}
              </span>
            </div>
          )}
        </header>

        {/* ── Glow divider ── */}
        <div className="glow-line mx-auto mt-8 max-w-xs" />

        {/* ── Topic List ── */}
        <div className="mt-8 space-y-8">
          {CURRICULUM.map((topic, topicIdx) => (
            <section key={topic.id} className="animate-fade-in-up" style={{ animationDelay: `${topicIdx * 100}ms` }}>
              <h2 className="flex items-center gap-2.5 font-display text-lg font-semibold text-star">
                <span className="text-2xl">{topic.emoji}</span>
                <span className="bg-gradient-to-r from-nebula-glow to-plasma bg-clip-text text-transparent">
                  {topic.name}
                </span>
              </h2>

              <ul className="stagger mt-3 space-y-2.5">
                {topic.lessons.map((lesson) => {
                  const p = progress[lesson.id];
                  const c = counts[lesson.id] ?? { mcq: 10, tf: 2, essay: 2, theory: true };

                  const meta = [
                    `${c.mcq} trắc nghiệm`,
                    c.tf > 0 ? `${c.tf} đúng/sai` : "",
                    c.essay > 0 ? `${c.essay} tự luận` : "",
                    c.theory ? "📖 có lý thuyết" : "",
                    p ? `đã làm ${p.attempts} lần` : "",
                  ]
                    .filter(Boolean)
                    .join(" · ");

                  return (
                    <li key={lesson.id}>
                      <Link
                        href={`/luyen/${lesson.id}`}
                        className="group flex items-center justify-between gap-3 rounded-xl glass px-4 py-3.5 shadow-glass transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow-hover hover:border-nebula/40"
                      >
                        <div className="min-w-0">
                          <p className="text-sm font-medium leading-snug text-star group-hover:text-nebula-glow transition-colors">
                            {lesson.title}
                          </p>
                          <p className="mt-0.5 font-mono text-xs leading-relaxed text-star-mute">
                            {meta}
                          </p>
                        </div>
                        <div className="flex shrink-0 items-center gap-2">
                          {loaded && p && <ScoreBadge best={p.best} />}
                          <span className="text-star-mute transition-all group-hover:translate-x-0.5 group-hover:text-nebula">
                            →
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>

        {/* ── Footer ── */}
        <div className="glow-line mx-auto mt-12 max-w-xs" />

        <footer className="mt-6 space-y-1 text-center font-mono text-xs text-star-mute">
          <p>Tổ Toán - Tin, trường THPT Na Rì, xã Na Rì, tỉnh Thái Nguyên</p>
          <p>SGK Kết nối tri thức với cuộc sống · Tiến độ lưu trên trình duyệt của bạn</p>
        </footer>
      </div>
    </main>
  );
}
