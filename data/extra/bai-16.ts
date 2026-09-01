import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một cuộn dây phẳng gồm N = 500 vòng dây, mỗi vòng có diện tích S = 50 cm² đặt trong từ trường đều có các đường sức từ vuông góc với mặt phẳng các vòng dây. Cho cảm ứng từ B giảm đều từ 0,5 T về 0,1 T trong khoảng thời gian Δt = 0,05 s. Điện trở toàn phần của cuộn dây là R = 4 Ω.",
      statements: [
        {
          text: "Góc hợp bởi véc-tơ cảm ứng từ B và véc-tơ pháp tuyến của mặt phẳng vòng dây là α = 0°.",
          answer: true,
          explain: "Đúng. Đường sức từ vuông góc với mặt phẳng vòng dây nên B⃗ cùng phương với pháp tuyến n⃗ (α = 0°).",
        },
        {
          text: "Độ biến thiên từ thông qua cuộn dây trong khoảng thời gian trên có độ lớn là 1,0 Wb.",
          answer: true,
          explain: "Đúng. |ΔΦ| = N . |ΔB| . S = 500 . (0,5 - 0,1) . 50.10⁻⁴ = 500 . 0,4 . 5.10⁻³ = 1,0 Wb.",
        },
        {
          text: "Độ lớn suất điện động cảm ứng xuất hiện trong cuộn dây là 20 V.",
          answer: true,
          explain: "Đúng. |e_c| = |ΔΦ / Δt| = 1,0 / 0,05 = 20 V.",
        },
        {
          text: "Cường độ dòng điện cảm ứng chạy qua cuộn dây trong khoảng thời gian trên là 10 A.",
          answer: false,
          explain: "Sai. Theo định luật Ohm: i_c = |e_c| / R = 20 / 4 = 5 A.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về hiện tượng cảm ứng điện từ và các định luật liên quan.",
      statements: [
        {
          text: "Khi từ thông qua một mạch kín tăng lên, từ trường do dòng điện cảm ứng sinh ra sẽ cùng chiều với từ trường ngoài.",
          answer: false,
          explain: "Sai. Theo định luật Lenz, khi từ thông tăng thì từ trường cảm ứng phải ngược chiều từ trường ngoài để chống lại sự tăng.",
        },
        {
          text: "Bếp từ nấu chín thức ăn nhờ nhiệt lượng toả ra từ dòng điện Foucault sinh ra trực tiếp ở đáy nồi bằng kim loại nhiễm từ.",
          answer: true,
          explain: "Đúng. Từ trường xoay chiều tần số cao tạo dòng Foucault mạnh làm nóng đáy nồi ferit.",
        },
        {
          text: "Suất điện động cảm ứng có giá trị càng lớn khi từ thông qua mạch biến thiên càng nhanh.",
          answer: true,
          explain: "Đúng. |e_c| = |ΔΦ/Δt| (tỉ lệ với tốc độ biến thiên từ thông).",
        },
        {
          text: "Nếu một mạch điện hở đặt trong từ trường biến thiên thì trong mạch chỉ có suất điện động cảm ứng mà không có dòng điện cảm ứng.",
          answer: true,
          explain: "Đúng. Mạch hở nên dòng điện i = 0, nhưng giữa hai đầu hở vẫn tồn tại hiệu điện thế / suất điện động cảm ứng.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Phát biểu Định luật Lenz về chiều của dòng điện cảm ứng. Dựa vào định luật này, hãy giải thích tại sao khi thả rơi một thỏi nam châm mạnh xuyên qua một ống đồng thẳng đứng, thỏi nam châm lại rơi rất chậm chạp như thể đang trôi trong chất lỏng đặc?",
      answer:
        "1. Phát biểu Định luật Lenz:\n- Dòng điện cảm ứng xuất hiện trong mạch kín có chiều sao cho từ trường do nó sinh ra có tác dụng chống lại sự biến thiên của từ thông ban đầu sinh ra nó.\n\n2. Giải thích hiện tượng nam châm rơi chậm trong ống đồng:\n- Khi thỏi nam châm rơi xuống bên trong ống đồng, từ thông qua các phần tiết diện của ống đồng biến thiên liên tục.\n- Sự biến thiên này sinh ra các dòng điện Foucault xoáy khép kín chạy trong thành ống đồng.\n- Theo định luật Lenz, các dòng Foucault này sinh ra một từ trường cảm ứng luôn có xu hướng chống lại sự dịch chuyển rơi của nam châm (tạo lực từ đẩy ở phía trước đầu rơi và lực hút ở phía sau đuôi nam châm).\n- Lực từ cản trở này hướng thẳng đứng lên trên, ngược chiều với trọng lực và gần như cân bằng với trọng lực, khiến thỏi nam châm rơi chậm đều rất êm ái.",
    },
    {
      id: "es2",
      q: "Một khung dây phẳng hình vuông cạnh a = 10 cm, gồm N = 200 vòng dây. Khung dây đặt trong từ trường đều vuông góc với mặt phẳng khung. Cảm ứng từ biến thiên theo thời gian theo quy luật B(t) = 0,05 + 0,2.t (với B tính bằng T, t tính bằng s). Tính suất điện động cảm ứng xuất hiện trong khung dây?",
      answer:
        "1. Diện tích một vòng dây: S = a² = 0,1² = 0,01 m² = 10⁻² m².\n2. Tốc độ biến thiên của cảm ứng từ theo thời gian:\n   dB/dt = ΔB/Δt = 0,2 T/s (hệ số góc đạo hàm theo thời gian).\n3. Độ lớn suất điện động cảm ứng trong khung dây:\n   |e_c| = N . (ΔB / Δt) . S . cos(0°)\n   |e_c| = 200 . 0,2 . 0,01 . 1 = 0,4 V.\n- Kết luận: Suất điện động cảm ứng xuất hiện trong khung dây là 0,4 V (không đổi theo thời gian).",
    },
  ],
};

export default extra;
