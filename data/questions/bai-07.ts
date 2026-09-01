import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Thả một quả cầu bằng đồng khối lượng 0,5 kg được nung nóng tới 100°C vào một cốc chứa 0,25 kg nước ở 20°C. Bỏ qua toả nhiệt ra cốc và môi trường. Cho c_đồng = 380 J/(kg.K), c_nước = 4200 J/(kg.K). Nhiệt độ cân bằng của hệ là:",
    options: ["32,3°C", "25,5°C", "40,0°C", "50,0°C"],
    answer: 0,
    explain:
      "Phương trình cân bằng nhiệt: m_đồng . c_đồng . (100 - t_cb) = m_nước . c_nước . (t_cb - 20) => 0,5 . 380 . (100 - t_cb) = 0,25 . 4200 . (t_cb - 20) => 190 . (100 - t_cb) = 1050 . (t_cb - 20) => 19000 - 190 t_cb = 1050 t_cb - 21000 => 1240 t_cb = 40000 => t_cb ≈ 32,26°C ≈ 32,3°C.",
  },
  {
    id: "q2",
    q: "Một bình đun siêu tốc công suất 1800 W có hiệu suất 85% đun sôi 1,5 kg nước từ 20°C đến 100°C. Cho c_nước = 4200 J/(kg.K). Thời gian đun là:",
    options: ["329 s", "280 s", "504 s", "380 s"],
    answer: 0,
    explain:
      "Nhiệt có ích: Q = m.c.Δt = 1,5 . 4200 . 80 = 504.000 J. Điện năng toàn phần tiêu thụ: W = Q / H = 504.000 / 0,85 ≈ 592.941 J. Thời gian đun: t = W / P = 592.941 / 1800 ≈ 329,4 s ≈ 329 s.",
  },
  {
    id: "q3",
    q: "Cần cung cấp nhiệt lượng bao nhiêu để biến hoàn toàn 1 kg nước đá ở -10°C thành hơi nước ở 100°C? Cho c_đá = 2090 J/(kg.K), λ_đá = 3,34.10⁵ J/kg, c_nước = 4180 J/(kg.K), L = 2,26.10⁶ J/kg.",
    options: ["3,03 . 10⁶ J", "2,26 . 10⁶ J", "1,52 . 10⁶ J", "4,18 . 10⁶ J"],
    answer: 0,
    explain:
      "Gồm 4 giai đoạn:\n1. Tăng nhiệt từ -10°C lên 0°C: Q₁ = 1 . 2090 . 10 = 20.900 J.\n2. Nóng chảy ở 0°C: Q₂ = 3,34 . 10⁵ . 1 = 334.000 J.\n3. Đun nước từ 0°C lên 100°C: Q₃ = 1 . 4180 . 100 = 418.000 J.\n4. Hoá hơi ở 100°C: Q₄ = 2,26 . 10⁶ . 1 = 2.260.000 J.\nTổng Q = 20.900 + 334.000 + 418.000 + 2.260.000 = 3.032.900 J ≈ 3,03 . 10⁶ J.",
  },
  {
    id: "q4",
    q: "Người ta truyền cho một lượng khí trong xilanh nhiệt lượng 120 J. Khí dãn nở sinh công 80 J đẩy pittông lên. Độ biến thiên nội năng của lượng khí này là:",
    options: ["+40 J", "+200 J", "-40 J", "-200 J"],
    answer: 0,
    explain: "Ta có Q = +120 J, A = -80 J. Theo Định luật I: ΔU = A + Q = -80 + 120 = +40 J.",
  },
  {
    id: "q5",
    q: "Khi nén một khối khí trong xilanh, công tác dụng lên khối khí là 100 J. Biết nội năng của khối khí tăng thêm 60 J. Khối khí đã:",
    options: [
      "Tỏa nhiệt lượng 40 J ra môi trường.",
      "Nhận nhiệt lượng 40 J từ môi trường.",
      "Tỏa nhiệt lượng 160 J ra môi trường.",
      "Nhận nhiệt lượng 160 J từ môi trường.",
    ],
    answer: 0,
    explain:
      "Ta có A = +100 J (khí nhận công), ΔU = +60 J. Q = ΔU - A = 60 - 100 = -40 J. Vì Q < 0 nên khối khí đã toả nhiệt lượng 40 J ra môi trường.",
  },
  {
    id: "q6",
    q: "Trộn 200 g nước ở 80°C với 300 g nước ở 20°C trong bình cách nhiệt. Bỏ qua nhiệt dung của bình. Nhiệt độ cân bằng của hệ là:",
    options: ["44°C", "50°C", "40°C", "36°C"],
    answer: 0,
    explain:
      "Áp dụng công thức nhanh: t_cb = (m₁ t₁ + m₂ t₂) / (m₁ + m₂) = (0,2 . 80 + 0,3 . 20) / (0,2 + 0,3) = (16 + 6) / 0,5 = 44°C.",
  },
  {
    id: "q7",
    q: "Một viên đạn chì khối lượng 20 g bay với vận tốc 200 m/s cắm vào một bức tường gỗ và dừng lại hoàn toàn. Giả sử 80% động năng của viên đạn chuyển thành nội năng làm nóng viên đạn. Biết c_chì = 130 J/(kg.K). Độ tăng nhiệt độ của viên đạn là:",
    options: ["123°C", "61,5°C", "246°C", "15,4°C"],
    answer: 0,
    explain:
      "Động năng viên đạn: W_đ = 1/2 m v² = 1/2 . 0,02 . 200² = 400 J. Nhiệt làm nóng đạn: Q = 0,8 . 400 = 320 J. Ta có Q = m . c . Δt => Δt = Q / (m . c) = 320 / (0,02 . 130) ≈ 123,08°C ≈ 123°C.",
  },
  {
    id: "q8",
    q: "Để đúc một pho tượng đồng nặng 10 kg, người ta dùng một lò nung chạy bằng điện có hiệu suất 60%. Đồng ban đầu ở 25°C, nhiệt độ nóng chảy của đồng là 1084°C, c_đồng = 380 J/(kg.K), λ_đồng = 1,8.10⁵ J/kg. Năng lượng điện tiêu thụ toàn phần là:",
    options: ["9,71 . 10⁶ J", "5,82 . 10⁶ J", "3,49 . 10⁶ J", "1,80 . 10⁶ J"],
    answer: 0,
    explain:
      "Nhiệt có ích: Q_ích = m . c . (1084 - 25) + m . λ = 10 . 380 . 1059 + 10 . 1,8 . 10⁵ = 4.024.200 + 1.800.000 = 5.824.200 J. Năng lượng điện toàn phần: W = Q_ích / H = 5.824.200 / 0,60 = 9.707.000 J ≈ 9,71 . 10⁶ J.",
  },
  {
    id: "q9",
    q: "Đồ thị biểu diễn sự thay đổi nhiệt độ theo thời gian của một khối băng từ -20°C đến khi thành hơi nước có mấy đoạn nằm ngang?",
    options: ["2 đoạn (tương ứng quá trình nóng chảy 0°C và sôi 100°C)", "1 đoạn", "3 đoạn", "Không có đoạn nào"],
    answer: 0,
    explain:
      "Đồ thị có 2 đoạn nằm ngang tương ứng với 2 quá trình chuyển thể nhiệt độ không đổi: nóng chảy ở 0°C và sôi hoá hơi ở 100°C.",
  },
  {
    id: "q10",
    q: "Khi một khối khí dãn nở đẳng nhiệt (nhiệt độ không đổi T = const):",
    options: [
      "Độ biến thiên nội năng ΔU = 0 và Q = -A (nhiệt lượng nhận vào bằng công sinh ra).",
      "Khối khí không trao đổi nhiệt với bên ngoài (Q = 0).",
      "Nội năng của khối khí tăng liên tục.",
      "Công thực hiện luôn bằng 0.",
    ],
    answer: 0,
    explain:
      "Với khí lí tưởng nội năng chỉ phụ thuộc nhiệt độ. Vì T không đổi nên ΔU = 0 => ΔU = A + Q = 0 => Q = -A (toàn bộ nhiệt nhận vào biến thành công sinh ra).",
  },
];

export default questions;
