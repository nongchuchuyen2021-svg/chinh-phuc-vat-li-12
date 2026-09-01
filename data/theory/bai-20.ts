import type { LessonTheory } from "@/lib/types";

const bai20: LessonTheory = {
  intro:
    "Trong bài học tổng kết Chương III này, chúng ta sẽ hệ thống hoá các dạng bài tập trọng tâm về Từ trường & Cảm ứng điện từ: Lực từ tác dụng lên dây dẫn mang dòng điện, bài toán Từ thông biến thiên và suất điện động cảm ứng, bài toán Máy phát điện xoay chiều, Máy biến áp và Truyền tải điện năng đi xa.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "📐",
      heading: "1. Bảng tổng hợp công thức Chương III",
      blocks: [
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🧲",
              title: "Lực từ Laplace",
              text: "`F = B . I . L . sin(α)`\nQuy tắc: Bàn tay trái (hứng B, 4 ngón theo I, ngón cái chỉ F).",
            },
            {
              emoji: "🌊",
              title: "Từ thông & Sđđ cảm ứng",
              text: "- `Φ = N . B . S . cos(α)`\n- `e_c = - ΔΦ / Δt`\n- `|e_c| = N . S . |ΔB / Δt| . cos(α)`",
            },
            {
              emoji: "⚙️",
              title: "Máy phát điện & Máy biến áp",
              text: "- `E₀ = N . B . S . ω`\n- `f = (n . p) / 60`\n- `U₂ / U₁ = N₂ / N₁ = I₁ / I₂`",
            },
            {
              emoji: "🗼",
              title: "Truyền tải điện & Sóng",
              text: "- `ΔP = (P² . r) / (U² . cos²φ)`\n- `H = (P - ΔP) / P`\n- `λ = c / f`",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "💡",
      heading: "2. Phương pháp giải các dạng bài tập điển hình",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Dạng 1",
              title: "Cân bằng của đoạn dây dẫn có dòng điện trong từ trường",
              text: "Viết điều kiện cân bằng lực: `P⃗ + T⃗ + F⃗_từ = 0⃗`. Chiếu lên các trục toạ độ để tìm góc lệch dây treo hoặc phản lực tiếp xúc.",
            },
            {
              label: "Dạng 2",
              title: "Dòng điện cảm ứng trong khung dây",
              text: "Tính suất điện động `e_c = |ΔΦ/Δt|`, tính điện trở toàn phần `R_tp = R + r_trong`, áp dụng định luật Ohm: `i_c = |e_c| / R_tp`.",
            },
            {
              label: "Dạng 3",
              title: "Bài toán tăng áp truyền tải",
              text: "Lập tỉ số: `ΔP₂ / ΔP₁ = (U₁ / U₂)²`. Suy ra độ giảm hao phí và độ tăng hiệu suất.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Lực từ: F = B.I.L.sinα (quy tắc bàn tay trái).",
    "Suất điện động cảm ứng: |e_c| = |ΔΦ/Δt|.",
    "Máy biến áp: U2/U1 = N2/N1 = I1/I2.",
    "Công suất hao phí: ΔP ~ 1/U².",
    "Sóng điện từ: c = 3.10⁸ m/s, λ = c/f.",
  ],
};

export default bai20;
