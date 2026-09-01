import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Trong một giờ thực hành Vật lí, hai học sinh Nam và An đo nhiệt độ của một cốc nước ấm. Nam dùng nhiệt kế Celsius và đọc được giá trị 45°C. An dùng nhiệt kế có thang đo Kelvin và thang đo Fahrenheit.",
      statements: [
        {
          text: "Nhiệt độ của cốc nước trên thang Kelvin là 318,15 K.",
          answer: true,
          explain: "Đúng. T(K) = 45 + 273,15 = 318,15 K.",
        },
        {
          text: "Nhiệt độ của cốc nước trên thang Fahrenheit là 113°F.",
          answer: true,
          explain: "Đúng. t(°F) = 1,8 . 45 + 32 = 81 + 32 = 113°F.",
        },
        {
          text: "Nếu đun nóng thêm làm cốc nước tăng nhiệt độ thêm 10°C, thì trên thang Kelvin nhiệt độ tăng thêm 283,15 K.",
          answer: false,
          explain: "Sai. Độ tăng nhiệt độ trên thang Kelvin bằng độ tăng trên thang Celsius: ΔT = Δt = 10 K.",
        },
        {
          text: "Nhiệt độ 0 K là nhiệt độ mà tại đó nước bắt đầu đóng băng.",
          answer: false,
          explain: "Sai. Nước đóng băng ở 0°C (tức 273,15 K). 0 K là độ không tuyệt đối.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét nguyên lý đo và cấu tạo của các loại nhiệt kế thông dụng.",
      statements: [
        {
          text: "Nhiệt kế rượu và nhiệt kế thuỷ ngân đều hoạt động dựa trên nguyên tắc dãn nở vì nhiệt của chất lỏng.",
          answer: true,
          explain: "Đúng. Chiều dài cột chất lỏng dãn nở tỉ lệ thuận với nhiệt độ.",
        },
        {
          text: "Nhiệt kế hồng ngoại có thể đo nhiệt độ của vật thể thể rắn nóng đỏ mà không cần chạm trực tiếp vào vật thể.",
          answer: true,
          explain: "Đúng. Nhiệt kế hồng ngoại thu bức xạ nhiệt từ xa.",
        },
        {
          text: "Hai vật thể có khối lượng khác nhau khi tiếp xúc nhau không bao giờ đạt được cân bằng nhiệt.",
          answer: false,
          explain: "Sai. Cân bằng nhiệt chỉ phụ thuộc vào nhiệt độ (khi T1 = T2), không phụ thuộc vào khối lượng của hai vật.",
        },
        {
          text: "Nhiệt kế điện trở bán dẫn có điện trở giảm khi nhiệt độ tăng.",
          answer: true,
          explain: "Đúng. Nhiệt điện trở bán dẫn (NTC) có điện trở giảm mạnh khi nhiệt độ tăng, rất nhạy khi đo nhiệt độ.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao nói độ không tuyệt đối (0 K) là nhiệt độ thấp nhất mà vật chất có thể đạt tới theo quan điểm vi mô?",
      answer:
        "- Về mặt vi mô, nhiệt độ là đại lượng biểu thị động năng chuyển động nhiệt trung bình của các phân tử, nguyên tử cấu tạo nên chất.\n- Ở 0 K (khoảng -273,15°C), toàn bộ chuyển động nhiệt của các phân tử dừng lại hoàn toàn, động năng nhiệt giảm về giá trị nhỏ nhất (bằng 0). Vì động năng không thể nhận giá trị âm, nên không thể có nhiệt độ nào thấp hơn 0 K.",
    },
    {
      id: "es2",
      q: "Một nhiệt kế bị sai thang đo: Ở nhiệt độ nước đá đang tan (0°C chuẩn) nó chỉ 2°C, ở nhiệt độ nước sôi (100°C chuẩn) nó chỉ 102°C. Khi nhiệt kế này chỉ 42°C thì nhiệt độ thực tế của vật là bao nhiêu °C?",
      answer:
        "- Gọi t là nhiệt độ thực tế và t' là số chỉ trên nhiệt kế sai.\n- Khoảng cách giữa 2 mốc chuẩn trên nhiệt kế sai: 102 - 2 = 100 độ chia (ứng với 100°C thực tế, tức mỗi độ chia trên nhiệt kế sai ứng đúng bằng 1°C thực tế).\n- Công thức hiệu chỉnh: t_thực = t' - 2°C.\n- Khi t' = 42°C thì nhiệt độ thực tế là: t_thực = 42 - 2 = 40°C.",
    },
  ],
};

export default extra;
