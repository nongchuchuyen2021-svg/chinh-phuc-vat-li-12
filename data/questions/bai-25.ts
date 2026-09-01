import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Trong phản ứng hạt nhân: ^9_4Be + ^1_1p -> ^4_2He + X. Hạt nhân X là:",
    options: ["^6_3Li", "^6_2He", "^7_3Li", "^6_4Be"],
    answer: 0,
    explain:
      "Bảo toàn số khối A: 9 + 1 = 4 + A_X => A_X = 6. Bảo toàn điện tích Z: 4 + 1 = 2 + Z_X => Z_X = 3. Vậy X là hạt nhân Liti ^6_3Li.",
  },
  {
    id: "q2",
    q: "Hạt nhân ^235_92U có năng lượng liên kết là 1786 MeV. Năng lượng liên kết riêng của hạt nhân này là:",
    options: ["7,60 MeV/nucleon", "8,80 MeV/nucleon", "19,4 MeV/nucleon", "3,80 MeV/nucleon"],
    answer: 0,
    explain: "W_lkr = W_lk / A = 1786 / 235 ≈ 7,60 MeV/nucleon.",
  },
  {
    id: "q3",
    q: "Chất phóng xạ có chu kì bán rã T = 4 ngày. Ban đầu có 20 g chất phóng xạ. Sau 12 ngày, khối lượng chất phóng xạ ĐÃ BỊ PHÂN RÃ là:",
    options: ["17,5 g", "2,5 g", "10,0 g", "15,0 g"],
    answer: 0,
    explain:
      "Số chu kì: t/T = 12 / 4 = 3 chu kì. Khối lượng còn lại: m = 20 . 2^(-3) = 2,5 g. Khối lượng đã bị phân rã: Δm = 20 - 2,5 = 17,5 g.",
  },
  {
    id: "q4",
    q: "Cho phản ứng hạt nhân: ^3_1T + ^2_1D -> ^4_2He + ^1_0n. Biết độ hụt khối của T, D và He lần lượt là Δm_T = 0,0092 u; Δm_D = 0,0024 u; Δm_He = 0,0305 u. Lấy 1 u = 931,5 MeV/c². Năng lượng toả ra của phản ứng là:",
    options: ["18,07 MeV", "17,60 MeV", "28,41 MeV", "9,31 MeV"],
    answer: 1,
    explain:
      "Q = (Δm_He - Δm_T - Δm_D) . c² = (0,0305 - 0,0092 - 0,0024) . 931,5 = 0,0189 . 931,5 ≈ 17,60 MeV — khớp với giá trị toả năng lượng chuẩn của phản ứng nhiệt hạch D-T đã nêu ở Bài 22, Bài 24 (²H + ³H → ⁴He + n + 17,6 MeV).",
  },
  {
    id: "q5",
    q: "Đồng vị phóng xạ ^24_11Na phân rã beta trừ (β⁻) với chu kì bán rã T = 15 giờ tạo ra hạt nhân con Magie (^24_12Mg). Sau thời gian 30 giờ, tỉ số giữa số hạt nhân Magie sinh ra và số hạt nhân Natri còn lại trong mẫu là:",
    options: ["3", "1/3", "4", "7"],
    answer: 0,
    explain:
      "Sau t = 30 h (2T), số hạt Na còn lại: N = N₀ / 4. Số hạt Mg sinh ra bằng số hạt Na bị phân rã: N_Mg = ΔN = N₀ - N₀/4 = 3 N₀/4. Tỉ số N_Mg / N_Na = (3 N₀/4) / (N₀/4) = 3.",
  },
  {
    id: "q6",
    q: "Hạt proton có động năng K_p = 5,45 MeV bắn vào hạt nhân Beri (^9_4Be) đứng yên gây ra phản ứng: ^1_1p + ^9_4Be -> ^4_2He + ^6_3Li. Biết phản ứng toả năng lượng Q = 2,125 MeV. Tổng động năng của các hạt sinh ra sau phản ứng là:",
    options: ["7,575 MeV", "3,325 MeV", "2,125 MeV", "5,450 MeV"],
    answer: 0,
    explain:
      "Định luật bảo toàn năng lượng toàn phần: K_sau = K_trước + Q = 5,45 + 2,125 = 7,575 MeV.",
  },
  {
    id: "q7",
    q: "Một nhà máy điện hạt nhân có công suất phát điện 600 MW, hiệu suất 20%. Nếu mỗi phân hạch Urani-235 toả ra 200 MeV (3,2.10⁻¹¹ J) thì trong 1 giây số hạt Urani-235 bị phân hạch là:",
    options: ["9,375 . 10¹⁹ hạt", "1,875 . 10¹⁹ hạt", "3,750 . 10¹⁹ hạt", "4,688 . 10¹⁹ hạt"],
    answer: 0,
    explain:
      "Công suất nhiệt toàn phần: P_tp = 600 / 0,2 = 3000 MW = 3.10⁹ W. Số phân hạch mỗi giây: N = P_tp / E₁ = (3.10⁹) / (3,2.10⁻¹¹) = 9,375 . 10¹⁹ hạt/giây.",
  },
  {
    id: "q8",
    q: "Số hạt neutron có trong 11,9 gam Urani ^238_92U là: (cho N_A = 6,022.10²³ mol⁻¹)",
    options: ["4,396 . 10²⁴ hạt", "2,770 . 10²⁴ hạt", "7,166 . 10²⁴ hạt", "1,460 . 10²³ hạt"],
    answer: 0,
    explain:
      "Số mol Urani: n = 11,9 / 238 = 0,05 mol. Số hạt nhân Urani: N_U = 0,05 . 6,022.10²³ = 3,011 . 10²² hạt. Mỗi hạt chứa N_n = 238 - 92 = 146 neutron. Tổng số neutron: N_tổng = 146 . 3,011.10²² ≈ 4,396 . 10²⁴ hạt.",
  },
  {
    id: "q9",
    q: "Một chất phóng xạ có độ phóng xạ ban đầu là H₀. Sau 3 chu kì bán rã (t = 3T), độ phóng xạ của mẫu chất này giảm đi một lượng bằng:",
    options: ["87,5% H₀", "12,5% H₀", "75,0% H₀", "50,0% H₀"],
    answer: 0,
    explain:
      "Độ phóng xạ còn lại: H = H₀ . 2^(-3) = H₀ / 8 = 12,5% H₀. Lượng giảm đi: ΔH = H₀ - 12,5% H₀ = 87,5% H₀.",
  },
  {
    id: "q10",
    q: "Hạt nhân mẹ X đứng yên tự phát phân rã alpha tạo hạt nhân con Y: X -> α + Y. Tỉ số động năng của hạt alpha so với hạt nhân con Y (K_α / K_Y) bằng:",
    options: ["m_Y / m_α", "m_α / m_Y", "(m_Y / m_α)²", "1"],
    answer: 0,
    explain:
      "Bảo toàn động lượng: 0 = p⃗_α + p⃗_Y => p_α = p_Y => p_α² = p_Y² => 2 m_α K_α = 2 m_Y K_Y => K_α / K_Y = m_Y / m_α (hạt nhẹ hơn bay nhanh hơn và nhận phần lớn động năng).",
  },
];

export default questions;
