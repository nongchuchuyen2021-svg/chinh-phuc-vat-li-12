import type { LessonTheory } from "@/lib/types";

const bai06: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu khái niệm **Nhiệt hoá hơi riêng** của chất lỏng, công thức tính nhiệt lượng hoá hơi `Q = L.m`, cơ chế vi mô của quá trình bay hơi và sôi, phương pháp thực nghiệm xác định nhiệt hoá hơi riêng của nước và các ứng dụng làm lạnh, công nghiệp hơi nước.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "💨",
      heading: "1. Khái niệm Nhiệt hoá hơi riêng",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệt hoá hơi riêng** (kí hiệu là `L`) của một chất lỏng là **nhiệt lượng cần cung cấp cho 1 kg chất lỏng đó hoá hơi hoàn toàn ở nhiệt độ sôi xác định**.",
        },
        {
          kind: "cards",
          tone: "photon",
          items: [
            {
              emoji: "📐",
              title: "Đơn vị đo chuẩn SI",
              text: "Đơn vị của nhiệt hoá hơi riêng là **J/kg** (hoặc kJ/kg).",
            },
            {
              emoji: "🌊",
              title: "Nhiệt hoá hơi của nước",
              text: "`L_nước ≈ 2,26 . 10⁶ J/kg = 2260 kJ/kg` (ở 100°C, 1 atm) — một giá trị cực kì lớn!",
            },
          ],
        },
        {
          kind: "note",
          text: "**Cơ chế vi mô:** Để biến chất lỏng thành hơi, cần cung cấp năng lượng rất lớn để thắng hoàn toàn lực hút liên kết giữa các phân tử chất lỏng và thực hiện công chống lại áp suất ngoài để phân tử thoát ra ngoài.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🧮",
      heading: "2. Công thức tính nhiệt lượng hoá hơi",
      blocks: [
        {
          kind: "example",
          title: "Công thức tính nhiệt lượng hoá hơi",
          text: "**Q = L . m**\nTrong đó:\n- `Q`: Nhiệt lượng cần cung cấp để chất lỏng hoá hơi hoàn toàn ở nhiệt độ sôi (`J`).\n- `L`: Nhiệt hoá hơi riêng của chất lỏng (`J/kg`).\n- `m`: Khối lượng chất lỏng hoá hơi (`kg`).\n*(Lưu ý: Quá trình ngưng tụ ở cùng nhiệt độ toả ra nhiệt lượng đúng bằng Q = L.m)*",
        },
        {
          kind: "check",
          q: "Cần cung cấp một nhiệt lượng bao nhiêu để làm bay hơi hoàn toàn 0,5 kg nước ở 100°C? Biết nhiệt hoá hơi riêng của nước là L = 2,26.10⁶ J/kg.",
          options: ["1,13 . 10⁶ J", "2,26 . 10⁶ J", "4,52 . 10⁶ J", "1,13 . 10⁵ J"],
          answer: 0,
          explain:
            "Ta có: Q = L . m = 2,26 . 10⁶ . 0,5 = 1,13 . 10⁶ J = 1130 kJ.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "❄️",
      heading: "3. Ứng dụng thực tiễn của sự hoá hơi và ngưng tụ",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Làm lạnh",
              title: "Tủ lạnh và Máy điều hoà không khí",
              text: "Môi chất lạnh (gas lạnh) hoá hơi trong dàn lạnh hấp thụ nhiệt từ buồng lạnh/phòng ở, sau đó được nén và ngưng tụ ở dàn nóng để toả nhiệt ra ngoài môi trường.",
            },
            {
              label: "Sinh học",
              title: "Điều hoà thân nhiệt cơ thể",
              text: "Khi trời nóng hoặc vận động mạnh, cơ thể tiết mồ hôi. Sự bay hơi của mồ hôi trên da thu nhiệt lượng lớn giúp hạ nhiệt cơ thể nhanh chóng.",
            },
            {
              label: "Năng lượng",
              title: "Tua-bin nhà máy nhiệt điện & điện hạt nhân",
              text: "Nhiệt lượng từ lò đốt/lò phản ứng đun sôi nước tạo hơi nước áp suất cao làm quay tua-bin máy phát điện.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Nhiệt hoá hơi riêng L là nhiệt lượng cần cung cấp cho 1 kg chất lỏng hoá hơi hoàn toàn ở nhiệt độ sôi. Đơn vị: J/kg.",
    "Công thức nhiệt lượng hoá hơi: Q = L . m.",
    "Nhiệt hoá hơi riêng của nước rất lớn (~2,26.10⁶ J/kg).",
    "Quá trình ngưng tụ toả ra nhiệt lượng bằng đúng nhiệt lượng hoá hơi.",
    "Ứng dụng: Chu trình làm lạnh máy lạnh/tủ lạnh, điều hoà thân nhiệt qua mồ hôi, phát điện hơi nước.",
  ],
};

export default bai06;
