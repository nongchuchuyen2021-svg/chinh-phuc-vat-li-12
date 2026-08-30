import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một học sinh tiến hành thí nghiệm khảo sát sự biến thiên nhiệt độ của một khối nước đá (băng) đựng trong cốc cách nhiệt khi được cấp nhiệt lượng ổn định từ bếp điện. Ban đầu nước đá ở -10°C, sau đó tăng lên 0°C, nóng chảy hoàn toàn thành nước lỏng, tiếp tục tăng nhiệt độ lên 100°C và bắt đầu sôi.",
      statements: [
        {
          text: "Trong giai đoạn từ -10°C đến 0°C, động năng trung bình của các phân tử nước đá tăng dần.",
          answer: true,
          explain:
            "Đúng. Nhiệt độ là số đo động năng chuyển động nhiệt trung bình của các phân tử. Khi nhiệt độ tăng từ -10°C lên 0°C, động năng phân tử tăng lên.",
        },
        {
          text: "Trong suốt quá trình nước đá đang nóng chảy ở 0°C, nhiệt độ của khối nước đá tăng dần.",
          answer: false,
          explain:
            "Sai. Nước đá là chất rắn kết tinh, trong suốt thời gian nóng chảy ở 1 atm, nhiệt độ giữ nguyên ở 0°C.",
        },
        {
          text: "Nhiệt lượng cung cấp trong giai đoạn nóng chảy ở 0°C chủ yếu làm tăng thế năng tương tác giữa các phân tử nước.",
          answer: true,
          explain:
            "Đúng. Nhiệt lượng này dùng để phá vỡ liên kết tinh thể (tăng khoảng cách phân tử, tức tăng thế năng tương tác), trong khi động năng trung bình (nhiệt độ) không đổi.",
        },
        {
          text: "Khi nước bắt đầu sôi ở 100°C, sự hoá hơi chỉ diễn ra tại bề mặt thoáng của nước.",
          answer: false,
          explain:
            "Sai. Sự sôi là sự hoá hơi đặc biệt diễn ra ở cả bề mặt thoáng và bên trong lòng khối chất lỏng (tạo các bọt khí nổi lên).",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét mô hình động học phân tử về cấu trúc của các thể rắn, lỏng, khí và lực tương tác giữa các phân tử vật chất.",
      statements: [
        {
          text: "Khoảng cách giữa các phân tử ở thể khí lớn hơn rất nhiều so với thể lỏng và thể rắn.",
          answer: true,
          explain:
            "Đúng. Khoảng cách phân tử khí gấp hàng chục lần kích thước phân tử.",
        },
        {
          text: "Lực tương tác giữa các phân tử chỉ xuất hiện khi các phân tử tiếp xúc trực tiếp với nhau.",
          answer: false,
          explain:
            "Sai. Lực tương tác phân tử là lực trường tác dụng từ xa (bao gồm tương tác điện từ vi mô).",
        },
        {
          text: "Chất rắn vô định hình có nhiệt độ nóng chảy hoàn toàn xác định ở áp suất chuẩn.",
          answer: false,
          explain:
            "Sai. Chỉ chất rắn kết tinh mới có nhiệt độ nóng chảy xác định. Chất rắn vô định hình mềm dần trong một khoảng nhiệt độ.",
        },
        {
          text: "Áp suất của chất khí lên thành bình chứa sinh ra do các phân tử khí chuyển động hỗn loạn và va chạm liên tục vào thành bình.",
          answer: true,
          explain:
            "Đúng. Hàng triệu phân tử va chạm vào thành bình truyền xung lượng tạo nên áp lực và áp suất lên thành bình.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Dựa vào mô hình động học phân tử, hãy giải thích tại sao chất khí không có hình dạng và thể tích riêng xác định, trong khi chất rắn lại có hình dạng và thể tích xác định?",
      answer:
        "- Ở thể khí: Khoảng cách giữa các phân tử rất lớn, lực liên kết giữa các phân tử rất yếu. Do đó, các phân tử chuyển động hoàn toàn hỗn loạn và tự do về mọi phía, lan toả chiếm trọn toàn bộ thể tích của bình chứa, nên không có hình dạng và thể tích riêng xác định.\n- Ở thể rắn: Khoảng cách giữa các phân tử rất nhỏ (cỡ kích thước phân tử), lực liên kết giữa các phân tử rất mạnh. Các phân tử chỉ dao động quanh các vị trí cân bằng cố định xác định trong không gian (mạng tinh thể), do đó chất rắn giữ được hình dạng và thể tích xác định.",
    },
    {
      id: "es2",
      q: "Hãy phân biệt sự bay hơi và sự sôi. Nêu hai ứng dụng thực tế của sự bay hơi trong đời sống?",
      answer:
        "1. Phân biệt:\n- Sự bay hơi: Diễn ra chỉ ở bề mặt thoáng của chất lỏng, xảy ra ở nhiệt độ bất kì.\n- Sự sôi: Diễn ra ở cả bề mặt thoáng và bên trong lòng chất lỏng, chỉ xảy ra ở nhiệt độ sôi xác định (phụ thuộc áp suất).\n\n2. Ứng dụng thực tế của sự bay hơi:\n- Sản xuất muối ăn từ nước biển trên các ruộng muối.\n- Phơi khô nông sản (lúa, cà phê), phơi quần áo dưới ánh nắng mặt trời.\n- Làm mát cơ thể thông qua tuyến mồ hôi tiết mồ hôi và bay hơi.",
    },
  ],
};

export default extra;
