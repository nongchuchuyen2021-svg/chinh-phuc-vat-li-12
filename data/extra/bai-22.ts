import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Xét hạt nhân Đơteri (^2_1D) và hạt nhân Triti (^3_1T). Cho m_p = 1,0073 u; m_n = 1,0087 u; m_D = 2,0136 u; m_T = 3,0160 u; lấy 1 u = 931,5 MeV/c².",
      statements: [
        {
          text: "Độ hụt khối của hạt nhân Đơteri là Δm_D = 0,0024 u.",
          answer: true,
          explain: "Đúng. Δm_D = m_p + m_n - m_D = 1,0073 + 1,0087 - 2,0136 = 0,0024 u.",
        },
        {
          text: "Năng lượng liên kết của hạt nhân Đơteri là W_lk(D) ≈ 2,24 MeV.",
          answer: true,
          explain: "Đúng. W_lk(D) = 0,0024 . 931,5 ≈ 2,2356 MeV ≈ 2,24 MeV.",
        },
        {
          text: "Năng lượng liên kết riêng của hạt nhân Triti lớn hơn năng lượng liên kết riêng của hạt nhân Đơteri.",
          answer: true,
          explain: "Đúng. Δm_T = 1.m_p + 2.m_n - m_T = 1,0073 + 2,0174 - 3,0160 = 0,0087 u => W_lk(T) = 8,1 MeV => W_lkr(T) = 8,1/3 = 2,7 MeV/nucleon > W_lkr(D) = 2,24/2 = 1,12 MeV/nucleon.",
        },
        {
          text: "Hạt nhân Đơteri bền vững hơn hạt nhân Triti.",
          answer: false,
          explain: "Sai. Hạt nhân Triti có năng lượng liên kết riêng lớn hơn nên bền vững hơn hạt nhân Đơteri.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về các định luật bảo toàn trong phản ứng hạt nhân.",
      statements: [
        {
          text: "Trong mọi phản ứng hạt nhân, tổng số nucleon trước phản ứng luôn bằng tổng số nucleon sau phản ứng.",
          answer: true,
          explain: "Đúng. Đây là định luật bảo toàn số nucleon (số khối A).",
        },
        {
          text: "Trong phản ứng hạt nhân toả năng lượng, tổng khối lượng nghỉ của các hạt sau phản ứng nhỏ hơn trước phản ứng.",
          answer: true,
          explain: "Đúng. Độ giảm khối lượng nghỉ Δm chuyển thành động năng và năng lượng bức xạ toả ra: Q = (m_trước - m_sau).c² > 0.",
        },
        {
          text: "Tổng số hạt proton luôn được bảo toàn độc lập trong mọi phản ứng hạt nhân.",
          answer: false,
          explain: "Sai. Trong phản ứng phóng xạ beta (β⁻: n -> p + e⁻ + ν; β⁺: p -> n + e⁺ + ν), số proton bị thay đổi, chỉ có tổng điện tích Z được bảo toàn.",
        },
        {
          text: "Lực liên kết giữa hai proton bên trong hạt nhân là lực đẩy tĩnh điện Coulomb.",
          answer: false,
          explain: "Sai. Lực liên kết giữa các nucleon (kể cả giữa hai proton) là lực hạt nhân (lực tương tác mạnh có tính chất hút rất mạnh, thắng lực đẩy Coulomb).",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Phân biệt Năng lượng liên kết (W_lk) và Năng lượng liên kết riêng (W_lkr) của hạt nhân nguyên tử. Đại lượng nào quyết định độ bền vững của hạt nhân và tại sao?",
      answer:
        "1. Phân biệt:\n- Năng lượng liên kết (W_lk = Δm . c²): Là năng lượng toàn phần cần cung cấp để tách hoàn toàn toàn bộ một hạt nhân thành các nucleon riêng biệt đứng yên. Hạt nhân có nhiều nucleon (A lớn) thường có W_lk lớn.\n- Năng lượng liên kết riêng (W_lkr = W_lk / A): Là năng lượng liên kết trung bình tính trên MỘT nucleon.\n\n2. Đại lượng quyết định độ bền vững:\n- **Năng lượng liên kết riêng (W_lkr)** mới là đại lượng quyết định độ bền vững của hạt nhân.\n- Lí do: Một hạt nhân có W_lk rất lớn (như Urani-235 có W_lk ≈ 1786 MeV) nhưng do chia cho tới 235 nucleon nên năng lượng liên kết của mỗi nucleon chỉ đạt W_lkr ≈ 7,6 MeV/nucleon, kém bền vững hơn nhiều so với hạt nhân Sắt ^56_26Fe (có W_lkr ≈ 8,8 MeV/nucleon). Hạt nhân có W_lkr càng lớn thì các nucleon liên kết với nhau càng chặt chẽ, hạt nhân càng khó bị phá vỡ và càng bền vững trong tự nhiên.",
    },
    {
      id: "es2",
      q: "Cho phản ứng hạt nhân: ^1_1H + ^7_3Li -> 2 ^4_2He. Biết khối lượng các hạt: m_H = 1,0073 u; m_Li = 7,0144 u; m_He = 4,0015 u. Lấy 1 u = 931,5 MeV/c².\n a) Phản ứng này toả hay thu năng lượng và bằng bao nhiêu MeV?\n b) Tính năng lượng toả ra khi tổng hợp hoàn toàn được 1 gam khí Heli (^4_2He) từ phản ứng trên? (Cho N_A = 6,022.10²³ mol⁻¹).",
      answer:
        "1. Tính năng lượng của một phản ứng:\n   - Tổng khối lượng nghỉ trước phản ứng: m_trước = m_H + m_Li = 1,0073 + 7,0144 = 8,0217 u.\n   - Tổng khối lượng nghỉ sau phản ứng: m_sau = 2 . m_He = 2 . 4,0015 = 8,0030 u.\n   - Độ hụt khối của phản ứng: ΔM = m_trước - m_sau = 8,0217 - 8,0030 = 0,0187 u > 0.\n   - Phản ứng toả năng lượng: Q = ΔM . c² = 0,0187 . 931,5 ≈ 17,42 MeV.\n\n2. Tính năng lượng toả ra khi tạo thành 1 gam Heli:\n   - Số hạt Heli trong 1 gam: N_He = (m / M) . N_A = (1 / 4) . 6,022 . 10²³ = 1,5055 . 10²³ hạt.\n   - Cứ mỗi phản ứng tạo ra 2 hạt Heli và toả ra 17,42 MeV => Mỗi hạt Heli tạo ra giải phóng: E₁ = 17,42 / 2 = 8,71 MeV = 8,71 . 1,6 . 10⁻¹³ J = 1,3936 . 10⁻¹² J.\n   - Tổng năng lượng toả ra:\n     E_tổng = N_He . E₁ = 1,5055 . 10²³ . 1,3936 . 10⁻¹² ≈ 2,10 . 10¹¹ J (tương đương nhiệt lượng toả ra khi đốt cháy gần 5 tấn than đá!).\n- Kết luận:\n a) Phản ứng toả năng lượng 17,42 MeV.\n b) Tổng năng lượng toả ra khi tạo thành 1 gam Heli là khoảng 2,1 . 10¹¹ J (210 GJ).",
    },
  ],
};

export default extra;
