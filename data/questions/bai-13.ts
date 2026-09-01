import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Một khối khí lí tưởng có thể tích 4 lít ở áp suất 2 atm và nhiệt độ 27°C. Khi dãn nở đẳng nhiệt đến thể tích 8 lít thì áp suất của khối khí là:",
    options: ["1 atm", "4 atm", "0,5 atm", "2 atm"],
    answer: 0,
    explain: "Quá trình đẳng nhiệt: p₂ = (p₁ . V₁) / V₂ = (2 . 4) / 8 = 1 atm.",
  },
  {
    id: "q2",
    q: "Một bình kín dung tích 20 lít chứa 0,5 mol khí lí tưởng ở nhiệt độ 27°C. Cho R = 8,314 J/(mol.K). Áp suất của khí trong bình là:",
    options: ["6,24 . 10⁴ Pa", "1,25 . 10⁵ Pa", "3,12 . 10⁴ Pa", "6,24 . 10⁵ Pa"],
    answer: 0,
    explain:
      "T = 300 K; V = 0,02 m³. p = (n . R . T) / V = (0,5 . 8,314 . 300) / 0,02 = 1247,1 / 0,02 = 62.355 Pa ≈ 6,24 . 10⁴ Pa.",
  },
  {
    id: "q3",
    q: "Một khối khí lí tưởng thực hiện một chu trình hình chữ nhật trên hệ toạ độ (p, V): từ (1 atm, 2 L) dãn đẳng áp đến (1 atm, 6 L), rồi tăng đẳng tích lên (3 atm, 6 L), rồi nén đẳng áp về (3 atm, 2 L), rồi làm lạnh đẳng tích về trạng thái ban đầu. Công mà khối khí sinh ra trong một chu trình này là: (lấy 1 atm = 10⁵ Pa)",
    options: ["800 J", "400 J", "1200 J", "600 J"],
    answer: 0,
    explain:
      "Công sinh ra bằng diện tích hình chữ nhật trên hệ toạ độ (p, V): A' = Δp . ΔV = (3.10⁵ - 1.10⁵) . (6 - 2).10⁻³ = 2.10⁵ . 4.10⁻³ = 800 J.",
  },
  {
    id: "q4",
    q: "Một ống thuỷ tinh nhỏ, tiết diện đều, một đầu kín, một đầu hở. Trong ống có giam một cột không khí nhờ một giọt thuỷ ngân dài h = 15 cm. Khi ống đặt nằm ngang thì chiều dài cột khí là L₁ = 30 cm. Khi dựng ống thẳng đứng, miệng ống ở trên thì chiều dài cột khí là L₂ = 25 cm. Coi nhiệt độ không đổi. Áp suất khí quyển p₀ là:",
    options: ["75 cmHg", "76 cmHg", "70 cmHg", "60 cmHg"],
    answer: 0,
    explain:
      "- Khi nằm ngang: p₁ = p₀, V₁ = S . L₁ = 30 S.\n- Khi dựng đứng miệng ở trên: p₂ = p₀ + h = p₀ + 15, V₂ = S . L₂ = 25 S.\n- Áp dụng định luật Boyle: p₁ . V₁ = p₂ . V₂ => p₀ . 30 = (p₀ + 15) . 25 => 30 p₀ = 25 p₀ + 375 => 5 p₀ = 375 => p₀ = 75 cmHg.",
  },
  {
    id: "q5",
    q: "Một khối khí bị nén từ thể tích 10 lít xuống 4 lít, đồng thời nhiệt độ tăng từ 27°C lên 127°C. Biết áp suất ban đầu là 1 atm. Áp suất sau khi nén là:",
    options: ["3,33 atm", "2,50 atm", "1,88 atm", "4,17 atm"],
    answer: 0,
    explain:
      "T₁ = 300 K; T₂ = 400 K. p₂ = (p₁ . V₁ . T₂) / (V₂ . T₁) = (1 . 10 . 400) / (4 . 300) = 4000 / 1200 ≈ 3,33 atm.",
  },
  {
    id: "q6",
    q: "Một bình kín chứa khí ở nhiệt độ 27°C và áp suất 2 atm. Khi nung nóng bình để nhiệt độ tăng thêm 50°C thì áp suất trong bình tăng thêm một lượng bằng:",
    options: ["0,33 atm", "0,50 atm", "1,00 atm", "0,25 atm"],
    answer: 0,
    explain:
      "T₁ = 300 K; T₂ = 300 + 50 = 350 K. p₂ = (p₁ . T₂) / T₁ = (2 . 350) / 300 = 700 / 300 = 7/3 atm ≈ 2,33 atm. Độ tăng áp suất Δp = 2,33 - 2 = 0,33 atm.",
  },
  {
    id: "q7",
    q: "Khối lượng riêng của không khí ở điều kiện chuẩn (p₀ = 1,013.10⁵ Pa, T₀ = 273,15 K) là D₀ = 1,29 kg/m³. Khối lượng riêng của không khí ở nhiệt độ 27°C và áp suất 2.10⁵ Pa là:",
    options: ["2,32 kg/m³", "1,42 kg/m³", "0,71 kg/m³", "3,15 kg/m³"],
    answer: 0,
    explain:
      "Khối lượng riêng D = m/V = (p . M) / (R . T). Tỉ số D₂ / D₀ = (p₂ / p₀) . (T₀ / T₂) = (2.10⁵ / 1,013.10⁵) . (273,15 / 300,15) = 1,974 . 0,910 = 1,796. Khối lượng riêng D₂ = 1,29 . 1,796 ≈ 2,32 kg/m³.",
  },
  {
    id: "q8",
    q: "Một căn phòng có kích thước 4 m x 5 m x 3 m. Ban đầu không khí trong phòng ở nhiệt độ 17°C và áp suất 1 atm. Khi nhiệt độ trong phòng tăng lên 27°C ở áp suất không đổi, khối lượng không khí đã thoát ra khỏi phòng là: (cho khối lượng mol không khí M = 29 g/mol, R = 8,314 J/(mol.K))",
    options: ["2,41 kg", "4,82 kg", "1,20 kg", "7,23 kg"],
    answer: 0,
    explain:
      "Thể tích phòng V = 60 m³. Ban đầu n₁ = (p . V) / (R . T₁) = (1,013.10⁵ . 60) / (8,314 . 290) ≈ 2521,2 mol. Khi lên 27°C (300 K): n₂ = (1,013.10⁵ . 60) / (8,314 . 300) ≈ 2437,2 mol. Lượng mol thoát ra Δn = n₁ - n₂ = 84 mol. Khối lượng thoát ra: Δm = 84 . 0,029 ≈ 2,436 kg ≈ 2,41 kg.",
  },
  {
    id: "q9",
    q: "Trên đồ thị (V, T), một chu trình gồm: (1) -> (2) là đoạn thẳng đi qua gốc toạ độ hướng lên trên; (2) -> (3) là đoạn thẳng song song trục OT; (3) -> (1) là đoạn thẳng song song trục OV. Ba quá trình này lần lượt là:",
    options: [
      "Đẳng áp, Đẳng tích, Đẳng nhiệt.",
      "Đẳng áp, Đẳng nhiệt, Đẳng tích.",
      "Đẳng nhiệt, Đẳng áp, Đẳng tích.",
      "Đẳng tích, Đẳng áp, Đẳng nhiệt.",
    ],
    answer: 0,
    explain:
      "Trên hệ (V, T): (1)->(2) đường qua gốc toạ độ là đẳng áp; (2)->(3) song song OT (V = const) là đẳng tích; (3)->(1) song song OV (T = const) là đẳng nhiệt.",
  },
  {
    id: "q10",
    q: "Một bọt khí có thể tích V₁ ở đáy một hồ nước sâu 15 m nổi lên mặt nước. Coi nhiệt độ nước không đổi, áp suất khí quyển p₀ = 10⁵ Pa, khối lượng riêng của nước ρ = 1000 kg/m³, g = 10 m/s². Thể tích của bọt khí khi vừa lên tới mặt nước tăng lên gấp bao nhiêu lần thể tích ban đầu?",
    options: ["2,5 lần", "1,5 lần", "3,5 lần", "4,0 lần"],
    answer: 0,
    explain:
      "Áp suất ở đáy hồ: p₁ = p₀ + ρ.g.h = 10⁵ + 1000 . 10 . 15 = 10⁵ + 1,5.10⁵ = 2,5.10⁵ Pa. Áp suất tại mặt nước: p₂ = p₀ = 10⁵ Pa. Quá trình đẳng nhiệt: V₂ / V₁ = p₁ / p₂ = 2,5.10⁵ / 10⁵ = 2,5 lần.",
  },
];

export default questions;
