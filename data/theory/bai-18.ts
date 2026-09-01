import type { LessonTheory } from "@/lib/types";

const bai18: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu cấu tạo và nguyên lý hoạt động của **Máy biến áp** (biến đổi điện áp xoay chiều), công thức máy biến áp lí tưởng `U₂/U₁ = N₂/N₁ = I₁/I₂`, bài toán **Truyền tải điện năng đi xa** và biện pháp tối ưu giảm hao phí trên đường dây truyền tải bằng cách tăng điện áp.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "⚡",
      heading: "1. Cấu tạo và Nguyên tắc hoạt động của Máy biến áp",
      blocks: [
        {
          kind: "text",
          text: "**Máy biến áp** là thiết bị hoạt động dựa trên hiện tượng **cảm ứng điện từ**, dùng để biến đổi điện áp của dòng điện xoay chiều mà **không làm thay đổi tần số**.",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🧱",
              title: "Lõi biến áp (Lõi thép)",
              text: "Làm bằng các lá thép kĩ thuật điện mỏng sơn cách điện ghép sít nhau để dẫn từ thông khép kín và giảm hao phí dòng Foucault.",
            },
            {
              emoji: "➰",
              title: "Hai cuộn dây quấn",
              text: "- **Cuộn sơ cấp (`N₁` vòng):** Nối với nguồn điện vào (`U₁`).\n- **Cuộn thứ cấp (`N₂` vòng):** Nối với tải tiêu thụ ra (`U₂`).",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "📐",
      heading: "2. Hệ thức Máy biến áp lí tưởng",
      blocks: [
        {
          kind: "example",
          title: "Hệ thức máy biến áp lí tưởng (bỏ qua hao phí nhiệt)",
          text: "**U₂ / U₁ = N₂ / N₁ = I₁ / I₂**\nTrong đó:\n- Nếu `N₂ > N₁` => `U₂ > U₁`: **Máy tăng áp** (tăng điện áp, giảm cường độ dòng điện).\n- Nếu `N₂ < N₁` => `U₂ < U₁`: **Máy hạ áp** (giảm điện áp, tăng cường độ dòng điện).",
        },
        {
          kind: "check",
          q: "Một máy biến áp có cuộn sơ cấp gồm 1000 vòng, cuộn thứ cấp gồm 200 vòng. Đặt vào hai đầu cuộn sơ cấp điện áp xoay chiều 220 V. Điện áp hiệu dụng ở hai đầu cuộn thứ cấp để hở là:",
          options: ["44 V (máy hạ áp)", "1100 V (máy tăng áp)", "22 V", "88 V"],
          answer: 0,
          explain:
            "U₂ = U₁ . (N₂ / N₁) = 220 . (200 / 1000) = 220 . 0,2 = 44 V. Vì U₂ < U₁ nên đây là máy hạ áp.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🗼",
      heading: "3. Bài toán Truyền tải điện năng đi xa",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Công suất hao phí",
              title: "Tổn hao do toả nhiệt trên đường dây",
              text: "**ΔP = I² . r = (P² . r) / (U² . cos²φ)**\nTrong đó `P` là công suất truyền đi, `r` là điện trở tổng cộng của dây dẫn, `U` là điện áp hiệu dụng ở đầu đường dây truyền tải.",
            },
            {
              label: "Biện pháp tối ưu",
              title: "Tăng điện áp truyền tải U",
              text: "Vì `ΔP` tỉ lệ nghịch với `U²` (`ΔP ~ 1/U²`), khi tăng điện áp lên `k` lần thì công suất hao phí giảm đi `k²` lần. Do đó, người ta dùng **máy tăng áp** ở nhà máy phát điện (lên 500 kV) và dùng **máy hạ áp** tại nơi tiêu thụ.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Máy biến áp biến đổi điện áp xoay chiều nhưng giữ nguyên tần số f.",
    "Hệ thức máy biến áp lí tưởng: U2/U1 = N2/N1 = I1/I2.",
    "Công suất hao phí truyền tải: ΔP = (P².r) / (U².cos²φ).",
    "Tăng điện áp U lên k lần giúp giảm hao phí toả nhiệt ΔP đi k² lần.",
  ],
};

export default bai18;
