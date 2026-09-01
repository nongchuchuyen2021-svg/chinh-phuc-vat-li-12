import type { LessonTheory } from "@/lib/types";

const bai011: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ kết hợp các định luật thực nghiệm để xây dựng **Phương trình trạng thái của khí lí tưởng** (Phương trình Clapeyron - Mendeleev), định luật Avogadro, hằng số khí lí tưởng `R` và hằng số Boltzmann `k`.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🌌",
      heading: "1. Phương trình trạng thái của khí lí tưởng",
      blocks: [
        {
          kind: "text",
          text: "Đối với một lượng khí lí tưởng xác định (khối lượng `m` không đổi), mối liên hệ giữa 3 thông số trạng thái `p, V, T` được biểu diễn qua **Phương trình Clapeyron**:",
        },
        {
          kind: "example",
          title: "Phương trình trạng thái khí lí tưởng",
          text: "**(p . V) / T = hằng số  <=>  (p₁ . V₁) / T₁ = (p₂ . V₂) / T₂**\n\nTừ phương trình này suy ra các trường hợp riêng:\n- **Đẳng nhiệt (T₁ = T₂):** `p₁ . V₁ = p₂ . V₂` (Định luật Boyle)\n- **Đẳng áp (p₁ = p₂):** `V₁ / T₁ = V₂ / T₂` (Định luật Charles)\n- **Đẳng tích (V₁ = V₂):** `p₁ / T₁ = p₂ / T₂` (Định luật Amontons)",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🧪",
      heading: "2. Phương trình Clapeyron – Mendeleev & Hằng số khí",
      blocks: [
        {
          kind: "text",
          text: "Khi xét đến lượng chất `n` (số mol) của khối khí, phương trình trạng thái được viết dưới dạng **Phương trình Clapeyron - Mendeleev**:",
        },
        {
          kind: "cards",
          tone: "photon",
          items: [
            {
              emoji: "📐",
              title: "Phương trình Clapeyron - Mendeleev",
              text: "**p . V = n . R . T = (m / M) . R . T**\nTrong đó:\n- `p`: Áp suất (`Pa`)\n- `V`: Thể tích (`m³`)\n- `n = m/M`: Số mol khí (`mol`)\n- `T`: Nhiệt độ tuyệt đối (`K`)",
            },
            {
              emoji: "⚙️",
              title: "Hằng số khí lí tưởng R",
              text: "**R ≈ 8,314 J/(mol.K)** (hoặc `0,082 atm.L/(mol.K)`).\nSố phân tử: `N = n . N_A` (với `N_A ≈ 6,022 . 10²³ mol⁻¹`).",
            },
          ],
        },
        {
          kind: "note",
          text: "**Hằng số Boltzmann (k):**\n`k = R / N_A ≈ 1,38 . 10⁻²³ J/K`\nPhương trình trạng thái có thể viết theo số hạt phân tử `N`:\n**p . V = N . k . T**  hay  **p = n_0 . k . T** (với `n_0 = N/V` là mật độ phân tử).",
        },
        {
          kind: "check",
          q: "Tính thể tích của 1 mol khí lí tưởng ở điều kiện tiêu chuẩn (p = 1 atm = 1,013.10⁵ Pa, T = 273,15 K). Cho R = 8,314 J/(mol.K).",
          options: ["22,4 lít (0,0224 m³)", "24,79 lít", "1,0 lít", "2,24 lít"],
          answer: 0,
          explain:
            "V = (n . R . T) / p = (1 . 8,314 . 273,15) / 1,013.10⁵ ≈ 0,0224 m³ = 22,4 lít.",
        },
      ],
    },
  ],
  summary: [
    "Phương trình trạng thái: (p1.V1)/T1 = (p2.V2)/T2.",
    "Phương trình Clapeyron - Mendeleev: p.V = n.R.T = (m/M).R.T.",
    "Hằng số khí lí tưởng: R = 8,314 J/(mol.K).",
    "Hằng số Boltzmann: k = R/N_A ≈ 1,38.10⁻²³ J/K => p = n_0.k.T.",
  ],
};

export default bai011;
