import type { LessonTheory } from "@/lib/types";

const bai16: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu khái niệm **Từ thông (Φ)**, **Hiện tượng Cảm ứng điện từ** (Michael Faraday, 1831), **Định luật Faraday** về suất điện động cảm ứng, **Định luật Lenz** (Len-xơ) về chiều của dòng điện cảm ứng và dòng điện Fu-cô (Foucault).",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🌊",
      heading: "1. Khái niệm Từ thông (Φ)",
      blocks: [
        {
          kind: "text",
          text: "**Từ thông** qua một diện tích `S` đặt trong từ trường đều `B` là đại lượng đặc trưng cho **số lượng đường sức từ xuyên qua diện tích đó**:",
        },
        {
          kind: "example",
          title: "Công thức tính Từ thông",
          text: "**Φ = B . S . cos(α)**\n- Đối với khung dây có `N` vòng dây: **Φ = N . B . S . cos(α)**\nTrong đó:\n- `Φ`: Từ thông, đơn vị là **Weber (Wb)** (`1 Wb = 1 T . m²`).\n- `B`: Cảm ứng từ (`T`).\n- `S`: Diện tích mặt phẳng khung dây (`m²`).\n- `α = (n⃗, B⃗)`: Góc hợp bởi véc-tơ cảm ứng từ B⃗ và **véc-tơ pháp tuyến n⃗** của mặt phẳng khung dây.",
        },
        {
          kind: "note",
          text: "- Khi mặt phẳng khung dây **vuông góc** với đường sức từ (`n⃗ // B⃗` => `α = 0°`): Từ thông cực đại `Φ_max = B . S`.\n- Khi mặt phẳng khung dây **song song** với đường sức từ (`n⃗ ⊥ B⃗` => `α = 90°`): Từ thông triệt tiêu `Φ = 0`.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "⚡",
      heading: "2. Hiện tượng Cảm ứng điện từ & Định luật Faraday",
      blocks: [
        {
          kind: "text",
          text: "- **Hiện tượng cảm ứng điện từ:** Khi **từ thông** qua một mạch kín biến thiên theo thời gian thì trong mạch kín xuất hiện một dòng điện gọi là **dòng điện cảm ứng**.\n- Dòng điện cảm ứng chỉ tồn tại trong khoảng thời gian từ thông qua mạch biến thiên.",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "📐",
              title: "Định luật Faraday",
              text: "Độ lớn suất điện động cảm ứng `e_c` trong mạch kín tỉ lệ với tốc độ biến thiên của từ thông qua mạch đó:\n**e_c = - ΔΦ / Δt**  hay  **|e_c| = |ΔΦ / Δt|**\nĐơn vị: `Volt (V)`.",
            },
            {
              emoji: "🛡️",
              title: "Định luật Lenz (Chiều dòng cảm ứng)",
              text: "**Dòng điện cảm ứng có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu sinh ra nó**.\n- Khi từ thông tăng: `B_c` ngược chiều `B_ngoài` (đẩy lùi).\n- Khi từ thông giảm: `B_c` cùng chiều `B_ngoài` (giữ lại).",
            },
          ],
        },
        {
          kind: "check",
          q: "Từ thông qua một khung dây biến thiên đều từ 0,6 Wb xuống 0,2 Wb trong thời gian 0,1 s. Độ lớn của suất điện động cảm ứng xuất hiện trong khung là:",
          options: ["4 V", "0,4 V", "8 V", "2 V"],
          answer: 0,
          explain:
            "|e_c| = |ΔΦ / Δt| = |(0,2 - 0,6) / 0,1| = 0,4 / 0,1 = 4 V.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🌀",
      heading: "3. Dòng điện Foucault (Fu-cô)",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Bản chất",
              title: "Dòng điện cảm ứng trong khối kim loại",
              text: "Khi một khối kim loại chuyển động trong từ trường hoặc đặt trong từ trường biến thiên, trong lòng khối kim loại xuất hiện các dòng điện cảm ứng xoáy khép kín gọi là **Dòng điện Foucault**.",
            },
            {
              label: "Ứng dụng có ích",
              title: "Bếp từ, phanh điện từ, luyện kim cảm ứng",
              text: "- **Bếp từ:** Dòng Foucault làm nóng trực tiếp đáy nồi kim loại nấu chín thức ăn.\n- **Phanh điện từ:** Lực từ cản trở chuyển động hãm phanh êm ái cho tàu cao tốc Shinkansen, TGV.",
            },
            {
              label: "Tác hại & Khắc phục",
              title: "Tổn hao nhiệt trong máy biến áp",
              text: "Làm nóng lõi sắt máy biến áp gây hao phí năng lượng. Khắc phục: Ghép lõi bằng các **lá thép kĩ thuật điện mỏng sơn cách điện** ghép sít nhau để cắt nhỏ dòng Foucault.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Từ thông qua mạch: Φ = N . B . S . cos(α). Đơn vị: Weber (Wb).",
    "Từ thông biến thiên sinh ra suất điện động cảm ứng: e_c = - ΔΦ/Δt (Định luật Faraday).",
    "Định luật Lenz: Dòng cảm ứng sinh ra từ trường chống lại sự biến thiên của từ thông ban đầu.",
    "Dòng Foucault là dòng cảm ứng trong khối kim loại. Ứng dụng ở bếp từ, phanh từ; hạn chế trong máy biến áp bằng lõi ghép lá mỏng cách điện.",
  ],
};

export default bai16;
