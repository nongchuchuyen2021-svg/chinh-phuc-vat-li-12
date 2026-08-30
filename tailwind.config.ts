import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Bảng màu Vật lí 12: tím vũ trụ + xanh điện tử + vàng neon.
      // Dark mode mặc định — tông sci-fi, khác hẳn web Tin 12 (sáng, xanh biển).
      colors: {
        // Nền
        void: "#0F0B1E",        // nền chính, đen tím sâu
        "void-light": "#1A1033", // nền nhạt hơn chút
        "void-card": "#1E1640", // nền thẻ glassmorphism
        // Chữ
        star: "#F1F0F7",        // chữ chính, trắng hơi tím
        "star-soft": "#9B95B5", // chữ phụ
        "star-mute": "#5C5478", // chữ rất nhạt
        // Chủ đạo
        nebula: "#8B5CF6",      // tím sáng chủ đạo
        "nebula-deep": "#6D28D9", // tím đậm
        "nebula-glow": "#A78BFA", // tím phát sáng
        // Xanh điện tử
        plasma: "#3B82F6",      // xanh dương sáng
        "plasma-deep": "#1D4ED8", // xanh dương đậm
        // Nhấn
        photon: "#FACC15",      // vàng neon — năng lượng, ánh sáng
        "photon-deep": "#CA8A04", // vàng đậm
        // Trạng thái
        correct: "#10B981",     // xanh lá — đúng
        "correct-deep": "#059669",
        wrong: "#EF4444",       // đỏ — sai
        "wrong-deep": "#DC2626",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(139,92,246,0.3), 0 0 60px rgba(139,92,246,0.1)",
        "glow-hover": "0 0 30px rgba(139,92,246,0.5), 0 0 80px rgba(139,92,246,0.15)",
        "glow-blue": "0 0 20px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)",
        "glow-gold": "0 0 20px rgba(250,204,21,0.3), 0 0 60px rgba(250,204,21,0.1)",
        glass: "0 8px 32px rgba(0,0,0,0.4)",
        "glass-hover": "0 14px 44px rgba(0,0,0,0.5)",
      },
      keyframes: {
        "pop-in": {
          "0%": { opacity: "0", transform: "translateY(14px) scale(0.96)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        wiggle: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "75%": { transform: "translateX(4px)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139,92,246,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(139,92,246,0.5)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.35s ease-out both",
        wiggle: "wiggle 0.3s ease-in-out",
        float: "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "fade-in-up": "fade-in-up 0.5s ease-out both",
        "spin-slow": "spin-slow 20s linear infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
