import type { LessonTheory } from "@/lib/types";

const bai09: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta tìm hiểu quá trình biến đổi trạng thái của một lượng khí khi nhiệt độ không đổi — gọi là **Quá trình Đẳng nhiệt**, phát biểu và biểu thức toán học của **Định luật Boyle** (Bôi-lơ) và dạng của **Đường đẳng nhiệt** trên các hệ toạ độ (p, V), (p, T), (V, T).",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🌡️",
      heading: "1. Quá trình Đẳng nhiệt & Định luật Boyle",
      blocks: [
        {
          kind: "text",
          text: "**Quá trình đẳng nhiệt** là quá trình biến đổi trạng thái của một lượng khí xác định trong đó **nhiệt độ được giữ không đổi** (`T = hằng số`).",
        },
        {
          kind: "example",
          title: "Định luật Boyle (Robert Boyle, 1662)",
          text: "Ở nhiệt độ không đổi, **áp suất p** của một khối lượng khí xác định **tỉ lệ nghịch với thể tích V** của khối khí đó:\n\n**p ~ 1/V  hay  p . V = hằng số**\n\nNếu chuyển từ trạng thái 1 `(p₁, V₁)` sang trạng thái 2 `(p₂, V₂)` ở cùng nhiệt độ T:\n**p₁ . V₁ = p₂ . V₂**",
        },
        {
          kind: "check",
          q: "Nén đẳng nhiệt một khối khí từ thể tích 6 lít xuống còn 2 lít. Biết áp suất ban đầu là 1 atm. Áp suất của khối khí sau khi nén là:",
          options: ["3 atm", "0,33 atm", "12 atm", "2 atm"],
          answer: 0,
          explain:
            "Áp dụng định luật Boyle: p₁ . V₁ = p₂ . V₂ => p₂ = (p₁ . V₁) / V₂ = (1 . 6) / 2 = 3 atm.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "📈",
      heading: "2. Đường đẳng nhiệt trên các hệ toạ độ",
      blocks: [
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "📉",
              title: "Hệ toạ độ (p, V)",
              text: "Đường đẳng nhiệt là một nhánh của đường **hypebol** (`p = C / V`). Đường đẳng nhiệt ở nhiệt độ cao hơn nằm **phía trên** đường đẳng nhiệt ở nhiệt độ thấp hơn (`T₂ > T₁`).",
            },
            {
              emoji: "📏",
              title: "Hệ toạ độ (p, T) và (V, T)",
              text: "Đường đẳng nhiệt là **đoạn thẳng vuông góc với trục nhiệt độ OT** (vì nhiệt độ T không đổi).",
            },
          ],
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🔬",
      heading: "3. Giải thích vi mô của định luật Boyle",
      blocks: [
        {
          kind: "text",
          text: "Khi nén thể tích `V` giảm đi một nửa ở nhiệt độ không đổi:\n1. Mật độ phân tử khí `n = N/V` tăng lên gấp đôi.\n2. Vận tốc chuyển động nhiệt trung bình của phân tử không đổi (vì `T` không đổi).\n3. Số va chạm của phân tử vào một đơn vị diện tích thành bình trong 1 giây tăng lên gấp đôi => Áp suất khí `p` tăng lên gấp đôi.",
        },
      ],
    },
  ],
  summary: [
    "Quá trình đẳng nhiệt: T = hằng số.",
    "Định luật Boyle: p . V = hằng số <=> p₁ . V₁ = p₂ . V₂.",
    "Trên hệ toạ độ (p, V), đường đẳng nhiệt là một nhánh hypebol; đường ở trên ứng với nhiệt độ cao hơn.",
    "Áp suất tỉ lệ nghịch với thể tích do mật độ phân tử thay đổi.",
  ],
};

export default bai09;
