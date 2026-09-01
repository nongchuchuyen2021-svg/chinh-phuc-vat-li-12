import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Hạt nhân nguyên tử được cấu tạo từ các hạt vi mô gọi chung là nucleon, bao gồm:",
    options: [
      "Proton và neutron.",
      "Proton và electron.",
      "Neutron và electron.",
      "Proton, neutron và positron.",
    ],
    answer: 0,
    explain: "Nucleon là tên gọi chung cho hai loại hạt cấu tạo nên hạt nhân nguyên tử: proton và neutron.",
  },
  {
    id: "q2",
    q: "Kí hiệu hạt nhân nguyên tử ^A_Z X cho biết:",
    options: [
      "Z là số proton (số hiệu nguyên tử), A là số khối (tổng số nucleon).",
      "A là số proton, Z là số neutron.",
      "Z là số neutron, A là số electron.",
      "A là khối lượng tính bằng gam, Z là điện tích.",
    ],
    answer: 0,
    explain: "Trong kí hiệu ^A_Z X, Z là số hiệu nguyên tử (số proton), A là số khối (tổng số proton và neutron).",
  },
  {
    id: "q3",
    q: "Đồng vị là các nguyên tử mà hạt nhân của chúng có:",
    options: [
      "Cùng số proton Z, nhưng khác số neutron N (khác số khối A).",
      "Cùng số neutron N, nhưng khác số proton Z.",
      "Cùng số khối A, nhưng khác số proton Z.",
      "Cùng khối lượng nhưng khác điện tích.",
    ],
    answer: 0,
    explain: "Đồng vị là những nguyên tử có cùng số proton Z (cùng vị trí trong bảng tuần hoàn) nhưng khác số neutron N.",
  },
  {
    id: "q4",
    q: "Đơn vị khối lượng nguyên tử u được định nghĩa bằng:",
    options: [
      "1/12 khối lượng của một nguyên tử đồng vị Carbon-12 (^12_6C).",
      "Khối lượng của một nguyên tử hiđrô (^1_1H).",
      "Khối lượng của một hạt proton tự do.",
      "Khối lượng của một hạt neutron tự do.",
    ],
    answer: 0,
    explain: "Đơn vị khối lượng nguyên tử u bằng đúng 1/12 khối lượng của một nguyên tử đồng vị Carbon-12.",
  },
  {
    id: "q5",
    q: "Hạt nhân Nhôm ^27_13Al có cấu tạo gồm:",
    options: [
      "13 proton và 14 neutron.",
      "13 proton và 27 neutron.",
      "27 proton và 13 neutron.",
      "14 proton và 13 neutron.",
    ],
    answer: 0,
    explain: "Số proton Z = 13; số khối A = 27 => số neutron N = 27 - 13 = 14 neutron.",
  },
  {
    id: "q6",
    q: "Theo thuyết tương đối của Einstein, năng lượng nghỉ E_0 của một vật có khối lượng nghỉ m_0 được tính bằng công thức:",
    options: ["E_0 = m_0 . c²", "E_0 = 1/2 m_0 . c²", "E_0 = m_0 . c", "E_0 = m_0 . v²"],
    answer: 0,
    explain: "Hệ thức tương đương khối lượng - năng lượng nghỉ của Einstein là E_0 = m_0 . c².",
  },
  {
    id: "q7",
    q: "1 đơn vị khối lượng nguyên tử u tương đương với mức năng lượng nghỉ xấp xỉ bằng:",
    options: ["931,5 MeV", "931,5 keV", "9,315 MeV", "931,5 J"],
    answer: 0,
    explain: "1 u . c² ≈ 931,5 MeV (hay 1 u ≈ 931,5 MeV/c²).",
  },
  {
    id: "q8",
    q: "Bán kính của hạt nhân nguyên tử phụ thuộc vào số khối A theo hệ thức gần đúng nào?",
    options: [
      "R ≈ 1,2 . 10⁻¹⁵ . A^(1/3) (m)",
      "R ≈ 1,2 . 10⁻¹⁵ . A^(1/2) (m)",
      "R ≈ 1,2 . 10⁻¹⁵ . A (m)",
      "R ≈ 1,2 . 10⁻¹⁰ . A^(1/3) (m)",
    ],
    answer: 0,
    explain: "Bán kính hạt nhân tỉ lệ thuận với căn bậc ba của số khối: R = r₀ . A^(1/3) với r₀ ≈ 1,2.10⁻¹⁵ m = 1,2 fm.",
  },
  {
    id: "q9",
    q: "So sánh kích thước của hạt nhân nguyên tử với kích thước của toàn bộ nguyên tử:",
    options: [
      "Kích thước hạt nhân nhỏ hơn kích thước nguyên tử khoảng 10.000 đến 100.000 lần.",
      "Kích thước hạt nhân lớn hơn kích thước nguyên tử.",
      "Kích thước hạt nhân bằng khoảng một nửa kích thước nguyên tử.",
      "Kích thước hạt nhân và nguyên tử bằng nhau.",
    ],
    answer: 0,
    explain:
      "Bán kính nguyên tử cỡ 10⁻¹⁰ m (Angstrom), trong khi bán kính hạt nhân cỡ 10⁻¹⁵ m (femtomet), nhỏ hơn khoảng 10⁴ đến 10⁵ lần.",
  },
  {
    id: "q10",
    q: "Số nucleon mang điện tích trong hạt nhân Chì ^206_82Pb là:",
    options: ["82", "124", "206", "288"],
    answer: 0,
    explain:
      "Trong hạt nhân, chỉ có proton là nucleon mang điện tích (neutron không mang điện). Vì vậy số nucleon mang điện chính là số proton Z = 82.",
  },
];

export default questions;
