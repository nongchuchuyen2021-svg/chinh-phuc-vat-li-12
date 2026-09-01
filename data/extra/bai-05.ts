import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Tiến hành đun nóng một mẫu thiếc (Sn) nguyên chất nặng 0,2 kg từ nhiệt độ phòng 25°C đến khi nóng chảy hoàn toàn. Cho biết: nhiệt độ nóng chảy của thiếc là 232°C, nhiệt dung riêng của thiếc rắn là c = 230 J/(kg.K), nhiệt nóng chảy riêng của thiếc là λ = 59.000 J/kg.",
      statements: [
        {
          text: "Nhiệt lượng cần thiết để đưa 0,2 kg thiếc từ 25°C lên nhiệt độ nóng chảy 232°C là 9.522 J.",
          answer: true,
          explain: "Đúng. Q₁ = m.c.Δt = 0,2 . 230 . (232 - 25) = 0,2 . 230 . 207 = 9.522 J.",
        },
        {
          text: "Nhiệt lượng cần cung cấp để 0,2 kg thiếc nóng chảy hoàn toàn ở 232°C là 11.800 J.",
          answer: true,
          explain: "Đúng. Q₂ = λ . m = 59.000 . 0,2 = 11.800 J.",
        },
        {
          text: "Tổng nhiệt lượng cần cung cấp cho toàn bộ quá trình từ 25°C đến khi nóng chảy hoàn toàn là 21.322 J.",
          answer: true,
          explain: "Đúng. Q_tổng = Q₁ + Q₂ = 9.522 + 11.800 = 21.322 J.",
        },
        {
          text: "Trong suốt giai đoạn thiếc đang nóng chảy ở 232°C, nội năng của khối thiếc không thay đổi vì nhiệt độ không đổi.",
          answer: false,
          explain: "Sai. Nhiệt lượng hấp thụ trong giai đoạn này dùng để phá vỡ mạng tinh thể làm tăng thế năng phân tử, do đó nội năng của khối thiếc tăng lên.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về quá trình chuyển thể nóng chảy và đông đặc của các chất rắn trong tự nhiên.",
      statements: [
        {
          text: "Mọi chất rắn đều có nhiệt độ nóng chảy xác định ở áp suất khí quyển chuẩn.",
          answer: false,
          explain: "Sai. Chỉ chất rắn kết tinh mới có nhiệt độ nóng chảy xác định, chất rắn vô định hình thì không.",
        },
        {
          text: "Đơn vị của nhiệt nóng chảy riêng trong hệ SI là J/kg.",
          answer: true,
          explain: "Đúng. λ = Q / m nên có đơn vị là J/kg.",
        },
        {
          text: "Quá trình đông đặc là quá trình ngược lại của quá trình nóng chảy và là quá trình toả nhiệt.",
          answer: true,
          explain: "Đúng. Khi chất lỏng đông đặc thành chất rắn ở nhiệt độ đông đặc, nó toả ra nhiệt lượng Q = λ.m.",
        },
        {
          text: "Nhiệt nóng chảy riêng của một chất phụ thuộc vào khối lượng của vật chất đó.",
          answer: false,
          explain: "Sai. Nhiệt nóng chảy riêng là hằng số vật lí đặc trưng cho bản chất của chất, không phụ thuộc vào khối lượng của mẫu đo.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao người ta thường dùng nước đá (băng) để ướp lạnh và bảo quản hải sản tươi sống thay vì dùng nước lạnh ở 0°C?",
      answer:
        "- Để 1 kg nước lạnh ở 0°C tăng nhiệt độ lên 1°C, nó chỉ thu nhiệt lượng Q = m.c.Δt = 1 . 4200 . 1 = 4200 J.\n- Trong khi đó, để 1 kg nước đá ở 0°C tan hoàn toàn thành nước ở 0°C, nó thu một nhiệt lượng khổng lồ từ hải sản: Q = λ . m = 334.000 . 1 = 334.000 J (gấp gần 80 lần).\n- Do đó, nước đá có khả năng hấp thụ nhiệt lượng rất lớn từ môi trường và hải sản trong khi vẫn duy trì nhiệt độ ổn định ở 0°C trong suốt thời gian tan, giúp giữ hải sản tươi ngon trong thời gian dài.",
    },
    {
      id: "es2",
      q: "Thả 0,1 kg nước đá ở 0°C vào một cốc chứa 0,4 kg nước ở 30°C trong bình cách nhiệt. Bỏ qua nhiệt dung của cốc. Cho c_nước = 4200 J/(kg.K), λ_băng = 3,34.10⁵ J/kg. Nước đá có tan hết không và nhiệt độ cuối cùng của hệ là bao nhiêu?",
      answer:
        "1. Nhiệt lượng cần để làm tan hoàn toàn 0,1 kg nước đá ở 0°C:\n   Q_tan = λ . m_đá = 3,34 . 10⁵ . 0,1 = 33.400 J.\n\n2. Nhiệt lượng tối đa mà 0,4 kg nước toả ra khi hạ nhiệt độ từ 30°C xuống 0°C:\n   Q_toả_max = m_nước . c . (30 - 0) = 0,4 . 4200 . 30 = 50.400 J.\n\n3. So sánh: Vì Q_toả_max (50.400 J) > Q_tan (33.400 J) nên nước đá tan hết hoàn toàn và nhiệt độ cân bằng t_cb > 0°C.\n\n4. Phương trình cân bằng nhiệt:\n   Q_tan + m_đá . c . (t_cb - 0) = m_nước . c . (30 - t_cb)\n   => 33.400 + 0,1 . 4200 . t_cb = 0,4 . 4200 . (30 - t_cb)\n   => 33.400 + 420 t_cb = 50.400 - 1680 t_cb\n   => 2100 t_cb = 17.000 => t_cb ≈ 8,1°C.\n- Kết luận: Nước đá tan hết hoàn toàn và nhiệt độ cân bằng của hệ là khoảng 8,1°C.",
    },
  ],
};

export default extra;
