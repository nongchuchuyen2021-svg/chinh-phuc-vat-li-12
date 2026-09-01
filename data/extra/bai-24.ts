import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một nhà máy điện hạt nhân sử dụng nhiên liệu phân hạch Urani-235 (^235_92U). Mỗi phân hạch toả ra năng lượng trung bình là 200 MeV. Công suất phát điện hữu ích của nhà máy là P = 500 MW với hiệu suất chuyển đổi nhiệt - điện là H = 25%.",
      statements: [
        {
          text: "Năng lượng toả ra từ mỗi phân hạch Urani-235 quy đổi sang Jun là 3,2.10⁻¹¹ J.",
          answer: true,
          explain: "Đúng. E = 200 MeV = 200 . 1,6.10⁻¹³ = 3,2 . 10⁻¹¹ J.",
        },
        {
          text: "Công suất nhiệt toàn phần do lò phản ứng tạo ra là 2000 MW.",
          answer: true,
          explain: "Đúng. P_nhiệt = P_điện / H = 500 / 0,25 = 2000 MW = 2 . 10⁹ W.",
        },
        {
          text: "Số phân hạch diễn ra trong lò phản ứng trong 1 giây là 6,25.10¹⁹ phân hạch.",
          answer: true,
          explain: "Đúng. N_ph = P_nhiệt / E = (2 . 10⁹) / (3,2 . 10⁻¹¹) = 6,25 . 10¹⁹ phân hạch/giây.",
        },
        {
          text: "Khối lượng Urani-235 bị phân hạch hoàn toàn trong 1 ngày (24 giờ) là khoảng 200 kg.",
          answer: false,
          explain: "Sai. Trong 1 ngày (86.400 s): N_ngày = 6,25.10¹⁹ . 86.400 = 5,4.10²⁴ hạt => m = (N/N_A) . 235 = (5,4.10²⁴ / 6,022.10²³) . 235 ≈ 8,97 . 235 ≈ 2,1 kg (chỉ tiêu thụ hơn 2 kg Urani mỗi ngày để phát 500 MW điện!).",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về hai dạng phản ứng hạt nhân giải phóng năng lượng: Phân hạch và Nhiệt hạch.",
      statements: [
        {
          text: "Cả phản ứng phân hạch và phản ứng nhiệt hạch đều là các phản ứng hạt nhân toả năng lượng.",
          answer: true,
          explain: "Đúng. Cả hai phản ứng đều làm tăng độ hụt khối và tạo ra các hạt nhân con bền vững hơn, giải phóng năng lượng lớn.",
        },
        {
          text: "Phản ứng nhiệt hạch hiện nay đã được khống chế thành công để vận hành các nhà máy điện thương mại phát điện rộng rãi trên toàn thế giới.",
          answer: false,
          explain: "Sai. Phản ứng nhiệt hạch có kiểm soát hiện vẫn đang trong giai đoạn nghiên cứu thử nghiệm phức tạp (dự án lò Tokamak / ITER), chưa thương mại hoá rộng rãi.",
        },
        {
          text: "Trái Đất nhận được năng lượng từ Mặt Trời chủ yếu nhờ phản ứng phân hạch hạt nhân Urani trong lòng Mặt Trời.",
          answer: false,
          explain: "Sai. Mặt Trời toả sáng nhờ phản ứng nhiệt hạch tổng hợp hiđrô thành heli.",
        },
        {
          text: "Chất làm chậm trong lò phản ứng hạt nhân (như than chì, nước nặng) có nhiệm vụ giảm vận tốc của các neutron nhanh về neutron chậm để tăng xác suất gây phân hạch.",
          answer: true,
          explain: "Đúng. Urani-235 bắt giữ neutron chậm hiệu quả hơn neutron nhanh rất nhiều lần.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "So sánh Phản ứng Phân hạch và Phản ứng Nhiệt hạch theo các tiêu chí: Đối tượng hạt nhân tham gia, Điều kiện xảy ra phản ứng, Năng lượng toả ra trên 1 kg nhiên liệu và Mức độ sạch đối với môi trường?",
      answer:
        "1. Hạt nhân tham gia:\n- Phân hạch: Hạt nhân rất nặng có số khối lớn (như ^235_92U, ^239_94Pu) hấp thụ một neutron chậm.\n- Nhiệt hạch: Các hạt nhân rất nhẹ (như ^1_1H, ^2_1D, ^3_1T) kết hợp lại với nhau.\n\n2. Điều kiện xảy ra phản ứng:\n- Phân hạch: Bắn phá bằng neutron chậm, khối lượng nhiên liệu phải đạt khối lượng tới hạn (k ≥ 1), có thể thực hiện dễ dàng ở nhiệt độ thường.\n- Nhiệt hạch: Cần nhiệt độ cực cao (hàng trăm triệu độ C) để tạo trạng thái plasma và thắng lực đẩy tĩnh điện Coulomb; cần mật độ hạt và thời gian giam giữ plasma đủ lớn.\n\n3. Năng lượng toả ra trên 1 kg nhiên liệu:\n- Phân hạch: Khoảng 8 . 10¹³ J/kg.\n- Nhiệt hạch: Khoảng 3,4 . 10¹⁴ J/kg (lớn gấp khoảng 4 đến 5 lần so với phân hạch).\n\n4. Mức độ sạch đối với môi trường:\n- Phân hạch: Tạo ra các mảnh phân hạch là chất thải phóng xạ có chu kì bán rã dài hàng nghìn năm, nguy cơ rò rỉ phóng xạ.\n- Nhiệt hạch: Sản phẩm chính là khí Heli (^4_2He) hoàn toàn trơ, sạch, không phóng xạ, không tạo khí nhà kính, cực kì thân thiện với môi trường.",
    },
    {
      id: "es2",
      q: "Một nhà máy điện hạt nhân dùng nhiên liệu phân hạch Urani ^235_92U hoạt động liên tục trong 1 năm (365 ngày) với công suất phát điện trung bình P = 1200 MW và hiệu suất nhà máy là H = 33%. Mỗi phân hạch toả ra trung bình 200 MeV. Tính khối lượng Urani-235 nguyên chất mà nhà máy đã tiêu thụ trong một năm đó? (Cho N_A = 6,022.10²³ mol⁻¹).",
      answer:
        "1. Năng lượng điện nhà máy sản xuất trong 1 năm:\n   - Thời gian: t = 365 . 86.400 = 31.536.000 giây.\n   - A_điện = P . t = 1,2 . 10⁹ . 31.536.000 ≈ 3,78432 . 10¹⁶ J.\n\n2. Năng lượng nhiệt toàn phần do phân hạch cung cấp:\n   - Q_nhiệt = A_điện / H = (3,78432 . 10¹⁶) / 0,33 ≈ 1,14676 . 10¹⁷ J.\n\n3. Năng lượng của 1 phân hạch Urani-235:\n   - E₁ = 200 MeV = 200 . 1,6 . 10⁻¹³ = 3,2 . 10⁻¹¹ J.\n\n4. Tổng số phân hạch cần xảy ra trong 1 năm:\n   - N = Q_nhiệt / E₁ = (1,14676 . 10¹⁷) / (3,2 . 10⁻¹¹) ≈ 3,5836 . 10²⁷ hạt.\n\n5. Khối lượng Urani-235 tiêu thụ trong 1 năm:\n   - m = (N / N_A) . M_U = (3,5836 . 10²⁷ / 6,022 . 10²³) . 235 g ≈ 5950,8 . 235 g ≈ 1.398.448 g ≈ 1398 kg ≈ 1,40 tấn.\n- Kết luận: Trong suốt 1 năm hoạt động liên tục cung cấp điện cho hàng triệu người, nhà máy chỉ tiêu thụ khoảng 1,4 tấn Urani-235 (so với nhà máy nhiệt điện than tương đương cần đốt tới hơn 3 triệu tấn than đá!).",
    },
  ],
};

export default extra;
