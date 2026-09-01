import type { LessonTheory } from "@/lib/types";

const bai08: LessonTheory = {
  intro:
    "Trong bài mở đầu Chương II, chúng ta sẽ tìm hiểu **Mô hình động học phân tử chất khí**, khái niệm **Khí lí tưởng**, sự khác biệt giữa khí thực và khí lí tưởng, cùng cơ chế vi mô giải thích sự tạo thành **Áp suất chất khí** tác dụng lên thành bình.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "💨",
      heading: "1. Mô hình Động học phân tử chất khí",
      blocks: [
        {
          kind: "text",
          text: "Mô hình động học phân tử chất khí bao gồm các luận điểm cơ bản sau:",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🔬",
              title: "Cấu tạo hạt",
              text: "Chất khí cấu tạo từ vô số các phân tử có kích thước rất nhỏ so với khoảng cách giữa chúng.",
            },
            {
              emoji: "🌪️",
              title: "Chuyển động hỗn loạn",
              text: "Các phân tử khí chuyển động hỗn loạn không ngừng về mọi phía (chuyển động nhiệt). Nhiệt độ càng cao, vận tốc chuyển động càng lớn.",
            },
            {
              emoji: "💥",
              title: "Va chạm và áp suất",
              text: "Khi chuyển động, các phân tử khí va chạm vào nhau và va chạm vào thành bình chứa, gây nên **áp suất khí** lên thành bình.",
            },
            {
              emoji: "🌌",
              title: "Lực tương tác yếu",
              text: "Do khoảng cách lớn nên lực tương tác giữa các phân tử khí rất yếu, chỉ đáng kể khi các phân tử tiến đến rất gần nhau trong lúc va chạm.",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "✨",
      heading: "2. Khái niệm Khí lí tưởng",
      blocks: [
        {
          kind: "text",
          text: "Để đơn giản hoá việc nghiên cứu các quá trình biến đổi trạng thái của chất khí, người ta xây dựng mô hình **Khí lí tưởng**:",
        },
        {
          kind: "compare",
          left: {
            emoji: "✨",
            title: "Khí lí tưởng (Mô hình trừu tượng)",
            items: [
              "Phân tử được coi là **chất điểm** (bỏ qua kích thước so với thể tích bình chứa).",
              "Chỉ tương tác với nhau và với thành bình khi **va chạm**; coi va chạm là **hoàn toàn đàn hồi**.",
              "Bỏ qua hoàn toàn thế năng tương tác giữa các phân tử khi không va chạm.",
            ],
          },
          right: {
            emoji: "💨",
            title: "Khí thực (Không khí, O₂, N₂, He...)",
            items: [
              "Phân tử có kích thước xác định.",
              "Luôn có lực hút và lực đẩy phân tử từ xa.",
              "Ở **nhiệt độ phòng và áp suất thấp**, khí thực tuân theo rất gần các định luật của khí lí tưởng.",
            ],
          },
        },
        {
          kind: "note",
          text: "**Lưu ý quan trọng:** Không khí ở điều kiện nhiệt độ và áp suất bình thường có thể coi gần đúng là khí lí tưởng trong hầu hết các bài toán thực tế.",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🧭",
      heading: "3. Các thông số trạng thái của một lượng khí",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Áp suất (p)",
              title: "Áp suất khí quyển & áp suất chất khí",
              text: "Đơn vị SI là **Pascal (`Pa = N/m²`)**. Các đơn vị khác: `1 atm = 1,013 . 10⁵ Pa`, `1 bar = 10⁵ Pa`, `1 mmHg (Torr) ≈ 133,3 Pa`.",
            },
            {
              label: "Thể tích (V)",
              title: "Thể tích của bình chứa khí",
              text: "Đơn vị SI là mét khối (`m³`). Đổi đơn vị: `1 m³ = 1000 dm³ = 1000 lít (L) = 10⁶ cm³ (mL)`.",
            },
            {
              label: "Nhiệt độ (T)",
              title: "Nhiệt độ tuyệt đối",
              text: "Đơn vị SI là **Kelvin (`K`)**. Công thức: `T(K) = t(°C) + 273,15`.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Chất khí gồm các phân tử kích thước rất nhỏ, chuyển động hỗn loạn không ngừng.",
    "Va chạm của các phân tử vào thành bình tạo nên áp suất chất khí.",
    "Khí lí tưởng coi phân tử là chất điểm và chỉ tương tác khi va chạm đàn hồi.",
    "Khí thực ở áp suất thấp và nhiệt độ cao coi gần đúng là khí lí tưởng.",
    "Ba thông số trạng thái xác định trạng thái của một lượng khí: Áp suất p, Thể tích V, Nhiệt độ tuyệt đối T.",
  ],
};

export default bai08;
