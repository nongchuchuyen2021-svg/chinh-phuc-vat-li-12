import type { LessonTheory } from "@/lib/types";

const bai07: LessonTheory = {
  intro:
    "Trong bài học tổng kết Chương I này, chúng ta sẽ hệ thống hoá các phương pháp giải bài tập Vật lí nhiệt: Phương trình cân bằng nhiệt, bài toán kết hợp nhiều giai đoạn chuyển thể (nóng chảy, tăng nhiệt độ, hoá hơi), bài toán Định luật I nhiệt động lực học và hiệu suất nhiệt kế.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "📐",
      heading: "1. Tổng hợp các công thức tính nhiệt lượng & năng lượng",
      blocks: [
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🌡️",
              title: "Tăng / giảm nhiệt độ",
              text: "`Q = m . c . ΔT` (với `ΔT = |T₂ - T₁|`). Đơn vị: `m(kg)`, `c(J/(kg.K))`, `Q(J)`.",
            },
            {
              emoji: "🧊",
              title: "Nóng chảy / Đông đặc",
              text: "`Q = λ . m` (tại nhiệt độ nóng chảy). Đơn vị: `λ(J/kg)`.",
            },
            {
              emoji: "💨",
              title: "Hoá hơi / Ngưng tụ",
              text: "`Q = L . m` (tại nhiệt độ sôi). Đơn vị: `L(J/kg)`.",
            },
            {
              emoji: "⚡",
              title: "Điện năng & Công suất",
              text: "`W = P . t = U . I . t` và Định luật I: `ΔU = A + Q`.",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "⚖️",
      heading: "2. Phương pháp giải bài toán Cân bằng nhiệt",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Xác định các vật toả nhiệt và thu nhiệt",
              text: "Vật có nhiệt độ cao hơn toả nhiệt hạ nhiệt độ xuống `t_cb`. Vật có nhiệt độ thấp hơn thu nhiệt tăng nhiệt độ lên `t_cb` (hoặc chuyển thể).",
            },
            {
              label: "Bước 2",
              title: "Viết biểu thức nhiệt lượng toả và thu",
              text: "- `Q_toả = Σ [ m_i . c_i . (t_i - t_cb) + ... ]`\n- `Q_thu = Σ [ m_j . c_j . (t_cb - t_j) + ... ]`",
            },
            {
              label: "Bước 3",
              title: "Lập phương trình cân bằng nhiệt và giải",
              text: "Hệ cô lập không trao đổi nhiệt với môi trường: `Q_toả = Q_thu`\nNếu có hiệu suất nhiệt `H`: `Q_thu = H . Q_toả` (hoặc `Q_có ích = H . W_toàn phần`).",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Q_biến thiên nhiệt = m.c.ΔT; Q_nóng chảy = λ.m; Q_hoá hơi = L.m.",
    "Phương trình cân bằng nhiệt hệ cô lập: Q_toả = Q_thu.",
    "Định luật I nhiệt động lực học: ΔU = A + Q.",
    "Hiệu suất: H = Q_ích / Q_toàn phần = Q_thu / (P.t).",
  ],
};

export default bai07;
