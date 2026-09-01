import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Từ thông qua diện tích S của một khung dây phẳng đặt trong từ trường đều B được tính theo công thức:",
    options: [
      "Φ = B . S . cos(α)",
      "Φ = B . S . sin(α)",
      "Φ = B . S . tan(α)",
      "Φ = B / (S . cos(α))",
    ],
    answer: 0,
    explain: "Công thức định nghĩa từ thông là Φ = B . S . cos(α), với α là góc giữa véc-tơ pháp tuyến n⃗ của khung và véc-tơ cảm ứng từ B⃗.",
  },
  {
    id: "q2",
    q: "Đơn vị đo của từ thông trong hệ SI là:",
    options: ["Weber (Wb)", "Tesla (T)", "Henry (H)", "Farad (F)"],
    answer: 0,
    explain: "Trong hệ SI, đơn vị của từ thông Φ là Weber, kí hiệu là Wb (1 Wb = 1 T . m²).",
  },
  {
    id: "q3",
    q: "Từ thông qua một khung dây kín đạt giá trị cực đại khi mặt phẳng khung dây đặt:",
    options: [
      "Vuông góc với các đường sức từ (α = 0°).",
      "Song song với các đường sức từ (α = 90°).",
      "Hợp với các đường sức từ góc 45°.",
      "Hợp với các đường sức từ góc 60°.",
    ],
    answer: 0,
    explain:
      "Khi mặt phẳng khung vuông góc với đường sức từ thì pháp tuyến n⃗ song song với B⃗ (α = 0° => cos(0°) = 1), từ thông đạt cực đại Φ_max = B.S.",
  },
  {
    id: "q4",
    q: "Hiện tượng cảm ứng điện từ xuất hiện trong một khung dây dẫn kín khi nào?",
    options: [
      "Khi khung dây dẫn được đặt cố định trong một từ trường không đổi.",
      "Khi từ thông gửi qua mạch kín biến thiên theo thời gian.",
      "Khi khung dây được làm bằng chất siêu dẫn.",
      "Khi nối khung dây với một nguồn điện một chiều không đổi.",
    ],
    answer: 1,
    explain:
      "Điều kiện cần và đủ để xuất hiện suất điện động cảm ứng và dòng điện cảm ứng trong khung dây là từ thông qua khung biến thiên theo thời gian.",
  },
  {
    id: "q5",
    q: "Độ lớn của suất điện động cảm ứng trong một mạch kín tỉ lệ với:",
    options: [
      "Tốc độ biến thiên của từ thông qua mạch kín đó.",
      "Độ lớn của từ trường B.",
      "Điện trở của mạch kín.",
      "Diện tích của khung dây.",
    ],
    answer: 0,
    explain: "Theo định luật Faraday: |e_c| = |ΔΦ / Δt|, độ lớn suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông.",
  },
  {
    id: "q6",
    q: "Định luật Lenz cho phép xác định:",
    options: [
      "Chiều của dòng điện cảm ứng trong mạch kín.",
      "Độ lớn của suất điện động cảm ứng.",
      "Độ lớn của từ trường cảm ứng.",
      "Điện trở của cuộn dây.",
    ],
    answer: 0,
    explain: "Định luật Lenz là quy tắc cơ bản dùng để xác định chiều của dòng điện cảm ứng trong mạch kín.",
  },
  {
    id: "q7",
    q: "Khi đưa cực Bắc của một thanh nam châm lại gần một vòng nhôm kín thì vòng nhôm sẽ:",
    options: [
      "Bị đẩy lùi ra xa nam châm.",
      "Bị hút lại gần nam châm.",
      "Đứng yên không chịu lực tác dụng.",
      "Bị quay tròn liên tục theo chiều kim đồng hồ.",
    ],
    answer: 0,
    explain:
      "Khi cực Bắc lại gần, từ thông qua vòng nhôm tăng lên. Theo định luật Lenz, dòng cảm ứng sinh ra mặt Bắc ở phía đối diện để đẩy nam châm (chống lại sự dịch chuyển lại gần).",
  },
  {
    id: "q8",
    q: "Một khung dây phẳng có diện tích 20 cm² gồm 100 vòng dây đặt trong từ trường đều B = 0,2 T vuông góc với mặt phẳng khung. Từ thông qua khung dây này là:",
    options: ["0,04 Wb", "4,0 Wb", "0,4 Wb", "0,004 Wb"],
    answer: 0,
    explain:
      "S = 20.10⁻⁴ m² = 2.10⁻³ m². Vì vuông góc với mặt phẳng khung nên n⃗ // B⃗ => α = 0°, cos(0°) = 1. Φ = N . B . S = 100 . 0,2 . 2.10⁻³ = 0,04 Wb.",
  },
  {
    id: "q9",
    q: "Dòng điện Foucault là dòng điện:",
    options: [
      "Cảm ứng xuất hiện trong khối vật dẫn kim loại khi đặt trong từ trường biến thiên hoặc chuyển động trong từ trường.",
      "Dòng điện một chiều chạy trong dây dẫn siêu dẫn.",
      "Dòng điện phóng ra từ các tia sét trong cơn dông.",
      "Dòng chuyển dời của các hạt ion trong chất điện phân.",
    ],
    answer: 0,
    explain:
      "Dòng Foucault là các dòng điện cảm ứng xoáy sinh ra trong lòng khối vật dẫn kim loại khi có từ thông biến thiên qua khối kim loại đó.",
  },
  {
    id: "q10",
    q: "Để giảm bớt hao phí nhiệt do dòng điện Foucault gây ra trong lõi sắt của máy biến áp, người ta thường:",
    options: [
      "Ghép lõi sắt từ các lá thép kĩ thuật điện mỏng có phủ lớp sơn cách điện sít nhau.",
      "Đúc lõi sắt thành một khối đặc nguyên khối.",
      "Làm mát máy biến áp bằng nitơ lỏng.",
      "Thay lõi sắt bằng lõi đồng đặc.",
    ],
    answer: 0,
    explain:
      "Các lá thép mỏng phủ sơn cách điện đặt song song với đường sức từ sẽ chia nhỏ và ngăn cản đường đi của các dòng điện Foucault xoáy, giảm tối đa hao phí nhiệt năng.",
  },
];

export default questions;
