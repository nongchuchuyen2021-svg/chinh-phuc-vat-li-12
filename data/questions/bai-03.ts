import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Nhiệt độ của một vật là đại lượng đặc trưng cho:",
    options: [
      "Tổng thế năng tương tác giữa các phân tử của vật.",
      "Động năng chuyển động nhiệt trung bình của các phân tử cấu tạo nên vật.",
      "Khối lượng và thể tích của vật thể.",
      "Vận tốc chuyển động có hướng của toàn bộ vật thể.",
    ],
    answer: 1,
    explain:
      "Về bản chất vi mô, nhiệt độ là đại lượng đo động năng chuyển động nhiệt trung bình của các phân tử.",
  },
  {
    id: "q2",
    q: "Khi hai vật ở trạng thái cân bằng nhiệt với nhau thì:",
    options: [
      "Nội năng của hai vật phải bằng nhau.",
      "Khối lượng của hai vật phải bằng nhau.",
      "Nhiệt độ của hai vật bằng nhau.",
      "Nhiệt lượng chứa trong hai vật bằng nhau.",
    ],
    answer: 2,
    explain:
      "Điều kiện cần và đủ để hai vật đạt trạng thái cân bằng nhiệt khi tiếp xúc là nhiệt độ của chúng bằng nhau.",
  },
  {
    id: "q3",
    q: "Công thức liên hệ giữa nhiệt độ trong thang Kelvin (T) và thang Celsius (t) là:",
    options: ["T = t - 273,15", "T = t + 273,15", "T = 1,8.t + 32", "T = (t - 32) / 1,8"],
    answer: 1,
    explain: "Mối liên hệ giữa thang Kelvin và Celsius là T(K) = t(°C) + 273,15.",
  },
  {
    id: "q4",
    q: "Nhiệt độ 0 K (Không độ tuyệt đối) có ý nghĩa vật lí là:",
    options: [
      "Nhiệt độ nước đá bắt đầu nóng chảy.",
      "Nhiệt độ mà tại đó mọi chuyển động nhiệt của phân tử ngừng lại hoàn toàn.",
      "Nhiệt độ của khí quyển ở độ cao 10.000 m.",
      "Nhiệt độ thấp nhất có thể tạo ra được trong thực tế bằng máy làm lạnh thông thường.",
    ],
    answer: 1,
    explain:
      "0 K là mốc nhiệt độ tuyệt đối thấp nhất về mặt lý thuyết, tại đó động năng nhiệt của các phân tử bằng 0 (chuyển động nhiệt dừng lại hoàn toàn).",
  },
  {
    id: "q5",
    q: "Nếu nhiệt độ của một chất khí tăng thêm 15°C thì trong thang Kelvin, nhiệt độ của khối khí đó tăng thêm:",
    options: ["288 K", "15 K", "258 K", "273 K"],
    answer: 1,
    explain:
      "Vì độ lớn 1 độ trên thang Kelvin bằng độ lớn 1 độ trên thang Celsius nên độ biến thiên nhiệt độ là bằng nhau: ΔT(K) = Δt(°C) = 15 K.",
  },
  {
    id: "q6",
    q: "Nhiệt kế y tế thuỷ ngân hoạt động dựa trên hiện tượng vật lí nào?",
    options: [
      "Sự thay đổi màu sắc của thuỷ ngân theo nhiệt độ.",
      "Sự nở vì nhiệt của chất lỏng (thuỷ ngân) trong ống mao quản hẹp.",
      "Sự phát xạ bức xạ hồng ngoại của thuỷ ngân.",
      "Sự thay đổi áp suất của hơi thuỷ ngân.",
    ],
    answer: 1,
    explain:
      "Nhiệt kế thuỷ ngân đo nhiệt độ dựa trên sự nở vì nhiệt của chất lỏng thuỷ ngân trong ống mao dẫn có tiết diện rất nhỏ.",
  },
  {
    id: "q7",
    q: "Nhiệt độ thân nhiệt bình thường của người là 37°C. Giá trị này tương ứng trên thang Fahrenheit là bao nhiêu?",
    options: ["98,6°F", "100°F", "72,4°F", "68,6°F"],
    answer: 0,
    explain: "Ta có t(°F) = 1,8.t(°C) + 32 = 1,8 . 37 + 32 = 66,6 + 32 = 98,6°F.",
  },
  {
    id: "q8",
    q: "Nhiệt kế hồng ngoại thường được ứng dụng để:",
    options: [
      "Đo nhiệt độ của một giọt nước cực nhỏ trong ống nghiệm.",
      "Đo nhiệt độ từ xa không cần tiếp xúc trực tiếp (đo thân nhiệt nhanh, đo nhiệt độ lò luyện thép).",
      "Đo sự biến thiên nhiệt dung riêng của chất rắn.",
      "Đo áp suất của chất khí trong xilanh kín.",
    ],
    answer: 1,
    explain:
      "Nhiệt kế hồng ngoại thu nhận bức xạ hồng ngoại từ bề mặt vật thể phát ra, cho phép đo nhanh nhiệt độ từ xa mà không cần chạm trực tiếp vào vật thể.",
  },
  {
    id: "q9",
    q: "Tại sao trên nhiệt kế y tế thuỷ ngân, phần ống quản gần bầu lại có một chỗ thắt hẹp?",
    options: [
      "Để thuỷ ngân dễ dàng chảy lên bầu khi nhiệt độ tăng.",
      "Để ngăn không cho cột thuỷ ngân tự động tụt xuống bầu khi đưa nhiệt kế ra khỏi cơ thể, giúp đọc kết quả chính xác.",
      "Để nhiệt kế bền hơn, tránh bị vỡ khi rơi.",
      "Để tạo áp suất lớn đẩy thuỷ ngân chuyển động nhanh hơn.",
    ],
    answer: 1,
    explain:
      "Chỗ thắt hẹp giữ cho cột thuỷ ngân không bị tụt trở lại bầu khi đưa nhiệt kế ra môi trường lạnh hơn bên ngoài, giúp người đo có thời gian đọc chính xác thân nhiệt.",
  },
  {
    id: "q10",
    q: "Cho 3 vật A, B, C có nhiệt độ lần lượt là T_A = 300 K, t_B = 25°C, t_C = 80°F. Sắp xếp các vật theo thứ tự nhiệt độ tăng dần là:",
    options: ["C < B < A", "B < C < A", "A < B < C", "C < A < B"],
    answer: 0,
    explain:
      "Quy đổi về cùng thang Celsius:\n- Vật A: t_A = 300 - 273 = 27°C.\n- Vật B: t_B = 25°C.\n- Vật C: t_C = (80 - 32) / 1,8 ≈ 26,67°C.\nSo sánh: 25°C (B) < 26,67°C (C) < 27°C (A) => B < C < A. (Nếu đề hỏi C < B < A hay B < C < A: B=25°C < C≈26,67°C < A=27°C). Ta chọn B < C < A.",
  },
];

// Cập nhật đáp án câu 10 cho chuẩn
questions[9].answer = 1;

export default questions;
