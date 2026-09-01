import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Quá trình đẳng nhiệt là quá trình biến đổi trạng thái của một khối lượng khí xác định trong đó:",
    options: [
      "Áp suất khí được giữ không đổi.",
      "Thể tích khí được giữ không đổi.",
      "Nhiệt độ khí được giữ không đổi.",
      "Cả áp suất và thể tích đều không đổi.",
    ],
    answer: 2,
    explain: "Quá trình đẳng nhiệt là quá trình trong đó nhiệt độ T của hệ được giữ không đổi.",
  },
  {
    id: "q2",
    q: "Hệ thức nào sau đây biểu diễn đúng định luật Boyle cho quá trình đẳng nhiệt?",
    options: ["p / V = hằng số", "p . V = hằng số", "V / T = hằng số", "p / T = hằng số"],
    answer: 1,
    explain: "Định luật Boyle phát biểu: Ở nhiệt độ không đổi, tích của áp suất và thể tích là hằng số: p . V = hằng số.",
  },
  {
    id: "q3",
    q: "Trong hệ toạ độ (p, V), đường đẳng nhiệt của một lượng khí lí tưởng có dạng là:",
    options: [
      "Đường thẳng đi qua gốc toạ độ.",
      "Một nhánh của đường hypebol.",
      "Đường thẳng song song với trục áp suất.",
      "Đường parabol.",
    ],
    answer: 1,
    explain: "Trên hệ toạ độ (p, V), vì p = C / V (hàm phân thức bậc nhất) nên đường đẳng nhiệt là một nhánh của đường hypebol.",
  },
  {
    id: "q4",
    q: "Nén đẳng nhiệt một lượng khí lí tưởng làm thể tích giảm đi 3 lần thì áp suất của khối khí sẽ:",
    options: ["Tăng lên 3 lần.", "Giảm đi 3 lần.", "Tăng lên 9 lần.", "Không đổi."],
    answer: 0,
    explain: "Vì p tỉ lệ nghịch với V trong quá trình đẳng nhiệt, thể tích giảm 3 lần thì áp suất tăng lên 3 lần.",
  },
  {
    id: "q5",
    q: "Một khối khí có thể tích 4 lít ở áp suất 10⁵ Pa. Nén đẳng nhiệt khối khí này đến áp suất 2.10⁵ Pa. Thể tích mới của khối khí là:",
    options: ["2 lít", "8 lít", "1 lít", "4 lít"],
    answer: 0,
    explain: "Ta có: p₁ . V₁ = p₂ . V₂ => V₂ = (p₁ . V₁) / p₂ = (10⁵ . 4) / (2 . 10⁵) = 2 lít.",
  },
  {
    id: "q6",
    q: "Khi vẽ hai đường đẳng nhiệt của cùng một lượng khí lí tưởng trên hệ trục toạ độ (p, V), đường nào nằm cao hơn (xa gốc toạ độ hơn) sẽ tương ứng với:",
    options: [
      "Nhiệt độ thấp hơn.",
      "Nhiệt độ cao hơn.",
      "Khối lượng khí nhỏ hơn.",
      "Áp suất trung bình nhỏ hơn.",
    ],
    answer: 1,
    explain: "Với cùng một thể tích V, ở nhiệt độ cao hơn T₂ > T₁ thì p₂ = (n R T₂)/V > p₁ nên đường đẳng nhiệt ở nhiệt độ cao hơn nằm phía trên.",
  },
  {
    id: "q7",
    q: "Một bong bóng khí nổi từ đáy hồ nước sâu lên mặt nước (giả sử nhiệt độ nước ở mọi độ sâu là không đổi). Khi nổi lên đến mặt nước thì thể tích bong bóng khí sẽ:",
    options: [
      "Giảm dần do áp suất tăng.",
      "Tăng dần do áp suất nước giảm khi càng lên gần mặt nước.",
      "Không đổi.",
      "Biến mất ngay lập tức.",
    ],
    answer: 1,
    explain:
      "Khi nổi lên, độ sâu giảm => áp suất chất lỏng p giảm => theo định luật Boyle (T không đổi), thể tích bong bóng V tăng dần.",
  },
  {
    id: "q8",
    q: "Dưới áp suất 10⁵ Pa một lượng khí có thể tích là 10 lít. Nếu tăng áp suất thêm 0,5.10⁵ Pa ở nhiệt độ không đổi thì thể tích của lượng khí này là:",
    options: ["6,67 lít", "5,00 lít", "7,50 lít", "20,0 lít"],
    answer: 0,
    explain:
      "Áp suất mới: p₂ = p₁ + Δp = 10⁵ + 0,5.10⁵ = 1,5.10⁵ Pa. V₂ = (p₁ . V₁) / p₂ = (10⁵ . 10) / (1,5 . 10⁵) = 10 / 1,5 ≈ 6,67 lít.",
  },
  {
    id: "q9",
    q: "Đồ thị biểu diễn quá trình đẳng nhiệt trong hệ toạ độ (p, T) là:",
    options: [
      "Đoạn thẳng vuông góc với trục nhiệt độ T.",
      "Đoạn thẳng vuông góc với trục áp suất p.",
      "Đường thẳng xiên góc đi qua gốc toạ độ O.",
      "Đường cong hypebol.",
    ],
    answer: 0,
    explain: "Trong hệ toạ độ (p, T), vì T không đổi (T = const) nên đường biểu diễn là một đoạn thẳng vuông góc với trục OT.",
  },
  {
    id: "q10",
    q: "Một xilanh chứa 150 cm³ khí ở áp suất 2.10⁵ Pa. Pittông nén khí đẳng nhiệt làm thể tích giảm bớt 50 cm³. Áp suất của khí sau khi nén là:",
    options: ["3,0 . 10⁵ Pa", "6,0 . 10⁵ Pa", "1,5 . 10⁵ Pa", "4,0 . 10⁵ Pa"],
    answer: 0,
    explain:
      "Thể tích mới: V₂ = 150 - 50 = 100 cm³. Áp suất: p₂ = (p₁ . V₁) / V₂ = (2.10⁵ . 150) / 100 = 3.10⁵ Pa.",
  },
];

export default questions;
