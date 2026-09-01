import type { Question, TFQuestion } from "@/lib/types";

export type ShortAnswerQuestion = {
  id: string;
  q: string;
  answer: number;
  tolerance?: number;
  unit?: string;
  explain: string;
};

export type MockExam = {
  title: string;
  durationMinutes: number;
  totalPoints: number;
  part1: Question[]; // 18 câu trắc nghiệm nhiều lựa chọn (4,5 điểm)
  part2: TFQuestion[]; // 4 câu đúng/sai (4,0 điểm)
  part3: ShortAnswerQuestion[]; // 6 câu trả lời ngắn (1,5 điểm)
};

export const MOCK_EXAM_2025: MockExam = {
  title: "Đề thi thử Tốt nghiệp THPT môn Vật lí — Cấu trúc 2025 - 2026",
  durationMinutes: 50,
  totalPoints: 10.0,
  part1: [
    {
      id: "p1-01",
      q: "Theo mô hình động học phân tử, nhiệt độ của một vật là đại lượng đặc trưng cho:",
      options: [
        "Động năng chuyển động nhiệt trung bình của các phân tử.",
        "Tổng thế năng tương tác giữa các phân tử.",
        "Khối lượng của từng phân tử.",
        "Vận tốc chuyển động có hướng của toàn bộ vật thể.",
      ],
      answer: 0,
      explain: "Nhiệt độ là số đo động năng chuyển động nhiệt trung bình của các phân tử.",
    },
    {
      id: "p1-02",
      q: "Chất rắn kết tinh khác với chất rắn vô định hình ở đặc điểm nào sau đây?",
      options: [
        "Có cấu trúc mạng tinh thể tuần hoàn và nhiệt độ nóng chảy xác định.",
        "Không có hình dạng xác định.",
        "Dẫn điện và dẫn nhiệt kém hơn.",
        "Dễ bị nén ép hơn.",
      ],
      answer: 0,
      explain: "Chất rắn kết tinh có cấu trúc tuần hoàn và nhiệt độ nóng chảy xác định.",
    },
    {
      id: "p1-03",
      q: "Hệ thức của Định luật I nhiệt động lực học là:",
      options: ["ΔU = A + Q", "ΔU = A - Q", "Q = ΔU + A", "A = ΔU + Q"],
      answer: 0,
      explain: "Biểu thức định luật I: ΔU = A + Q.",
    },
    {
      id: "p1-04",
      q: "Nhiệt nóng chảy riêng λ của một chất có đơn vị đo chuẩn trong hệ SI là:",
      options: ["J/kg", "J/(kg.K)", "J", "W/kg"],
      answer: 0,
      explain: "λ = Q / m nên có đơn vị là Jun trên kilôgam (J/kg).",
    },
    {
      id: "p1-05",
      q: "Ở nhiệt độ không đổi, áp suất của một khối lượng khí lí tưởng xác định tỉ lệ nghịch với thể tích của nó. Đây là nội dung của định luật:",
      options: ["Định luật Boyle", "Định luật Charles", "Định luật Faraday", "Định luật Lenz"],
      answer: 0,
      explain: "Định luật Boyle phát biểu cho quá trình đẳng nhiệt: p . V = hằng số.",
    },
    {
      id: "p1-06",
      q: "Phương trình trạng thái của một lượng khí lí tưởng xác định là:",
      options: ["(p . V) / T = hằng số", "(p . T) / V = hằng số", "(V . T) / p = hằng số", "p . V . T = hằng số"],
      answer: 0,
      explain: "Phương trình Clapeyron: (p . V) / T = hằng số.",
    },
    {
      id: "p1-07",
      q: "Động năng tịnh tiến trung bình của phân tử khí lí tưởng ở nhiệt độ tuyệt đối T là:",
      options: ["E_d = (3/2) . k . T", "E_d = (1/2) . k . T", "E_d = 3 . k . T", "E_d = (3/2) . R . T"],
      answer: 0,
      explain: "E_d = (3/2) . k . T với k là hằng số Boltzmann.",
    },
    {
      id: "p1-08",
      q: "Đường sức từ của từ trường tĩnh có tính chất:",
      options: [
        "Là những đường cong khép kín hoặc vô hạn ở hai đầu.",
        "Cắt nhau tại các cực của nam châm.",
        "Bắt đầu từ cực Nam và kết thúc ở cực Bắc bên ngoài nam châm.",
        "Luôn là những đường thẳng song song cách đều.",
      ],
      answer: 0,
      explain: "Từ trường là trường xoáy nên đường sức từ luôn là những đường cong khép kín.",
    },
    {
      id: "p1-09",
      q: "Lực từ tác dụng lên đoạn dây dẫn thẳng mang dòng điện I dài L đặt vuông góc với từ trường đều B là:",
      options: ["F = B . I . L", "F = B . I / L", "F = I . L / B", "F = 0"],
      answer: 0,
      explain: "F = B . I . L . sin(90°) = B . I . L.",
    },
    {
      id: "p1-10",
      q: "Từ thông qua khung dây phẳng diện tích S đặt trong từ trường đều B đạt giá trị cực đại khi:",
      options: [
        "Véc-tơ pháp tuyến n⃗ của khung song song với véc-tơ cảm ứng từ B⃗ (α = 0°).",
        "Mặt phẳng khung dây song song với véc-tơ cảm ứng từ B⃗.",
        "Góc giữa n⃗ và B⃗ bằng 90°.",
        "Cảm ứng từ B biến thiên về 0.",
      ],
      answer: 0,
      explain: "Φ = B . S . cos(0°) = B . S = Φ_max.",
    },
    {
      id: "p1-11",
      q: "Độ lớn suất điện động cảm ứng trong mạch kín tỉ lệ với:",
      options: [
        "Tốc độ biến thiên từ thông qua mạch.",
        "Độ lớn diện tích mạch kín.",
        "Điện trở của cuộn dây.",
        "Khối lượng của dây dẫn.",
      ],
      answer: 0,
      explain: "|e_c| = |ΔΦ / Δt| theo định luật Faraday.",
    },
    {
      id: "p1-12",
      q: "Máy biến áp lí tưởng có tỉ số số vòng dây N₂/N₁ = 5. Nếu điện áp hiệu dụng ở cuộn sơ cấp là 20 V thì điện áp hiệu dụng ở hai đầu cuộn thứ cấp để hở là:",
      options: ["100 V", "4 V", "50 V", "25 V"],
      answer: 0,
      explain: "U₂ = U₁ . (N₂ / N₁) = 20 . 5 = 100 V.",
    },
    {
      id: "p1-13",
      q: "Sóng điện từ lan truyền được trong:",
      options: [
        "Cả chân không và các môi trường vật chất trong suốt.",
        "Chỉ trong chất rắn đàn hồi.",
        "Chỉ trong chất khí và chất lỏng.",
        "Chỉ trong dây dẫn điện kim loại.",
      ],
      answer: 0,
      explain: "Sóng điện từ truyền được trong chân không với tốc độ c = 3.10⁸ m/s và trong các môi trường điện môi trong suốt.",
    },
    {
      id: "p1-14",
      q: "Hạt nhân nguyên tử ^14_6C có cấu tạo gồm:",
      options: [
        "6 proton và 8 neutron.",
        "6 proton và 14 neutron.",
        "8 proton và 6 neutron.",
        "14 proton và 6 neutron.",
      ],
      answer: 0,
      explain: "Z = 6 proton, N = A - Z = 14 - 6 = 8 neutron.",
    },
    {
      id: "p1-15",
      q: "Đại lượng đặc trưng cho độ bền vững của một hạt nhân nguyên tử là:",
      options: [
        "Năng lượng liên kết riêng (W_lkr = W_lk / A).",
        "Năng lượng liên kết toàn phần (W_lk).",
        "Độ hụt khối (Δm).",
        "Số proton (Z).",
      ],
      answer: 0,
      explain: "Năng lượng liên kết riêng càng lớn thì hạt nhân càng bền vững.",
    },
    {
      id: "p1-16",
      q: "Tia phóng xạ nào sau đây là sóng điện từ có năng lượng rất cao?",
      options: ["Tia gamma (γ)", "Tia alpha (α)", "Tia beta âm (β⁻)", "Tia beta dương (β⁺)"],
      answer: 0,
      explain: "Tia gamma là sóng điện từ photon có bước sóng cực ngắn và năng lượng cao.",
    },
    {
      id: "p1-17",
      q: "Trong phản ứng hạt nhân, định luật nào sau đây KHÔNG ĐƯỢC bảo toàn?",
      options: [
        "Định luật bảo toàn khối lượng nghỉ.",
        "Định luật bảo toàn điện tích.",
        "Định luật bảo toàn số nucleon (số khối A).",
        "Định luật bảo toàn động lượng.",
      ],
      answer: 0,
      explain: "Tổng khối lượng nghỉ trước và sau phản ứng hạt nhân nói chung không bằng nhau (chuyển hoá thành năng lượng toả ra/thu vào).",
    },
    {
      id: "p1-18",
      q: "Phản ứng nhiệt hạch là phản ứng hạt nhân:",
      options: [
        "Kết hợp hai hạt nhân rất nhẹ thành hạt nhân nặng hơn ở nhiệt độ cực cao.",
        "Phân rã tự phát của hạt nhân nặng.",
        "Bắn phá hạt nhân Urani bằng neutron chậm.",
        "Toả nhiệt khi đốt cháy nhiên liệu hoá thạch.",
      ],
      answer: 0,
      explain: "Nhiệt hạch là sự tổng hợp hai hạt nhân nhẹ (H, D, T) thành hạt nhân nặng hơn ở nhiệt độ hàng trăm triệu độ.",
    },
  ],
  part2: [
    {
      id: "p2-01",
      context:
        "Một khối khí lí tưởng đơn nguyên tử thực hiện chu trình biến đổi trạng thái khép kín trong xilanh có pittông di động: Từ trạng thái 1 (1 atm, 2 L, 300 K) dãn đẳng nhiệt sang trạng thái 2 (0,5 atm, 4 L, 300 K), sau đó nén đẳng áp về trạng thái 3 (0,5 atm, 2 L, 150 K), rồi nung nóng đẳng tích trở lại trạng thái 1 ban đầu.",
      statements: [
        {
          text: "Trong quá trình (1) -> (2), độ biến thiên nội năng của khối khí bằng 0.",
          answer: true,
          explain: "Đúng. Quá trình đẳng nhiệt T = 300 K không đổi nên ΔU = 0.",
        },
        {
          text: "Trong quá trình (2) -> (3), nhiệt độ tuyệt đối của khối khí giảm từ 300 K xuống 150 K.",
          answer: true,
          explain: "Đúng. Đẳng áp V tỉ lệ thuận T: V giảm 2 lần thì T giảm 2 lần (300 K -> 150 K).",
        },
        {
          text: "Trong quá trình (3) -> (1), khối khí không thực hiện công cơ học.",
          answer: true,
          explain: "Đúng. Đẳng tích thể tích không đổi nên công cơ học A = 0.",
        },
        {
          text: "Sau một chu trình khép kín, khối khí sinh công cơ học có độ lớn bằng 0.",
          answer: false,
          explain: "Sai. Diện tích hình chu trình trên đồ thị (p, V) khác 0 nên công sinh ra sau 1 chu trình A' > 0.",
        },
      ],
    },
    {
      id: "p2-02",
      context:
        "Một bình đun nước điện cách nhiệt chứa 1,0 kg nước ở 20°C. Thả vào bình một khối nước đá nặng 0,5 kg ở -10°C. Cung cấp nhiệt lượng liên tục từ dây điện trở công suất 1000 W. Cho c_nước = 4200 J/(kg.K), c_đá = 2100 J/(kg.K), λ_đá = 3,34.10⁵ J/kg, L_nước = 2,26.10⁶ J/kg. Bỏ qua hao phí nhiệt.",
      statements: [
        {
          text: "Nhiệt lượng cần để đưa khối nước đá từ -10°C lên 0°C là 10.500 J.",
          answer: true,
          explain: "Đúng. Q = 0,5 . 2100 . 10 = 10.500 J.",
        },
        {
          text: "Nhiệt lượng cần để làm nóng chảy hoàn toàn 0,5 kg nước đá ở 0°C là 167.000 J.",
          answer: true,
          explain: "Đúng. Q = 0,5 . 3,34.10⁵ = 167.000 J.",
        },
        {
          text: "Thời gian kể từ khi bật bếp đến lúc nước đá tan hết hoàn toàn nhỏ hơn 150 giây.",
          answer: false,
          explain: "Sai. Tổng nhiệt để đá lên 0°C và tan hết là 10.500 + 167.000 = 177.500 J. Thời gian t = 177.500 / 1000 = 177,5 s > 150 s.",
        },
        {
          text: "Nhiệt lượng cần để đun sôi 1,5 kg nước từ 0°C lên 100°C là 630.000 J.",
          answer: true,
          explain: "Đúng. Q = 1,5 . 4200 . 100 = 630.000 J.",
        },
      ],
    },
    {
      id: "p2-03",
      context:
        "Một máy biến áp lí tưởng có cuộn sơ cấp 2000 vòng mắc vào điện áp xoay chiều hiệu dụng 220 V. Cuộn thứ cấp gồm 100 vòng được nối với điện trở tải R = 11 Ω.",
      statements: [
        {
          text: "Điện áp hiệu dụng ở hai đầu cuộn thứ cấp là 11 V.",
          answer: true,
          explain: "Đúng. U₂ = 220 . (100 / 2000) = 11 V.",
        },
        {
          text: "Cường độ dòng điện hiệu dụng trong cuộn thứ cấp là 1 A.",
          answer: true,
          explain: "Đúng. I₂ = U₂ / R = 11 / 11 = 1 A.",
        },
        {
          text: "Cường độ dòng điện hiệu dụng ở cuộn sơ cấp là 0,05 A.",
          answer: true,
          explain: "Đúng. I₁ = I₂ . (N₂ / N₁) = 1 . (100 / 2000) = 0,05 A.",
        },
        {
          text: "Công suất tiêu thụ ở mạch sơ cấp lớn gấp 20 lần công suất tiêu thụ ở mạch thứ cấp.",
          answer: false,
          explain: "Sai. Máy biến áp lí tưởng bỏ qua hao phí nên P₁ = P₂ = 11 W.",
        },
      ],
    },
    {
      id: "p2-04",
      context:
        "Xét chất phóng xạ Poloni (^210_84Po) phân rã alpha (α) thành hạt nhân Chì (^206_82Pb) bền với chu kì bán rã T = 138 ngày. Ban đầu có một mẫu Poloni nguyên chất có khối lượng m₀ = 4,2 gam.",
      statements: [
        {
          text: "Hạt phóng xạ phát ra là hạt nhân Heli (^4_2He).",
          answer: true,
          explain: "Đúng. Phóng xạ alpha phát ra hạt nhân Heli.",
        },
        {
          text: "Sau thời gian 276 ngày, khối lượng Poloni còn lại trong mẫu là 1,05 gam.",
          answer: true,
          explain: "Đúng. t = 2T => m = m₀ / 4 = 4,2 / 4 = 1,05 gam.",
        },
        {
          text: "Số hạt nhân Chì tạo thành sau 276 ngày bằng số hạt nhân Poloni đã bị phân rã.",
          answer: true,
          explain: "Đúng. Cứ 1 hạt Po phân rã tạo ra 1 hạt Pb con.",
        },
        {
          text: "Độ phóng xạ của mẫu chất sau 138 ngày giảm đi 4 lần so với ban đầu.",
          answer: false,
          explain: "Sai. Sau 1 chu kì (138 ngày), độ phóng xạ H giảm đi 2 lần (sau 2 chu kì mới giảm 4 lần).",
        },
      ],
    },
  ],
  part3: [
    {
      id: "p3-01",
      q: "Một ấm đun nước điện công suất 1500 W đun sôi 2,0 kg nước từ 25°C đến 100°C. Biết nhiệt dung riêng của nước là 4200 J/(kg.K). Bỏ qua mọi hao phí nhiệt. Thời gian đun sôi nước là bao nhiêu giây? (làm tròn đến hàng đơn vị)",
      answer: 420,
      tolerance: 1,
      unit: "giây",
      explain: "Q = m.c.Δt = 2,0 . 4200 . 75 = 630.000 J. Thời gian: t = Q / P = 630.000 / 1500 = 420 s.",
    },
    {
      id: "p3-02",
      q: "Một khối khí lí tưởng có thể tích 6 lít ở áp suất 1,5 atm. Nén đẳng nhiệt khối khí đến khi thể tích còn lại 2 lít. Áp suất của khối khí sau khi nén là bao nhiêu atm? (kết quả ghi dạng số thập phân)",
      answer: 4.5,
      tolerance: 0.1,
      unit: "atm",
      explain: "p₂ = (p₁ . V₁) / V₂ = (1,5 . 6) / 2 = 4,5 atm.",
    },
    {
      id: "p3-03",
      q: "Một đoạn dây dẫn thẳng dài 0,25 m mang dòng điện I = 4 A đặt vuông góc với từ trường đều B = 0,2 T. Lực từ tác dụng lên đoạn dây dẫn có độ lớn bằng bao nhiêu Newton? (kết quả ghi dạng số thập phân)",
      answer: 0.2,
      tolerance: 0.01,
      unit: "N",
      explain: "F = B . I . L = 0,2 . 4 . 0,25 = 0,2 N.",
    },
    {
      id: "p3-04",
      q: "Một khung dây phẳng có diện tích S = 50 cm² gồm 200 vòng dây. Cảm ứng từ vuông góc với mặt phẳng khung biến thiên giảm đều từ 0,4 T về 0 T trong thời gian 0,05 giây. Độ lớn suất điện động cảm ứng xuất hiện trong khung là bao nhiêu Volt?",
      answer: 8,
      tolerance: 0.1,
      unit: "V",
      explain: "S = 50.10⁻⁴ m². |e_c| = N . S . |ΔB / Δt| = 200 . (50.10⁻⁴) . (0,4 / 0,05) = 1 . 8 = 8 V.",
    },
    {
      id: "p3-05",
      q: "Một sóng vô tuyến có tần số f = 15 MHz lan truyền trong chân không với tốc độ c = 3.10⁸ m/s. Bước sóng của sóng này là bao nhiêu mét?",
      answer: 20,
      tolerance: 0.1,
      unit: "m",
      explain: "λ = c / f = (3 . 10⁸) / (15 . 10⁶) = 20 m.",
    },
    {
      id: "p3-06",
      q: "Hạt nhân Heli (^4_2He) có năng lượng liên kết là 28,4 MeV. Năng lượng liên kết riêng của hạt nhân Heli là bao nhiêu MeV/nucleon? (kết quả ghi dạng số thập phân)",
      answer: 7.1,
      tolerance: 0.05,
      unit: "MeV/nucleon",
      explain: "W_lkr = W_lk / A = 28,4 / 4 = 7,1 MeV/nucleon.",
    },
  ],
};
