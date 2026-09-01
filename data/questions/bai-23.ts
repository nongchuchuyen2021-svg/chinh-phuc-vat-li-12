import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Hiện tượng phóng xạ là hiện tượng:",
    options: [
      "Một hạt nhân không bền vững tự phát phân rã, phát ra các tia phóng xạ và biến đổi thành hạt nhân khác.",
      "Hai hạt nhân nhẹ kết hợp lại với nhau ở nhiệt độ rất cao.",
      "Một hạt nhân nặng hấp thụ một neutron chậm rồi vỡ thành hai mảnh nhẹ hơn.",
      "Các electron bị bứt ra khỏi bề mặt kim loại khi bị chiếu sáng thích hợp.",
    ],
    answer: 0,
    explain: "Hiện tượng phóng xạ là quá trình phân rã hạt nhân tự phát của hạt nhân không bền vững.",
  },
  {
    id: "q2",
    q: "Tia alpha (α) có bản chất là:",
    options: [
      "Dòng các hạt nhân nguyên tử Heli (^4_2He).",
      "Dòng các hạt electron mang điện tích âm.",
      "Sóng điện từ có bước sóng cực ngắn.",
      "Dòng các hạt proton tự do.",
    ],
    answer: 0,
    explain: "Tia phóng xạ alpha (α) là dòng các hạt nhân Heli (^4_2He) mang điện tích +2e.",
  },
  {
    id: "q3",
    q: "Tia phóng xạ nào sau đây KHÔNG mang điện tích và KHÔNG bị lệch hướng trong điện trường và từ trường?",
    options: ["Tia gamma (γ)", "Tia alpha (α)", "Tia beta âm (β⁻)", "Tia beta dương (β⁺)"],
    answer: 0,
    explain: "Tia gamma (γ) là sóng điện từ (hạt photon không mang điện tích) nên không bị lệch trong điện trường và từ trường.",
  },
  {
    id: "q4",
    q: "Sắp xếp các tia phóng xạ theo thứ tự khả năng đâm xuyên TĂNG DẦN là:",
    options: ["Tia α < Tia β < Tia γ", "Tia γ < Tia β < Tia α", "Tia β < Tia α < Tia γ", "Tia α < Tia γ < Tia β"],
    answer: 0,
    explain:
      "Tia α đâm xuyên yếu nhất (chỉ đi được vài cm trong không khí), tiếp theo là tia β (đi được vài mét không khí), và tia γ đâm xuyên mạnh nhất (xuyên qua lớp chì dày).",
  },
  {
    id: "q5",
    q: "Chu kì bán rã T của một chất phóng xạ là khoảng thời gian sau đó:",
    options: [
      "Một nửa số hạt nhân của chất phóng xạ đó bị phân rã biến đổi thành hạt nhân khác.",
      "Toàn bộ chất phóng xạ bị phân rã hoàn toàn.",
      "Khối lượng chất phóng xạ tăng lên gấp đôi.",
      "Độ phóng xạ của chất tăng lên 2 lần.",
    ],
    answer: 0,
    explain: "Chu kì bán rã T là khoảng thời gian để số hạt nhân phóng xạ ban đầu giảm đi một nửa (50% bị phân rã).",
  },
  {
    id: "q6",
    q: "Một chất phóng xạ có chu kì bán rã T = 10 ngày. Ban đầu có khối lượng m₀ = 16 g. Sau thời gian 30 ngày, khối lượng chất phóng xạ còn lại là:",
    options: ["2 g", "4 g", "8 g", "1 g"],
    answer: 0,
    explain:
      "Số chu kì t/T = 30 / 10 = 3 chu kì. Khối lượng còn lại: m = m₀ . 2^(-t/T) = 16 . 2^(-3) = 16 / 8 = 2 g.",
  },
  {
    id: "q7",
    q: "Sau khoảng thời gian bằng 2 lần chu kì bán rã (t = 2T), tỉ lệ phần trăm số hạt nhân chất phóng xạ ĐÃ BỊ PHÂN RÃ là:",
    options: ["75%", "25%", "50%", "12,5%"],
    answer: 0,
    explain:
      "Số hạt còn lại là N = N₀ / 4 = 25% N₀. Vậy số hạt đã bị phân rã là ΔN = N₀ - N = 75% N₀.",
  },
  {
    id: "q8",
    q: "Hằng số phóng xạ λ liên hệ với chu kì bán rã T qua công thức:",
    options: ["λ = ln(2) / T ≈ 0,693 / T", "λ = T / ln(2)", "λ = T . ln(2)", "λ = 1 / T²"],
    answer: 0,
    explain: "Hằng số phóng xạ λ = ln(2) / T ≈ 0,69315 / T.",
  },
  {
    id: "q9",
    q: "Đơn vị đo độ phóng xạ trong hệ SI là Becquerel (Bq). 1 Bq tương ứng với:",
    options: ["1 phân rã phóng xạ trong 1 giây.", "1 phân rã phóng xạ trong 1 phút.", "3,7 . 10¹⁰ phân rã trong 1 giây.", "1 phân rã trong 1 giờ."],
    answer: 0,
    explain: "1 Bq (Becquerel) = 1 phân rã/giây (1 s⁻¹).",
  },
  {
    id: "q10",
    q: "Trong quá trình phân rã phóng xạ alpha: ^A_Z X -> ^4_2He + ^A'_Z' Y. Hạt nhân con Y có số proton và số khối là:",
    options: [
      "Z' = Z - 2 và A' = A - 4",
      "Z' = Z + 1 và A' = A",
      "Z' = Z - 1 và A' = A",
      "Z' = Z và A' = A - 4",
    ],
    answer: 0,
    explain:
      "Bảo toàn số khối và điện tích: A = 4 + A' => A' = A - 4; Z = 2 + Z' => Z' = Z - 2 (hạt nhân con lùi 2 ô trong bảng tuần hoàn so với hạt nhân mẹ).",
  },
];

export default questions;
