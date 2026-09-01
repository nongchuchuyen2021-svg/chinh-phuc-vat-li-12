import type { LessonTheory } from "@/lib/types";

const bai04: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta tìm hiểu định nghĩa **Nhiệt dung riêng** của một chất, công thức tính nhiệt lượng trong quá trình truyền nhiệt để thay đổi nhiệt độ `Q = m.c.ΔT`, phương pháp thực nghiệm xác định nhiệt dung riêng của nước và ý nghĩa thực tiễn quan trọng của nhiệt dung riêng trong đời sống và khí hậu.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "💡",
      heading: "1. Khái niệm Nhiệt dung riêng",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệt dung riêng** (kí hiệu là `c`) của một chất là **nhiệt lượng cần truyền cho 1 kg chất đó để nhiệt độ của nó tăng thêm 1 K (hoặc 1°C)**.",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "📐",
              title: "Đơn vị đo chuẩn SI",
              text: "Đơn vị của nhiệt dung riêng là **J/(kg.K)** hoặc **J/(kg.°C)**.",
            },
            {
              emoji: "🌊",
              title: "Nhiệt dung riêng của nước",
              text: "`c_nước ≈ 4180 J/(kg.K)` — rất lớn so với hầu hết các chất khác (kim loại như đồng chỉ khoảng 380 J/(kg.K)).",
            },
          ],
        },
        {
          kind: "note",
          text: "**Ý nghĩa của nhiệt dung riêng lớn của nước:**\n- Nước hấp thụ và giải phóng nhiệt lượng rất lớn nhưng nhiệt độ thay đổi tương đối chậm.\n- Điều hoà khí hậu các vùng duyên hải/hải đảo (mát mẻ hơn vào mùa hè, ấm áp hơn vào mùa đông).\n- Làm chất làm mát lý tưởng trong két tản nhiệt động cơ ô tô, xe máy, nhà máy điện.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🧮",
      heading: "2. Công thức tính nhiệt lượng truyền nhiệt",
      blocks: [
        {
          kind: "example",
          title: "Công thức tính nhiệt lượng làm thay đổi nhiệt độ",
          text: "**Q = m . c . ΔT = m . c . (T₂ - T₁)**\nTrong đó:\n- `Q`: Nhiệt lượng thu vào hoặc toả ra (`J`).\n- `m`: Khối lượng của vật (`kg`).\n- `c`: Nhiệt dung riêng của chất cấu tạo nên vật (`J/(kg.K)`).\n- `ΔT = T₂ - T₁ = t₂ - t₁`: Độ biến thiên nhiệt độ (`K` hoặc `°C`).",
        },
        {
          kind: "check",
          q: "Cần cung cấp nhiệt lượng bao nhiêu để đun nóng 2 kg nước từ 25°C lên 100°C? Biết nhiệt dung riêng của nước là 4200 J/(kg.K).",
          options: ["630.000 J", "150.000 J", "840.000 J", "315.000 J"],
          answer: 0,
          explain:
            "Ta có: Q = m.c.Δt = 2 . 4200 . (100 - 25) = 2 . 4200 . 75 = 630.000 J = 630 kJ.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🔬",
      heading: "3. Phương pháp thực nghiệm đo nhiệt dung riêng",
      blocks: [
        {
          kind: "text",
          text: "Để đo nhiệt dung riêng của một chất (ví dụ như nước), người ta dùng **nhiệt lượng kế**, cấp nhiệt bằng dòng điện (dây nung điện trở):",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Xác định năng lượng điện cung cấp",
              text: "Dùng oát kế và đồng hồ bấm giờ (hoặc vôn kế và ampe kế): `W = P . t = U . I . t`",
            },
            {
              label: "Bước 2",
              title: "Đo nhiệt độ và khối lượng",
              text: "Cân khối lượng nước `m`, đo nhiệt độ ban đầu `T₁` và nhiệt độ lúc sau `T₂` bằng nhiệt kế.",
            },
            {
              label: "Bước 3",
              title: "Tính toán nhiệt dung riêng",
              text: "Bỏ qua hao phí nhiệt ra môi trường và vỏ nhiệt lượng kế: `Q_thu = W => m . c . (T₂ - T₁) = P . t => c = (P . t) / [m . (T₂ - T₁)]`",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Nhiệt dung riêng c là nhiệt lượng cần cung cấp cho 1 kg chất đó tăng thêm 1 K (hoặc 1°C). Đơn vị: J/(kg.K).",
    "Công thức tính nhiệt lượng: Q = m.c.ΔT = m.c.(t2 - t1).",
    "Nước có nhiệt dung riêng rất lớn (~4180 J/(kg.K)) nên có vai trò điều hoà nhiệt độ tự nhiên và làm chất tải nhiệt xuất sắc.",
    "Phương pháp đo thực nghiệm dựa trên định luật bảo toàn năng lượng: Q_thu = W_điện = P.t.",
  ],
};

export default bai04;
