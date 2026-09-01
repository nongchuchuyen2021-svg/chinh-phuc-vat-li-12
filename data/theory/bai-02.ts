import type { LessonTheory } from "@/lib/types";

const bai02: LessonTheory = {
  intro:
    "Trong bài này, chúng ta sẽ tìm hiểu khái niệm **Nội năng** của một vật dưới góc độ vi mô, hai cách làm biến đổi nội năng (thực hiện công và truyền nhiệt), cùng **Định luật I của nhiệt động lực học** — định luật bảo toàn và chuyển hoá năng lượng áp dụng cho các quá trình nhiệt.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🔥",
      heading: "1. Khái niệm Nội năng",
      blocks: [
        {
          kind: "text",
          text: "Trong nhiệt động lực học, **nội năng** (kí hiệu là `U`, đơn vị `J`) của một vật là **tổng động năng chuyển động nhiệt của các phân tử** và **thế năng tương tác giữa các phân tử** cấu tạo nên vật:",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🏃",
              title: "Động năng phân tử",
              text: "Do các phân tử chuyển động hỗn loạn không ngừng tạo nên. Động năng phân tử **phụ thuộc vào nhiệt độ** `T` của vật.",
            },
            {
              emoji: "🧲",
              title: "Thế năng tương tác phân tử",
              text: "Do lực tương tác hút và đẩy giữa các phân tử tạo nên. Thế năng này **phụ thuộc vào khoảng cách** giữa các phân tử, tức là phụ thuộc vào **thể tích** `V` của vật.",
            },
          ],
        },
        {
          kind: "note",
          text: "**Kết luận:** Nội năng của một vật phụ thuộc vào cả **nhiệt độ T** và **thể tích V**: `U = f(T, V)`.\n- Đối với **khí lí tưởng**, coi như bỏ qua thế năng tương tác giữa các phân tử nên nội năng của khí lí tưởng **chỉ phụ thuộc vào nhiệt độ T**.",
        },
        {
          kind: "check",
          q: "Nội năng của một lượng khí lí tưởng đơn nguyên tử phụ thuộc vào yếu tố nào?",
          options: [
            "Chỉ phụ thuộc vào thể tích của khí",
            "Chỉ phụ thuộc vào nhiệt độ của khí",
            "Phụ thuộc vào cả nhiệt độ và thể tích",
            "Phụ thuộc vào áp suất nhưng không phụ thuộc vào nhiệt độ",
          ],
          answer: 1,
          explain:
            "Đối với khí lí tưởng, các phân tử được coi là chất điểm và bỏ qua lực tương tác khi không va chạm (thế năng bằng 0), do đó nội năng chỉ là tổng động năng của các phân tử, tức là chỉ phụ thuộc vào nhiệt độ.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "⚙️",
      heading: "2. Các cách làm biến đổi nội năng",
      blocks: [
        {
          kind: "text",
          text: "Nội năng của một vật có thể biến đổi qua hai quá trình cơ bản:",
        },
        {
          kind: "compare",
          left: {
            emoji: "🔨",
            title: "Thực hiện công (W)",
            items: [
              "Có sự **chuyển hoá từ dạng năng lượng khác (cơ năng)** thành nội năng hoặc ngược lại.",
              "Có sự tác dụng lực và có **quãng đường dịch chuyển** (chuyển động vĩ mô).",
              "Ví dụ: Cọ xát miếng kim loại lên mặt bàn, nén pit-tông chứa khí trong xi lanh.",
            ],
          },
          right: {
            emoji: "♨️",
            title: "Truyền nhiệt (Q)",
            items: [
              "**Không có sự chuyển hoá năng lượng**, chỉ có sự **truyền nội năng** từ vật này sang vật khác.",
              "Xảy ra giữa các vật có **chênh lệch nhiệt độ** (từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn).",
              "Ví dụ: Thả miếng kim loại nóng vào cốc nước lạnh.",
            ],
          },
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "⚖️",
      heading: "3. Định luật I của nhiệt động lực học",
      blocks: [
        {
          kind: "text",
          text: "Định luật I của nhiệt động lực học là sự vận dụng **định luật bảo toàn và chuyển hoá năng lượng** vào các hiện tượng nhiệt.",
        },
        {
          kind: "example",
          title: "Biểu thức Định luật I",
          text: "**ΔU = A + Q**\nTrong đó:\n- `ΔU`: Độ biến thiên nội năng của hệ (`J`).\n- `A`: Công mà hệ trao đổi với môi trường ngoài (`J`).\n- `Q`: Nhiệt lượng mà hệ trao đổi với môi trường ngoài (`J`).",
        },
        {
          kind: "cards",
          tone: "photon",
          items: [
            {
              emoji: "📥",
              title: "Hệ NHẬN năng lượng (> 0)",
              text: "- `A > 0`: Hệ **nhận công** từ môi trường ngoài (ví dụ bị nén khí).\n- `Q > 0`: Hệ **nhận nhiệt lượng** từ môi trường ngoài.",
            },
            {
              emoji: "📤",
              title: "Hệ SINH / TRUYỀN năng lượng (< 0)",
              text: "- `A < 0`: Hệ **thực hiện công** lên môi trường ngoài (ví dụ khí dãn nở đẩy pit-tông).\n- `Q < 0`: Hệ **truyền nhiệt lượng** ra môi trường ngoài.",
            },
          ],
        },
        {
          kind: "check",
          q: "Người ta truyền cho chất khí trong xilanh nhiệt lượng 100 J. Khí nở ra thực hiện công 70 J đẩy pittông lên. Độ biến thiên nội năng của khí là:",
          options: ["+170 J", "+30 J", "-30 J", "-170 J"],
          answer: 1,
          explain:
            "Khí nhận nhiệt lượng nên Q = +100 J. Khí thực hiện công nên A = -70 J. Độ biến thiên nội năng: ΔU = A + Q = -70 + 100 = +30 J.",
        },
      ],
    },
  ],
  summary: [
    "Nội năng U là tổng động năng chuyển động nhiệt và thế năng tương tác của các phân tử tạo nên vật: U = f(T, V).",
    "Với khí lí tưởng, nội năng chỉ phụ thuộc vào nhiệt độ T.",
    "Hai cách làm biến đổi nội năng là thực hiện công và truyền nhiệt.",
    "Định luật I nhiệt động lực học: ΔU = A + Q.",
    "Quy ước dấu: Nhận vào mang dấu dương (> 0), Sinh ra/Truyền đi mang dấu âm (< 0).",
  ],
};

export default bai02;
