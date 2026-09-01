import type { LessonTheory } from "@/lib/types";

const bai14: LessonTheory = {
  intro:
    "Trong bài học mở đầu Chương III, chúng ta sẽ tìm hiểu khái niệm **Từ trường**, các nguồn sinh ra từ trường (nam châm, dòng điện), tính chất cơ bản của từ trường, hình ảnh và quy tắc xác định chiều của **Đường sức từ** (quy tắc nắm tay phải) cho dòng điện thẳng dài, dòng điện tròn và ống dây hình trụ (solenoid).",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🧲",
      heading: "1. Khái niệm Từ trường & Nguồn gốc",
      blocks: [
        {
          kind: "text",
          text: "**Từ trường** là một dạng vật chất tồn tại trong không gian mà biểu hiện cụ thể là tác dụng **lực từ** lên nam châm khác hoặc lên dòng điện (hạt mang điện chuyển động) đặt trong nó.",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "⚡",
              title: "Nguồn sinh ra từ trường",
              text: "- **Nam châm vĩnh cửu** (có hai cực: Cực Bắc - N và Cực Nam - S).\n- **Dòng điện** (các điện tích chuyển động có hướng).\n- Bản chất: Mọi từ trường đều do các **điện tích chuyển động** sinh ra.",
            },
            {
              emoji: "🧭",
              title: "Kim nam châm thử",
              text: "Quy ước: Hướng của từ trường tại một điểm là hướng Nam - Bắc của kim nam châm thử nhỏ nằm cân bằng tại điểm đó.",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🌀",
      heading: "2. Đường sức từ và Quy tắc Nắm tay phải",
      blocks: [
        {
          kind: "text",
          text: "**Đường sức từ** là những đường cong vẽ trong không gian có từ trường sao cho tiếp tuyến tại mỗi điểm trùng với hướng của từ trường tại điểm đó.",
        },
        {
          kind: "compare",
          left: {
            emoji: "🧲",
            title: "Quy tắc với Nam châm",
            items: [
              "Bên ngoài nam châm: Đường sức từ đi ra từ **Cực Bắc (N)** và đi vào **Cực Nam (S)** (*'Vào Nam Ra Bắc'*).",
              "Đường sức từ là những **đường cong khép kín** (từ trường là một trường xoáy).",
              "Nơi nào từ trường mạnh thì đường sức từ vẽ **dày (mau)**; nơi yếu vẽ **thưa**.",
            ],
          },
          right: {
            emoji: "✋",
            title: "Quy tắc Nắm tay phải (Dòng điện)",
            items: [
              "**Dòng điện thẳng:** Ngón cái chỉ theo chiều dòng điện I, 4 ngón khum lại chỉ chiều các đường sức từ (hình tròn đồng tâm).",
              "**Ống dây / Khung tròn:** 4 ngón khum chỉ theo chiều dòng điện trong các vòng dây, ngón cái choãi ra 90° chỉ chiều đường sức từ bên trong lòng ống.",
            ],
          },
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🌍",
      heading: "3. Từ trường Trái Đất (Địa từ trường)",
      blocks: [
        {
          kind: "text",
          text: "Trái Đất là một nam châm khổng lồ. Cực từ Nam của Trái Đất nằm gần Cực Bắc địa lý, và Cực từ Bắc của Trái Đất nằm gần Cực Nam địa lý. Nhờ có từ trường Trái Đất và vành đai bức xạ Van Allen, Trái Đất được bảo vệ an toàn trước các luồng gió mặt trời mang hạt tích điện nguy hiểm.",
        },
      ],
    },
  ],
  summary: [
    "Từ trường là dạng vật chất tác dụng lực từ lên nam châm và dòng điện đặt trong nó.",
    "Bản chất: Điện tích chuyển động sinh ra từ trường.",
    "Quy ước đường sức từ nam châm: Ra Bắc Vào Nam (khép kín).",
    "Quy tắc nắm tay phải dùng để xác định chiều đường sức từ của dòng điện thẳng, dòng tròn và ống dây.",
    "Từ trường đều: Các đường sức từ là những đường thẳng song song và cách đều nhau.",
  ],
};

export default bai14;
