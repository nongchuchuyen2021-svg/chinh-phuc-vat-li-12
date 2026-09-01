import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Nhiệt nóng chảy riêng của một chất là:",
    options: [
      "Nhiệt lượng cần cung cấp cho 1 kg chất đó tăng thêm 1 K.",
      "Nhiệt lượng cần cung cấp cho 1 kg chất rắn kết tinh nóng chảy hoàn toàn ở nhiệt độ nóng chảy xác định.",
      "Nhiệt lượng cần cung cấp để làm 1 kg chất lỏng bay hơi hoàn toàn.",
      "Nhiệt lượng toả ra khi đốt cháy hoàn toàn 1 kg nhiên liệu.",
    ],
    answer: 1,
    explain:
      "Theo định nghĩa SGK Vật lí 12, nhiệt nóng chảy riêng λ là nhiệt lượng cần cung cấp cho 1 kg chất rắn kết tinh nóng chảy hoàn toàn ở nhiệt độ nóng chảy.",
  },
  {
    id: "q2",
    q: "Đơn vị đo chuẩn của nhiệt nóng chảy riêng trong hệ SI là:",
    options: ["J/kg", "J/(kg.K)", "W/kg", "J.kg"],
    answer: 0,
    explain: "Nhiệt nóng chảy riêng λ = Q / m nên có đơn vị là Jun trên kilôgam (J/kg).",
  },
  {
    id: "q3",
    q: "Nhiệt lượng cần cung cấp để làm nóng chảy hoàn toàn một khối lượng m chất rắn kết tinh ở nhiệt độ nóng chảy là:",
    options: ["Q = λ . m", "Q = m . c . ΔT", "Q = L . m", "Q = λ / m"],
    answer: 0,
    explain: "Công thức tính nhiệt lượng nóng chảy là Q = λ . m.",
  },
  {
    id: "q4",
    q: "Trong suốt quá trình nóng chảy của một chất rắn kết tinh ở áp suất không đổi:",
    options: [
      "Nhiệt độ của chất tăng liên tục.",
      "Nhiệt độ của chất giảm dần.",
      "Nhiệt độ của chất không thay đổi.",
      "Nội năng của chất không thay đổi.",
    ],
    answer: 2,
    explain:
      "Đối với chất rắn kết tinh, trong suốt thời gian nóng chảy nhiệt độ giữ không đổi (bằng nhiệt độ nóng chảy), còn nội năng của chất tăng lên do nhận nhiệt để phá vỡ mạng tinh thể.",
  },
  {
    id: "q5",
    q: "Biết nhiệt nóng chảy riêng của nước đá là 3,34.10⁵ J/kg. Nhiệt lượng tỏa ra khi làm đông đặc hoàn toàn 0,5 kg nước ở 0°C thành nước đá ở 0°C là:",
    options: ["1,67 . 10⁵ J", "3,34 . 10⁵ J", "6,68 . 10⁵ J", "0,835 . 10⁵ J"],
    answer: 0,
    explain:
      "Quá trình đông đặc toả ra nhiệt lượng đúng bằng nhiệt lượng nóng chảy: Q_toả = λ . m = 3,34 . 10⁵ . 0,5 = 1,67 . 10⁵ J = 167 kJ.",
  },
  {
    id: "q6",
    q: "Tại sao khi tuyết bắt đầu tan (nóng chảy) vào mùa xuân ở các nước hàn đới, nhiệt độ môi trường xung quanh thường trở nên lạnh buốt hơn?",
    options: [
      "Vì tuyết tan toả ra một nhiệt lượng rất lớn vào không khí.",
      "Vì quá trình tuyết tan thu một nhiệt lượng rất lớn từ không khí xung quanh làm nhiệt độ không khí giảm xuống.",
      "Vì gió mùa đông bắc bắt đầu thổi mạnh hơn khi tuyết tan.",
      "Vì khối lượng riêng của tuyết tan tăng lên đột ngột.",
    ],
    answer: 1,
    explain:
      "Sự nóng chảy của tuyết là quá trình thu nhiệt lượng lớn từ môi trường không khí xung quanh, làm nhiệt độ môi trường giảm mạnh khiến người ta cảm thấy rét buốt.",
  },
  {
    id: "q7",
    q: "Một khối đồng có khối lượng 2 kg ở nhiệt độ nóng chảy 1084°C. Biết nhiệt nóng chảy riêng của đồng là λ = 1,8.10⁵ J/kg. Cần cung cấp nhiệt lượng bao nhiêu để nóng chảy hoàn toàn khối đồng này?",
    options: ["3,6 . 10⁵ J", "1,8 . 10⁵ J", "0,9 . 10⁵ J", "5,4 . 10⁵ J"],
    answer: 0,
    explain: "Ta có: Q = λ . m = 1,8 . 10⁵ . 2 = 3,6 . 10⁵ J = 360 kJ.",
  },
  {
    id: "q8",
    q: "Đồ thị biểu diễn sự phụ thuộc của nhiệt độ chất rắn kết tinh vào thời gian khi được nung nóng liên tục có đoạn nằm ngang. Đoạn nằm ngang đó tương ứng với:",
    options: [
      "Quá trình tăng nhiệt độ của chất rắn.",
      "Quá trình chất rắn đang nóng chảy chuyển dần thành chất lỏng.",
      "Quá trình tăng nhiệt độ của chất lỏng sau khi đã nóng chảy hoàn toàn.",
      "Quá trình hoá hơi của chất lỏng.",
    ],
    answer: 1,
    explain:
      "Đoạn nằm ngang biểu thị nhiệt độ không đổi theo thời gian, đó chính là giai đoạn chất rắn kết tinh đang chuyển thể từ rắn sang lỏng (quá trình nóng chảy).",
  },
  {
    id: "q9",
    q: "Chất nào sau đây khi nung nóng KHÔNG có nhiệt độ nóng chảy xác định (không có đoạn nằm ngang trên đồ thị nhiệt độ - thời gian)?",
    options: ["Muối ăn", "Sắt", "Thuỷ tinh", "Đồng"],
    answer: 2,
    explain:
      "Thuỷ tinh là chất rắn vô định hình nên không có nhiệt độ nóng chảy xác định, nó mềm dần khi đun nóng.",
  },
  {
    id: "q10",
    q: "Một lò nung nung chảy hoàn toàn 5 kg chì ở nhiệt độ nóng chảy (327°C) trong 10 phút. Bỏ qua hao phí nhiệt. Biết nhiệt nóng chảy riêng của chì là λ = 0,25.10⁵ J/kg. Công suất trung bình của lò nung là:",
    options: ["208,3 W", "1250 W", "125 W", "250 W"],
    answer: 0,
    explain:
      "Nhiệt lượng nóng chảy: Q = λ.m = 0,25 . 10⁵ . 5 = 125.000 J. Thời gian: t = 10 phút = 600 s. Công suất P = Q / t = 125.000 / 600 ≈ 208,33 W.",
  },
];

export default questions;
