import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một nồi đun chứa 1,5 kg nước ban đầu ở 20°C. Cung cấp nhiệt lượng liên tục cho nồi để đun nước đến sôi ở 100°C và làm hoá hơi 0,3 kg nước. Cho nhiệt dung riêng của nước c = 4200 J/(kg.K) và nhiệt hoá hơi riêng L = 2,26.10⁶ J/kg. Bỏ qua hao phí nhiệt.",
      statements: [
        {
          text: "Nhiệt lượng cần thiết để nâng nhiệt độ của toàn bộ 1,5 kg nước từ 20°C lên 100°C là 504 kJ.",
          answer: true,
          explain: "Đúng. Q₁ = m.c.Δt = 1,5 . 4200 . 80 = 504.000 J = 504 kJ.",
        },
        {
          text: "Nhiệt lượng cần cung cấp để 0,3 kg nước hoá hơi ở 100°C là 678 kJ.",
          answer: true,
          explain: "Đúng. Q₂ = L . m_hh = 2,26 . 10⁶ . 0,3 = 678.000 J = 678 kJ.",
        },
        {
          text: "Tổng nhiệt lượng đã cung cấp cho cả quá trình là 1.182 kJ.",
          answer: true,
          explain: "Đúng. Q_tổng = Q₁ + Q₂ = 504 + 678 = 1.182 kJ.",
        },
        {
          text: "Nhiệt lượng dùng để làm hoá hơi 0,3 kg nước nhỏ hơn nhiệt lượng đun nóng 1,5 kg nước từ 20°C lên 100°C.",
          answer: false,
          explain: "Sai. Q₂ = 678 kJ > Q₁ = 504 kJ (nhiệt hoá hơi riêng của nước rất lớn).",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về quá trình hoá hơi và các hiện tượng vật lí liên quan đến sự sôi và bay hơi.",
      statements: [
        {
          text: "Sự bay hơi chỉ xảy ra ở nhiệt độ sôi của chất lỏng.",
          answer: false,
          explain: "Sai. Sự bay hơi diễn ra ở mặt thoáng tại bất kì nhiệt độ nào.",
        },
        {
          text: "Đơn vị của nhiệt hoá hơi riêng trong hệ SI là J/kg.",
          answer: true,
          explain: "Đúng. L = Q / m có đơn vị SI là Jun trên kilôgam.",
        },
        {
          text: "Khi một chất lỏng đang sôi, nếu tăng công suất ngọn lửa thì nhiệt độ của chất lỏng sẽ tăng vọt lên cao hơn nhiệt độ sôi.",
          answer: false,
          explain: "Sai. Tăng công suất ngọn lửa chỉ làm tốc độ hoá hơi nhanh hơn, nhiệt độ sôi không đổi.",
        },
        {
          text: "Quá trình ngưng tụ của chất khí là quá trình toả nhiệt lượng ra môi trường xung quanh.",
          answer: true,
          explain: "Đúng. Khi hơi ngưng tụ thành chất lỏng ở cùng nhiệt độ, nó giải phóng nhiệt lượng Q = L.m.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao khi vận động thể thao mạnh, cơ thể con người lại tiết ra nhiều mồ hôi? Quá trình bay hơi mồ hôi giúp bảo vệ cơ thể như thế nào?",
      answer:
        "- Khi vận động mạnh, các phản ứng sinh năng lượng trong cơ thể toả ra lượng nhiệt lớn, làm thân nhiệt có xu hướng tăng cao vượt ngưỡng an toàn (37°C).\n- Hệ thần kinh kích hoạt tuyến mồ hôi bài tiết mồ hôi lên bề mặt da. Nước trong mồ hôi có nhiệt hoá hơi rất lớn (L ≈ 2,26.10⁶ J/kg).\n- Khi mồ hôi bay hơi, nó hấp thụ nhiệt lượng trực tiếp từ máu và mô dưới da, giúp làm mát cơ thể nhanh chóng và duy trì thân nhiệt ổn định ở mức sinh lý bình thường.",
    },
    {
      id: "es2",
      q: "Dẫn 0,05 kg hơi nước ở 100°C vào một bình nhiệt lượng kế chứa 0,8 kg nước ở 15°C. Bỏ qua nhiệt dung của nhiệt lượng kế. Cho c_nước = 4200 J/(kg.K), L = 2,26.10⁶ J/kg. Tính nhiệt độ cân bằng của hệ sau khi hơi nước ngưng tụ hoàn toàn?",
      answer:
        "1. Nhiệt lượng hơi nước toả ra khi ngưng tụ ở 100°C và hạ nhiệt độ xuống t_cb:\n   Q_toả = m_hơi . L + m_hơi . c . (100 - t_cb)\n   Q_toả = 0,05 . 2,26 . 10⁶ + 0,05 . 4200 . (100 - t_cb)\n   Q_toả = 113.000 + 210 . (100 - t_cb) = 134.000 - 210 t_cb.\n\n2. Nhiệt lượng nước lạnh thu vào để tăng nhiệt độ từ 15°C lên t_cb:\n   Q_thu = m_nước . c . (t_cb - 15) = 0,8 . 4200 . (t_cb - 15) = 3360 t_cb - 50.400.\n\n3. Cân bằng nhiệt: Q_toả = Q_thu\n   134.000 - 210 t_cb = 3360 t_cb - 50.400\n   => 3570 t_cb = 184.400 => t_cb ≈ 51,65°C.\n- Kết luận: Nhiệt độ cân bằng của hỗn hợp sau khi ngưng tụ là khoảng 51,7°C.",
    },
  ],
};

export default extra;
