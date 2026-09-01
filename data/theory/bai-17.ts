import type { LessonTheory } from "@/lib/types";

const bai17: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu nguyên tắc tạo ra **Dòng điện xoay chiều** bằng cách quay một khung dây trong từ trường đều, cấu tạo và nguyên lý hoạt động của **Máy phát điện xoay chiều 1 pha** và **3 pha**, các giá trị hiệu dụng (điện áp, cường độ dòng điện) và ưu điểm vượt trội của điện xoay chiều trong lưới điện quốc gia.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🔄",
      heading: "1. Nguyên tắc tạo ra Dòng điện xoay chiều",
      blocks: [
        {
          kind: "text",
          text: "Khi cho một khung dây phẳng có `N` vòng dây, diện tích `S` quay đều với tốc độ góc `ω` quanh một trục cố định vuông góc với các đường sức từ của từ trường đều `B`:",
        },
        {
          kind: "example",
          title: "Biểu thức Từ thông & Suất điện động xoay chiều",
          text: "- **Từ thông qua khung dây:**\n  `Φ = N . B . S . cos(ω.t + φ₀) = Φ₀ . cos(ω.t + φ₀)`\n  (với `Φ₀ = N . B . S` là từ thông cực đại).\n\n- **Suất điện động cảm ứng xuất hiện trong khung:**\n  `e = - dΦ/dt = N . B . S . ω . sin(ω.t + φ₀) = E₀ . cos(ω.t + φ₀ - π/2)`\n  (với `E₀ = N . B . S . ω = ω . Φ₀` là suất điện động cực đại).",
        },
        {
          kind: "note",
          text: "**Nhận xét quan trọng:** Suất điện động cảm ứng `e` biến thiên điều hoà cùng tần số với từ thông nhưng **chậm pha hơn từ thông một góc π/2 (90°)**.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "⚙️",
      heading: "2. Cấu tạo Máy phát điện xoay chiều 1 pha",
      blocks: [
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🧲",
              title: "Phần cảm (Tạo ra từ trường)",
              text: "Gồm các nam châm điện hoặc nam châm vĩnh cửu có `p` cặp cực từ (gồm p cực Bắc N và p cực Nam S xen kẽ).",
            },
            {
              emoji: "➰",
              title: "Phần ứng (Tạo ra dòng điện)",
              text: "Gồm các cuộn dây dẫn giống nhau, nối tiếp nhau trên lõi thép kĩ thuật điện.",
            },
          ],
        },
        {
          kind: "text",
          text: "- **Roto:** Phần quay. **Stato:** Phần đứng yên.\n- **Tần số dòng điện phát ra:**\n  `f = n . p`  (nếu tốc độ quay `n` tính bằng **vòng/giây**).\n  `f = (n . p) / 60`  (nếu tốc độ quay `n` tính bằng **vòng/phút**).",
        },
        {
          kind: "check",
          q: "Một máy phát điện xoay chiều 1 pha có 4 cặp cực (p = 4). Roto quay với tốc độ 750 vòng/phút. Tần số của dòng điện do máy phát ra là:",
          options: ["50 Hz", "60 Hz", "3000 Hz", "25 Hz"],
          answer: 0,
          explain:
            "Áp dụng công thức: f = (n . p) / 60 = (750 . 4) / 60 = 3000 / 60 = 50 Hz.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "📊",
      heading: "3. Các giá trị Hiệu dụng của Dòng điện xoay chiều",
      blocks: [
        {
          kind: "text",
          text: "Để đo đạc và tính toán tác dụng nhiệt của dòng điện xoay chiều, người ta định nghĩa các **giá trị hiệu dụng**:",
        },
        {
          kind: "compare",
          left: {
            emoji: "📈",
            title: "Cường độ dòng điện hiệu dụng (I)",
            items: [
              "`I = I₀ / √2 ≈ 0,707 . I₀`",
              "Bằng cường độ của một dòng điện không đổi mà khi chạy qua cùng một điện trở R trong cùng một khoảng thời gian thì toả ra cùng một nhiệt lượng Q.",
              "Nhiệt lượng toả ra: `Q = I² . R . t`.",
            ],
          },
          right: {
            emoji: "⚡",
            title: "Điện áp hiệu dụng (U)",
            items: [
              "`U = U₀ / √2`",
              "Điện áp lưới điện sinh hoạt ở Việt Nam là `U = 220 V` (giá trị hiệu dụng), điện áp cực đại đạt `U₀ = 220√2 ≈ 311 V`.",
              "Các dụng cụ đo (vôn kế, ampe kế xoay chiều) luôn chỉ giá trị hiệu dụng.",
            ],
          },
        },
      ],
    },
  ],
  summary: [
    "Khung dây quay trong từ trường sinh ra sđđ xoay chiều: e = E₀ . cos(ωt - π/2).",
    "Mối liên hệ biên độ: E₀ = ω . Φ₀ = N . B . S . ω.",
    "Tần số máy phát điện xoay chiều: f = n.p (vòng/s) hoặc f = n.p/60 (vòng/phút).",
    "Giá trị hiệu dụng: I = I₀/√2, U = U₀/√2.",
    "Số chỉ trên đồng hồ đo điện đa năng/vôn kế là giá trị hiệu dụng.",
  ],
};

export default bai17;
