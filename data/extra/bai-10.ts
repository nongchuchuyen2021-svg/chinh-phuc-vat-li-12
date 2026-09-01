import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một khối khí lí tưởng chứa trong xilanh có pittông tự do dịch chuyển không ma sát dưới áp suất khí quyển không đổi p₀ = 1 atm. Ban đầu khí ở nhiệt độ 27°C và có thể tích V₁ = 2,4 lít. Người ta đun nóng khối khí đến nhiệt độ 127°C.",
      statements: [
        {
          text: "Quá trình biến đổi trạng thái của khối khí trong xilanh là quá trình đẳng áp.",
          answer: true,
          explain: "Đúng. Pittông tự do không ma sát cân bằng với áp suất ngoài nên áp suất trong xilanh không đổi.",
        },
        {
          text: "Nhiệt độ tuyệt đối ban đầu của khối khí là T₁ = 300 K và nhiệt độ lúc sau là T₂ = 400 K.",
          answer: true,
          explain: "Đúng. T₁ = 27 + 273 = 300 K; T₂ = 127 + 273 = 400 K.",
        },
        {
          text: "Thể tích của khối khí sau khi đun nóng là V₂ = 3,2 lít.",
          answer: true,
          explain: "Đúng. V₂ = (V₁ . T₂) / T₁ = (2,4 . 400) / 300 = 3,2 lít.",
        },
        {
          text: "Trong quá trình đun nóng này, khối khí không thực hiện công lên môi trường ngoài.",
          answer: false,
          explain: "Sai. Khí dãn nở đẩy pittông dịch chuyển nên khối khí thực hiện công A' = p . ΔV = 10⁵ . (3,2 - 2,4).10⁻³ = 80 J.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về định luật Charles và sự biến đổi thể tích chất khí theo nhiệt độ.",
      statements: [
        {
          text: "Trong định luật Charles, thể tích khí tỉ lệ thuận với nhiệt độ tính theo thang Celsius (°C).",
          answer: false,
          explain: "Sai. Thể tích tỉ lệ thuận với nhiệt độ tuyệt đối T tính theo thang Kelvin (K), không phải độ C.",
        },
        {
          text: "Đường đẳng áp kéo dài về 0 K sẽ đi qua gốc toạ độ O trên hệ toạ độ (V, T).",
          answer: true,
          explain: "Đúng. Theo phương trình V = C.T, khi T = 0 K thì V tiến về 0.",
        },
        {
          text: "Khí cầu nóng bay lên được là do khi đốt nóng không khí bên trong, không khí dãn nở làm giảm khối lượng riêng của khối khí bên trong khí cầu.",
          answer: true,
          explain: "Đúng. Khi nung nóng đẳng áp, thể tích tăng => khối lượng riêng D = m/V giảm nhỏ hơn không khí bên ngoài tạo lực nâng Archimedes.",
        },
        {
          text: "Ở nhiệt độ phòng, nếu đun nóng chất khí tăng thêm 1°C thì thể tích của nó tăng thêm một lượng bằng 1/273 thể tích ở 0°C.",
          answer: true,
          explain: "Đúng. Hệ số nở thể tích của chất khí là β ≈ 1/273 K⁻¹.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao khi sản xuất bình xịt aerosol (như bình xịt muỗi, keo xịt tóc, bình sơn xịt), nhà sản xuất luôn in cảnh báo: 'Không được ném bình vào lửa hoặc để nơi có nhiệt độ trên 50°C ngay cả khi bình đã hết'?",
      answer:
        "- Bình xịt kim loại có thể tích cố định (V = hằng số, quá trình đẳng tích).\n- Bên trong bình luôn còn lại một lượng khí nén hoặc khí đẩy. Khi nhiệt độ tăng cao (ví dụ ném vào lửa), theo định luật về quá trình đẳng tích (p/T = hằng số), áp suất của khối khí bên trong bình tăng rất nhanh tỉ lệ thuận với nhiệt độ tuyệt đối T.\n- Áp suất tăng vượt quá độ bền cơ học của vỏ bình kim loại sẽ gây nổ phá huỷ vỏ bình dữ dội, các mảnh kim loại văng ra gây nguy hiểm tính mạng và dễ gây hoả hoạn.",
    },
    {
      id: "es2",
      q: "Một bình thuỷ tinh có dung tích V₀ = 1 lít chứa đầy không khí ở 27°C. Người ta nung nóng bình đến nhiệt độ 127°C ở áp suất khí quyển không đổi. Tính thể tích không khí thoát ra khỏi bình (tính ở nhiệt độ 127°C và áp suất khí quyển)?",
      answer:
        "1. Xác định trạng thái ban đầu của lượng khí trong bình:\n   - V₁ = V₀ = 1 lít\n   - T₁ = 27 + 273 = 300 K\n\n2. Khi đun nóng đẳng áp lên T₂ = 127 + 273 = 400 K:\n   - Thể tích của lượng khí này dãn nở thành:\n     V₂ = (V₁ . T₂) / T₁ = (1 . 400) / 300 = 4/3 lít ≈ 1,333 lít.\n\n3. Thể tích khí thoát ra ngoài bình ở 127°C:\n   - ΔV = V₂ - V₀ = 4/3 - 1 = 1/3 lít ≈ 0,333 lít (333,3 cm³).\n- Kết luận: Có khoảng 0,333 lít không khí đã thoát ra khỏi bình.",
    },
  ],
};

export default extra;
