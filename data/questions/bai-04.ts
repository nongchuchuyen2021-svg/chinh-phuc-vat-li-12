import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Đơn vị đo chuẩn của nhiệt dung riêng trong hệ SI là:",
    options: ["J/kg", "J/(kg.K)", "cal/g", "W/(kg.K)"],
    answer: 1,
    explain: "Trong hệ đơn vị quốc tế SI, nhiệt dung riêng c có đơn vị là Jun trên kilôgam-Kelvin: J/(kg.K) hoặc J/(kg.°C).",
  },
  {
    id: "q2",
    q: "Nhiệt dung riêng của nhôm là 880 J/(kg.K). Con số này có ý nghĩa là gì?",
    options: [
      "Cần cung cấp nhiệt lượng 880 J để 1 kg nhôm nóng chảy hoàn toàn.",
      "Cần cung cấp nhiệt lượng 880 J để làm 1 kg nhôm tăng thêm 1 K (hoặc 1°C).",
      "Khi 1 kg nhôm giảm 1 K thì nó thu vào nhiệt lượng 880 J.",
      "Nhiệt lượng tỏa ra khi đốt cháy hoàn toàn 1 kg nhôm là 880 J.",
    ],
    answer: 1,
    explain:
      "Nhiệt dung riêng c = 880 J/(kg.K) nghĩa là để làm 1 kg nhôm tăng thêm 1 độ K (hoặc 1°C) cần cung cấp nhiệt lượng là 880 J.",
  },
  {
    id: "q3",
    q: "Nhiệt lượng cần cung cấp để làm nóng một vật từ nhiệt độ T₁ lên T₂ được tính bằng công thức:",
    options: ["Q = m . c . (T₂ - T₁)", "Q = m . L", "Q = m . λ", "Q = c / (m . ΔT)"],
    answer: 0,
    explain: "Công thức tính nhiệt lượng biến thiên nhiệt độ là Q = m . c . ΔT = m . c . (T₂ - T₁).",
  },
  {
    id: "q4",
    q: "Hai vật bằng đồng và bằng sắt có cùng khối lượng. Biết nhiệt dung riêng của sắt lớn hơn của đồng (c_sắt > c_đồng). Nếu cung cấp cho hai vật cùng một nhiệt lượng như nhau thì:",
    options: [
      "Vật bằng sắt sẽ tăng nhiệt độ nhiều hơn.",
      "Vật bằng đồng sẽ tăng nhiệt độ nhiều hơn.",
      "Cả hai vật đều tăng nhiệt độ như nhau.",
      "Không đủ dữ kiện để so sánh.",
    ],
    answer: 1,
    explain:
      "Ta có ΔT = Q / (m . c). Vì Q và m bằng nhau, chất nào có c nhỏ hơn (đồng) thì độ tăng nhiệt độ ΔT sẽ lớn hơn.",
  },
  {
    id: "q5",
    q: "Tại sao ở các vùng ven biển, khí hậu thường mát mẻ hơn vào mùa hè và ấm áp hơn vào mùa đông so với các vùng sâu trong đất liền?",
    options: [
      "Do nước biển có khối lượng riêng lớn hơn đất đá liền kề.",
      "Do nước biển có nhiệt dung riêng lớn hơn nhiều so với đất đá trên cạn.",
      "Do nước biển có nhiệt nóng chảy rất cao.",
      "Do gió biển luôn thổi theo một chiều cố định quanh năm.",
    ],
    answer: 1,
    explain:
      "Nước có nhiệt dung riêng rất lớn (c ≈ 4180 J/(kg.K)), hấp thụ hoặc toả nhiệt lượng lớn mà nhiệt độ thay đổi ít, đóng vai trò như bộ điều hoà nhiệt độ tự nhiên cho vùng ven biển.",
  },
  {
    id: "q6",
    q: "Một ấm điện công suất 1000 W đun sôi 1,5 kg nước từ 20°C. Bỏ qua mọi hao phí và nhiệt dung của ấm, lấy c_nước = 4200 J/(kg.K). Thời gian đun sôi nước là:",
    options: ["504 s (8,4 phút)", "420 s (7 phút)", "600 s (10 phút)", "336 s (5,6 phút)"],
    answer: 0,
    explain:
      "Nhiệt lượng cần cung cấp: Q = m.c.Δt = 1,5 . 4200 . (100 - 20) = 504.000 J. Thời gian: t = Q / P = 504.000 / 1000 = 504 s = 8,4 phút.",
  },
  {
    id: "q7",
    q: "Thả một miếng chì khối lượng 0,5 kg ở nhiệt độ 100°C vào cốc chứa 0,2 kg nước ở 20°C. Bỏ qua toả nhiệt ra cốc và môi trường. Cho c_chì = 130 J/(kg.K), c_nước = 4200 J/(kg.K). Nhiệt độ cân bằng của hệ xấp xỉ là:",
    options: ["25,8°C", "21,2°C", "35,6°C", "60,0°C"],
    answer: 0,
    explain:
      "Phương trình cân bằng nhiệt: Q_toả = Q_thu => m_chì . c_chì . (100 - t_cb) = m_nước . c_nước . (t_cb - 20) => 0,5 . 130 . (100 - t_cb) = 0,2 . 4200 . (t_cb - 20) => 65 . (100 - t_cb) = 840 . (t_cb - 20) => 6500 - 65 t_cb = 840 t_cb - 16800 => 905 t_cb = 23300 => t_cb ≈ 25,75°C ≈ 25,8°C.",
  },
  {
    id: "q8",
    q: "Trong thí nghiệm đo nhiệt dung riêng của nước bằng nhiệt lượng kế điện, nếu bỏ qua hao phí nhiệt ra môi trường thì nhiệt dung riêng đo được trong thực tế sẽ:",
    options: [
      "Lớn hơn giá trị thực của nước.",
      "Nhỏ hơn giá trị thực của nước.",
      "Bằng chính xác giá trị thực.",
      "Luôn bằng 0.",
    ],
    answer: 0,
    explain:
      "Thực tế năng lượng điện P.t = Q_nước + Q_hao phí. Nếu tính c = P.t / (m.Δt) bỏ qua hao phí thì tử số lớn hơn nhiệt thực tế nước nhận, dẫn đến giá trị c đo được lớn hơn giá trị thực.",
  },
  {
    id: "q9",
    q: "Nhiệt lượng tỏa ra khi một vật có khối lượng m làm bằng chất có nhiệt dung riêng c giảm nhiệt độ từ T₁ xuống T₂ là:",
    options: ["Q = m . c . (T₁ - T₂)", "Q = m . c . (T₂ - T₁)", "Q = m . c / (T₁ - T₂)", "Q = (T₁ - T₂) / (m . c)"],
    answer: 0,
    explain: "Nhiệt lượng toả ra khi giảm nhiệt độ (T₁ > T₂) là Q_toả = m . c . (T₁ - T₂).",
  },
  {
    id: "q10",
    q: "Chất nào sau đây thường được sử dụng làm chất tải nhiệt làm mát động cơ đốt trong nhiều nhất?",
    options: ["Dầu hoả", "Thuỷ ngân", "Nước (hoặc dung dịch nước pha phụ gia)", "Dung dịch cồn nguyên chất"],
    answer: 2,
    explain:
      "Nước có nhiệt dung riêng rất lớn, giá thành rẻ, không độc hại và khả năng truyền nhiệt tốt nên được chọn làm chất tải nhiệt chính trong các hệ thống làm mát động cơ.",
  },
];

export default questions;
