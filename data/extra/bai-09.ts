import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một xilanh chứa 120 cm³ khí lí tưởng ở áp suất khí quyển p₁ = 10⁵ Pa. Người ta từ từ ấn pittông dịch chuyển để nén khí sao cho nhiệt độ của khối khí trong xilanh không đổi cho đến khi thể tích khí còn lại là 40 cm³.",
      statements: [
        {
          text: "Quá trình nén khí trên là quá trình đẳng nhiệt.",
          answer: true,
          explain: "Đúng. Vì pittông được ấn từ từ và nhiệt độ khí được giữ không đổi.",
        },
        {
          text: "Áp suất của khối khí sau khi nén có giá trị bằng 3.10⁵ Pa.",
          answer: true,
          explain: "Đúng. p₂ = (p₁ . V₁) / V₂ = (10⁵ . 120) / 40 = 3.10⁵ Pa.",
        },
        {
          text: "Trong quá trình nén này, mật độ phân tử khí trong xilanh giảm đi 3 lần.",
          answer: false,
          explain: "Sai. Thể tích giảm 3 lần nên mật độ phân tử n = N/V tăng lên 3 lần.",
        },
        {
          text: "Đồ thị biểu diễn quá trình này trên hệ toạ độ (p, V) là một đoạn thẳng song song với trục hoành.",
          answer: false,
          explain: "Sai. Trên hệ toạ độ (p, V), đường đẳng nhiệt là một cung của nhánh đường hypebol.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét định luật Boyle và ứng dụng trong các hiện tượng thực tế.",
      statements: [
        {
          text: "Định luật Boyle chỉ áp dụng chính xác cho một khối lượng khí xác định ở nhiệt độ không đổi.",
          answer: true,
          explain: "Đúng. Định luật Boyle đòi hỏi khối lượng khí m không đổi và nhiệt độ T không đổi.",
        },
        {
          text: "Khi một người thợ lặn thở ra bong bóng khí ở độ sâu 20 m dưới biển, thể tích bong bóng sẽ tăng lên gấp khoảng 3 lần khi chạm mặt nước (coi nhiệt độ không đổi, áp suất mặt nước là 1 atm và cứ mỗi 10 m nước tăng thêm 1 atm).",
          answer: true,
          explain: "Đúng. Ở độ sâu 20 m, p₁ = 1 + 2 = 3 atm. Ở mặt nước p₂ = 1 atm. p₁/p₂ = 3 => V₂/V₁ = 3.",
        },
        {
          text: "Tích p.V của một khối lượng khí trong quá trình đẳng nhiệt phụ thuộc vào nhiệt độ T.",
          answer: true,
          explain: "Đúng. Hằng số C = n.R.T, do đó nhiệt độ T càng cao thì tích p.V càng lớn.",
        },
        {
          text: "Nếu thể tích của một khối khí tăng 2 lần thì áp suất của nó bắt buộc phải tăng 2 lần.",
          answer: false,
          explain: "Sai. Trong quá trình đẳng nhiệt, p tỉ lệ nghịch với V, thể tích tăng 2 lần thì áp suất phải giảm 2 lần.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao khi bơm săm xe đạp, nếu ấn pittông bơm thật nhanh thì thân bơm bị nóng ran lên, nhưng nếu ấn từ từ thì nhiệt độ thân bơm gần như không đổi? Quá trình nào tuân theo định luật Boyle?",
      answer:
        "- Khi ấn pittông thật nhanh: Ngoại lực thực hiện công lớn lên khối khí trong thời gian rất ngắn, nhiệt lượng chưa kịp truyền qua thành bơm ra môi trường (quá trình gần như đoạn nhiệt). Theo định luật I, toàn bộ công làm tăng nội năng và nhiệt độ khối khí tăng mạnh, truyền nhiệt làm thân bơm nóng ran lên. Quá trình này không phải là đẳng nhiệt, không tuân theo định luật Boyle.\n- Khi ấn pittông từ từ: Khí có đủ thời gian trao đổi nhiệt liên tục với vỏ bơm và môi trường ngoài, giữ nhiệt độ khí không đổi (quá trình đẳng nhiệt). Quá trình này tuân theo đúng định luật Boyle.",
    },
    {
      id: "es2",
      q: "Một ống thuỷ tinh hình trụ hở một đầu, dài L = 80 cm, bên trong chứa không khí ở áp suất khí quyển p₀ = 75 cmHg. Người ta ấn từ từ ống theo phương thẳng đứng vào một chậu thuỷ ngân sao cho đầu hở chìm xuống dưới, cho đến khi mực thuỷ ngân bên trong ống dâng lên cao h = 20 cm so với miệng ống. Coi nhiệt độ không đổi. Tính độ sâu của miệng ống ngập trong thuỷ ngân?",
      answer:
        "1. Trạng thái 1 (ban đầu): Khí chiếm trọn ống\n   - Thể tích: V₁ = S . L = 80 S\n   - Áp suất: p₁ = p₀ = 75 cmHg\n\n2. Trạng thái 2 (khi ngập): Khí bị nén lại\n   - Thể tích: V₂ = S . (L - h) = S . (80 - 20) = 60 S\n   - Áp suất khí trong ống theo định luật Boyle:\n     p₂ = (p₁ . V₁) / V₂ = (75 . 80 S) / (60 S) = 100 cmHg\n\n3. Tính độ sâu miệng ống ngập dưới mặt thuỷ ngân:\n   - Áp suất tại mặt thoáng thuỷ ngân trong ống: p₂ = p₀ + (H - h) cmHg (với H là độ sâu miệng ống ngập dưới mặt thoáng chậu thuỷ ngân).\n   - 100 = 75 + H - 20 => H = 100 - 55 = 45 cm.\n- Kết luận: Miệng ống thuỷ tinh ngập sâu 45 cm dưới mặt thoáng thuỷ ngân trong chậu.",
    },
  ],
};

export default extra;
