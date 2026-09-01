import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một bình kín chứa một khối lượng khí xác định ở áp suất 1 atm và nhiệt độ phòng 27°C.",
      statements: [
        {
          text: "Các phân tử khí trong bình chỉ chuyển động theo phương nằm ngang.",
          answer: false,
          explain: "Sai. Các phân tử khí chuyển động hoàn toàn hỗn loạn theo mọi phương không gian.",
        },
        {
          text: "Nhiệt độ tuyệt đối của khối khí trong bình là 300,15 K.",
          answer: true,
          explain: "Đúng. T = 27 + 273,15 = 300,15 K.",
        },
        {
          text: "Khi nén thể tích bình giảm đi ở nhiệt độ không đổi, số va chạm của các phân tử khí lên mỗi đơn vị diện tích thành bình trong một giây sẽ tăng lên.",
          answer: true,
          explain: "Đúng. Mật độ phân tử tăng nên tần số va chạm lên thành bình tăng.",
        },
        {
          text: "Nếu coi khối khí là khí lí tưởng thì thế năng tương tác giữa các phân tử khi chuyển động tự do bằng 0.",
          answer: true,
          explain: "Đúng. Mô hình khí lí tưởng bỏ qua lực tương tác từ xa nên thế năng tương tác bằng 0.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về mô hình động học phân tử chất khí và các thông số trạng thái của chất khí.",
      statements: [
        {
          text: "Khí lí tưởng là chất khí thực sự tồn tại trong tự nhiên ở mọi điều kiện nhiệt độ và áp suất.",
          answer: false,
          explain: "Sai. Khí lí tưởng là một mô hình vật lí trừu tượng được xây dựng để đơn giản hoá nghiên cứu.",
        },
        {
          text: "Đơn vị áp suất tiêu chuẩn trong hệ SI là Pascal (Pa), với 1 Pa = 1 N/m².",
          answer: true,
          explain: "Đúng. Pascal là đơn vị chuẩn SI của áp suất.",
        },
        {
          text: "Áp suất chất khí tác dụng lên thành bình chứa là như nhau tại mọi điểm trên thành bình (nếu bỏ qua ảnh hưởng của trọng lực).",
          answer: true,
          explain: "Đúng. Do chuyển động hỗn loạn đẳng hướng của phân tử nên áp suất khí phân bố đều theo mọi phía.",
        },
        {
          text: "Khi khối khí giảm nhiệt độ xuống 0 K thì các phân tử khí chuyển động với tốc độ cực đại.",
          answer: false,
          explain: "Sai. Ở 0 K, chuyển động nhiệt của phân tử dừng lại hoàn toàn (vận tốc bằng 0).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Dựa vào mô hình động học phân tử chất khí, hãy giải thích tại sao khi bơm thêm không khí vào trong một quả bóng đá (ở nhiệt độ phòng không đổi), quả bóng lại căng cứng hơn và áp suất bên trong quả bóng tăng lên?",
      answer:
        "- Khi bơm thêm không khí vào quả bóng, số lượng phân tử khí trong cùng một thể tích quả bóng tăng lên (mật độ phân tử n = N/V tăng lên đáng kể).\n- Ở nhiệt độ không đổi, vận tốc chuyển động nhiệt trung bình của mỗi phân tử không đổi.\n- Tuy nhiên, do mật độ phân tử tăng, số lượng phân tử va đập vào một đơn vị diện tích mặt trong của vỏ bóng trong một đơn vị thời gian tăng lên rất nhiều.\n- Tổng xung lượng truyền cho thành vỏ bóng tăng lên, tạo ra lực ép lớn hơn lên thành bóng, làm áp suất khí bên trong tăng và quả bóng trở nên căng cứng.",
    },
    {
      id: "es2",
      q: "Nêu 3 điểm khác nhau cơ bản giữa mô hình Khí lí tưởng và Khí thực?",
      answer:
        "1. Kích thước phân tử:\n- Khí lí tưởng: Phân tử được coi là chất điểm (thể tích riêng bằng 0).\n- Khí thực: Phân tử có kích thước và hình dạng xác định.\n\n2. Tương tác phân tử:\n- Khí lí tưởng: Bỏ qua lực hút và đẩy từ xa (chỉ tương tác va chạm đàn hồi).\n- Khí thực: Luôn tồn tại lực tương tác hút và đẩy giữa các phân tử (có thế năng tương tác).\n\n3. Sự chuyển thể:\n- Khí lí tưởng: Không bao giờ bị hoá lỏng hoặc hoá rắn khi hạ nhiệt độ hoặc nén áp suất cao.\n- Khí thực: Có thể bị ngưng tụ hoá lỏng hoặc đông đặc khi hạ nhiệt độ hoặc tăng áp suất đủ lớn.",
    },
  ],
};

export default extra;
