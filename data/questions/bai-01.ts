import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Theo mô hình động học phân tử, nhận định nào sau đây là KHÔNG đúng?",
    options: [
      "Các chất được cấu tạo từ các phân tử, nguyên tử riêng biệt.",
      "Các phân tử chuyển động không ngừng, chuyển động càng nhanh khi nhiệt độ càng cao.",
      "Giữa các phân tử chỉ có lực hút, không có lực đẩy.",
      "Kích thước của các phân tử là rất nhỏ so với khoảng cách giữa chúng ở thể khí.",
    ],
    answer: 2,
    explain:
      "Giữa các phân tử đồng thời tồn tại cả lực hút và lực đẩy phân tử. Tùy thuộc vào khoảng cách giữa các phân tử mà lực hút hay lực đẩy chiếm ưu thế.",
  },
  {
    id: "q2",
    q: "Khi khoảng cách giữa hai phân tử r = r₀ (khoảng cách cân bằng), lực tương tác tổng cộng giữa chúng có đặc điểm gì?",
    options: [
      "Lực hút lớn hơn lực đẩy.",
      "Lực đẩy lớn hơn lực hút.",
      "Lực hút cân bằng với lực đẩy, lực tương tác tổng cộng bằng 0.",
      "Lực tương tác đạt giá trị cực đại.",
    ],
    answer: 2,
    explain:
      "Tại khoảng cách cân bằng r₀, độ lớn của lực hút bằng độ lớn của lực đẩy nên lực tương tác phân tử tổng cộng bằng 0.",
  },
  {
    id: "q3",
    q: "Ở thể rắn, các phân tử:",
    options: [
      "Chuyển động tự do hỗn loạn về mọi phía trong toàn bộ không gian.",
      "Chỉ dao động quanh vị trí cân bằng cố định trong không gian.",
      "Dao động quanh vị trí cân bằng tạm thời rồi dịch chuyển sang vị trí mới.",
      "Đứng yên hoàn toàn, không có bất kỳ chuyển động nào.",
    ],
    answer: 1,
    explain:
      "Ở thể rắn, lực liên kết giữa các phân tử rất mạnh nên các phân tử chỉ có thể dao động quanh các vị trí cân bằng cố định xác định.",
  },
  {
    id: "q4",
    q: "Đặc điểm nào sau đây phân biệt chất rắn kết tinh với chất rắn vô định hình?",
    options: [
      "Chất rắn kết tinh có hình dạng xác định, chất rắn vô định hình thì không.",
      "Chất rắn kết tinh có nhiệt độ nóng chảy xác định, chất rắn vô định hình thì không.",
      "Chất rắn kết tinh dẫn điện tốt, chất rắn vô định hình cách điện.",
      "Chất rắn kết tinh có thể tích xác định, chất rắn vô định hình thì không.",
    ],
    answer: 1,
    explain:
      "Chất rắn kết tinh có cấu trúc mạng tinh thể tuần hoàn nên có nhiệt độ nóng chảy xác định (ở một áp suất cho trước). Chất rắn vô định hình không có cấu trúc tinh thể nên khi đun nóng sẽ mềm dần rồi chuyển thành chất lỏng mà không có nhiệt độ nóng chảy xác định.",
  },
  {
    id: "q5",
    q: "Chất nào sau đây thuộc loại chất rắn vô định hình?",
    options: ["Muối ăn (NaCl)", "Thạch anh", "Kim cương", "Thuỷ tinh"],
    answer: 3,
    explain:
      "Thuỷ tinh, nhựa đường, hắc ín, cao su... là các chất rắn vô định hình (không có cấu trúc mạng tinh thể tuần hoàn).",
  },
  {
    id: "q6",
    q: "Quá trình chuyển trực tiếp từ thể rắn sang thể khí (không qua thể lỏng) được gọi là:",
    options: ["Sự nóng chảy", "Sự ngưng kết", "Sự thăng hoa", "Sự bay hơi"],
    answer: 2,
    explain:
      "Sự thăng hoa là quá trình chất chuyển trực tiếp từ thể rắn sang thể khí mà không trải qua thể lỏng (ví dụ: băng phiến, đá khô CO₂ để ở nhiệt độ phòng).",
  },
  {
    id: "q7",
    q: "Hiện tượng nào sau đây là sự bay hơi?",
    options: [
      "Nước trong ấm sôi sùng sục và bốc hơi mạnh ở 100°C.",
      "Quần áo ướt phơi ngoài trời nắng khô dần sau một thời gian.",
      "Cục nước đá để ngoài không khí tan thành nước lỏng.",
      "Hơi nước trong không khí ngưng tụ thành những giọt sương đọng trên lá cây vào sáng sớm.",
    ],
    answer: 1,
    explain:
      "Sự bay hơi là quá trình hoá hơi xảy ra trên bề mặt thoáng của chất lỏng ở nhiệt độ bất kì. Quần áo ướt khô dần là do nước ở mặt thoáng bay hơi liên tục vào không khí.",
  },
  {
    id: "q8",
    q: "Điểm khác biệt cơ bản giữa sự sôi và sự bay hơi là:",
    options: [
      "Sự bay hơi chỉ xảy ra ở nhiệt độ cao, sự sôi xảy ra ở nhiệt độ bất kì.",
      "Sự sôi xảy ra ở cả mặt thoáng và trong lòng khối chất lỏng tại nhiệt độ sôi xác định, còn sự bay hơi chỉ xảy ra trên mặt thoáng ở nhiệt độ bất kì.",
      "Sự sôi toả nhiệt, còn sự bay hơi thu nhiệt.",
      "Sự bay hơi chỉ xảy ra với nước, sự sôi xảy ra với mọi chất lỏng.",
    ],
    answer: 1,
    explain:
      "Sự bay hơi diễn ra ở mặt thoáng chất lỏng tại mọi nhiệt độ; sự sôi diễn ra ở cả mặt thoáng và bên trong lòng chất lỏng tại một nhiệt độ xác định (nhiệt độ sôi) phụ thuộc vào áp suất môi trường.",
  },
  {
    id: "q9",
    q: "Khi nén một khối khí trong xilanh ở nhiệt độ không đổi, áp suất của khí tăng lên là do:",
    options: [
      "Kích thước của mỗi phân tử khí nở to ra.",
      "Số phân tử khí va chạm vào một đơn vị diện tích thành bình trong một đơn vị thời gian tăng lên.",
      "Vận tốc chuyển động trung bình của các phân tử khí tăng lên gấp nhiều lần.",
      "Lực hút giữa các phân tử khí tăng mạnh.",
    ],
    answer: 1,
    explain:
      "Khi thể tích giảm ở nhiệt độ không đổi, mật độ phân tử khí tăng lên, dẫn đến số va chạm của các phân tử khí lên một đơn vị diện tích thành bình trong một đơn vị thời gian tăng lên, làm áp suất khí tăng.",
  },
  {
    id: "q10",
    q: "Trong quá trình nóng chảy của một chất rắn kết tinh (ở áp suất chuẩn):",
    options: [
      "Nhiệt độ của chất tăng liên tục theo thời gian.",
      "Nhiệt độ của chất giảm dần.",
      "Nhiệt độ của chất được giữ không đổi cho đến khi toàn bộ chất rắn nóng chảy hoàn toàn thành chất lỏng.",
      "Chất rắn không cần thu nhiệt lượng từ môi trường ngoài.",
    ],
    answer: 2,
    explain:
      "Đối với chất rắn kết tinh, trong suốt thời gian nóng chảy, nhiệt lượng cung cấp được dùng để phá vỡ mạng tinh thể (tăng thế năng phân tử) chứ không làm tăng động năng nhiệt của phân tử, do đó nhiệt độ của chất giữ không đổi bằng nhiệt độ nóng chảy.",
  },
];

export default questions;
