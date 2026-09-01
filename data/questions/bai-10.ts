import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Quá trình đẳng áp là quá trình biến đổi trạng thái của một lượng khí xác định trong đó:",
    options: [
      "Áp suất của khối khí được giữ không đổi.",
      "Thể tích của khối khí được giữ không đổi.",
      "Nhiệt độ của khối khí được giữ không đổi.",
      "Cả nhiệt độ và thể tích đều không đổi.",
    ],
    answer: 0,
    explain: "Quá trình đẳng áp là quá trình biến đổi trạng thái khi áp suất p không đổi.",
  },
  {
    id: "q2",
    q: "Hệ thức nào sau đây diễn tả đúng định luật Charles cho quá trình đẳng áp của một lượng khí lí tưởng?",
    options: ["V / T = hằng số", "p . V = hằng số", "p / T = hằng số", "V . T = hằng số"],
    answer: 0,
    explain: "Định luật Charles phát biểu: Khi áp suất không đổi, V / T = hằng số (V tỉ lệ thuận với nhiệt độ tuyệt đối T).",
  },
  {
    id: "q3",
    q: "Trong hệ toạ độ (V, T), đường đẳng áp của một lượng khí lí tưởng là:",
    options: [
      "Đường thẳng mà đường kéo dài đi qua gốc toạ độ O.",
      "Đường hyperbol.",
      "Đường thẳng song song với trục hoành OT.",
      "Đường parabol.",
    ],
    answer: 0,
    explain: "Trên hệ toạ độ (V, T), phương trình V = C.T là đường bậc nhất đi qua gốc toạ độ O.",
  },
  {
    id: "q4",
    q: "Một khối khí có thể tích 6 lít ở nhiệt độ 27°C. Nếu đun nóng đẳng áp khối khí đến khi thể tích đạt 8 lít thì nhiệt độ của khối khí lúc này là:",
    options: ["127°C", "36°C", "400°C", "300°C"],
    answer: 0,
    explain:
      "T₁ = 27 + 273 = 300 K. V₁/T₁ = V₂/T₂ => T₂ = (V₂ . T₁) / V₁ = (8 . 300) / 6 = 400 K. Đổi ra độ C: t₂ = 400 - 273 = 127°C.",
  },
  {
    id: "q5",
    q: "Khi làm lạnh đẳng áp một khối khí từ 127°C xuống 27°C thì thể tích của khối khí sẽ:",
    options: ["Giảm đi 1,33 lần.", "Giảm đi 4,7 lần.", "Tăng lên 1,33 lần.", "Giảm đi 100 lần."],
    answer: 0,
    explain:
      "T₁ = 127 + 273 = 400 K; T₂ = 27 + 273 = 300 K. Tỉ số thể tích: V₁ / V₂ = T₁ / T₂ = 400 / 300 = 4/3 ≈ 1,33 lần (thể tích giảm 1,33 lần).",
  },
  {
    id: "q6",
    q: "Đồ thị biểu diễn hai đường đẳng áp của cùng một lượng khí trên hệ toạ độ (V, T). Đường nào có độ dốc lớn hơn (nằm phía trên) ứng với áp suất:",
    options: ["Nhỏ hơn.", "Lớn hơn.", "Bằng nhau.", "Bằng 0."],
    answer: 0,
    explain: "Theo phương trình Clapeyron: V = (n R / p) T. Hệ số góc k = n R / p. Khi p càng nhỏ thì hệ số góc k càng lớn (đường nằm phía trên).",
  },
  {
    id: "q7",
    q: "Một quả bóng bay chứa khí heli để ngoài trời nắng to bị căng phồng và nổ tung. Hiện tượng này chủ yếu giải thích bằng:",
    options: [
      "Quá trình đẳng nhiệt làm áp suất tăng.",
      "Nhiệt độ tăng làm thể tích và áp suất khí bên trong bóng tăng vượt quá giới hạn chịu đựng của vỏ bóng.",
      "Vỏ bóng bay bị ánh sáng mặt trời làm mòn thủng.",
      "Khí heli phản ứng hoá học với không khí.",
    ],
    answer: 1,
    explain:
      "Khi trời nắng gắt, nhiệt độ khối khí tăng làm các phân tử khí chuyển động nhanh hơn, áp suất và thể tích tăng mạnh làm căng rách vỏ bóng.",
  },
  {
    id: "q8",
    q: "Trong quá trình đẳng tích (thể tích không đổi) của một lượng khí lí tưởng xác định, nếu nhiệt độ tuyệt đối tăng 2 lần thì áp suất của khối khí sẽ:",
    options: ["Tăng 2 lần.", "Giảm 2 lần.", "Tăng 4 lần.", "Không đổi."],
    answer: 0,
    explain: "Trong quá trình đẳng tích p / T = const, áp suất tỉ lệ thuận với nhiệt độ tuyệt đối T nên khi T tăng 2 lần thì p tăng 2 lần.",
  },
  {
    id: "q9",
    q: "Một bình kín dung tích không đổi chứa khí ở 0°C và áp suất 1 atm. Để áp suất trong bình tăng lên đến 2 atm thì cần đun nóng khí đến nhiệt độ:",
    options: ["273°C", "546°C", "100°C", "2°C"],
    answer: 0,
    explain:
      "T₁ = 0 + 273 = 273 K. p₁/T₁ = p₂/T₂ => T₂ = (p₂ . T₁) / p₁ = (2 . 273) / 1 = 546 K. t₂ = 546 - 273 = 273°C.",
  },
  {
    id: "q10",
    q: "Đồ thị biểu diễn quá trình đẳng áp trên hệ toạ độ (p, V) là:",
    options: [
      "Đoạn thẳng vuông góc với trục áp suất p.",
      "Đoạn thẳng vuông góc với trục thể tích V.",
      "Đường hypebol.",
      "Đường thẳng đi qua gốc toạ độ.",
    ],
    answer: 0,
    explain: "Trên hệ toạ độ (p, V), vì p không đổi nên đường biểu diễn là đoạn thẳng nằm ngang vuông góc với trục tung Op.",
  },
];

export default questions;
