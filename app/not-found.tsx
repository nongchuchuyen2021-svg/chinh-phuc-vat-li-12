import Link from "next/link";

export default function NotFound() {
  return (
    <main className="cosmos stars flex min-h-screen items-center justify-center">
      <div className="relative z-10 mx-auto max-w-md px-5 text-center">
        <div className="glass-bright rounded-2xl p-8 shadow-glow">
          <p className="text-6xl">🌌</p>
          <h1 className="mt-3 font-display text-2xl font-bold">
            <span className="bg-gradient-to-r from-nebula to-plasma bg-clip-text text-transparent">
              404 — Lạc vào vũ trụ!
            </span>
          </h1>
          <p className="mt-2 text-sm text-star-soft">
            Trang bạn tìm không tồn tại, hoặc bài này chưa được biên soạn.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-gradient-to-r from-nebula to-plasma px-6 py-2.5 font-medium text-white shadow-glow transition hover:shadow-glow-hover"
          >
            ← Về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
