import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Phương trình trạng thái của một lượng khí lí tưởng xác định là:",
    options: [
      "(p . V) / T = hằng số",
      "(p . T) / V = hằng số",
      "(V . T) / p = hằng số",
      "p . V . T = hằng số",
    ],
    answer: 0,
    explain: "Phương trình trạng thái khí lí tưởng (phương trình Clapeyron) là (p . V) / T = hằng số.",
  },
  {
    id: "q2",
    q: "Phương trình Clapeyron - Mendeleev biểu diễn mối liên hệ giữa các đại lượng đối với khối khí có khối lượng m và khối lượng mol M là:",
    options: [
      "p . V = (m / M) . R . T",
      "p . V = (M / m) . R . T",
      "p . T = (m / M) . R . V",
      "p . V = m . M . R . T",
    ],
    answer: 0,
    explain: "Phương trình Clapeyron - Mendeleev chuẩn là p . V = n . R . T = (m / M) . R . T.",
  },
  {
    id: "q3",
    q: "Trong hệ SI, hằng số khí lí tưởng R có giá trị xấp xỉ bằng:",
    options: ["8,314 J/(mol.K)", "1,38 . 10⁻²³ J/K", "6,022 . 10²³ mol⁻¹", "9,81 m/s²"],
    answer: 0,
    explain: "Giá trị chuẩn của hằng số khí lí tưởng trong hệ SI là R ≈ 8,314 J/(mol.K).",
  },
  {
    id: "q4",
    q: "Một khối khí lí tưởng có thể tích 10 lít ở áp suất 1 atm và nhiệt độ 27°C. Khi nén khối khí đến áp suất 2 atm và nung nóng đến nhiệt độ 127°C thì thể tích của khối khí lúc này là:",
    options: ["6,67 lít", "7,50 lít", "5,00 lít", "3,33 lít"],
    answer: 0,
    explain:
      "T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K. Ta có: (p₁ . V₁) / T₁ = (p₂ . V₂) / T₂ => V₂ = (p₁ . V₁ . T₂) / (p₂ . T₁) = (1 . 10 . 400) / (2 . 300) = 4000 / 600 ≈ 6,67 lít.",
  },
  {
    id: "q5",
    q: "Hằng số Boltzmann k liên hệ với hằng số khí lí tưởng R và số Avogadro N_A qua hệ thức:",
    options: ["k = R / N_A", "k = R . N_A", "k = N_A / R", "k = R² / N_A"],
    answer: 0,
    explain: "Hằng số Boltzmann là hằng số khí tính cho 1 phân tử: k = R / N_A ≈ 1,38 . 10⁻²³ J/K.",
  },
  {
    id: "q6",
    q: "Tính khối lượng khí ôxi (O₂, M = 32 g/mol) chứa trong một bình kín có dung tích 10 lít ở áp suất 8,314.10⁵ Pa và nhiệt độ 27°C. Cho R = 8,314 J/(mol.K).",
    options: ["106,7 g", "32,0 g", "64,0 g", "16,0 g"],
    answer: 0,
    explain:
      "V = 10 L = 10⁻² m³; T = 300 K. Số mol n = (p . V) / (R . T) = (8,314.10⁵ . 10⁻²) / (8,314 . 300) = 8314 / 2494,2 = 10/3 mol ≈ 3,333 mol. Khối lượng m = n . M = (10/3) . 32 = 320/3 ≈ 106,67 g.",
  },
  {
    id: "q7",
    q: "Biểu thức nào sau đây biểu diễn áp suất chất khí theo mật độ phân tử n₀ và nhiệt độ tuyệt đối T?",
    options: ["p = n₀ . k . T", "p = n₀ . R . T", "p = k . T / n₀", "p = n₀ / (k . T)"],
    answer: 0,
    explain: "Từ p.V = N.k.T => p = (N/V).k.T = n₀ . k . T (với n₀ là mật độ phân tử khí).",
  },
  {
    id: "q8",
    q: "Trong một chu trình biến đổi khép kín của một lượng khí lí tưởng, nếu khối khí nhận công và toả nhiệt thì nội năng của khối khí sau cả chu trình sẽ:",
    options: ["Không thay đổi (ΔU = 0).", "Tăng lên.", "Giảm đi.", "Bằng vô cùng."],
    answer: 0,
    explain:
      "Vì trạng thái cuối trùng với trạng thái đầu của chu trình, nhiệt độ và các thông số trở về giá trị ban đầu nên nội năng của khối khí không thay đổi (ΔU = 0).",
  },
  {
    id: "q9",
    q: "Một bình chứa khí có thể tích 5 lít ở áp suất 2 atm và nhiệt độ 20°C. Mở van cho một lượng khí thoát ra ngoài, áp suất trong bình còn lại 1 atm và nhiệt độ là 15°C. Tỉ số phần trăm khối lượng khí còn lại trong bình so với ban đầu là:",
    options: ["50,9%", "48,5%", "50,0%", "25,0%"],
    answer: 0,
    explain:
      "m = (p . V . M) / (R . T). Tỉ số m₂ / m₁ = (p₂ / p₁) . (T₁ / T₂) = (1 / 2) . (293,15 / 288,15) ≈ 0,5087 = 50,9%.",
  },
  {
    id: "q10",
    q: "Ở độ cao 10 km so với mực nước biển, áp suất khí quyển giảm xuống còn khoảng 0,3 atm và nhiệt độ là -50°C. Thể tích của 1 mol không khí ở điều kiện này xấp xỉ bằng:",
    options: ["61,0 lít", "22,4 lít", "74,7 lít", "45,2 lít"],
    answer: 0,
    explain:
      "T = -50 + 273 = 223 K; p = 0,3 . 1,013.10⁵ = 30.390 Pa. V = (1 . 8,314 . 223) / 30390 ≈ 0,061 m³ = 61 lít.",
  },
];

export default questions;
