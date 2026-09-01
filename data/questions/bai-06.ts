import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Nhiệt hoá hơi riêng của một chất lỏng là:",
    options: [
      "Nhiệt lượng cần cung cấp cho 1 kg chất lỏng đó hoá hơi hoàn toàn ở nhiệt độ sôi xác định.",
      "Nhiệt lượng cần cung cấp cho 1 kg chất rắn nóng chảy hoàn toàn.",
      "Nhiệt lượng toả ra khi 1 kg hơi ngưng tụ ở nhiệt độ bất kì.",
      "Nhiệt lượng cần cung cấp để nâng nhiệt độ của 1 kg chất lỏng lên thêm 1°C.",
    ],
    answer: 0,
    explain:
      "Nhiệt hoá hơi riêng L là nhiệt lượng cần cung cấp cho 1 kg chất lỏng để nó hoá hơi hoàn toàn ở nhiệt độ sôi.",
  },
  {
    id: "q2",
    q: "Đơn vị đo của nhiệt hoá hơi riêng trong hệ SI là:",
    options: ["J/kg", "J/(kg.K)", "W/(kg.K)", "J.kg"],
    answer: 0,
    explain: "Nhiệt hoá hơi riêng L = Q / m nên có đơn vị là Jun trên kilôgam (J/kg).",
  },
  {
    id: "q3",
    q: "Nhiệt lượng cần cung cấp để làm hoá hơi hoàn toàn một lượng chất lỏng có khối lượng m ở nhiệt độ sôi là:",
    options: ["Q = L . m", "Q = m . c . Δt", "Q = λ . m", "Q = L / m"],
    answer: 0,
    explain: "Công thức tính nhiệt lượng hoá hơi là Q = L . m.",
  },
  {
    id: "q4",
    q: "Trong suốt quá trình một chất lỏng tinh khiết đang sôi ở áp suất không đổi:",
    options: [
      "Nhiệt độ của chất lỏng tăng dần theo thời gian.",
      "Nhiệt độ của chất lỏng giảm dần.",
      "Nhiệt độ của chất lỏng giữ không đổi.",
      "Chất lỏng không cần thu thêm nhiệt lượng.",
    ],
    answer: 2,
    explain:
      "Trong suốt quá trình sôi ở áp suất không đổi, nhiệt độ của chất lỏng giữ nguyên ở nhiệt độ sôi cho đến khi toàn bộ chất lỏng hoá hơi hoàn toàn.",
  },
  {
    id: "q5",
    q: "Tại sao bị bỏng do hơi nước sôi ở 100°C lại nguy hiểm và gây tổn thương sâu hơn nhiều so với bị bỏng do nước sôi ở 100°C có cùng khối lượng?",
    options: [
      "Vì hơi nước sôi có nhiệt độ cao hơn nhiều so với 100°C.",
      "Vì hơi nước sôi khi tiếp xúc với da sẽ ngưng tụ toả ra thêm một nhiệt lượng rất lớn (nhiệt hoá hơi L ≈ 2,26.10⁶ J/kg).",
      "Vì hơi nước sôi chứa nhiều vi khuẩn hơn.",
      "Vì áp suất hơi nước ép chặt vào bề mặt da.",
    ],
    answer: 1,
    explain:
      "Khi tiếp xúc với da, hơi nước ở 100°C ngưng tụ thành nước lỏng ở 100°C toả ra nhiệt lượng ngưng tụ khổng lồ Q = L.m, sau đó nước lỏng này tiếp tục toả nhiệt làm nguội trên da.",
  },
  {
    id: "q6",
    q: "Biết nhiệt hoá hơi riêng của nước là L = 2,26.10⁶ J/kg. Nhiệt lượng tỏa ra khi ngưng tụ hoàn toàn 0,2 kg hơi nước ở 100°C thành nước ở 100°C là:",
    options: ["4,52 . 10⁵ J", "2,26 . 10⁶ J", "1,13 . 10⁶ J", "4,52 . 10⁶ J"],
    answer: 0,
    explain: "Ta có Q_toả = L . m = 2,26 . 10⁶ . 0,2 = 4,52 . 10⁵ J = 452 kJ.",
  },
  {
    id: "q7",
    q: "Nguyên lý làm mát của máy điều hoà nhiệt độ và tủ lạnh hoạt động dựa trên chu trình tuần hoàn nào của môi chất lạnh?",
    options: [
      "Hoá hơi thu nhiệt ở dàn lạnh và ngưng tụ toả nhiệt ở dàn nóng.",
      "Nóng chảy thu nhiệt ở dàn lạnh và đông đặc toả nhiệt ở dàn nóng.",
      "Hoá hơi toả nhiệt ở dàn lạnh và ngưng tụ thu nhiệt ở dàn nóng.",
      "Thăng hoa ở dàn lạnh và ngưng kết ở dàn nóng.",
    ],
    answer: 0,
    explain:
      "Gas lạnh hoá hơi ở dàn lạnh hấp thụ nhiệt từ phòng/ngăn tủ (làm mát), sau đó được máy nén đẩy tới dàn nóng ngưng tụ toả nhiệt ra ngoài môi trường.",
  },
  {
    id: "q8",
    q: "Một ấm đun nước điện công suất 2000 W đun nước sôi ở 100°C. Bỏ qua hao phí nhiệt. Biết L = 2,26.10⁶ J/kg. Trong thời gian 5 phút, khối lượng nước đã hoá hơi là:",
    options: ["0,265 kg", "0,531 kg", "0,133 kg", "0,442 kg"],
    answer: 0,
    explain:
      "Nhiệt lượng cung cấp trong 5 phút (300 s): Q = P . t = 2000 . 300 = 600.000 J. Khối lượng nước hoá hơi: m = Q / L = 600.000 / (2,26 . 10⁶) ≈ 0,265 kg = 265 g.",
  },
  {
    id: "q9",
    q: "Khi áp suất khí quyển phía trên mặt thoáng chất lỏng giảm xuống (ví dụ đun nước trên đỉnh núi cao):",
    options: [
      "Nhiệt độ sôi của chất lỏng tăng lên.",
      "Nhiệt độ sôi của chất lỏng giảm đi.",
      "Nhiệt độ sôi của chất lỏng không thay đổi.",
      "Chất lỏng không thể sôi được.",
    ],
    answer: 1,
    explain:
      "Chất lỏng sôi khi áp suất hơi bão hoà bằng áp suất môi trường ngoài. Áp suất khí quyển giảm làm nhiệt độ sôi của chất lỏng giảm (trên đỉnh núi cao nước sôi ở dưới 100°C).",
  },
  {
    id: "q10",
    q: "Để nước trong nồi áp suất sôi ở nhiệt độ khoảng 120°C giúp ninh nhừ thức ăn nhanh chóng, người ta đã:",
    options: [
      "Tăng áp suất khí phía trên mặt nước trong nồi kín.",
      "Giảm áp suất không khí trong nồi.",
      "Dùng vật liệu nồi có nhiệt dung riêng cực lớn.",
      "Cung cấp nhiệt lượng liên tục với ngọn lửa lớn hơn.",
    ],
    answer: 0,
    explain:
      "Nồi áp suất giữ kín hơi nước làm tăng áp suất bên trong nồi, từ đó nâng nhiệt độ sôi của nước lên trên 100°C (khoảng 115°C - 125°C), giúp thức ăn chín nhanh hơn nhiều lần.",
  },
];

export default questions;
