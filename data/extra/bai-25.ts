import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Hạt proton có động năng K_p = 1,6 MeV bắn vào hạt nhân Liti (^7_3Li) đứng yên sinh ra hai hạt nhân X giống hệt nhau có cùng động năng. Cho m_p = 1,0073 u; m_Li = 7,0144 u; m_X = 4,0015 u; lấy 1 u = 931,5 MeV/c².",
      statements: [
        {
          text: "Hạt nhân X sinh ra trong phản ứng là hạt nhân Heli (^4_2He).",
          answer: true,
          explain: "Đúng. Phương trình: ^1_1p + ^7_3Li -> 2 ^4_2He (hạt nhân Heli).",
        },
        {
          text: "Phản ứng hạt nhân trên là phản ứng toả năng lượng với Q ≈ 17,42 MeV.",
          answer: true,
          explain: "Đúng. Q = (1,0073 + 7,0144 - 2 . 4,0015) . 931,5 = 0,0187 . 931,5 ≈ 17,42 MeV.",
        },
        {
          text: "Động năng của mỗi hạt Heli sinh ra là 9,51 MeV.",
          answer: true,
          explain: "Đúng. Tổng động năng: K_He1 + K_He2 = K_p + Q = 1,6 + 17,42 = 19,02 MeV. Vì hai hạt đối xứng nên K_He = 19,02 / 2 = 9,51 MeV.",
        },
        {
          text: "Góc hợp bởi véc-tơ vận tốc của hai hạt Heli sau phản ứng là 180°.",
          answer: false,
          explain: "Sai. Vì proton ban đầu có động năng K_p > 0 (động lượng p_p ≠ 0), theo quy tắc hình bình hành động lượng p⃗_p = p⃗_He1 + p⃗_He2 nên góc giữa hai hạt He là góc tù (khoảng 160°), không thể thẳng hàng 180°.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về quá trình phân hạch và sự phóng xạ của các chất hạt nhân.",
      statements: [
        {
          text: "Hiện tượng phóng xạ không phụ thuộc vào trạng thái nhiệt độ và áp suất của môi trường xung quanh.",
          answer: true,
          explain: "Đúng. Phóng xạ là hiện tượng tự phát xảy ra sâu trong lõi hạt nhân, không bị ảnh hưởng bởi nhiệt động lực học vĩ mô.",
        },
        {
          text: "Năng lượng toả ra từ 1 kg nhiên liệu phân hạch Urani-235 lớn gấp hàng triệu lần năng lượng toả ra khi đốt cháy 1 kg than đá.",
          answer: true,
          explain: "Đúng. 1 kg U-235 toả ra ~8.10¹³ J so với 1 kg than chỉ ~3.10⁷ J (gấp gần 3 triệu lần).",
        },
        {
          text: "Hạt nhân có số khối càng lớn thì năng lượng liên kết riêng càng lớn.",
          answer: false,
          explain: "Sai. Năng lượng liên kết riêng lớn nhất ở các hạt nhân trung bình (50 < A < 70), hạt nhân quá nặng như Urani-238 có W_lkr nhỏ hơn (~7,6 MeV/nucleon).",
        },
        {
          text: "Độ phóng xạ của một mẫu chất tỉ lệ thuận với số lượng hạt nhân phóng xạ còn lại trong mẫu: H = λ.N.",
          answer: true,
          explain: "Đúng. H = λ.N với λ là hằng số phóng xạ.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Trình bày 4 định luật bảo toàn áp dụng trong phản ứng hạt nhân. Tại sao trong phản ứng hạt nhân KHÔNG có định luật bảo toàn khối lượng nghỉ?",
      answer:
        "1. Bốn định luật bảo toàn trong phản ứng hạt nhân:\n- **Định luật bảo toàn số khối (số nucleon A):** Tổng số nucleon trước phản ứng bằng tổng số nucleon sau phản ứng (Σ A_trước = Σ A_sau).\n- **Định luật bảo toàn điện tích (số hiệu nguyên tử Z):** Tổng đại số điện tích các hạt trước phản ứng bằng tổng đại số điện tích các hạt sau phản ứng (Σ Z_trước = Σ Z_sau).\n- **Định luật bảo toàn động lượng:** Véc-tơ tổng động lượng của hệ hạt trước phản ứng bằng véc-tơ tổng động lượng sau phản ứng (Σ p⃗_trước = Σ p⃗_sau).\n- **Định luật bảo toàn năng lượng toàn phần:** Tổng năng lượng toàn phần (gồm năng lượng nghỉ và động năng) của hệ được bảo toàn: Σ (m_i . c² + K_i)_trước = Σ (m_j . c² + K_j)_sau.\n\n2. Lí do không có bảo toàn khối lượng nghỉ:\n- Theo thuyết tương đối Einstein (E = m.c²), khối lượng nghỉ và năng lượng có thể chuyển hoá qua lại lẫn nhau.\n- Trong phản ứng toả năng lượng, một phần khối lượng nghỉ của hệ (độ hụt khối ΔM = m_trước - m_sau > 0) đã bị chuyển hoá thành động năng chuyển động của các hạt và năng lượng photon bức xạ toả ra ngoài (Q = ΔM.c²).\n- Do đó tổng khối lượng nghỉ trước và sau phản ứng không bằng nhau.",
    },
    {
      id: "es2",
      q: "Đồng vị phóng xạ Radi (^226_88Ra) có chu kì bán rã T = 1600 năm, phân rã alpha tạo thành hạt nhân Radon (^222_86Rn). Cho khối lượng mol của Ra-226 là 226 g/mol, N_A = 6,022.10²³ mol⁻¹.\n a) Tính độ phóng xạ ban đầu H₀ của 1 gam Radi nguyên chất theo đơn vị Bq (Becquerel)?\n b) Sau bao lâu thì độ phóng xạ của mẫu Radi này giảm đi 8 lần?",
      answer:
        "1. Câu a: Tính độ phóng xạ ban đầu H₀ của 1 gam Ra-226:\n   - Đổi chu kì bán rã ra giây:\n     T = 1600 năm = 1600 . 365,25 . 86.400 = 5,0492 . 10¹⁰ giây.\n   - Hằng số phóng xạ:\n     λ = ln(2) / T = 0,69315 / (5,0492 . 10¹⁰) ≈ 1,3728 . 10⁻¹¹ s⁻¹.\n   - Số hạt nhân trong 1 gam Ra-226:\n     N₀ = (m₀ / M) . N_A = (1 / 226) . 6,022 . 10²³ ≈ 2,6646 . 10²¹ hạt.\n   - Độ phóng xạ ban đầu:\n     H₀ = λ . N₀ = 1,3728 . 10⁻¹¹ . 2,6646 . 10²¹ ≈ 3,66 . 10¹⁰ Bq ≈ 3,7 . 10¹⁰ Bq (chính là định nghĩa của 1 đơn vị Curie: 1 Ci = 3,7.10¹⁰ Bq).\n\n2. Câu b: Tính thời gian để độ phóng xạ giảm 8 lần:\n   - Ta có: H / H₀ = 1/8 = 2⁻³ = 2^(-t / T)\n   => t / T = 3\n   => t = 3 . T = 3 . 1600 = 4800 năm.\n- Kết luận:\n a) Độ phóng xạ ban đầu của 1 g Radi là 3,66 . 10¹⁰ Bq (xấp xỉ 1 Curie).\n b) Sau 4800 năm thì độ phóng xạ giảm đi 8 lần.",
    },
  ],
};

export default extra;
