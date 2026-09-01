import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một xilanh nằm ngang kín hai đầu được chia làm hai phần bằng nhau bởi một pittông cách nhiệt mỏng có thể dịch chuyển không ma sát. Mỗi phần có chiều dài L = 40 cm và chứa một lượng khí lí tưởng giống nhau ở áp suất p₀ = 1 atm và nhiệt độ ban đầu 27°C. Người ta nung nóng khí ở phần bên trái lên 127°C và giữ nguyên nhiệt độ phần bên phải ở 27°C.",
      statements: [
        {
          text: "Khi cân bằng mới được thiết lập, áp suất khí ở hai phần xilanh là bằng nhau.",
          answer: true,
          explain: "Đúng. Pittông tự do không ma sát dừng lại khi áp suất hai bên bằng nhau: p₁' = p₂' = p'.",
        },
        {
          text: "Quá trình biến đổi của lượng khí ở phần bên phải là quá trình đẳng nhiệt.",
          answer: true,
          explain: "Đúng. Phần bên phải được giữ nguyên nhiệt độ ở 27°C.",
        },
        {
          text: "Pittông dịch chuyển sang phía bên phải một đoạn x = 5 cm.",
          answer: false,
          explain: "Sai. Ta có: p' = p₀ . L / (L - x) = p₀ . (T₁' / T₁) . L / (L + x) => (L + x) / (L - x) = T₁' / T₁ = 400 / 300 = 4/3 => 3(40 + x) = 4(40 - x) => 120 + 3x = 160 - 4x => 7x = 40 => x ≈ 5,71 cm.",
        },
        {
          text: "Áp suất cuối cùng trong xilanh lớn hơn 1 atm.",
          answer: true,
          explain: "Đúng. Vì khí bên phải bị nén lại (thể tích giảm ở nhiệt độ không đổi) nên áp suất p' > p₀ = 1 atm (cụ thể p' = 40 / 34,29 ≈ 1,17 atm).",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét một chu trình nhiệt động lực học khép kín gồm 3 giai đoạn: (1) dãn đẳng nhiệt từ (p₁, V₁) đến (p₂, V₂); (2) làm lạnh đẳng áp từ V₂ về V₁; (3) nung nóng đẳng tích từ p₂ về p₁.",
      statements: [
        {
          text: "Đồ thị của chu trình này trên hệ toạ độ (p, V) là một hình khép kín gồm 1 cung hypebol và 2 đoạn thẳng vuông góc nhau.",
          answer: true,
          explain: "Đúng. Đẳng nhiệt là cung hypebol, đẳng áp là đoạn ngang, đẳng tích là đoạn đứng.",
        },
        {
          text: "Trong giai đoạn (2) làm lạnh đẳng áp, nhiệt độ của khối khí giảm dần.",
          answer: true,
          explain: "Đúng. V giảm trong quá trình đẳng áp nên theo định luật Charles thì T giảm.",
        },
        {
          text: "Trong giai đoạn (3) nung nóng đẳng tích, khối khí không sinh công cơ học (A = 0).",
          answer: true,
          explain: "Đúng. Vì thể tích V không đổi nên công cơ học A = 0.",
        },
        {
          text: "Hiệu suất nhiệt của chu trình bằng 100% nếu không có ma sát giữa pittông và xilanh.",
          answer: false,
          explain: "Sai. Theo Định luật II nhiệt động lực học, không một động cơ nhiệt nào có hiệu suất đạt 100%.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Một bình kim loại dung tích V = 50 lít chứa khí ôxi ở áp suất 100 atm và nhiệt độ 27°C. Người ta dùng hết một phần khí ôxi trong bình để hàn cắt kim loại. Sau một thời gian, áp suất trong bình giảm xuống còn 40 atm và nhiệt độ đo được là 17°C. Tính khối lượng khí ôxi đã tiêu thụ? (Cho khối lượng mol O₂ là M = 32 g/mol, R = 8,314 J/(mol.K)).",
      answer:
        "1. Khối lượng khí ban đầu trong bình:\n   - T₁ = 27 + 273 = 300 K; p₁ = 100 atm = 1,013 . 10⁷ Pa; V = 0,05 m³.\n   - m₁ = (p₁ . V . M) / (R . T₁) = (1,013.10⁷ . 0,05 . 0,032) / (8,314 . 300) = 16208 / 2494,2 ≈ 6,498 kg.\n\n2. Khối lượng khí còn lại trong bình sau khi dùng:\n   - T₂ = 17 + 273 = 290 K; p₂ = 40 atm = 4,052 . 10⁶ Pa.\n   - m₂ = (p₂ . V . M) / (R . T₂) = (4,052.10⁶ . 0,05 . 0,032) / (8,314 . 290) = 6483,2 / 2411,06 ≈ 2,689 kg.\n\n3. Khối lượng khí ôxi đã tiêu thụ:\n   - Δm = m₁ - m₂ = 6,498 - 2,689 = 3,809 kg ≈ 3,81 kg.\n- Kết luận: Khối lượng khí ôxi đã dùng là khoảng 3,81 kg.",
    },
    {
      id: "es2",
      q: "Một khối khí lí tưởng có thể tích 2 lít ở áp suất 1 atm và nhiệt độ 27°C (trạng thái 1). Khối khí dãn đẳng áp đến thể tích 4 lít (trạng thái 2), sau đó nén đẳng nhiệt về thể tích ban đầu 2 lít (trạng thái 3). Hãy xác định áp suất và nhiệt độ của khối khí ở trạng thái 2 và trạng thái 3?",
      answer:
        "1. Từ trạng thái 1 (p₁ = 1 atm, V₁ = 2 L, T₁ = 300 K) sang trạng thái 2 (đẳng áp: p₂ = p₁ = 1 atm, V₂ = 4 L):\n   - Áp dụng định luật Charles: V₁ / T₁ = V₂ / T₂ => T₂ = (V₂ . T₁) / V₁ = (4 . 300) / 2 = 600 K (tương ứng 327°C).\n   - Kết luận trạng thái 2: p₂ = 1 atm, T₂ = 600 K (327°C).\n\n2. Từ trạng thái 2 sang trạng thái 3 (đẳng nhiệt: T₃ = T₂ = 600 K, V₃ = 2 L):\n   - Áp dụng định luật Boyle: p₂ . V₂ = p₃ . V₃ => p₃ = (p₂ . V₂) / V₃ = (1 . 4) / 2 = 2 atm.\n   - Kết luận trạng thái 3: p₃ = 2 atm, T₃ = 600 K (327°C).",
    },
  ],
};

export default extra;
