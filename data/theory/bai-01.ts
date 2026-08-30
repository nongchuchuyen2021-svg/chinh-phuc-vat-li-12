import type { LessonTheory } from "@/lib/types";

const bai01: LessonTheory = {
  intro:
    "Trong bài học mở đầu chương trình Vật lí 12, chúng ta sẽ tìm hiểu **Mô hình động học phân tử** — nền tảng để giải thích cấu trúc các thể của chất (rắn, lỏng, khí) và cơ chế vi mô của các quá trình chuyển thể như nóng chảy, hoá hơi, ngưng tụ.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "🔬",
      heading: "1. Mô hình động học phân tử về cấu trúc của chất",
      blocks: [
        {
          kind: "text",
          text: "Mô hình động học phân tử gồm **3 nội dung cốt lõi** giải thích bản chất vật chất ở cấp độ vi mô:",
        },
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "⚛️",
              title: "Cấu tạo từ các hạt riêng biệt",
              text: "Các chất được cấu tạo từ các hạt vi mô riêng biệt là **nguyên tử, phân tử**. Giữa các hạt luôn có khoảng cách.",
            },
            {
              emoji: "⚡",
              title: "Chuyển động nhiệt hỗn loạn",
              text: "Các phân tử chuyển động không ngừng, hỗn loạn. **Nhiệt độ càng cao**, các phân tử chuyển động **càng nhanh**.",
            },
            {
              emoji: "🧲",
              title: "Lực tương tác phân tử",
              text: "Giữa các phân tử đồng thời có cả **lực hút** và **lực đẩy**. Khi khoảng cách nhỏ thì lực đẩy chiếm ưu thế, khi khoảng cách lớn thì lực hút chiếm ưu thế.",
            },
            {
              emoji: "🌡️",
              title: "Khoảng cách cân bằng",
              text: "Tại khoảng cách cân bằng `r₀` (cỡ 10⁻¹⁰ m), lực hút và lực đẩy triệt tiêu nhau, lực tương tác tổng cộng bằng 0.",
            },
          ],
        },
        {
          kind: "check",
          q: "Hiện tượng nào sau đây chứng minh các phân tử chuyển động hỗn loạn không ngừng và chuyển động càng nhanh khi nhiệt độ tăng?",
          options: [
            "Hiện tượng quang điện",
            "Chuyển động Brown (chuyển động của hạt phấn hoa trong nước)",
            "Hiện tượng giao thoa ánh sáng",
            "Hiện tượng cảm ứng điện từ",
          ],
          answer: 1,
          explain:
            "Chuyển động Brown của các hạt phấn hoa/hạt khói trong chất lưu là do các phân tử chất lưu va chạm không ngừng và không đối xứng vào hạt. Khi nhiệt độ tăng, các phân tử chuyển động nhanh hơn làm hạt Brown chuyển động hỗn loạn hơn.",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🧊",
      heading: "2. Cấu trúc của thể Rắn, Lỏng, Khí",
      blocks: [
        {
          kind: "text",
          text: "Dựa vào **khoảng cách giữa các phân tử** và **mức độ tương tác**, vật chất tồn tại ở 3 thể cơ bản:",
        },
        {
          kind: "compare",
          left: {
            emoji: "🧊",
            title: "Thể Rắn & Thể Lỏng",
            items: [
              "**Thể rắn:** Khoảng cách phân tử rất nhỏ (~r₀), lực liên kết rất mạnh. Các phân tử chỉ dao động quanh vị trí cân bằng cố định. Hình dạng và thể tích xác định.",
              "**Chất rắn kết tinh:** Có cấu trúc mạng tinh thể tuần hoàn (muối ăn, kim cương, kim loại), có nhiệt độ nóng chảy xác định.",
              "**Chất rắn vô định hình:** Không có cấu trúc tinh thể (thuỷ tinh, nhựa, hắc ín), không có nhiệt độ nóng chảy xác định.",
              "**Thể lỏng:** Khoảng cách lớn hơn thể rắn, lực liên kết yếu hơn. Phân tử dao động quanh VTCB tạm thời rồi nhảy sang VTCB mới. Thể tích xác định, hình dạng theo bình chứa.",
            ],
          },
          right: {
            emoji: "💨",
            title: "Thể Khí (Khí thực & Khí lí tưởng)",
            items: [
              "**Thể khí:** Khoảng cách giữa các phân tử rất lớn (gấp hàng chục lần kích thước phân tử). Lực tương tác phân tử rất yếu (gần như bỏ qua trừ lúc va chạm).",
              "**Chuyển động:** Chuyển động hỗn loạn hỗn độn không ngừng về mọi phía, chiếm toàn bộ thể tích bình chứa.",
              "**Hình dạng & Thể tích:** Không có hình dạng và không có thể tích riêng xác định, rất dễ nén.",
              "**Gây áp suất:** Hàng triệu phân tử khí va chạm liên tục vào thành bình tạo nên áp suất khí lên thành bình.",
            ],
          },
        },
        {
          kind: "note",
          text: "**Quy luật chung về mật độ & năng lượng:**\n- Khoảng cách phân tử: `r(rắn) < r(lỏng) << r(khí)`\n- Lực liên kết phân tử: `F(rắn) > F(lỏng) >> F(khí)`\n- Thế năng tương tác: `E_thế(rắn) < E_thế(lỏng) < E_thế(khí)`",
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🔄",
      heading: "3. Các quá trình chuyển thể của chất",
      blocks: [
        {
          kind: "text",
          text: "Sự biến đổi trạng thái tập hợp của chất do sự thay đổi **nhiệt độ** hoặc **áp suất** được gọi là sự chuyển thể.",
        },
        {
          kind: "steps",
          items: [
            {
              label: "Rắn ⇄ Lỏng",
              title: "Nóng chảy & Đông đặc",
              text: "Rắn chuyển sang lỏng gọi là **nóng chảy** (cần thu nhiệt). Ngược lại là **đông đặc** (toả nhiệt). Trong suốt quá trình này ở chất rắn kết tinh, nhiệt độ không đổi.",
            },
            {
              label: "Lỏng ⇄ Khí",
              title: "Hoá hơi & Ngưng tụ",
              text: "Lỏng sang khí gọi là **hoá hơi** (gồm *bay hơi* ở mặt thoáng tại mọi nhiệt độ và *sôi* ở cả trong lòng chất lỏng tại nhiệt độ sôi xác định). Ngược lại là **ngưng tụ**.",
            },
            {
              label: "Rắn ⇄ Khí",
              title: "Thăng hoa & Ngưng kết",
              text: "Rắn chuyển trực tiếp sang khí (không qua lỏng) gọi là **thăng hoa** (vd: đá khô CO₂, băng phiến). Khí chuyển trực tiếp sang rắn gọi là **ngưng kết** (vd: sương muối).",
            },
          ],
        },
        {
          kind: "example",
          title: "Tại sao khi cồn bay hơi trên da ta cảm thấy mát lạnh?",
          text: "Khi cồn bay hơi, các phân tử có động năng lớn nhất ở bề mặt bứt khỏi lực hút của các phân tử lỏng khác bay ra ngoài. Quá trình này **thu nhiệt lượng** trực tiếp từ bề mặt da, làm giảm nhiệt độ bề mặt da khiến ta cảm nhận được cảm giác mát lạnh.",
        },
      ],
    },
  ],
  summary: [
    "Vật chất cấu tạo từ các phân tử chuyển động hỗn loạn không ngừng; nhiệt độ càng cao phân tử chuyển động càng nhanh.",
    "Giữa các phân tử có lực hút và lực đẩy. Khi ở khoảng cách cân bằng r₀ thì lực tương tác bằng 0.",
    "Thể rắn có thể tích và hình dạng xác định; thể lỏng có thể tích xác định nhưng hình dạng phụ thuộc bình chứa; thể khí không có thể tích và hình dạng riêng.",
    "Chất rắn kết tinh có cấu trúc tuần hoàn và nhiệt độ nóng chảy xác định; chất rắn vô định hình không có nhiệt độ nóng chảy xác định.",
    "Sự hoá hơi gồm bay hơi (xảy ra ở mặt thoáng ở mọi nhiệt độ) và sôi (xảy ra ở cả mặt thoáng và trong lòng khối lỏng tại nhiệt độ sôi).",
  ],
};

export default bai01;
