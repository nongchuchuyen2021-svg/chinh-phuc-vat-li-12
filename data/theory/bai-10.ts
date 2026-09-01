import type { LessonTheory } from "@/lib/types";

const bai10: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta tìm hiểu quá trình biến đổi trạng thái của một lượng khí khi áp suất không đổi — gọi là **Quá trình Đẳng áp**, phát biểu và biểu thức toán học của **Định luật Charles** (Sác-lơ) và dạng của **Đường đẳng áp** trên các hệ toạ độ (V, T), (p, V), (p, T).",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🎈",
      heading: "1. Quá trình Đẳng áp & Định luật Charles",
      blocks: [
        {
          kind: "text",
          text: "**Quá trình đẳng áp** là quá trình biến đổi trạng thái của một lượng khí xác định trong đó **áp suất được giữ không đổi** (`p = hằng số`).",
        },
        {
          kind: "example",
          title: "Định luật Charles (Jacques Charles, 1787)",
          text: "Khi áp suất của một khối lượng khí xác định không đổi, **thể tích V của khí tỉ lệ thuận với nhiệt độ tuyệt đối T**:\n\n**V / T = hằng số  hay  V ~ T**\n\nNếu chuyển từ trạng thái 1 `(V₁, T₁)` sang trạng thái 2 `(V₂, T₂)`:\n**V₁ / T₁ = V₂ / T₂**",
        },
        {
          kind: "note",
          text: "**Chú ý quan trọng:** Nhiệt độ `T` bắt buộc phải tính theo **thang Kelvin (K)**, tức là `T = t(°C) + 273,15`. Không được dùng nhiệt độ °C trực tiếp vào công thức tỉ lệ thuận!",
        },
        {
          kind: "check",
          q: "Một khối khí có thể tích 3 lít ở 27°C. Đun nóng đẳng áp khối khí đến 127°C. Thể tích mới của khối khí là:",
          options: ["4 lít", "14,1 lít", "6 lít", "3,5 lít"],
          answer: 0,
          explain:
            "Đổi T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K. V₂ = (V₁ . T₂) / T₁ = (3 . 400) / 300 = 4 lít.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "📈",
      heading: "2. Đường đẳng áp trên các hệ toạ độ",
      blocks: [
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "📐",
              title: "Hệ toạ độ (V, T)",
              text: "Đường đẳng áp là **đường thẳng kéo dài đi qua gốc toạ độ O**. (Phần gần gốc O vẽ nét đứt vì ở nhiệt độ quá thấp khí sẽ bị hoá lỏng). Đường đẳng áp ở áp suất nhỏ hơn nằm **phía trên** (`p₁ < p₂`).",
            },
            {
              emoji: "📏",
              title: "Hệ toạ độ (p, V) và (p, T)",
              text: "Đường đẳng áp là **đoạn thẳng vuông góc với trục áp suất Op**.",
            },
          ],
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🔥",
      heading: "3. Giải thích vi mô và hiện tượng Quá trình Đẳng tích",
      blocks: [
        {
          kind: "text",
          text: "- **Giải thích vi mô:** Khi nhiệt độ tăng, vận tốc phân tử tăng làm lực va chạm mạnh hơn. Để giữ áp suất không đổi thì thể tích phải tăng để giảm mật độ phân tử, bù trừ lại xung lượng va chạm.\n- **Mở rộng (Quá trình Đẳng tích - V = const):** Khi thể tích không đổi, áp suất tỉ lệ thuận với nhiệt độ tuyệt đối: `p / T = hằng số` (Định luật Amontons / Gay-Lussac).",
        },
      ],
    },
  ],
  summary: [
    "Quá trình đẳng áp: p = hằng số.",
    "Định luật Charles: V / T = hằng số <=> V₁ / T₁ = V₂ / T₂ (T tính bằng Kelvin).",
    "Trên hệ toạ độ (V, T), đường đẳng áp là đường thẳng có đường kéo dài đi qua gốc toạ độ O.",
    "Quá trình đẳng tích (V = const): p / T = hằng số <=> p₁ / T₁ = p₂ / T₂.",
  ],
};

export default bai10;
