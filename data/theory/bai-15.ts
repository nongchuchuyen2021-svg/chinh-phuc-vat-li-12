import type { LessonTheory } from "@/lib/types";

const bai15: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu khái niệm véc-tơ **Cảm ứng từ (B)**, đơn vị Tesla (T), công thức tính **Lực từ (Lực Laplace)** tác dụng lên một đoạn dây dẫn mang dòng điện đặt trong từ trường đều `F = B.I.L.sin(α)` và **Quy tắc Bàn tay trái** để xác định chiều của lực từ.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🧲",
      heading: "1. Véc-tơ Cảm ứng từ (B)",
      blocks: [
        {
          kind: "text",
          text: "**Cảm ứng từ** (kí hiệu là `B`) là đại lượng véc-tơ đặc trưng cho từ trường về mặt **tác dụng lực từ** tại một điểm.",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🧭",
              title: "Hướng của véc-tơ B",
              text: "Trùng với hướng của đường sức từ tại điểm đó (hướng từ cực Nam sang cực Bắc của kim nam châm thử nhỏ cân bằng tại điểm đó).",
            },
            {
              emoji: "📐",
              title: "Đơn vị đo chuẩn SI",
              text: "Đơn vị của cảm ứng từ là **Tesla (kí hiệu là T)**. (1 T = 1 N / (A.m)).",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "⚡",
      heading: "2. Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Lực Laplace)",
      blocks: [
        {
          kind: "example",
          title: "Định luật Ampère về Lực từ",
          text: "Một đoạn dây dẫn thẳng dài `L` mang dòng điện `I` đặt trong từ trường đều có cảm ứng từ `B` chịu tác dụng của lực từ `F`:\n\n**F = B . I . L . sin(α)**\n\nTrong đó:\n- `F`: Độ lớn lực từ (`N`).\n- `B`: Độ lớn cảm ứng từ (`T`).\n- `I`: Cường độ dòng điện (`A`).\n- `L`: Chiều dài đoạn dây dẫn nằm trong từ trường (`m`).\n- `α = (B, I)`: Góc hợp bởi véc-tơ cảm ứng từ B và chiều dòng điện I.",
        },
        {
          kind: "note",
          text: "- Khi đoạn dây dẫn **vuông góc** với đường sức từ (`α = 90°` => `sin(90°) = 1`): Lực từ đạt giá trị cực đại `F_max = B . I . L`.\n- Khi đoạn dây dẫn **song song** với đường sức từ (`α = 0°` hoặc `180°` => `sin(α) = 0`): Lực từ `F = 0`.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "✋",
      heading: "3. Quy tắc Bàn tay trái",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Đặt bàn tay",
              title: "Hứng đường sức từ",
              text: "Đặt bàn tay trái duỗi thẳng sao cho các đường sức từ `B` **đâm xuyên vào lòng bàn tay** (lòng bàn tay hướng về phía cực Bắc N của nam châm).",
            },
            {
              label: "Chiều ngón tay",
              title: "Theo chiều dòng điện",
              text: "Chiều từ **cổ tay đến 4 ngón tay** chỉ theo chiều dòng điện `I` trong dây dẫn.",
            },
            {
              label: "Ngón tay cái",
              title: "Chỉ chiều lực từ",
              text: "**Ngón tay cái choãi ra 90°** chỉ chiều của lực từ `F` tác dụng lên đoạn dây dẫn.",
            },
          ],
        },
        {
          kind: "check",
          q: "Một đoạn dây dẫn dài 0,2 m mang dòng điện 5 A đặt vuông góc với các đường sức từ của từ trường đều B = 0,4 T. Lực từ tác dụng lên đoạn dây dẫn là:",
          options: ["0,4 N", "0,2 N", "0,8 N", "0 N"],
          answer: 0,
          explain:
            "Vì dây vuông góc với B nên α = 90°, sin(90°) = 1. F = B . I . L = 0,4 . 5 . 0,2 = 0,4 N.",
        },
      ],
    },
  ],
  summary: [
    "Cảm ứng từ B đặc trưng cho từ trường về mặt tác dụng lực. Đơn vị: Tesla (T).",
    "Công thức lực từ: F = B . I . L . sin(α).",
    "Lực từ đạt cực đại khi dây vuông góc với từ trường (α = 90°), bằng 0 khi dây song song (α = 0°).",
    "Quy tắc bàn tay trái: Đường sức từ đâm vào lòng bàn tay, 4 ngón tay theo dòng điện, ngón cái choãi 90° chỉ chiều lực từ F.",
  ],
};

export default bai15;
