import type { LessonTheory } from "@/lib/types";

const bai22: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu bản chất của **Lực hạt nhân** (tương tác mạnh), khái niệm **Độ hụt khối (Δm)**, **Năng lượng liên kết (W_lk)**, **Năng lượng liên kết riêng (W_lkr)** — thước đo độ bền vững của hạt nhân, các định luật bảo toàn trong **Phản ứng hạt nhân** và điều kiện phản ứng toả/thu năng lượng.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🧲",
      heading: "1. Lực Hạt nhân & Độ hụt khối",
      blocks: [
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "💪",
              title: "Lực hạt nhân (Tương tác mạnh)",
              text: "Lực liên kết các nucleon trong hạt nhân là **lực tương tác mạnh**. Không phải lực tĩnh điện (vì hút cả các proton cùng dấu dương), chỉ có bán kính tác dụng rất ngắn (cỡ `10⁻¹⁵ m = 1 fm`).",
            },
            {
              emoji: "⚖️",
              title: "Độ hụt khối (Δm)",
              text: "Khối lượng của hạt nhân `m_hn` luôn **nhỏ hơn tổng khối lượng nghỉ của các nucleon tự do** cấu tạo nên nó:\n**Δm = [ Z . m_p + (A - Z) . m_n ] - m_hn > 0**",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "💥",
      heading: "2. Năng lượng liên kết & Năng lượng liên kết riêng",
      blocks: [
        {
          kind: "example",
          title: "Năng lượng liên kết (W_lk)",
          text: "Là năng lượng tối thiểu cần cung cấp để phá vỡ hạt nhân thành các nucleon riêng biệt đứng yên:\n**W_lk = Δm . c² = [ Z . m_p + (A - Z) . m_n - m_hn ] . c²**\n(Nếu tính `Δm` bằng đơn vị `u` thì `W_lk = Δm . 931,5 MeV`).",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "🛡️",
              title: "Năng lượng liên kết riêng (W_lkr)",
              text: "**W_lkr = W_lk / A** (Năng lượng liên kết tính cho **1 nucleon**).\nĐơn vị: **MeV/nucleon**.\n👉 **Năng lượng liên kết riêng là đại lượng đặc trưng cho mức độ BỀN VỮNG của hạt nhân.** Hạt nhân có `W_lkr` càng lớn thì càng bền vững.",
            },
            {
              emoji: "🏆",
              title: "Các hạt nhân bền vững nhất",
              text: "Các hạt nhân có số khối trung bình trong khoảng **50 < A < 70** (như Sắt ^56_26Fe, Niken, Coban) có `W_lkr` lớn nhất (khoảng `8,8 MeV/nucleon`) nên bền vững nhất trong tự nhiên.",
            },
          ],
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "⚛️",
      heading: "3. Phản ứng hạt nhân & Các định luật bảo toàn",
      blocks: [
        {
          kind: "text",
          text: "Phương trình phản ứng hạt nhân tổng quát: `^A1_Z1 A + ^A2_Z2 B -> ^A3_Z3 C + ^A4_Z4 D`",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bảo toàn số nucleon (A)",
              title: "Định luật bảo toàn số khối",
              text: "`A₁ + A₂ = A₃ + A₄`",
            },
            {
              label: "Bảo toàn điện tích (Z)",
              title: "Định luật bảo toàn điện tích",
              text: "`Z₁ + Z₂ = Z₃ + Z₄`",
            },
            {
              label: "Bảo toàn năng lượng toàn phần",
              title: "Năng lượng toả / thu của phản ứng",
              text: "**Q = (m_trước - m_sau) . c² = (W_lk_sau - W_lk_trước)**\n- Nếu `m_trước > m_sau` (`Q > 0`): Phản ứng **toả năng lượng**.\n- Nếu `m_trước < m_sau` (`Q < 0`): Phản ứng **thu năng lượng**.",
            },
          ],
        },
        {
          kind: "note",
          text: "**LƯU Ý:** Trong phản ứng hạt nhân **KHÔNG** có định luật bảo toàn khối lượng nghỉ và **KHÔNG** có định luật bảo toàn số proton riêng lẻ (chỉ có bảo toàn số nucleon A và bảo toàn điện tích Z).",
        },
      ],
    },
  ],
  summary: [
    "Độ hụt khối: Δm = Z.m_p + (A - Z).m_n - m_hn > 0.",
    "Năng lượng liên kết: W_lk = Δm . c².",
    "Năng lượng liên kết riêng W_lkr = W_lk / A đặc trưng cho độ bền vững hạt nhân (bền nhất ở A ≈ 50 - 70).",
    "Bốn định luật bảo toàn: Điện tích Z, Số khối A, Động lượng P⃗, Năng lượng toàn phần.",
    "Năng lượng phản ứng: Q = (m_trước - m_sau).c² = W_lk_sau - W_lk_trước.",
  ],
};

export default bai22;
