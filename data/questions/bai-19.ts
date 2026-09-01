import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Theo thuyết điện từ trường của Maxwell, một từ trường biến thiên theo thời gian sẽ sinh ra xung quanh nó:",
    options: [
      "Một điện trường xoáy (có các đường sức khép kín).",
      "Một điện trường tĩnh.",
      "Một trường hấp dẫn.",
      "Các điện tích đứng yên.",
    ],
    answer: 0,
    explain: "Luận điểm 1 của Maxwell: Từ trường biến thiên theo thời gian sinh ra một điện trường xoáy (đường sức điện khép kín).",
  },
  {
    id: "q2",
    q: "Điểm khác biệt cơ bản giữa điện trường xoáy và điện trường tĩnh là:",
    options: [
      "Đường sức của điện trường xoáy là những đường cong khép kín, còn đường sức điện trường tĩnh là đường cong hở (bắt đầu ở điện tích dương, kết thúc ở điện tích âm).",
      "Điện trường xoáy không tác dụng lực lên điện tích.",
      "Điện trường xoáy chỉ tồn tại trong chất dẫn điện.",
      "Điện trường xoáy có cường độ bằng 0 ở mọi điểm.",
    ],
    answer: 0,
    explain:
      "Đường sức của điện trường tĩnh không khép kín (có điểm gốc và ngọn), trong khi đường sức của điện trường xoáy là những đường cong khép kín liên tục bao quanh các đường sức từ biến thiên.",
  },
  {
    id: "q3",
    q: "Sóng điện từ là:",
    options: [
      "Quá trình lan truyền của điện từ trường biến thiên trong không gian theo thời gian.",
      "Sự lan truyền của dao động cơ học trong môi trường vật chất đàn hồi.",
      "Chùm electron chuyển động tự do trong ống chân không.",
      "Dòng dịch chuyển có hướng của các ion trong chất điện phân.",
    ],
    answer: 0,
    explain: "Sóng điện từ là điện từ trường lan truyền trong không gian.",
  },
  {
    id: "q4",
    q: "Nhận định nào sau đây về đặc tính của sóng điện từ là SAI?",
    options: [
      "Sóng điện từ không thể lan truyền được trong môi trường chân không tuyệt đối.",
      "Sóng điện từ là sóng ngang.",
      "Tốc độ truyền sóng điện từ trong chân không là c ≈ 3.10⁸ m/s.",
      "Tại mỗi điểm dao động của véc-tơ E và véc-tơ B luôn đồng pha với nhau.",
    ],
    answer: 0,
    explain:
      "Sóng điện từ lan truyền rất tốt trong chân không với tốc độ lớn nhất c ≈ 3.10⁸ m/s (khác với sóng cơ học bắt buộc cần môi trường vật chất).",
  },
  {
    id: "q5",
    q: "Tại một điểm trong không gian có sóng điện từ truyền qua, véc-tơ cường độ điện trường E⃗, véc-tơ cảm ứng từ B⃗ và véc-tơ vận tốc truyền sóng v⃗ có quan hệ hình học:",
    options: [
      "Đôi một vuông góc với nhau tạo thành một tam diện thuận.",
      "Cùng phương và cùng chiều với nhau.",
      "E⃗ song song với B⃗ và cả hai vuông góc với v⃗.",
      "E⃗ hợp với B⃗ góc 45°.",
    ],
    answer: 0,
    explain:
      "Sóng điện từ là sóng ngang, tại mỗi điểm ba véc-tơ (E⃗, B⃗, v⃗) đôi một vuông góc với nhau và tạo thành một tam diện thuận (quy tắc bàn tay phải).",
  },
  {
    id: "q6",
    q: "Một đài phát thanh FM phát sóng vô tuyến có tần số f = 100 MHz. Lấy tốc độ ánh sáng trong chân không c = 3.10⁸ m/s. Bước sóng của sóng vô tuyến này là:",
    options: ["3 m", "30 m", "0,3 m", "300 m"],
    answer: 0,
    explain: "f = 100 MHz = 10⁸ Hz. Bước sóng λ = c / f = (3 . 10⁸) / 10⁸ = 3 m.",
  },
  {
    id: "q7",
    q: "Loại sóng vô tuyến nào sau đây có khả năng đâm xuyên qua tầng điện ly của khí quyển để truyền thông tin liên lạc giữa mặt đất và các vệ tinh nhân tạo ngoài vũ trụ?",
    options: ["Sóng cực ngắn (vi sóng).", "Sóng dài.", "Sóng trung.", "Sóng siêu âm."],
    answer: 0,
    explain:
      "Sóng cực ngắn (bước sóng từ vài mm đến vài mét) có năng lượng photon cao, không bị tầng điện ly phản xạ hay hấp thụ mà xuyên thẳng qua tầng điện ly ra ngoài không gian vũ trụ.",
  },
  {
    id: "q8",
    q: "Sóng điện từ truyền từ không khí vào một khối thuỷ tinh có chiết suất n = 1,5 thì:",
    options: [
      "Tần số không đổi, tốc độ truyền sóng và bước sóng đều giảm đi 1,5 lần.",
      "Tần số tăng 1,5 lần, tốc độ truyền sóng không đổi.",
      "Bước sóng tăng 1,5 lần, tốc độ truyền sóng giảm 1,5 lần.",
      "Cả tốc độ, tần số và bước sóng đều không thay đổi.",
    ],
    answer: 0,
    explain:
      "Khi truyền qua các môi trường khác nhau, tần số f luôn giữ nguyên không đổi. Tốc độ v = c/n giảm 1,5 lần nên bước sóng λ' = v/f = λ/n cũng giảm đi 1,5 lần.",
  },
  {
    id: "q9",
    q: "Mạng truyền thông di động thế hệ mới 5G và mạng Wi-Fi tốc độ cao trong gia đình sử dụng dải sóng vô tuyến thuộc loại nào?",
    options: ["Sóng cực ngắn (dải tần số GHz).", "Sóng dài.", "Sóng trung.", "Tia hồng ngoại xa."],
    answer: 0,
    explain:
      "Wi-Fi (băng tần 2,4 GHz, 5 GHz, 6 GHz) và mạng di động 4G/5G đều sử dụng dải sóng cực ngắn (vi sóng) có băng thông rộng, truyền tải được dữ liệu dung lượng lớn và tốc độ cao.",
  },
  {
    id: "q10",
    q: "Trong quá trình lan truyền của sóng điện từ, năng lượng của sóng điện từ được truyền đi dưới dạng:",
    options: [
      "Năng lượng điện trường và năng lượng từ trường dao động cùng pha, cùng lan truyền theo phương truyền sóng.",
      "Chỉ là động năng của các ion khí.",
      "Thế năng đàn hồi của môi trường chân không.",
      "Nhiệt lượng làm nóng trực tiếp không gian.",
    ],
    answer: 0,
    explain:
      "Sóng điện từ mang năng lượng gồm tổng mật độ năng lượng điện trường w_e = 1/2 ε E² và mật độ năng lượng từ trường w_b = 1/(2μ) B². Vì E⃗ và B⃗ trong sóng điện từ luôn dao động CÙNG PHA (khác với mạch dao động LC, nơi năng lượng điện và từ chuyển hoá lệch pha 90° cho nhau), hai mật độ năng lượng này cùng đạt cực đại, cùng triệt tiêu đồng thời và cùng lan truyền theo phương truyền sóng — không phải \"chuyển hoá qua lại\" như trong mạch LC.",
  },
];

export default questions;
