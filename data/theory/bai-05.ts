import type { LessonTheory } from "@/lib/types";

const bai05: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu khái niệm **Nhiệt nóng chảy riêng** của chất rắn kết tinh, công thức tính nhiệt lượng trong quá trình nóng chảy `Q = λ.m`, đồ thị biến thiên nhiệt độ theo thời gian và ứng dụng thực tiễn trong luyện kim, đúc tượng và công nghệ hàn.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🧊",
      heading: "1. Khái niệm Nhiệt nóng chảy riêng",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệt nóng chảy riêng** (kí hiệu là `λ`, đọc là lam-đa) của một chất là **nhiệt lượng cần cung cấp cho 1 kg chất đó nóng chảy hoàn toàn ở nhiệt độ nóng chảy xác định** mà không làm thay đổi nhiệt độ.",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "📐",
              title: "Đơn vị đo chuẩn SI",
              text: "Đơn vị đo của nhiệt nóng chảy riêng là **J/kg** (hoặc kJ/kg).",
            },
            {
              emoji: "❄️",
              title: "Nhiệt nóng chảy của nước đá (băng)",
              text: "`λ_băng ≈ 3,34 . 10⁵ J/kg = 334 kJ/kg` (ở 0°C, 1 atm).",
            },
          ],
        },
        {
          kind: "note",
          text: "**Cơ chế vi mô:** Trong suốt quá trình nóng chảy của chất rắn kết tinh, nhiệt lượng hấp thụ được dùng để **phá vỡ mạng lưới tinh thể** (làm tăng thế năng tương tác giữa các phân tử), trong khi động năng nhiệt trung bình không đổi => **nhiệt độ của chất giữ không đổi**.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🧮",
      heading: "2. Công thức tính nhiệt lượng nóng chảy",
      blocks: [
        {
          kind: "example",
          title: "Công thức tính nhiệt lượng nóng chảy",
          text: "**Q = λ . m**\nTrong đó:\n- `Q`: Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn (`J`).\n- `λ`: Nhiệt nóng chảy riêng của chất (`J/kg`).\n- `m`: Khối lượng chất rắn kết tinh (`kg`).\n*(Lưu ý: Quá trình đông đặc ở cùng nhiệt độ sẽ toả ra một lượng nhiệt đúng bằng Q = λ.m)*",
        },
        {
          kind: "check",
          q: "Cần cung cấp một nhiệt lượng bao nhiêu để làm nóng chảy hoàn toàn 2 kg nước đá ở 0°C? Biết λ của nước đá là 3,34.10⁵ J/kg.",
          options: ["6,68 . 10⁵ J", "3,34 . 10⁵ J", "1,67 . 10⁵ J", "6,68 . 10⁴ J"],
          answer: 0,
          explain:
            "Ta có: Q = λ . m = 3,34 . 10⁵ . 2 = 6,68 . 10⁵ J = 668 kJ.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🏭",
      heading: "3. Ứng dụng thực tiễn của sự nóng chảy",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Luyện kim",
              title: "Nấu chảy quặng và chế tạo hợp kim",
              text: "Nung chảy kim loại (sắt, đồng, nhôm, titan) trong lò luyện kim để loại bỏ tạp chất và phối trộn tạo hợp kim chuyên dụng.",
            },
            {
              label: "Đúc kim loại",
              title: "Đúc chuông đồng, đúc tượng, phụ tùng máy",
              text: "Rót kim loại lỏng nóng chảy vào khuôn mẫu; khi nguội kim loại đông đặc lại tạo hình chi tiết chính xác.",
            },
            {
              label: "Bảo quản",
              title: "Bảo quản thực phẩm bằng nước đá",
              text: "Nước đá tan thu nhiệt lượng lớn từ môi trường xung quanh, duy trì nhiệt độ 0°C giúp giữ thực phẩm, hải sản tươi ngon.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Nhiệt nóng chảy riêng λ là nhiệt lượng cần cung cấp cho 1 kg chất rắn kết tinh nóng chảy hoàn toàn ở nhiệt độ nóng chảy.",
    "Đơn vị của λ: J/kg.",
    "Công thức nhiệt lượng nóng chảy: Q = λ . m.",
    "Trong suốt quá trình nóng chảy/đông đặc của chất rắn kết tinh, nhiệt độ không thay đổi.",
    "Ứng dụng: Luyện kim, đúc chi tiết máy, công nghệ hàn, làm mát và bảo quản bằng đá lạnh.",
  ],
};

export default bai05;
