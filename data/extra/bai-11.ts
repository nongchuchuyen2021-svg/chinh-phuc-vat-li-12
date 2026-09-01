import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một khối khí heli (He, khối lượng mol M = 4 g/mol) có khối lượng m = 8 g đựng trong một bình kín có dung tích không đổi V = 10 lít ở nhiệt độ ban đầu 27°C. Lấy R = 8,314 J/(mol.K).",
      statements: [
        {
          text: "Số mol khí heli có trong bình là n = 2 mol.",
          answer: true,
          explain: "Đúng. n = m / M = 8 / 4 = 2 mol.",
        },
        {
          text: "Áp suất ban đầu của khí heli trong bình xấp xỉ bằng 4,99 . 10⁵ Pa (gần bằng 5 atm).",
          answer: true,
          explain: "Đúng. p = (n . R . T) / V = (2 . 8,314 . 300) / 0,01 = 498.840 Pa ≈ 4,99 . 10⁵ Pa.",
        },
        {
          text: "Nếu nung nóng bình để nhiệt độ tăng lên gấp đôi theo thang Celsius (lên 54°C) thì áp suất khí tăng lên gấp đôi.",
          answer: false,
          explain: "Sai. Áp suất tỉ lệ thuận với nhiệt độ tuyệt đối T (K), từ 300 K lên 327 K nên áp suất chỉ tăng (327/300) = 1,09 lần.",
        },
        {
          text: "Nếu bơm thêm 4 g khí heli ở cùng nhiệt độ vào bình thì áp suất khí trong bình tăng lên 1,5 lần.",
          answer: true,
          explain: "Đúng. Số mol tăng từ 2 mol lên 3 mol (gấp 1,5 lần), do đó áp suất tăng 1,5 lần.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét phương trình trạng thái của khí lí tưởng và các quy luật biến đổi.",
      statements: [
        {
          text: "Phương trình trạng thái (p.V)/T = const chỉ áp dụng cho một khối lượng khí xác định không thay đổi.",
          answer: true,
          explain: "Đúng. Nếu lượng khí thay đổi (bị rò rỉ hoặc bơm thêm) thì phải dùng phương trình Clapeyron - Mendeleev p.V = (m/M).R.T.",
        },
        {
          text: "Hai bình có cùng thể tích và chứa cùng một loại khí ở cùng nhiệt độ thì chắc chắn có cùng áp suất.",
          answer: false,
          explain: "Sai. Áp suất còn phụ thuộc vào lượng khí (số mol hay khối lượng khí) trong mỗi bình.",
        },
        {
          text: "Ở cùng điều kiện nhiệt độ và áp suất, 1 mol của bất kì chất khí lí tưởng nào cũng chiếm thể tích bằng nhau.",
          answer: true,
          explain: "Đúng. Đây chính là Định luật Avogadro: V = n.R.T / p.",
        },
        {
          text: "Đơn vị của hằng số Boltzmann k trong hệ SI là J/K.",
          answer: true,
          explain: "Đúng. k = 1,38.10⁻²³ J/K.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Trình bày cách suy ra Định luật Boyle và Định luật Charles từ Phương trình trạng thái của khí lí tưởng (p.V)/T = hằng số?",
      answer:
        "Từ phương trình trạng thái tổng quát: (p . V) / T = C (hằng số đối với khối lượng khí xác định):\n\n1. Trường hợp quá trình Đẳng nhiệt (T = hằng số):\n   - Vì T không đổi nên ta nhân T vào hằng số C: p . V = C . T = hằng số mới.\n   => p . V = hằng số (Định luật Boyle).\n\n2. Trường hợp quá trình Đẳng áp (p = hằng số):\n   - Vì p không đổi nên chia p xuống vế phải: V / T = C / p = hằng số mới.\n   => V / T = hằng số (Định luật Charles).",
    },
    {
      id: "es2",
      q: "Một bình bằng thép dung tích 20 lít chứa khí nén ở áp suất 150 atm và nhiệt độ 27°C. Người ta dùng bình này để bơm các quả bóng bay, mỗi quả bóng sau khi bơm có dung tích 2 lít ở áp suất 1,2 atm và nhiệt độ 27°C. Coi nhiệt độ không đổi trong suốt quá trình. Hỏi bơm được tối đa bao nhiêu quả bóng bay?",
      answer:
        "1. Xác định lượng khí có thể dùng để bơm bóng:\n   - Áp suất ban đầu trong bình: p₁ = 150 atm, V₁ = 20 lít.\n   - Khi bơm bóng, khí trong bình chỉ thoát ra được cho đến khi áp suất trong bình hạ xuống bằng áp suất trong bóng (p_cuối = 1,2 atm).\n   - Khí còn lại trong bình khi dừng bơm có thể tích 20 lít ở 1,2 atm.\n\n2. Tổng thể tích khí ở áp suất 1,2 atm (theo định luật Boyle vì T không đổi):\n   - V_tổng = (p₁ . V₁) / p_cuối = (150 . 20) / 1,2 = 2500 lít.\n   - Thể tích khí thực sự bơm vào các quả bóng:\n     V_bơm = V_tổng - V_bình = 2500 - 20 = 2480 lít.\n\n3. Số quả bóng bay bơm được:\n   - N = V_bơm / V_mỗi quả = 2480 / 2 = 1240 quả bóng.\n- Kết luận: Bơm được tối đa 1240 quả bóng bay.",
    },
  ],
};

export default extra;
