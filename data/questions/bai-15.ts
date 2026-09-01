import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Đơn vị của cảm ứng từ trong hệ SI là:",
    options: ["Tesla (T)", "Weber (Wb)", "Henry (H)", "Volt (V)"],
    answer: 0,
    explain: "Đơn vị chuẩn của cảm ứng từ B trong hệ SI là Tesla, kí hiệu là T (1 T = 1 N / (A.m)).",
  },
  {
    id: "q2",
    q: "Lực từ tác dụng lên đoạn dây dẫn thẳng mang dòng điện I có chiều dài L đặt trong từ trường đều B hợp với dòng điện góc α được tính bằng:",
    options: [
      "F = B . I . L . sin(α)",
      "F = B . I . L . cos(α)",
      "F = B . I / (L . sin(α))",
      "F = I . L / (B . sin(α))",
    ],
    answer: 0,
    explain: "Công thức định luật Ampère về lực từ là F = B . I . L . sin(α).",
  },
  {
    id: "q3",
    q: "Lực từ tác dụng lên một đoạn dây dẫn mang dòng điện đặt trong từ trường đều bằng 0 khi đoạn dây dẫn đặt:",
    options: [
      "Song song với các đường sức từ (α = 0° hoặc 180°).",
      "Vuông góc với các đường sức từ (α = 90°).",
      "Hợp với các đường sức từ góc 45°.",
      "Hợp với các đường sức từ góc 60°.",
    ],
    answer: 0,
    explain: "Khi đoạn dây song song với đường sức từ, góc α = 0° hoặc 180° => sin(α) = 0 => F = 0.",
  },
  {
    id: "q4",
    q: "Quy tắc nào sau đây được dùng để xác định chiều của lực từ tác dụng lên đoạn dây dẫn mang dòng điện đặt trong từ trường?",
    options: [
      "Quy tắc bàn tay trái.",
      "Quy tắc bàn tay phải.",
      "Quy tắc cái đinh ốc.",
      "Quy tắc vặn nút chai.",
    ],
    answer: 0,
    explain:
      "Chiều của lực từ tác dụng lên đoạn dây dẫn mang dòng điện được xác định bằng quy tắc bàn tay trái.",
  },
  {
    id: "q5",
    q: "Một đoạn dây dẫn dài 10 cm mang dòng điện 2 A đặt trong từ trường đều B = 0,5 T. Biết đoạn dây hợp với đường sức từ góc 30°. Lực từ tác dụng lên đoạn dây là:",
    options: ["0,05 N", "0,10 N", "0,087 N", "0,20 N"],
    answer: 0,
    explain:
      "L = 0,1 m. F = B . I . L . sin(30°) = 0,5 . 2 . 0,1 . 0,5 = 0,05 N.",
  },
  {
    id: "q6",
    q: "Một đoạn dây dẫn dài 0,5 m mang dòng điện 4 A đặt vuông góc với từ trường đều. Biết lực từ tác dụng lên đoạn dây là 0,4 N. Cảm ứng từ B của từ trường có độ lớn là:",
    options: ["0,2 T", "0,8 T", "0,5 T", "0,1 T"],
    answer: 0,
    explain: "Vì vuông góc nên sin(90°) = 1. B = F / (I . L) = 0,4 / (4 . 0,5) = 0,4 / 2 = 0,2 T.",
  },
  {
    id: "q7",
    q: "Khi đặt bàn tay trái theo quy tắc bàn tay trái để tìm chiều lực từ, chiều từ cổ tay đến ngón tay giữa chỉ:",
    options: [
      "Chiều dòng điện I.",
      "Chiều đường sức từ B.",
      "Chiều của lực từ F.",
      "Chiều của trọng lực.",
    ],
    answer: 0,
    explain: "Theo quy tắc bàn tay trái, chiều từ cổ tay đến 4 ngón tay duỗi thẳng chỉ theo chiều dòng điện I.",
  },
  {
    id: "q8",
    q: "Hai dây dẫn thẳng dài song song mang hai dòng điện I₁ và I₂ ngược chiều nhau thì hai dây dẫn sẽ:",
    options: [
      "Đẩy nhau bằng lực từ.",
      "Hút nhau bằng lực từ.",
      "Không tương tác với nhau.",
      "Lúc hút lúc đẩy tuần hoàn.",
    ],
    answer: 0,
    explain: "Hai dòng điện thẳng song song cùng chiều thì hút nhau, ngược chiều thì đẩy nhau.",
  },
  {
    id: "q9",
    q: "Một đoạn dây dẫn mang dòng điện nằm ngang theo hướng Đông - Tây (dòng điện chạy từ Đông sang Tây). Từ trường Trái Đất hướng từ Nam lên Bắc. Lực từ tác dụng lên đoạn dây có hướng:",
    options: ["Thẳng đứng hướng xuống dưới mặt đất.", "Thẳng đứng hướng lên trên trời.", "Hướng sang phía Đông.", "Hướng sang phía Nam."],
    answer: 0,
    explain:
      "Áp dụng quy tắc bàn tay trái: B hướng từ Nam lên Bắc (hứng vào lòng bàn tay hướng về phía Nam). Dòng điện I từ Đông sang Tây (4 ngón chỉ sang Tây). Ngón cái choãi 90° chỉ thẳng đứng cắm xuống đất.",
  },
  {
    id: "q10",
    q: "Khung dây dẫn hình chữ nhật mang dòng điện đặt trong từ trường đều có trục quay song song với các cạnh. Dưới tác dụng của ngẫu lực từ, khung dây sẽ:",
    options: [
      "Quay quanh trục cho đến khi mặt phẳng khung dây vuông góc với các đường sức từ.",
      "Chuyển động tịnh tiến không ngừng.",
      "Bị kéo dãn nở to ra.",
      "Đứng yên không quay ở mọi vị trí.",
    ],
    answer: 0,
    explain:
      "Momen ngẫu lực từ làm khung dây quay về vị trí cân bằng bền, tại đó mặt phẳng khung dây vuông góc với đường sức từ (từ thông qua khung cực đại). Đây là nguyên lý hoạt động của động cơ điện một chiều và điện kế.",
  },
];

export default questions;
