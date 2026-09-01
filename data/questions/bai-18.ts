import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Máy biến áp là thiết bị có khả năng biến đổi:",
    options: [
      "Điện áp của dòng điện xoay chiều mà không làm thay đổi tần số của nó.",
      "Điện áp của dòng điện không đổi (dòng một chiều).",
      "Tần số của dòng điện xoay chiều mà giữ nguyên điện áp.",
      "Điện năng thành cơ năng.",
    ],
    answer: 0,
    explain: "Máy biến áp chỉ hoạt động với dòng điện xoay chiều, làm thay đổi điện áp và cường độ dòng điện nhưng giữ nguyên tần số f.",
  },
  {
    id: "q2",
    q: "Hệ thức liên hệ giữa điện áp và số vòng dây của máy biến áp lí tưởng là:",
    options: [
      "U₂ / U₁ = N₂ / N₁",
      "U₂ / U₁ = N₁ / N₂",
      "U₁ . U₂ = N₁ . N₂",
      "U₂ / U₁ = (N₂ / N₁)²",
    ],
    answer: 0,
    explain: "Trong máy biến áp lí tưởng, tỉ số điện áp hai cuộn dây tỉ lệ thuận với số vòng dây: U₂ / U₁ = N₂ / N₁.",
  },
  {
    id: "q3",
    q: "Nếu cuộn thứ cấp có số vòng dây nhỏ hơn cuộn sơ cấp (N₂ < N₁) thì máy biến áp này là:",
    options: ["Máy hạ áp.", "Máy tăng áp.", "Máy ổn áp.", "Máy phát điện."],
    answer: 0,
    explain: "Vì N₂ < N₁ => U₂ < U₁, điện áp đầu ra nhỏ hơn điện áp đầu vào nên đây là máy hạ áp.",
  },
  {
    id: "q4",
    q: "Trong quá trình truyền tải điện năng đi xa, công suất hao phí toả nhiệt trên đường dây truyền tải tỉ lệ nghịch với:",
    options: [
      "Bình phương điện áp ở đầu đường dây truyền tải (U²).",
      "Điện áp ở đầu đường dây truyền tải (U).",
      "Điện trở của đường dây truyền tải (r).",
      "Công suất cần truyền tải (P).",
    ],
    answer: 0,
    explain: "Công thức hao phí ΔP = (P² . r) / (U² . cos²φ) cho thấy ΔP tỉ lệ nghịch với bình phương điện áp U².",
  },
  {
    id: "q5",
    q: "Để giảm công suất hao phí do toả nhiệt trên đường dây truyền tải điện đi 100 lần thì cần phải:",
    options: [
      "Tăng điện áp ở đầu đường dây truyền tải lên 10 lần.",
      "Tăng điện áp lên 100 lần.",
      "Giảm tiết diện dây dẫn đi 10 lần.",
      "Giảm chiều dài đường dây đi 100 lần.",
    ],
    answer: 0,
    explain: "Vì ΔP tỉ lệ nghịch với U², muốn giảm ΔP đi 100 lần thì cần tăng điện áp U lên √100 = 10 lần.",
  },
  {
    id: "q6",
    q: "Một máy biến áp lí tưởng có cuộn sơ cấp 500 vòng và cuộn thứ cấp 2500 vòng. Đặt vào hai đầu cuộn sơ cấp điện áp xoay chiều 200 V. Điện áp hiệu dụng ở hai đầu cuộn thứ cấp để hở là:",
    options: ["1000 V", "40 V", "500 V", "2500 V"],
    answer: 0,
    explain: "U₂ = U₁ . (N₂ / N₁) = 200 . (2500 / 500) = 200 . 5 = 1000 V.",
  },
  {
    id: "q7",
    q: "Nếu đặt vào hai đầu cuộn sơ cấp của máy biến áp một điện áp một chiều không đổi U = 12 V thì điện áp ở hai đầu cuộn thứ cấp sẽ bằng:",
    options: ["0 V", "12 V", "24 V", "Không xác định."],
    answer: 0,
    explain:
      "Dòng một chiều không đổi sinh ra từ trường không biến thiên qua lõi thép (ΔΦ = 0), do đó suất điện động cảm ứng ở cuộn thứ cấp bằng 0 (U₂ = 0 V).",
  },
  {
    id: "q8",
    q: "Một máy biến áp lí tưởng đang hoạt động có tỉ số N₁/N₂ = 4. Đặt vào cuộn sơ cấp điện áp hiệu dụng U₁ = 220 V và nối cuộn thứ cấp với điện trở tải. Cường độ dòng điện hiệu dụng trong cuộn thứ cấp là I₂ = 2 A. Cường độ dòng điện hiệu dụng trong cuộn sơ cấp là:",
    options: ["0,5 A", "8 A", "2 A", "4 A"],
    answer: 0,
    explain: "Hệ thức máy biến áp lí tưởng: I₁ / I₂ = N₂ / N₁ => I₁ = I₂ . (N₂ / N₁) = 2 . (1/4) = 0,5 A.",
  },
  {
    id: "q9",
    q: "Hệ thống đường dây tải điện 500 kV Bắc - Nam của Việt Nam sử dụng điện áp siêu cao áp 500 kV nhằm mục đích chính là:",
    options: [
      "Giảm tối đa tổn thất điện năng do toả nhiệt trên đường dây truyền tải dài hàng nghìn km.",
      "Làm cho dòng điện chạy nhanh hơn vận tốc ánh sáng.",
      "Tăng cường độ dòng điện trong dây dẫn.",
      "Để tương thích trực tiếp với các thiết bị gia dụng.",
    ],
    answer: 0,
    explain:
      "Điện áp 500 kV cực lớn làm giảm cường độ dòng điện I trên đường dây, từ đó giảm hao phí toả nhiệt I²r xuống hàng triệu lần so với điện áp thông thường.",
  },
  {
    id: "q10",
    q: "Tại một trạm hạ áp phân phối điện cho khu dân cư, máy biến áp hạ điện áp từ 22 kV xuống 220 V. Tỉ số số vòng dây của cuộn sơ cấp so với cuộn thứ cấp (N₁/N₂) của máy biến áp này là:",
    options: ["100", "0,01", "10", "1000"],
    answer: 0,
    explain: "N₁ / N₂ = U₁ / U₂ = 22.000 / 220 = 100.",
  },
];

export default questions;
