import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một máy biến áp lí tưởng có cuộn sơ cấp N₁ = 1000 vòng và cuộn thứ cấp N₂ = 200 vòng. Đặt vào hai đầu cuộn sơ cấp một điện áp xoay chiều có giá trị hiệu dụng U₁ = 220 V. Mạch thứ cấp nối với một điện trở thuần R = 22 Ω.",
      statements: [
        {
          text: "Điện áp hiệu dụng ở hai đầu mạch thứ cấp là U₂ = 44 V.",
          answer: true,
          explain: "Đúng. U₂ = U₁ . (N₂ / N₁) = 220 . (200 / 1000) = 44 V.",
        },
        {
          text: "Cường độ dòng điện hiệu dụng trong mạch thứ cấp là I₂ = 2 A.",
          answer: true,
          explain: "Đúng. I₂ = U₂ / R = 44 / 22 = 2 A.",
        },
        {
          text: "Công suất tiêu thụ của mạch thứ cấp là 88 W.",
          answer: true,
          explain: "Đúng. P₂ = U₂ . I₂ = 44 . 2 = 88 W.",
        },
        {
          text: "Cường độ dòng điện hiệu dụng ở cuộn sơ cấp là I₁ = 10 A.",
          answer: false,
          explain: "Sai. I₁ = I₂ . (N₂ / N₁) = 2 . (200 / 1000) = 0,4 A.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét sự truyền sóng điện từ và tác dụng của từ trường lên dòng điện.",
      statements: [
        {
          text: "Sóng điện từ mang năng lượng và có thể gây ra áp suất lên các bề mặt mà nó chiếu tới (áp suất ánh sáng).",
          answer: true,
          explain: "Đúng. Sóng điện từ mang xung lượng nên gây ra áp suất bức xạ khi phản xạ hoặc hấp thụ.",
        },
        {
          text: "Lực từ tác dụng lên đoạn dây dẫn đổi chiều khi ta đổi chiều đồng thời cả từ trường B và dòng điện I.",
          answer: false,
          explain: "Sai. Theo quy tắc bàn tay trái, đổi chiều cả B và I thì chiều của lực từ F giữ nguyên không đổi.",
        },
        {
          text: "Tốc độ truyền sóng điện từ trong nước nhỏ hơn tốc độ truyền trong chân không.",
          answer: true,
          explain: "Đúng. Trong nước (chiết suất n ≈ 1,33), tốc độ v = c/n ≈ 2,25.10⁸ m/s < c.",
        },
        {
          text: "Điện trường xoáy do từ trường biến thiên sinh ra là trường thế và có thể xác định được điện thế tại mỗi điểm.",
          answer: false,
          explain: "Sai. Điện trường xoáy có các đường sức khép kín nên công dịch chuyển trên đường cong kín khác 0, không phải là trường thế và không có khái niệm điện thế.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Một khung dây phẳng có diện tích S = 50 cm² gồm N = 200 vòng dây quay đều với tốc độ 1500 vòng/phút trong một từ trường đều có cảm ứng từ B = 0,04 T quanh một trục nằm trong mặt phẳng khung và vuông góc với các đường sức từ. Hãy viết biểu thức của suất điện động cảm ứng e xuất hiện trong khung dây, chọn gốc thời gian t = 0 lúc véc-tơ pháp tuyến n⃗ của khung cùng hướng với véc-tơ cảm ứng từ B⃗?",
      answer:
        "1. Tính tốc độ góc ω của khung dây:\n   - n = 1500 / 60 = 25 vòng/s\n   - ω = 2π . n = 2π . 25 = 50π rad/s ≈ 157,1 rad/s.\n\n2. Tính từ thông cực đại qua khung dây:\n   - S = 50 . 10⁻⁴ = 5 . 10⁻³ m²\n   - Φ₀ = N . B . S = 200 . 0,04 . (5 . 10⁻³) = 0,04 Wb.\n\n3. Biểu thức từ thông theo thời gian (với φ₀ = 0 do n⃗ // B⃗ lúc t = 0):\n   - Φ(t) = Φ₀ . cos(ωt) = 0,04 . cos(50πt) (Wb).\n\n4. Biểu thức suất điện động cảm ứng:\n   - E₀ = ω . Φ₀ = 50π . 0,04 = 2π V ≈ 6,28 V.\n   - e(t) = - dΦ/dt = E₀ . sin(ωt) = E₀ . cos(ωt - π/2)\n   - e(t) = 2π . cos(50πt - π/2) (V)  hay  e(t) = 2π . sin(50πt) (V).\n- Kết luận: Biểu thức suất điện động là e = 2π . cos(50πt - π/2) (V).",
    },
    {
      id: "es2",
      q: "Điện năng từ một nhà máy thuỷ điện được truyền đến nơi tiêu thụ bằng đường dây tải điện một pha có tổng điện trở r = 20 Ω. Công suất phát của nhà máy là P = 2 MW. Điện áp hiệu dụng ở đầu ra của máy tăng áp tại nhà máy là U = 50 kV. Hệ số công suất cosφ = 1. Tính:\n a) Công suất hao phí do toả nhiệt trên đường dây tải điện?\n b) Hiệu suất của quá trình truyền tải điện năng này?",
      answer:
        "1. Đổi đơn vị: P = 2 . 10⁶ W; U = 50 . 10³ V; r = 20 Ω; cosφ = 1.\n\n2. Tính công suất hao phí toả nhiệt trên đường dây:\n   - ΔP = (P² . r) / (U² . cos²φ)\n   - ΔP = ((2.10⁶)² . 20) / ((50.10³)² . 1) = (4.10¹² . 20) / (2,5.10⁹) = 8.10¹³ / 2,5.10⁹ = 32.000 W = 32 kW.\n\n3. Tính hiệu suất truyền tải điện năng:\n   - H = (P - ΔP) / P = (2000 kW - 32 kW) / 2000 kW = 1968 / 2000 = 0,984 = 98,4%.\n- Kết luận:\n a) Công suất hao phí là 32 kW.\n b) Hiệu suất truyền tải đạt 98,4%.",
    },
  ],
};

export default extra;
