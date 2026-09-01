import type { LessonTheory } from "@/lib/types";

const bai03: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu khái niệm **Nhiệt độ**, các **Thang đo nhiệt độ** phổ biến (Celsius, Kelvin, Fahrenheit), nguyên lý hoạt động của các loại **Nhiệt kế** và mối liên hệ giữa nhiệt độ tuyệt đối với động năng phân tử.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🌡️",
      heading: "1. Khái niệm Nhiệt độ & Trạng thái cân bằng nhiệt",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệt độ** là số đo mức độ 'nóng', 'lạnh' của một vật. Về mặt vi mô, nhiệt độ là số đo **động năng chuyển động nhiệt trung bình của các phân tử** cấu tạo nên vật.",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "⚖️",
              title: "Cân bằng nhiệt",
              text: "Khi hai vật có nhiệt độ khác nhau tiếp xúc nhau, nhiệt lượng sẽ tự truyền từ vật nóng hơn sang vật lạnh hơn cho đến khi nhiệt độ hai vật bằng nhau.",
            },
            {
              emoji: "🎯",
              title: "Định luật 0 nhiệt động lực học",
              text: "Nếu vật A cân bằng nhiệt với vật B, và vật B cân bằng nhiệt với vật C, thì vật A cũng cân bằng nhiệt với vật C. Đây là cơ sở để chế tạo nhiệt kế.",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "📏",
      heading: "2. Các thang nhiệt độ thông dụng",
      blocks: [
        {
          kind: "text",
          text: "Để đo nhiệt độ, người ta chọn các mốc chuẩn cố định và chia khoảng cách giữa chúng thành các vạch chia:",
        },
        {
          kind: "compare",
          left: {
            emoji: "❄️",
            title: "Thang Celsius (°C)",
            items: [
              "Mốc 0°C: Nhiệt độ đóng băng của nước tinh khiết ở 1 atm.",
              "Mốc 100°C: Nhiệt độ sôi của nước tinh khiết ở 1 atm.",
              "Khoảng giữa chia làm 100 phần bằng nhau, mỗi phần là 1°C.",
            ],
          },
          right: {
            emoji: "🌌",
            title: "Thang Kelvin (K) — Nhiệt độ tuyệt đối",
            items: [
              "Mốc 0 K (Không độ tuyệt đối): Nhiệt độ tại đó động năng nhiệt phân tử bằng 0 (vật chất ngừng chuyển động nhiệt hoàn toàn).",
              "Công thức chuyển đổi: **T(K) = t(°C) + 273,15** (thường lấy xấp xỉ `T = t + 273`).",
              "Độ biến thiên nhiệt độ: **ΔT(K) = Δt(°C)**.",
            ],
          },
        },
        {
          kind: "note",
          text: "**Thang Fahrenheit (°F):**\n- Công thức chuyển đổi: `t(°F) = 1,8.t(°C) + 32`\n- Nước đóng băng ở 32°F và sôi ở 212°F.",
        },
        {
          kind: "check",
          q: "Nhiệt độ phòng hiện tại là 27°C. Trong thang nhiệt độ Kelvin, giá trị này tương ứng với bao nhiêu?",
          options: ["300 K", "-246 K", "273 K", "327 K"],
          answer: 0,
          explain: "Ta có T(K) = t(°C) + 273 = 27 + 273 = 300 K.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🧪",
      heading: "3. Nguyên lý và các loại nhiệt kế",
      blocks: [
        {
          kind: "text",
          text: "Nhiệt kế hoạt động dựa trên sự thay đổi một tính chất vật lí của chất đo theo nhiệt độ (như sự nở vì nhiệt, điện trở, bức xạ hồng ngoại):",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Chất lỏng",
              title: "Nhiệt kế thuỷ ngân / rượu",
              text: "Dựa trên sự **dãn nở vì nhiệt của cột chất lỏng** trong ống mao dẫn. Đo nhiệt độ cơ thể, nhiệt độ khí quyển.",
            },
            {
              label: "Điện trở",
              title: "Nhiệt kế điện trở kim loại / bán dẫn (Thermistor)",
              text: "Dựa trên sự **thay đổi điện trở theo nhiệt độ**. Đo chính xác trong phòng thí nghiệm và công nghiệp.",
            },
            {
              label: "Bức xạ",
              title: "Nhiệt kế hồng ngoại (đo không tiếp xúc)",
              text: "Dựa trên việc thu nhận **bức xạ nhiệt hồng ngoại** phát ra từ bề mặt vật thể. Đo nhanh trán, lò nung, vật thể ở xa.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Nhiệt độ biểu thị động năng chuyển động nhiệt trung bình của các phân tử.",
    "Hai vật tiếp xúc nhau có cùng nhiệt độ thì đạt trạng thái cân bằng nhiệt.",
    "Chuyển đổi thang đo: T (K) = t (°C) + 273,15.",
    "Độ biến thiên nhiệt độ: 1 K = 1°C (tức là ΔT = Δt).",
    "Nhiệt kế hoạt động dựa trên các hiệu ứng vật lí phụ thuộc nhiệt độ (dãn nở chất lỏng, biến đổi điện trở, bức xạ nhiệt hồng ngoại).",
  ],
};

export default bai03;
