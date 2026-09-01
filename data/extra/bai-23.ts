import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Chất phóng xạ Poloni (^210_84Po) là chất phóng xạ alpha biến đổi thành hạt nhân Chì (^206_82Pb) bền. Chu kì bán rã của Poloni là T = 138 ngày. Ban đầu có một mẫu Poloni nguyên chất có khối lượng m₀ = 2,1 gam.",
      statements: [
        {
          text: "Phương trình phân rã phóng xạ là: ^210_84Po -> ^4_2He + ^206_82Pb.",
          answer: true,
          explain: "Đúng. Phóng xạ alpha phát ra hạt nhân Heli ^4_2He tạo hạt nhân con Chì ^206_82Pb.",
        },
        {
          text: "Sau thời gian 276 ngày (bằng 2 chu kì bán rã), khối lượng Poloni còn lại là 0,525 gam.",
          answer: true,
          explain: "Đúng. m = m₀ / 2² = 2,1 / 4 = 0,525 gam.",
        },
        {
          text: "Sau 276 ngày, khối lượng Chì được sinh ra trong mẫu là 1,575 gam.",
          answer: false,
          explain: "Sai. Số mol Poloni phân rã bằng số mol Chì sinh ra: n_Pb = n_Po_phân rã = (2,1 - 0,525) / 210 = 1,575 / 210 = 0,0075 mol. Khối lượng Chì m_Pb = 0,0075 . 206 = 1,545 gam (khác 1,575 g do khối lượng mol khác nhau).",
        },
        {
          text: "Nếu tăng nhiệt độ của mẫu Poloni lên 1000°C thì tốc độ phân rã phóng xạ sẽ tăng lên gấp nhiều lần.",
          answer: false,
          explain: "Sai. Hiện tượng phóng xạ là quá trình hạt nhân tự phát, hoàn toàn không phụ thuộc vào nhiệt độ, áp suất và các tác nhân hoá học/vật lí bên ngoài.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về các tia phóng xạ và ứng dụng của chúng.",
      statements: [
        {
          text: "Tia gamma (γ) có bản chất là sóng điện từ có năng lượng rất cao, có thể gây ion hoá và tổn thương tế bào sống nếu tiếp xúc liều cao.",
          answer: true,
          explain: "Đúng. Tia gamma là bức xạ ion hoá nguy hiểm, cần được che chắn bằng chì dày.",
        },
        {
          text: "Tia beta dương (β⁺) là dòng các hạt positron (phản hạt của electron, có cùng khối lượng với electron nhưng mang điện tích +e).",
          answer: true,
          explain: "Đúng. Positron là hạt mang điện tích dương +1,6.10⁻¹⁹ C.",
        },
        {
          text: "Đồng vị phóng xạ Carbon-14 có chu kì bán rã 5730 năm được ứng dụng để định tuổi các mẫu hoá thạch cổ sinh vật hàng triệu năm tuổi.",
          answer: false,
          explain: "Sai. Carbon-14 chỉ định tuổi hiệu quả cho các mẫu hữu cơ dưới 50.000 - 60.000 năm tuổi (với mẫu triệu năm thì ^14C đã phân rã hết, phải dùng phương pháp Urani - Chì hoặc Kali - Agon).",
        },
        {
          text: "Trong phóng xạ beta âm (β⁻), một neutron bên trong hạt nhân tự biến đổi thành một proton và một electron kèm hạt phản neutrino.",
          answer: true,
          explain: "Đúng. Cơ chế vi mô của phân rã β⁻ là n -> p + e⁻ + ν_e.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "So sánh 3 loại tia phóng xạ chính (Alpha, Beta, Gamma) về: Bản chất vật lí, Điện tích, Vận tốc ban đầu và Khả năng đâm xuyên qua các vật liệu?",
      answer:
        "1. Tia Alpha (α):\n- Bản chất: Dòng hạt nhân Heli (^4_2He).\n- Điện tích: +2e (+3,2 . 10⁻¹⁹ C).\n- Vận tốc: Khoảng 2 . 10⁷ m/s (cỡ 0,07 c).\n- Đâm xuyên: Rất yếu, đi được vài cm trong không khí, bị chặn hoàn toàn bởi một tờ giấy mỏng hoặc lớp da biểu bì ngoài cùng.\n\n2. Tia Beta (β⁻ và β⁺):\n- Bản chất: Dòng electron (^0_-1 e) hoặc dòng positron (^0_+1 e).\n- Điện tích: -e (-1,6 . 10⁻¹⁹ C) đối với β⁻ và +e (+1,6 . 10⁻¹⁹ C) đối với β⁺.\n- Vận tốc: Rất lớn, xấp xỉ tốc độ ánh sáng (cỡ 0,9 c đến 0,99 c).\n- Đâm xuyên: Trung bình, đi được vài mét trong không khí, bị chặn bởi tấm nhôm dày vài milimet.\n\n3. Tia Gamma (γ):\n- Bản chất: Sóng điện từ có bước sóng cực ngắn (photon năng lượng cao).\n- Điện tích: Bằng 0 (trung hoà về điện).\n- Vận tốc: Đúng bằng tốc độ ánh sáng c = 3 . 10⁸ m/s trong chân không.\n- Đâm xuyên: Cực kì mạnh, đi xuyên qua hàng trăm mét không khí, chỉ bị suy giảm bởi lớp chì dày hàng chục cm hoặc tường bê tông dày hàng mét.",
    },
    {
      id: "es2",
      q: "Một mẫu gỗ cổ khai quật từ một ngôi mộ cổ có độ phóng xạ của đồng vị Carbon-14 (^14_6C) đo được bằng 25% độ phóng xạ của một khúc gỗ tươi cùng loại và cùng khối lượng mới đốn hạ hôm nay. Biết chu kì bán rã của Carbon-14 là T = 5730 năm. Hãy xác định niên đại (tuổi) của ngôi mộ cổ này?",
      answer:
        "1. Theo định luật phóng xạ, độ phóng xạ H phụ thuộc thời gian theo hàm mũ:\n   - H(t) = H₀ . 2^(-t / T)\n\n2. Theo đề bài, tỉ số độ phóng xạ của mẫu gỗ cổ so với gỗ tươi ban đầu:\n   - H(t) / H₀ = 25% = 0,25 = 1/4 = 2⁻².\n\n3. Ta có phương trình:\n   - 2^(-t / T) = 2⁻²\n   => t / T = 2\n   => t = 2 . T = 2 . 5730 = 11.460 năm.\n- Kết luận: Ngôi mộ cổ này có niên đại khoảng 11.460 năm trước.",
    },
  ],
};

export default extra;
