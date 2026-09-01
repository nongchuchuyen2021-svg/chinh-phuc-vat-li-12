import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Lực hạt nhân (lực liên kết các nucleon trong hạt nhân) có bản chất là:",
    options: [
      "Lực tương tác mạnh (chỉ có tác dụng trong phạm vi kích thước hạt nhân ~ 10⁻¹⁵ m).",
      "Lực hấp dẫn giữa các nucleon.",
      "Lực tương tác tĩnh điện Coulomb.",
      "Lực từ trường sinh ra bởi spin của proton.",
    ],
    answer: 0,
    explain: "Lực hạt nhân là lực tương tác mạnh, có bán kính tác dụng rất ngắn cỡ kích thước hạt nhân (10⁻¹⁵ m).",
  },
  {
    id: "q2",
    q: "Độ hụt khối Δm của một hạt nhân ^A_Z X có khối lượng m_hn được xác định bằng công thức:",
    options: [
      "Δm = Z . m_p + (A - Z) . m_n - m_hn",
      "Δm = m_hn - [Z . m_p + (A - Z) . m_n]",
      "Δm = Z . m_p + A . m_n - m_hn",
      "Δm = A . m_p - Z . m_n - m_hn",
    ],
    answer: 0,
    explain: "Độ hụt khối Δm = tổng khối lượng các nucleon riêng rẽ trừ đi khối lượng hạt nhân: Δm = Z.m_p + (A - Z).m_n - m_hn.",
  },
  {
    id: "q3",
    q: "Đại lượng nào sau đây đặc trưng cho mức độ BỀN VỮNG của một hạt nhân nguyên tử?",
    options: [
      "Năng lượng liên kết riêng (W_lkr = W_lk / A).",
      "Năng lượng liên kết toàn phần (W_lk).",
      "Độ hụt khối (Δm).",
      "Số khối (A).",
    ],
    answer: 0,
    explain: "Năng lượng liên kết riêng (năng lượng liên kết tính trên một nucleon) là thước đo chính xác nhất cho độ bền vững của hạt nhân.",
  },
  {
    id: "q4",
    q: "Các hạt nhân bền vững nhất trong tự nhiên thường có số khối A nằm trong khoảng:",
    options: ["50 < A < 70 (như hạt nhân Sắt ^56Fe).", "A < 10 (hạt nhân rất nhẹ).", "A > 200 (hạt nhân rất nặng).", "Mọi giá trị A đều bền vững như nhau."],
    answer: 0,
    explain: "Các hạt nhân trung bình có 50 < A < 70 có năng lượng liên kết riêng lớn nhất (khoảng 8,8 MeV/nucleon) nên bền vững nhất.",
  },
  {
    id: "q5",
    q: "Trong phản ứng hạt nhân, đại lượng nào sau đây KHÔNG ĐƯỢC BẢO TOÀN?",
    options: [
      "Tổng khối lượng nghỉ của các hạt.",
      "Điện tích (số hiệu nguyên tử Z).",
      "Số nucleon (số khối A).",
      "Động lượng toàn phần.",
    ],
    answer: 0,
    explain:
      "Trong phản ứng hạt nhân có sự chuyển hoá khối lượng thành năng lượng toả ra/thu vào nên tổng khối lượng nghỉ không được bảo toàn (m_trước ≠ m_sau).",
  },
  {
    id: "q6",
    q: "Cho phản ứng hạt nhân: ^1_0n + ^235_92U -> ^144_56Ba + ^89_36Kr + x . ^1_0n. Giá trị của hệ số x là:",
    options: ["3", "2", "1", "4"],
    answer: 0,
    explain: "Bảo toàn số khối A: 1 + 235 = 144 + 89 + x . 1 => 236 = 233 + x => x = 3 neutron.",
  },
  {
    id: "q7",
    q: "Biết khối lượng của hạt nhân Heli ^4_2He là 4,0015 u, khối lượng proton m_p = 1,0073 u, neutron m_n = 1,0087 u. Lấy 1 u = 931,5 MeV/c². Năng lượng liên kết của hạt nhân Heli là:",
    options: ["28,41 MeV", "7,10 MeV", "14,2 MeV", "56,8 MeV"],
    answer: 0,
    explain:
      "Δm = 2 . 1,0073 + 2 . 1,0087 - 4,0015 = 2,0146 + 2,0174 - 4,0015 = 4,0320 - 4,0015 = 0,0305 u. W_lk = 0,0305 . 931,5 ≈ 28,41 MeV.",
  },
  {
    id: "q8",
    q: "Cho năng lượng liên kết của hạt nhân Heli ^4_2He là 28,4 MeV. Năng lượng liên kết riêng của hạt nhân Heli là:",
    options: ["7,10 MeV/nucleon", "14,2 MeV/nucleon", "28,4 MeV/nucleon", "3,55 MeV/nucleon"],
    answer: 0,
    explain: "W_lkr = W_lk / A = 28,4 / 4 = 7,10 MeV/nucleon.",
  },
  {
    id: "q9",
    q: "Phản ứng hạt nhân: A + B -> C + D. Biết tổng khối lượng nghỉ trước phản ứng lớn hơn tổng khối lượng nghỉ sau phản ứng (m_A + m_B > m_C + m_D). Phản ứng này là:",
    options: [
      "Phản ứng toả năng lượng.",
      "Phản ứng thu năng lượng.",
      "Phản ứng không toả và không thu năng lượng.",
      "Phản ứng phân hạch tự phát.",
    ],
    answer: 0,
    explain: "Năng lượng phản ứng Q = (m_trước - m_sau).c². Vì m_trước > m_sau nên Q > 0, đây là phản ứng toả năng lượng.",
  },
  {
    id: "q10",
    q: "Cho phản ứng nhiệt hạch: ^2_1H + ^3_1H -> ^4_2He + ^1_0n + 17,6 MeV. Năng lượng toả ra khi tổng hợp hoàn toàn 1 mol khí Heli (^4_2He) từ phản ứng này là: (lấy N_A = 6,022.10²³ mol⁻¹)",
    options: ["1,70 . 10¹² J (1700 GJ)", "1,06 . 10²⁵ J", "2,82 . 10⁻¹¹ J", "6,02 . 10²³ J"],
    answer: 0,
    explain:
      "1 hạt He toả ra: E₁ = 17,6 MeV = 17,6 . 1,6.10⁻¹³ = 2,816 . 10⁻¹² J. 1 mol He có N_A hạt toả ra: E_mol = 2,816.10⁻¹² . 6,022.10²³ ≈ 1,70 . 10¹² J = 1700 GJ.",
  },
];

export default questions;
