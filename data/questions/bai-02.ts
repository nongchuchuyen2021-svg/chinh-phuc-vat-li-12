import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Nội năng của một vật là gì?",
    options: [
      "Tổng động năng và thế năng trọng trường của vật.",
      "Tổng động năng và thế năng tương tác của các phân tử cấu tạo nên vật.",
      "Năng lượng nhiệt mà vật tỏa ra môi trường xung quanh.",
      "Động năng chuyển động định hướng của toàn bộ vật thể.",
    ],
    answer: 1,
    explain:
      "Theo định nghĩa trong nhiệt động lực học, nội năng của một vật là tổng động năng chuyển động nhiệt của các phân tử và thế năng tương tác giữa các phân tử cấu tạo nên vật.",
  },
  {
    id: "q2",
    q: "Đối với một khối khí lí tưởng xác định, nội năng chỉ phụ thuộc vào:",
    options: ["Áp suất của khối khí", "Thể tích của khối khí", "Nhiệt độ tuyệt đối của khối khí", "Khối lượng riêng của khối khí"],
    answer: 2,
    explain:
      "Vì bỏ qua tương tác giữa các phân tử khí lí tưởng (thế năng bằng 0), nội năng của khối khí lí tưởng chỉ bằng tổng động năng chuyển động nhiệt của các phân tử, do đó chỉ phụ thuộc vào nhiệt độ.",
  },
  {
    id: "q3",
    q: "Quá trình nào sau đây là quá trình làm biến đổi nội năng bằng cách thực hiện công?",
    options: [
      "Thả miếng đồng vào cốc nước sôi.",
      "Phơi một thanh sắt ngoài trời nắng gắt.",
      "Cọ xát hai bàn tay vào nhau cho ấm lên.",
      "Đun nóng ấm nước trên bếp ga.",
    ],
    answer: 2,
    explain:
      "Khi cọ xát hai bàn tay, cơ năng đã chuyển hoá thành nội năng làm bàn tay nóng lên, đây là quá trình thực hiện công.",
  },
  {
    id: "q4",
    q: "Biểu thức của định luật I nhiệt động lực học là:",
    options: ["ΔU = A - Q", "ΔU = A + Q", "Q = ΔU + A", "A = ΔU + Q"],
    answer: 1,
    explain:
      "Biểu thức chuẩn của Định luật I nhiệt động lực học là ΔU = A + Q, trong đó A và Q là các đại lượng đại số mang dấu tuỳ thuộc hệ nhận hay sinh năng lượng.",
  },
  {
    id: "q5",
    q: "Theo quy ước dấu trong biểu thức ΔU = A + Q, trường hợp nào sau đây ứng với khối khí 'nhận nhiệt lượng và sinh công'?",
    options: ["Q > 0 và A > 0", "Q > 0 và A < 0", "Q < 0 và A > 0", "Q < 0 và A < 0"],
    answer: 1,
    explain:
      "Hệ nhận nhiệt lượng thì Q > 0; hệ thực hiện/sinh công lên ngoại vật thì A < 0.",
  },
  {
    id: "q6",
    q: "Một khối khí bị nén bởi ngoại lực thực hiện công 150 J, đồng thời khí toả nhiệt lượng 40 J ra môi trường. Độ biến thiên nội năng của khối khí là:",
    options: ["+190 J", "+110 J", "-110 J", "-190 J"],
    answer: 1,
    explain:
      "Khí nhận công nên A = +150 J. Khí toả nhiệt nên Q = -40 J. Độ biến thiên nội năng: ΔU = A + Q = 150 + (-40) = +110 J.",
  },
  {
    id: "q7",
    q: "Truyền cho khối khí trong xilanh nhiệt lượng 250 J thì nội năng của khí tăng thêm 180 J. Khối khí đã:",
    options: [
      "Nhận công 70 J từ bên ngoài.",
      "Thực hiện công 70 J đẩy pittông.",
      "Thực hiện công 430 J đẩy pittông.",
      "Nhận công 430 J từ bên ngoài.",
    ],
    answer: 1,
    explain:
      "Ta có ΔU = A + Q => A = ΔU - Q = 180 - 250 = -70 J. Vì A < 0 nên khối khí đã thực hiện công 70 J lên môi trường ngoài (đẩy pittông).",
  },
  {
    id: "q8",
    q: "Trong quá trình đẳng tích (thể tích không đổi) của một khối khí:",
    options: [
      "Công A = 0 nên ΔU = Q.",
      "Nhiệt lượng Q = 0 nên ΔU = A.",
      "Độ biến thiên nội năng ΔU = 0.",
      "Áp suất của khối khí không đổi.",
    ],
    answer: 0,
    explain:
      "Trong quá trình đẳng tích, thể tích không đổi (ΔV = 0) nên khối khí không thực hiện và cũng không nhận công (A = 0). Khi đó ΔU = Q.",
  },
  {
    id: "q9",
    q: "Khi một miếng kim loại được nung nóng từ 20°C lên 80°C thì:",
    options: [
      "Nội năng của miếng kim loại giảm đi do các nguyên tử chuyển động chậm lại.",
      "Nội năng của miếng kim loại tăng lên do động năng chuyển động nhiệt của các nguyên tử tăng.",
      "Nội năng không đổi vì khối lượng kim loại không đổi.",
      "Thế năng tương tác phân tử giảm về 0.",
    ],
    answer: 1,
    explain:
      "Khi nhiệt độ tăng, vận tốc dao động nhiệt của các nguyên tử kim loại quanh nút mạng tăng lên => động năng tăng => nội năng của miếng kim loại tăng.",
  },
  {
    id: "q10",
    q: "Một quả bóng bàn bị bẹp (không bị thủng), khi nhúng vào cốc nước nóng thì quả bóng phồng trở lại như cũ. Hiện tượng này chủ yếu là do:",
    options: [
      "Vỏ quả bóng bàn hút nước nóng nở ra.",
      "Không khí bên trong quả bóng nhận nhiệt lượng, nội năng tăng, nhiệt độ và áp suất tăng đẩy vỏ bóng phồng lên.",
      "Lực đẩy Archimedes của nước nóng tác dụng lên quả bóng.",
      "Không khí bên trong quả bóng thực hiện quá trình đẳng nhiệt.",
    ],
    answer: 1,
    explain:
      "Không khí trong bóng nhận nhiệt từ nước nóng qua vỏ bóng (truyền nhiệt), nội năng của khí tăng, nhiệt độ và áp suất của khối khí tăng tác dụng lực đẩy làm vỏ bóng phồng trở lại.",
  },
];

export default questions;
