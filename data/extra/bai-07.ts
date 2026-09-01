import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một khối nước đá có khối lượng 0,5 kg ở -10°C được cấp nhiệt bởi một bếp điện có công suất không đổi 500 W. Cho biết c_đá = 2100 J/(kg.K), c_nước = 4200 J/(kg.K), λ_đá = 3,34.10⁵ J/kg. Giả sử 100% nhiệt lượng từ bếp truyền vào khối nước đá.",
      statements: [
        {
          text: "Thời gian để đưa khối nước đá từ -10°C lên 0°C là 21 giây.",
          answer: true,
          explain: "Đúng. Q₁ = m.c_đá.Δt = 0,5 . 2100 . 10 = 10.500 J. t₁ = Q₁ / P = 10.500 / 500 = 21 s.",
        },
        {
          text: "Thời gian để làm nóng chảy hoàn toàn 0,5 kg nước đá ở 0°C là 334 giây.",
          answer: true,
          explain: "Đúng. Q₂ = λ . m = 3,34 . 10⁵ . 0,5 = 167.000 J. t₂ = Q₂ / P = 167.000 / 500 = 334 s.",
        },
        {
          text: "Tại thời điểm t = 200 giây kể từ khi bắt đầu đun, toàn bộ nước đá đã tan hoàn toàn thành nước lỏng.",
          answer: false,
          explain: "Sai. Tổng thời gian để tan hết là t₁ + t₂ = 21 + 334 = 355 s. Tại 200 s nước đá mới đang tan dở (hỗn hợp nước và đá ở 0°C).",
        },
        {
          text: "Độ nghiêng của đồ thị nhiệt độ theo thời gian trong giai đoạn nước lỏng nóng lên nhỏ hơn so với giai đoạn nước đá nóng lên.",
          answer: true,
          explain: "Đúng. Vì c_nước (4200) > c_đá (2100) nên với cùng công suất cấp nhiệt, tốc độ tăng nhiệt độ của nước lỏng chậm hơn (đồ thị thoải hơn).",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét nguyên lý hoạt động của một động cơ nhiệt lí tưởng thực hiện một chu trình khép kín trao đổi nhiệt lượng với hai nguồn nhiệt.",
      statements: [
        {
          text: "Trong một chu trình khép kín, độ biến thiên nội năng của tác nhân sau một chu trình bằng 0 (ΔU = 0).",
          answer: true,
          explain: "Đúng. Vì trạng thái đầu và cuối trùng nhau nên ΔU = 0.",
        },
        {
          text: "Công cơ học động cơ sinh ra trong một chu trình bằng hiệu nhiệt lượng nhận từ nguồn nóng và nhiệt lượng toả cho nguồn lạnh: A' = Q₁ - |Q₂|.",
          answer: true,
          explain: "Đúng. Áp dụng Định luật I cho chu trình khép kín: A' = Q₁ - Q₂.",
        },
        {
          text: "Hiệu suất nhiệt của động cơ có thể đạt tới 100% nếu loại bỏ hoàn toàn ma sát cơ học.",
          answer: false,
          explain: "Sai. Theo Định luật II nhiệt động lực học, động cơ nhiệt luôn phải toả nhiệt cho nguồn lạnh (|Q₂| > 0) nên hiệu suất luôn H < 100%.",
        },
        {
          text: "Đơn vị của hiệu suất động cơ nhiệt là Jun (J).",
          answer: false,
          explain: "Sai. Hiệu suất là đại lượng không thứ nguyên, thường biểu thị bằng phần trăm (%).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Thả một thỏi nhôm khối lượng 0,2 kg ở nhiệt độ 100°C vào một nhiệt lượng kế chứa 0,5 kg nước ở 20°C. Nhiệt kế và vỏ nhiệt lượng kế có nhiệt dung tổng cộng là C_kế = 100 J/K. Cho c_nhôm = 880 J/(kg.K), c_nước = 4180 J/(kg.K). Tính nhiệt độ cân bằng của hệ?",
      answer:
        "1. Nhiệt lượng thỏi nhôm toả ra khi hạ từ 100°C xuống t_cb:\n   Q_toả = m_nhôm . c_nhôm . (100 - t_cb) = 0,2 . 880 . (100 - t_cb) = 176 . (100 - t_cb) = 17.600 - 176 t_cb.\n\n2. Nhiệt lượng nước và nhiệt lượng kế thu vào khi tăng từ 20°C lên t_cb:\n   Q_thu = (m_nước . c_nước + C_kế) . (t_cb - 20) = (0,5 . 4180 + 100) . (t_cb - 20) = (2090 + 100) . (t_cb - 20) = 2190 . (t_cb - 20) = 2190 t_cb - 43.800.\n\n3. Phương trình cân bằng nhiệt: Q_toả = Q_thu\n   17.600 - 176 t_cb = 2190 t_cb - 43.800\n   => 2366 t_cb = 61.400 => t_cb ≈ 25,95°C ≈ 26°C.\n- Kết luận: Nhiệt độ cân bằng của hệ sau khi ổn định là khoảng 26°C.",
    },
    {
      id: "es2",
      q: "Một động cơ ô tô khi hoạt động tiêu thụ 10 lít xăng để chạy quãng đường 100 km trong 1,5 giờ với công suất trung bình 25 kW. Biết khối lượng riêng của xăng là D = 700 kg/m³ và năng suất toả nhiệt của xăng là q = 4,6.10⁷ J/kg. Tính hiệu suất của động cơ ô tô này?",
      answer:
        "1. Khối lượng xăng tiêu thụ: m = D . V = 700 . (10 . 10⁻³) = 7 kg.\n2. Nhiệt lượng toàn phần do xăng toả ra khi cháy hết:\n   Q_tp = q . m = 4,6 . 10⁷ . 7 = 3,22 . 10⁸ J = 322 MJ.\n3. Công có ích do động cơ sinh ra trong 1,5 giờ (5400 s):\n   A_ích = P . t = 25.000 . 5400 = 1,35 . 10⁸ J = 135 MJ.\n4. Hiệu suất của động cơ:\n   H = (A_ích / Q_tp) . 100% = (135 / 322) . 100% ≈ 41,9%.\n- Kết luận: Hiệu suất động cơ là khoảng 41,9%.",
    },
  ],
};

export default extra;
