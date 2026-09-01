import type { LessonTheory } from "@/lib/types";

const bai23: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu **Hiện tượng Phóng xạ** (Becquerel, Marie Curie), bản chất và đặc tính của các tia phóng xạ (alpha α, beta β⁻, beta β⁺, gamma γ), **Định luật Phóng xạ**, khái niệm **Chu kì bán rã (T)**, độ phóng xạ (H) và ứng dụng xác định tuổi cổ vật bằng đồng vị phóng xạ Carbon-14.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "☢️",
      heading: "1. Khái niệm Hiện tượng Phóng xạ & Các loại tia phóng xạ",
      blocks: [
        {
          kind: "text",
          text: "**Phóng xạ** là quá trình phân rã tự phát của một hạt nhân không bền vững (hạt nhân mẹ) phát ra các tia phóng xạ và biến đổi thành một hạt nhân khác (hạt nhân con). Quá trình này **hoàn toàn tự phát** và không phụ thuộc vào các điều kiện môi trường ngoài (nhiệt độ, áp suất, hoá chất).",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🔴",
              title: "Tia Alpha (α)",
              text: "Là dòng hạt nhân Heli (**^4_2He**). Điện tích `+2e`, vận tốc cỡ `2.10⁷ m/s`. Ion hoá chất khí rất mạnh, khả năng đâm xuyên kém (bị chặn lại bởi một tờ giấy mỏng hoặc vài cm không khí).",
            },
            {
              emoji: "🔵",
              title: "Tia Beta âm (β⁻) & Beta dương (β⁺)",
              text: "- **Tia β⁻:** Dòng electron (**^0_-1 e**), sinh ra do `n -> p + e⁻ + ν_e`.\n- **Tia β⁺:** Dòng positron (**^0_+1 e**), sinh ra do `p -> n + e⁺ + ν_e`.\n- Vận tốc xấp xỉ tốc độ ánh sáng, đâm xuyên được vài mét không khí, bị chặn bởi vài mm nhôm.",
            },
            {
              emoji: "⚡",
              title: "Tia Gamma (γ)",
              text: "Là sóng điện từ có bước sóng cực ngắn (`λ < 10⁻¹¹ m`), gồm các photon năng lượng rất cao. Không mang điện tích (`q = 0`). Khả năng đâm xuyên cực kì mạnh, chỉ bị cản bởi lớp chì dày hàng chục cm hoặc bê tông dày hàng mét.",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "⏳",
      heading: "2. Định luật Phóng xạ & Chu kì bán rã",
      blocks: [
        {
          kind: "example",
          title: "Định luật Phóng xạ",
          text: "Số hạt nhân mẹ còn lại `N(t)` và khối lượng chất phóng xạ còn lại `m(t)` giảm theo hàm số mũ của thời gian:\n\n**N(t) = N₀ . 2^(-t/T) = N₀ . e^(-λ.t)**\n**m(t) = m₀ . 2^(-t/T) = m₀ . e^(-λ.t)**\n\nTrong đó:\n- `N₀, m₀`: Số hạt và khối lượng ban đầu tại `t = 0`.\n- `T`: **Chu kì bán rã** — khoảng thời gian sau đó một nửa số hạt nhân chất phóng xạ bị phân rã.\n- `λ = ln(2) / T ≈ 0,693 / T`: **Hằng số phóng xạ** (`s⁻¹` hoặc `năm⁻¹`).",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "📉",
              title: "Số hạt nhân đã bị phân rã (ΔN)",
              text: "**ΔN = N₀ - N(t) = N₀ . (1 - 2^(-t/T))**\nĐây cũng chính là số hạt nhân con sinh ra (hoặc số hạt phóng xạ phát ra).",
            },
            {
              emoji: "⏱️",
              title: "Độ phóng xạ (H)",
              text: "Đại lượng đặc trưng cho số phân rã phóng xạ trong 1 giây:\n**H(t) = λ . N(t) = H₀ . 2^(-t/T)**\nĐơn vị: **Becquerel (`1 Bq = 1 phân rã/giây`)** hoặc `Curie (1 Ci = 3,7 . 10¹⁰ Bq)`.",
            },
          ],
        },
        {
          kind: "check",
          q: "Chất phóng xạ I-131 dùng trong y tế có chu kì bán rã T = 8 ngày. Sau 24 ngày, tỉ lệ phần trăm số hạt nhân I-131 còn lại so với ban đầu là:",
          options: ["12,5%", "25%", "6,25%", "87,5%"],
          answer: 0,
          explain:
            "Số chu kì t/T = 24 / 8 = 3 chu kì. Tỉ lệ còn lại: N/N₀ = 2^(-3) = 1/8 = 0,125 = 12,5%.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🏛️",
      heading: "3. Ứng dụng đồng vị Carbon-14 định tuổi cổ vật",
      blocks: [
        {
          kind: "text",
          text: "Đồng vị phóng xạ Carbon-14 (^14_6C) có chu kì bán rã `T ≈ 5730 năm`. Khi sinh vật còn sống, tỉ lệ `^14C / ^12C` trong cơ thể không đổi nhờ quá trình hô hấp/quang hợp trao đổi chất với môi trường. Khi sinh vật chết đi, quá trình trao đổi ngừng lại và lượng `^14C` giảm dần theo định luật phóng xạ. Bằng cách đo độ phóng xạ của mẫu gỗ/xương cổ, các nhà khảo cổ có thể xác định chính xác niên đại của cổ vật hàng nghìn năm tuổi.",
        },
      ],
    },
  ],
  summary: [
    "Phóng xạ là sự phân rã tự phát của hạt nhân không bền: không phụ thuộc môi trường ngoài.",
    "3 loại tia phóng xạ: Tia α (hạt nhân ^4_2He), tia β (electron hoặc positron), tia γ (sóng điện từ năng lượng cao).",
    "Định luật phóng xạ: N(t) = N0 . 2^(-t/T) = N0 . e^(-λt).",
    "Hằng số phóng xạ: λ = ln2 / T ≈ 0,693 / T.",
    "Độ phóng xạ H = λ.N, đơn vị Bq (1 phân rã/s).",
    "Ứng dụng: Định tuổi cổ vật bằng Carbon-14 (T = 5730 năm), xạ trị ung thư, chiếu xạ bảo quản thực phẩm.",
  ],
};

export default bai23;
