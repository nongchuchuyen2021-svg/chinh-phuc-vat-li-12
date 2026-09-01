import type { LessonTheory } from "@/lib/types";

const bai25: LessonTheory = {
  intro:
    "Trong bài học tổng kết toàn bộ chương trình Vật lí 12 này, chúng ta sẽ luyện tập các dạng bài tập Vật lí hạt nhân nâng cao: tính toán năng lượng liên kết và độ hụt khối, xác định hạt nhân X trong phản ứng hạt nhân, tính năng lượng toả ra/thu vào của phản ứng, bài toán định luật phóng xạ theo thời gian và bài toán hiệu suất nhà máy điện hạt nhân.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "⚛️",
      heading: "1. Hệ thống công thức Vật lí hạt nhân trọng tâm",
      blocks: [
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "⚖️",
              title: "Độ hụt khối & Năng lượng liên kết",
              text: "- `Δm = Z.m_p + (A - Z).m_n - m_hn`\n- `W_lk = Δm . c²`\n- `W_lkr = W_lk / A`",
            },
            {
              emoji: "💥",
              title: "Năng lượng phản ứng hạt nhân",
              text: "- `Q = (m_trước - m_sau) . c²`\n- `Q = W_lk(sau) - W_lk(trước)`\n- `Q = K_sau - K_trước` (với K là động năng).",
            },
            {
              emoji: "⏳",
              title: "Định luật Phóng xạ",
              text: "- `N(t) = N₀ . 2^(-t/T) = N₀ . e^(-λ.t)`\n- `m(t) = m₀ . 2^(-t/T)`\n- Số hạt phân rã: `ΔN = N₀ . (1 - 2^(-t/T))`",
            },
            {
              emoji: "⚡",
              title: "Năng lượng toả ra từ m gam nhiên liệu",
              text: "- `N_hạt = (m / M) . N_A`\n- `E_toả = N_hạt . Q₁`\n- `P_điện = H . (E_toả / t)`",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🎯",
      heading: "2. Phương pháp giải bài toán Hạt nhân tổng hợp",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Bảo toàn số khối A và điện tích Z",
              text: "Lập phương trình cân bằng số khối `Σ A_trước = Σ A_sau` và điện tích `Σ Z_trước = Σ Z_sau` để xác định hạt chưa biết.",
            },
            {
              label: "Bước 2",
              title: "Tính năng lượng toả/thu",
              text: "Lấy `(Tổng khối lượng trước - Tổng khối lượng sau) . 931,5 MeV`. Dương là toả, âm là thu.",
            },
            {
              label: "Bước 3",
              title: "Bài toán bảo toàn động lượng",
              text: "Sử dụng véc-tơ động lượng `p⃗ = m . v⃗` và hệ thức liên hệ động năng: `p² = 2 . m . K` để giải góc bay và động năng các mảnh sau phản ứng.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "W_lk = Δm.c²; W_lkr = W_lk/A (đặc trưng độ bền vững).",
    "Bảo toàn A, Z, P⃗ và Năng lượng toàn phần trong phản ứng hạt nhân.",
    "Năng lượng phản ứng: Q = (m_trước - m_sau).c².",
    "Định luật phóng xạ: N(t) = N₀ . 2^(-t/T).",
  ],
};

export default bai25;
