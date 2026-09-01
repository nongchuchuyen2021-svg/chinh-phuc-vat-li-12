import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Nguyên tắc hoạt động của máy phát điện xoay chiều dựa trên:",
    options: [
      "Hiện tượng cảm ứng điện từ.",
      "Hiện tượng tự cảm.",
      "Hiện tượng quang điện ngoài.",
      "Tác dụng từ của dòng điện không đổi.",
    ],
    answer: 0,
    explain: "Mọi máy phát điện xoay chiều đều hoạt động dựa trên hiện tượng cảm ứng điện từ (Faraday).",
  },
  {
    id: "q2",
    q: "Suất điện động cảm ứng do một máy phát điện xoay chiều tạo ra có dạng e = E₀ . cos(ωt). Mối liên hệ giữa giá trị cực đại E₀ và giá trị hiệu dụng E là:",
    options: ["E = E₀ / √2", "E = E₀ . √2", "E = E₀ / 2", "E = 2 . E₀"],
    answer: 0,
    explain: "Giá trị hiệu dụng bằng giá trị cực đại chia cho căn 2: E = E₀ / √2.",
  },
  {
    id: "q3",
    q: "Một khung dây phẳng quay đều quanh một trục vuông góc với các đường sức từ của một từ trường đều. Suất điện động cảm ứng xuất hiện trong khung có pha biến thiên:",
    options: [
      "Chậm pha π/2 so với từ thông qua khung dây.",
      "Nhanh pha π/2 so với từ thông qua khung dây.",
      "Cùng pha với từ thông qua khung dây.",
      "Ngược pha với từ thông qua khung dây.",
    ],
    answer: 0,
    explain:
      "Vì e = - dΦ/dt = - [Φ₀ cos(ωt)]' = ω Φ₀ sin(ωt) = E₀ cos(ωt - π/2), suất điện động chậm pha π/2 so với từ thông qua khung.",
  },
  {
    id: "q4",
    q: "Một máy phát điện xoay chiều một pha có roto gồm p cặp cực quay với tốc độ n vòng/phút. Tần số của dòng điện do máy phát ra được tính theo công thức:",
    options: [
      "f = (n . p) / 60",
      "f = 60 . n / p",
      "f = n . p",
      "f = n / (60 . p)",
    ],
    answer: 0,
    explain: "Khi tốc độ quay n tính bằng vòng/phút, tần số f = (n . p) / 60 (Hz).",
  },
  {
    id: "q5",
    q: "Điện áp xoay chiều giữa hai đầu một ổ cắm điện trong gia đình có biểu thức u = 220√2 . cos(100πt) (V). Giá trị điện áp hiệu dụng và tần số của dòng điện này là:",
    options: [
      "U = 220 V và f = 50 Hz.",
      "U = 311 V và f = 100 Hz.",
      "U = 220√2 V và f = 50 Hz.",
      "U = 220 V và f = 100π Hz.",
    ],
    answer: 0,
    explain:
      "U₀ = 220√2 V => U = U₀/√2 = 220 V. ω = 100π rad/s => f = ω / (2π) = 100π / (2π) = 50 Hz.",
  },
  {
    id: "q6",
    q: "Một khung dây hình chữ nhật có diện tích S = 100 cm² gồm 500 vòng dây quay đều với tốc độ 3000 vòng/phút trong từ trường đều B = 0,1 T vuông góc với trục quay. Suất điện động cực đại xuất hiện trong khung là:",
    options: ["157 V (50π V)", "314 V (100π V)", "78,5 V (25π V)", "50 V"],
    answer: 0,
    explain:
      "S = 0,01 m²; n = 3000/60 = 50 vòng/s => ω = 2π . 50 = 100π rad/s. E₀ = N . B . S . ω = 500 . 0,1 . 0,01 . 100π = 50π ≈ 157,08 V.",
  },
  {
    id: "q7",
    q: "Một ampe kế nhiệt mắc nối tiếp vào mạch điện xoay chiều chỉ giá trị 2 A. Cường độ dòng điện cực đại trong mạch là:",
    options: ["2√2 A ≈ 2,83 A", "2 A", "4 A", "1,41 A"],
    answer: 0,
    explain: "Ampe kế xoay chiều chỉ giá trị hiệu dụng I = 2 A. Cường độ dòng điện cực đại I₀ = I . √2 = 2√2 A ≈ 2,83 A.",
  },
  {
    id: "q8",
    q: "Trong máy phát điện xoay chiều một pha công suất lớn dùng trong các nhà máy thuỷ điện, nhiệt điện, để tránh quét tia lửa điện ở vành góp thì:",
    options: [
      "Phần cảm (nam châm điện) là Roto quay bên trong, phần ứng (các cuộn dây phát điện) là Stato đứng yên bên ngoài.",
      "Phần ứng là Roto quay bên trong, phần cảm là Stato đứng yên.",
      "Cả phần cảm và phần ứng đều quay đồng tốc.",
      "Dùng nam châm vĩnh cửu có kích thước siêu nhỏ.",
    ],
    answer: 0,
    explain:
      "Để dẫn dòng điện công suất lớn hàng nghìn ampe ra ngoài mà không cần bộ góp chổi than trượt, người ta cho nam châm điện quay bên trong (Roto) và cuộn dây phát điện đứng yên bên ngoài (Stato).",
  },
  {
    id: "q9",
    q: "Một dòng điện xoay chiều có biểu thức i = 4 . cos(100πt) (A) chạy qua một điện trở R = 50 Ω. Nhiệt lượng toả ra trên điện trở trong thời gian 1 phút là:",
    options: ["24.000 J (24 kJ)", "48.000 J", "12.000 J", "60.000 J"],
    answer: 0,
    explain:
      "I = I₀ / √2 = 4 / √2 = 2√2 A. Nhiệt lượng Q = I² . R . t = (2√2)² . 50 . 60 = 8 . 50 . 60 = 24.000 J = 24 kJ.",
  },
  {
    id: "q10",
    q: "Để máy phát điện xoay chiều 1 pha phát ra dòng điện có tần số 50 Hz, nếu roto có 2 cặp cực (p = 2) thì tốc độ quay của roto phải là:",
    options: ["1500 vòng/phút", "3000 vòng/phút", "750 vòng/phút", "600 vòng/phút"],
    answer: 0,
    explain: "Ta có f = (n . p) / 60 => n = (60 . f) / p = (60 . 50) / 2 = 1500 vòng/phút.",
  },
];

export default questions;
