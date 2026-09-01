import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một ấm điện có công suất định mức 1500 W hoạt động ở hiệu điện thế định mức để đun 1,2 kg nước từ nhiệt độ 25°C đến 95°C. Cho nhiệt dung riêng của nước là c = 4180 J/(kg.K). Bỏ qua nhiệt dung của vỏ ấm.",
      statements: [
        {
          text: "Độ tăng nhiệt độ của nước trong quá trình đun là Δt = 70°C = 70 K.",
          answer: true,
          explain: "Đúng. Δt = 95 - 25 = 70°C và độ biến thiên trên thang Kelvin cũng bằng 70 K.",
        },
        {
          text: "Nhiệt lượng có ích mà nước nhận được để tăng nhiệt độ là 351.120 J.",
          answer: true,
          explain: "Đúng. Q = m.c.Δt = 1,2 . 4180 . 70 = 351.120 J.",
        },
        {
          text: "Nếu hiệu suất của ấm là 90%, thì điện năng toàn phần tiêu thụ là 316.008 J.",
          answer: false,
          explain: "Sai. Điện năng toàn phần A = Q / H = 351.120 / 0,9 = 390.133 J (phải lớn hơn nhiệt có ích).",
        },
        {
          text: "Nếu không có hao phí nhiệt (hiệu suất 100%), thời gian đun nước xấp xỉ 234 giây.",
          answer: true,
          explain: "Đúng. t = Q / P = 351.120 / 1500 = 234,08 s ≈ 234 s.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về khái niệm nhiệt dung riêng và ứng dụng thực tiễn của các chất trong tự nhiên.",
      statements: [
        {
          text: "Nhiệt dung riêng của một chất là một đại lượng phụ thuộc vào khối lượng của vật làm bằng chất đó.",
          answer: false,
          explain: "Sai. Nhiệt dung riêng là thuộc tính bản chất của chất cấu tạo, không phụ thuộc vào khối lượng của vật mẫu.",
        },
        {
          text: "Vật liệu có nhiệt dung riêng nhỏ sẽ nóng lên nhanh hơn và cũng nguội đi nhanh hơn khi trao đổi cùng một lượng nhiệt.",
          answer: true,
          explain: "Đúng. Vì ΔT = Q / (m.c), c càng nhỏ thì ΔT càng lớn với cùng Q và m.",
        },
        {
          text: "Các kim loại như đồng, nhôm, sắt có nhiệt dung riêng lớn hơn nhiều so với nước lỏng.",
          answer: false,
          explain: "Sai. Nhiệt dung riêng của kim loại (chỉ từ 100 đến 900 J/(kg.K)) nhỏ hơn rất nhiều so với nước (~4180 J/(kg.K)).",
        },
        {
          text: "Trong phương trình cân bằng nhiệt lý tưởng cô lập, tổng nhiệt lượng các vật toả ra bằng tổng nhiệt lượng các vật thu vào.",
          answer: true,
          explain: "Đúng. Đây là hệ quả trực tiếp của định luật bảo toàn năng lượng: Q_toả = Q_thu.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao khi đun sôi nước trong ấm bằng nhôm trên bếp, ấm và nước tăng nhiệt độ nhanh nhưng khi tắt bếp thì ấm cũng nguội đi khá nhanh, trong khi nước trong nồi đất giữ nhiệt lâu hơn?",
      answer:
        "- Nhôm là kim loại dẫn nhiệt tốt và có nhiệt dung riêng tương đối nhỏ (khoảng 880 J/(kg.K)), do đó ấm nhôm nóng lên nhanh khi cấp nhiệt và toả nhiệt làm nguội nhanh ra môi trường sau khi tắt bếp.\n- Nồi đất (gốm sứ) dẫn nhiệt kém hơn và có khối lượng lớn, thành dày, nhiệt dung riêng khá cao, nên tích trữ một nhiệt lượng lớn và toả nhiệt chậm ra môi trường ngoài, giúp giữ thức ăn và nước nóng ấm lâu hơn sau khi đun.",
    },
    {
      id: "es2",
      q: "Dẫn 0,4 kg nước ở 80°C trộn với 0,6 kg nước ở 20°C đựng trong bình cách nhiệt lý tưởng. Tính nhiệt độ cân bằng của hỗn hợp sau khi ổn định?",
      answer:
        "- Gọi t_cb là nhiệt độ cân bằng của hệ.\n- Nhiệt lượng khối nước nóng toả ra: Q_toả = m₁ . c . (t₁ - t_cb) = 0,4 . c . (80 - t_cb).\n- Nhiệt lượng khối nước lạnh thu vào: Q_thu = m₂ . c . (t_cb - t₂) = 0,6 . c . (t_cb - 20).\n- Vì hệ cách nhiệt: Q_toả = Q_thu => 0,4 . (80 - t_cb) = 0,6 . (t_cb - 20)\n  => 32 - 0,4 t_cb = 0,6 t_cb - 12\n  => 1,0 t_cb = 44 => t_cb = 44°C.\n- Kết luận: Nhiệt độ cân bằng của hỗn hợp nước là 44°C.",
    },
  ],
};

export default extra;
