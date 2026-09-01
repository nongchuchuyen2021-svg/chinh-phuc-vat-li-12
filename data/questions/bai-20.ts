import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Một đoạn dây dẫn dài 20 cm mang dòng điện I = 5 A đặt trong từ trường đều B = 0,1 T. Góc giữa đoạn dây và đường sức từ là 30°. Lực từ tác dụng lên đoạn dây có độ lớn là:",
    options: ["0,05 N", "0,10 N", "0,087 N", "0,20 N"],
    answer: 0,
    explain: "F = B . I . L . sin(30°) = 0,1 . 5 . 0,2 . 0,5 = 0,05 N.",
  },
  {
    id: "q2",
    q: "Một khung dây hình tròn bán kính r = 10 cm gồm 100 vòng dây đặt trong từ trường đều B = 0,2 T sao cho mặt phẳng khung vuông góc với đường sức từ. Từ thông qua khung dây này là: (lấy π = 3,14)",
    options: ["0,628 Wb", "6,28 Wb", "0,0628 Wb", "0,314 Wb"],
    answer: 0,
    explain:
      "S = π . r² = 3,14 . 0,1² = 0,0314 m². Vì vuông góc mặt phẳng khung nên α = 0°. Φ = N . B . S = 100 . 0,2 . 0,0314 = 0,628 Wb.",
  },
  {
    id: "q3",
    q: "Trong thời gian 0,02 s, từ thông qua một mạch kín giảm đều từ 0,08 Wb về 0,02 Wb. Suất điện động cảm ứng xuất hiện trong mạch là:",
    options: ["3 V", "0,3 V", "5 V", "1,5 V"],
    answer: 0,
    explain: "|e_c| = |ΔΦ / Δt| = |(0,02 - 0,08) / 0,02| = 0,06 / 0,02 = 3 V.",
  },
  {
    id: "q4",
    q: "Một máy phát điện xoay chiều 1 pha có roto quay với tốc độ 600 vòng/phút phát ra dòng điện có tần số 50 Hz. Số cặp cực từ của roto máy phát điện này là:",
    options: ["5 cặp cực", "4 cặp cực", "6 cặp cực", "10 cặp cực"],
    answer: 0,
    explain: "Ta có f = (n . p) / 60 => p = (60 . f) / n = (60 . 50) / 600 = 3000 / 600 = 5 cặp cực.",
  },
  {
    id: "q5",
    q: "Một máy biến áp lí tưởng có cuộn sơ cấp 1000 vòng được mắc vào điện áp xoay chiều 220 V. Để điện áp ở hai đầu cuộn thứ cấp là 12 V thì số vòng dây của cuộn thứ cấp phải bằng xấp xỉ:",
    options: ["55 vòng", "183 vòng", "110 vòng", "24 vòng"],
    answer: 0,
    explain: "N₂ = N₁ . (U₂ / U₁) = 1000 . (12 / 220) ≈ 54,54 vòng ≈ 55 vòng.",
  },
  {
    id: "q6",
    q: "Khi truyền tải một công suất điện P trên một đường dây nhất định, nếu tăng điện áp hiệu dụng ở đầu đường dây từ 10 kV lên 50 kV (tăng 5 lần) thì công suất hao phí do toả nhiệt trên đường dây sẽ:",
    options: ["Giảm đi 25 lần.", "Giảm đi 5 lần.", "Tăng lên 25 lần.", "Giảm đi 50 lần."],
    answer: 0,
    explain: "Vì ΔP tỉ lệ nghịch với U², khi U tăng 5 lần thì ΔP giảm 5² = 25 lần.",
  },
  {
    id: "q7",
    q: "Một sóng vô tuyến có bước sóng trong chân không λ = 25 m. Tần số của sóng vô tuyến này là:",
    options: ["12 MHz", "25 MHz", "1,2 MHz", "120 MHz"],
    answer: 0,
    explain: "f = c / λ = (3 . 10⁸) / 25 = 1,2 . 10⁷ Hz = 12 MHz.",
  },
  {
    id: "q8",
    q: "Một đoạn dây dẫn mang dòng điện I = 2 A nằm cân bằng lơ lửng trong không khí nằm ngang trong một từ trường đều B nằm ngang vuông góc với đoạn dây. Biết khối lượng trên một đơn vị chiều dài của dây là m/L = 0,04 kg/m, g = 10 m/s². Độ lớn cảm ứng từ B là:",
    options: ["0,2 T", "0,4 T", "0,1 T", "0,8 T"],
    answer: 0,
    explain:
      "Để dây cân bằng lơ lửng, lực từ hướng lên cân bằng với trọng lực hướng xuống: F_từ = P => B . I . L = m . g => B = (m/L . g) / I = (0,04 . 10) / 2 = 0,4 / 2 = 0,2 T.",
  },
  {
    id: "q9",
    q: "Biểu thức của suất điện động xoay chiều là e = 100√2 . cos(100πt - π/3) (V). Pha ban đầu và giá trị hiệu dụng của suất điện động là:",
    options: [
      "φ = -π/3 rad và E = 100 V.",
      "φ = π/3 rad và E = 100√2 V.",
      "φ = -π/3 rad và E = 100√2 V.",
      "φ = 100π rad và E = 100 V.",
    ],
    answer: 0,
    explain: "Pha ban đầu là φ = -π/3 rad, giá trị hiệu dụng E = E₀ / √2 = (100√2) / √2 = 100 V.",
  },
  {
    id: "q10",
    q: "Một cuộn cảm có độ tự cảm L = 0,2 H. Khi cường độ dòng điện trong cuộn cảm giảm đều từ 4 A về 1 A trong thời gian 0,05 s thì độ lớn của suất điện động tự cảm xuất hiện trong cuộn cảm là:",
    options: ["12 V", "6 V", "24 V", "1,2 V"],
    answer: 0,
    explain: "|e_tc| = L . |Δi / Δt| = 0,2 . |(1 - 4) / 0,05| = 0,2 . (3 / 0,05) = 0,2 . 60 = 12 V.",
  },
];

export default questions;
