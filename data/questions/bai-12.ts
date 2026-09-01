import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Biểu thức nào sau đây biểu diễn mối liên hệ giữa áp suất p, mật độ phân tử μ và động năng tịnh tiến trung bình E_d của phân tử khí?",
    options: ["p = (2/3) . μ . E_d", "p = (1/3) . μ . E_d", "p = (3/2) . μ . E_d", "p = 2 . μ . E_d"],
    answer: 0,
    explain: "Từ p = 1/3 μ m v²_tb = 2/3 μ (1/2 m v²_tb) => p = (2/3) . μ . E_d.",
  },
  {
    id: "q2",
    q: "Động năng tịnh tiến trung bình E_d của một phân tử khí lí tưởng ở nhiệt độ tuyệt đối T được tính bằng công thức:",
    options: ["E_d = (3/2) . k . T", "E_d = (1/2) . k . T", "E_d = 3 . k . T", "E_d = (3/2) . R . T"],
    answer: 0,
    explain: "Động năng chuyển động nhiệt trung bình của một phân tử khí lí tưởng là E_d = (3/2) . k . T.",
  },
  {
    id: "q3",
    q: "Nếu nhiệt độ tuyệt đối của một lượng khí lí tưởng tăng lên 4 lần thì động năng tịnh tiến trung bình của các phân tử khí sẽ:",
    options: ["Tăng lên 4 lần.", "Tăng lên 2 lần.", "Tăng lên 16 lần.", "Không đổi."],
    answer: 0,
    explain: "Vì E_d tỉ lệ thuận bậc nhất với T (E_d = 3/2 k T) nên khi T tăng 4 lần thì E_d tăng 4 lần.",
  },
  {
    id: "q4",
    q: "Nếu nhiệt độ tuyệt đối của một chất khí tăng lên 4 lần thì tốc độ căn quân phương (căn bậc hai của trung bình bình phương tốc độ) của các phân tử khí sẽ:",
    options: ["Tăng lên 2 lần.", "Tăng lên 4 lần.", "Tăng lên 16 lần.", "Giảm 2 lần."],
    answer: 0,
    explain: "Vì v_rms = √(3 k T / m) tỉ lệ thuận với √T, khi T tăng 4 lần thì v_rms tăng √4 = 2 lần.",
  },
  {
    id: "q5",
    q: "Ở cùng một nhiệt độ T, so sánh động năng tịnh tiến trung bình của phân tử khí hiđrô (H₂) và phân tử khí ôxi (O₂):",
    options: [
      "Động năng trung bình của phân tử H₂ bằng động năng trung bình của phân tử O₂.",
      "Động năng trung bình của phân tử H₂ lớn hơn 16 lần so với O₂.",
      "Động năng trung bình của phân tử O₂ lớn hơn 16 lần so với H₂.",
      "Động năng trung bình của phân tử H₂ lớn hơn 4 lần so với O₂.",
    ],
    answer: 0,
    explain:
      "Động năng trung bình của một phân tử E_d = 3/2 k T chỉ phụ thuộc duy nhất vào nhiệt độ T, không phụ thuộc vào khối lượng hay loại khí.",
  },
  {
    id: "q6",
    q: "Ở cùng một nhiệt độ T, so sánh tốc độ căn quân phương của phân tử khí hiđrô (H₂, M=2 g/mol) và phân tử khí ôxi (O₂, M=32 g/mol):",
    options: [
      "Tốc độ của phân tử H₂ lớn gấp 4 lần tốc độ của phân tử O₂.",
      "Tốc độ của phân tử H₂ lớn gấp 16 lần tốc độ của phân tử O₂.",
      "Tốc độ của hai loại phân tử bằng nhau.",
      "Tốc độ của phân tử O₂ lớn gấp 4 lần tốc độ của phân tử H₂.",
    ],
    answer: 0,
    explain:
      "v_rms = √(3RT/M) => v(H₂) / v(O₂) = √(M(O₂) / M(H₂)) = √(32 / 2) = √16 = 4 lần.",
  },
  {
    id: "q7",
    q: "Hằng số Boltzmann k = 1,38.10⁻²³ J/K là đại lượng:",
    options: [
      "Đặc trưng cho năng lượng nhiệt trung bình tương ứng với 1 Kelvin nhiệt độ.",
      "Khối lượng của một nguyên tử hiđrô.",
      "Số phân tử trong 1 mol khí ở điều kiện chuẩn.",
      "Vận tốc chuyển động trung bình của phân tử khí.",
    ],
    answer: 0,
    explain: "Hằng số Boltzmann k là cầu nối giữa đại lượng vĩ mô (nhiệt độ T) và đại lượng vi mô (năng lượng phân tử E = 3/2 k T).",
  },
  {
    id: "q8",
    q: "Một bình kín chứa khí ở áp suất 10⁵ Pa. Biết động năng tịnh tiến trung bình của phân tử là 5.10⁻²¹ J. Mật độ phân tử khí trong bình là:",
    options: ["3,0 . 10²⁵ phân tử/m³", "1,5 . 10²⁵ phân tử/m³", "2,0 . 10²⁴ phân tử/m³", "4,5 . 10²⁵ phân tử/m³"],
    answer: 0,
    explain:
      "Ta có p = 2/3 μ E_d => μ = 3p / (2 E_d) = (3 . 10⁵) / (2 . 5.10⁻²¹) = 3.10⁵ / 10⁻²⁰ = 3.10²⁵ phân tử/m³.",
  },
  {
    id: "q9",
    q: "Khi nhiệt độ tuyệt đối T = 0 K (Độ không tuyệt đối), động năng chuyển động nhiệt trung bình của các phân tử khí bằng:",
    options: ["0 J", "1,38 . 10⁻²³ J", "Vô cùng lớn", "3/2 J"],
    answer: 0,
    explain: "Tại T = 0 K, E_d = 3/2 k (0) = 0 J (mọi chuyển động nhiệt dừng lại hoàn toàn).",
  },
  {
    id: "q10",
    q: "Tính tốc độ căn quân phương của các phân tử khí nitơ (N₂, M = 28 g/mol = 0,028 kg/mol) trong không khí ở nhiệt độ 27°C (300 K). Cho R = 8,314 J/(mol.K).",
    options: ["517 m/s", "340 m/s", "1000 m/s", "258 m/s"],
    answer: 0,
    explain:
      "v_rms = √(3 . R . T / M) = √(3 . 8,314 . 300 / 0,028) = √(7482,6 / 0,028) = √267235,7 ≈ 516,9 m/s ≈ 517 m/s.",
  },
];

export default questions;
