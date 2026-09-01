import type { LessonTheory } from "@/lib/types";

const bai19: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu thuyết **Điện từ trường của James Clerk Maxwell**, mối quan hệ khăng khít giữa điện trường biến thiên và từ trường xoáy, khái niệm và đặc tính của **Sóng điện từ** (truyền được trong chân không với tốc độ c ≈ 3.10⁸ m/s), thang sóng điện từ và ứng dụng trong thông tin liên lạc (sóng vô tuyến, 4G/5G, vệ tinh).",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "⚡",
      heading: "1. Thuyết Điện từ trường của Maxwell",
      blocks: [
        {
          kind: "text",
          text: "Maxwell đã khái quát hoá các hiện tượng điện và từ thành hai luận điểm cơ bản về **Điện từ trường**:",
        },
        {
          kind: "compare",
          left: {
            emoji: "🧲",
            title: "Luận điểm 1: Từ trường biến thiên",
            items: [
              "Tại nơi nào có **từ trường biến thiên** theo thời gian thì tại nơi đó xuất hiện một **điện trường xoáy**.",
              "Điện trường xoáy là điện trường có các đường sức là những **đường cong khép kín** (khác với điện trường tĩnh).",
            ],
          },
          right: {
            emoji: "⚡",
            title: "Luận điểm 2: Điện trường biến thiên",
            items: [
              "Tại nơi nào có **điện trường biến thiên** theo thời gian thì tại nơi đó xuất hiện một **từ trường xoáy**.",
              "Từ trường luôn là trường xoáy với các đường sức từ khép kín bao quanh các đường sức điện trường.",
            ],
          },
        },
        {
          kind: "note",
          text: "**Điện từ trường thống nhất:** Điện trường và từ trường là hai mặt thể hiện của một trường duy nhất gọi là **Điện từ trường** (Electromagnetic field).",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "📡",
      heading: "2. Khái niệm và Đặc tính của Sóng điện từ",
      blocks: [
        {
          kind: "text",
          text: "**Sóng điện từ** là quá trình lan truyền của điện từ trường biến thiên trong không gian theo thời gian.",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "🌌",
              title: "Lan truyền trong chân không",
              text: "Sóng điện từ **lan truyền được trong cả chân không** (khác sóng cơ học). Tốc độ trong chân không là lớn nhất: `c ≈ 3 . 10⁸ m/s = 300.000 km/s`.",
            },
            {
              emoji: "📐",
              title: "Sóng ngang",
              text: "Sóng điện từ là **sóng ngang**. Tại mỗi điểm, véc-tơ cường độ điện trường `E⃗`, véc-tơ cảm ứng từ `B⃗` và véc-tơ vận tốc truyền sóng `v⃗` đôi một vuông góc với nhau và tạo thành tam diện thuận.",
            },
            {
              emoji: "🎯",
              title: "Cùng pha dao động",
              text: "Tại mỗi điểm trong không gian, dao động của `E` và `B` luôn **đồng pha** với nhau (cùng đạt cực đại và cùng triệt tiêu cùng lúc).",
            },
            {
              emoji: "🌈",
              title: "Tính chất sóng",
              text: "Tuân theo các định luật phản xạ, khúc xạ, giao thoa, nhiễu xạ và mang năng lượng tỉ lệ thuận với luỹ thừa bậc 4 của tần số (`W ~ f⁴`).",
            },
          ],
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "📻",
      heading: "3. Thang Sóng điện từ & Sóng vô tuyến",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Bước sóng (λ)",
              title: "Công thức liên hệ bước sóng và tần số",
              text: "**λ = c / f = c . T**\n(Trong chân không: `c = 3.10⁸ m/s`, `f` là tần số sóng điện từ tính bằng `Hz`).",
            },
            {
              label: "Sóng dài & trung",
              title: "Bước sóng > 100 m",
              text: "Bị tầng điện khí quyển hấp thụ mạnh vào ban ngày, phản xạ tốt vào ban đêm. Dùng cho thông tin liên lạc dưới nước, hàng hải, phát thanh AM.",
            },
            {
              label: "Sóng ngắn",
              title: "Bước sóng 10 m - 100 m",
              text: "Phản xạ nhiều lần giữa tầng điện ly và mặt đất. Dùng liên lạc vô tuyến tầm xa toàn cầu.",
            },
            {
              label: "Sóng cực ngắn",
              title: "Bước sóng 1 mm - 10 m (Vi sóng, Microwave)",
              text: "Năng lượng cao, xuyên qua tầng điện ly ra vũ trụ. Dùng cho truyền hình vệ tinh, định vị GPS, radar, mạng di động 4G/5G, Wi-Fi.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Từ trường biến thiên sinh ra điện trường xoáy; điện trường biến thiên sinh ra từ trường xoáy.",
    "Sóng điện từ là điện từ trường lan truyền trong không gian. Truyền được trong chân không với tốc độ c = 3.10⁸ m/s.",
    "Sóng điện từ là sóng ngang: E⃗ ⊥ B⃗ ⊥ v⃗ và dao động của E, B luôn cùng pha.",
    "Bước sóng trong chân không: λ = c / f.",
    "Thang sóng vô tuyến: Sóng dài, sóng trung, sóng ngắn và sóng cực ngắn (dùng cho 5G, Wi-Fi, vệ tinh).",
  ],
};

export default bai19;
