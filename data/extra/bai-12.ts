import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Xét một lượng khí lí tưởng chứa trong bình kín ở nhiệt độ tuyệt đối T = 300 K và áp suất p = 1,5.10⁵ Pa. Cho hằng số Boltzmann k = 1,38.10⁻²³ J/K.",
      statements: [
        {
          text: "Động năng tịnh tiến trung bình của mỗi phân tử khí trong bình là 6,21.10⁻²¹ J.",
          answer: true,
          explain: "Đúng. E_d = (3/2) . k . T = 1,5 . 1,38.10⁻²³ . 300 = 6,21.10⁻²¹ J.",
        },
        {
          text: "Mật độ phân tử khí trong bình là khoảng 3,62.10²⁵ phân tử/m³.",
          answer: true,
          explain: "Đúng. μ = p / (k.T) = 1,5.10⁵ / (1,38.10⁻²³ . 300) = 1,5.10⁵ / (4,14.10⁻²¹) ≈ 3,62.10²⁵ phân tử/m³.",
        },
        {
          text: "Nếu nung nóng bình để nhiệt độ tăng lên 600 K thì động năng tịnh tiến trung bình tăng lên gấp 4 lần.",
          answer: false,
          explain: "Sai. Vì E_d tỉ lệ thuận bậc nhất với T nên nhiệt độ tăng 2 lần thì động năng tăng 2 lần.",
        },
        {
          text: "Nếu trong bình là hỗn hợp gồm khí He và khí Ne thì ở trạng thái cân bằng nhiệt, động năng trung bình của phân tử He bằng động năng trung bình của phân tử Ne.",
          answer: true,
          explain: "Đúng. Ở cùng nhiệt độ T, động năng tịnh tiến trung bình E_d = (3/2)kT là như nhau cho mọi loại phân tử khí.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét mối quan hệ giữa các đại lượng vi mô (vận tốc, động năng phân tử) và đại lượng vĩ mô (áp suất, nhiệt độ).",
      statements: [
        {
          text: "Nhiệt độ tuyệt đối của khối khí là đại lượng đo động năng chuyển động nhiệt trung bình của các phân tử.",
          answer: true,
          explain: "Đúng. Đây là ý nghĩa vật lí cốt lõi của nhiệt độ trong nhiệt động lực học vi mô.",
        },
        {
          text: "Các phân tử trong cùng một khối khí đều chuyển động với cùng một vận tốc bằng nhau tuyệt đối.",
          answer: false,
          explain: "Sai. Vận tốc các phân tử phân bố theo phân bố Maxwell-Boltzmann (có phân tử chuyển động rất nhanh, có phân tử chậm).",
        },
        {
          text: "Áp suất chất khí tỉ lệ thuận với mật độ phân tử và tỉ lệ thuận với động năng tịnh tiến trung bình của phân tử.",
          answer: true,
          explain: "Đúng. p = (2/3) . μ . E_d.",
        },
        {
          text: "Khí có khối lượng phân tử càng lớn thì tốc độ căn quân phương ở cùng nhiệt độ càng lớn.",
          answer: false,
          explain: "Sai. v_rms = √(3kT/m) tỉ lệ nghịch với căn bậc hai của khối lượng phân tử (khối lượng càng nặng thì bay càng chậm).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao trong bầu khí quyển của Trái Đất hầu như không còn khí hiđrô (H₂) và heli (He) tự do, trong khi các khí nặng hơn như nitơ (N₂) và ôxi (O₂) vẫn được giữ lại?",
      answer:
        "- Tốc độ căn quân phương của phân tử khí tỉ lệ nghịch với căn bậc hai của khối lượng mol: v_rms = √(3.R.T / M).\n- Khí hiđrô (M = 2 g/mol) và heli (M = 4 g/mol) có khối lượng phân tử rất nhẹ, do đó ở nhiệt độ tầng cao khí quyển, tốc độ chuyển động nhiệt của các phân tử này rất lớn (có thể vượt qua tốc độ vũ trụ cấp I ~ 7,9 km/s và tốc độ thoát ~ 11,2 km/s).\n- Trọng lực của Trái Đất không đủ mạnh để giữ các phân tử chuyển động quá nhanh này, khiến chúng dần dần thoát ly vào không gian vũ trụ.\n- Ngược lại, N₂ (M = 28) và O₂ (M = 32) nặng hơn nhiều nên tốc độ chuyển động nhiệt nhỏ hơn nhiều so với tốc độ thoát, do đó được trường trọng lực Trái Đất giữ lại quyển khí suốt hàng tỉ năm.",
    },
    {
      id: "es2",
      q: "Tính tổng động năng chuyển động nhiệt tịnh tiến của tất cả các phân tử khí chứa trong 1 mol khí lí tưởng ở nhiệt độ 27°C? Lấy R = 8,314 J/(mol.K).",
      answer:
        "1. Nhiệt độ tuyệt đối: T = 27 + 273 = 300 K.\n2. Động năng của 1 phân tử: E_d = (3/2) . k . T\n3. Trong 1 mol khí có N_A phân tử, vậy tổng động năng của 1 mol khí là:\n   E_tổng = N_A . E_d = N_A . (3/2) . k . T = (3/2) . (N_A . k) . T = (3/2) . R . T\n4. Thay số:\n   E_tổng = 1,5 . 8,314 . 300 = 3741,3 J ≈ 3,74 kJ.\n- Kết luận: Tổng động năng nhiệt của 1 mol khí lí tưởng ở 27°C là khoảng 3741,3 J (chính bằng nội năng U của 1 mol khí lí tưởng đơn nguyên tử).",
    },
  ],
};

export default extra;
