import type { LessonTheory } from "@/lib/types";

const bai21: LessonTheory = {
  intro:
    "Trong bài học mở đầu Chương IV, chúng ta sẽ tìm hiểu **Cấu trúc hạt nhân nguyên tử** (proton, neutron, nucleon), kí hiệu hạt nhân `A_Z X`, kích thước hạt nhân `R = r₀ . A^(1/3)`, đơn vị khối lượng nguyên tử `u`, khái niệm **Đồng vị** và hệ thức tương đương khối lượng - năng lượng của Einstein `E = m.c²`.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "⚛️",
      heading: "1. Cấu tạo và Kí hiệu Hạt nhân",
      blocks: [
        {
          kind: "text",
          text: "Hạt nhân nguyên tử được cấu tạo từ các hạt vi mô gọi chung là **nucleon** gồm hai loại:",
        },
        {
          kind: "compare",
          left: {
            emoji: "🔴",
            title: "Proton (p)",
            items: [
              "Mang điện tích dương nguyên tố `q_p = +e = +1,602 . 10⁻¹⁹ C`.",
              "Khối lượng: `m_p ≈ 1,00728 u ≈ 1,6726 . 10⁻²⁷ kg`.",
              "Số proton trong hạt nhân là `Z` (nguyên tử số / số hiệu nguyên tử), bằng số electron trong nguyên tử trung hoà.",
            ],
          },
          right: {
            emoji: "⚪",
            title: "Neutron (n)",
            items: [
              "Không mang điện tích (`q_n = 0`).",
              "Khối lượng: `m_n ≈ 1,00866 u ≈ 1,6749 . 10⁻²⁷ kg` (hơi nặng hơn proton một chút).",
              "Số neutron trong hạt nhân là `N = A - Z`.",
            ],
          },
        },
        {
          kind: "example",
          title: "Kí hiệu hạt nhân nguyên tử",
          text: "**^A_Z X**\n- `X`: Kí hiệu hoá học của nguyên tố.\n- `Z`: Số proton (số hiệu nguyên tử).\n- `A = Z + N`: **Số khối** (tổng số nucleon trong hạt nhân).\n*Ví dụ: Hạt nhân Heli ^4_2He có Z = 2 proton, A = 4 nucleon, N = 4 - 2 = 2 neutron.*",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "📏",
      heading: "2. Kích thước & Khối lượng Hạt nhân",
      blocks: [
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "📐",
              title: "Bán kính hạt nhân",
              text: "Coi hạt nhân có dạng hình cầu, bán kính `R` phụ thuộc vào số khối `A` theo công thức:\n**R ≈ r₀ . A^(1/3)**  (với `r₀ ≈ 1,2 . 10⁻¹⁵ m = 1,2 fm`).",
            },
            {
              emoji: "⚖️",
              title: "Đơn vị khối lượng nguyên tử (u)",
              text: "`1 u` bằng **1/12 khối lượng của một nguyên tử đồng vị Carbon-12 (^12_6C)**:\n`1 u ≈ 1,66055 . 10⁻²⁷ kg ≈ 931,5 MeV/c²`.",
            },
          ],
        },
        {
          kind: "note",
          text: "**Đồng vị (Isotopes):** Là các hạt nhân có **cùng số proton Z** nhưng **khác số neutron N** (khác số khối A).\n*Ví dụ: Hiđrô có 3 đồng vị: Hiđrô thường (^1_1H - Proti), Đơteri (^2_1H hay D), Triti (^3_1H hay T).*",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "💡",
      heading: "3. Hệ thức Einstein về Năng lượng và Khối lượng",
      blocks: [
        {
          kind: "text",
          text: "Theo Thuyết tương đối hẹp của Albert Einstein (1905), một vật có khối lượng `m` luôn chứa một năng lượng nghỉ tương ứng:",
        },
        {
          kind: "example",
          title: "Hệ thức Einstein",
          text: "**E = m . c²**\nTrong đó `c ≈ 3 . 10⁸ m/s` là tốc độ ánh sáng trong chân không.\n- Năng lượng nghỉ của `1 u`: `E = 1 u . c² ≈ 931,5 MeV`.\n- Năng lượng toàn phần của vật chuyển động với vận tốc `v`: `E = m . c² = (m₀ . c²) / √(1 - v²/c²)` (với `m₀` là khối lượng nghỉ).",
        },
        {
          kind: "check",
          q: "Hạt nhân nguyên tử Urani ^238_92U có cấu tạo gồm bao nhiêu proton và bao nhiêu neutron?",
          options: [
            "92 proton và 146 neutron",
            "92 proton và 238 neutron",
            "146 proton và 92 neutron",
            "238 proton và 92 neutron",
          ],
          answer: 0,
          explain:
            "Số proton Z = 92; số nucleon A = 238. Số neutron N = A - Z = 238 - 92 = 146 neutron.",
        },
      ],
    },
  ],
  summary: [
    "Hạt nhân cấu tạo từ Z proton và N neutron (A = Z + N nucleon). Kí hiệu: ^A_Z X.",
    "Bán kính hạt nhân: R = r₀ . A^(1/3) (với r₀ ≈ 1,2 fm).",
    "Đơn vị u = 1/12 m(^12C) ≈ 1,66055.10⁻²⁷ kg ≈ 931,5 MeV/c².",
    "Đồng vị: Cùng Z, khác N (khác A).",
    "Hệ thức Einstein: E = m.c².",
  ],
};

export default bai21;
