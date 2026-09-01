import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Xét hai đồng vị của nguyên tố Cacbon trong tự nhiên là Cacbon-12 (^12_6C) và Cacbon-14 (^14_6C).",
      statements: [
        {
          text: "Hạt nhân của hai đồng vị này đều có 6 proton.",
          answer: true,
          explain: "Đúng. Cùng là nguyên tố Cacbon nên số hiệu nguyên tử Z = 6.",
        },
        {
          text: "Hạt nhân Cacbon-14 có nhiều hơn hạt nhân Cacbon-12 là 2 neutron.",
          answer: true,
          explain: "Đúng. N(^14C) = 14 - 6 = 8 neutron; N(^12C) = 12 - 6 = 6 neutron (nhiều hơn 2 neutron).",
        },
        {
          text: "Bán kính của hạt nhân Cacbon-14 bằng chính xác bán kính của hạt nhân Cacbon-12.",
          answer: false,
          explain: "Sai. R = r₀ . A^(1/3). Vì A(^14C) = 14 > A(^12C) = 12 nên bán kính hạt nhân ^14C lớn hơn.",
        },
        {
          text: "Hai đồng vị này có cùng tính chất hoá học vì có cùng số electron ở lớp vỏ nguyên tử.",
          answer: true,
          explain: "Đúng. Cùng số electron (Z = 6) nên tính chất hoá học cơ bản là giống hệt nhau.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về khối lượng, kích thước và năng lượng của hạt nhân nguyên tử.",
      statements: [
        {
          text: "Mật độ khối lượng của vật chất hạt nhân là cực kì lớn (cỡ 10¹⁷ kg/m³), gần như không đổi với mọi hạt nhân.",
          answer: true,
          explain: "Đúng. Thể tích tỉ lệ với A và khối lượng tỉ lệ với A nên mật độ ρ ≈ m/V ≈ const ≈ 10¹⁷ kg/m³.",
        },
        {
          text: "Một vật có khối lượng 1 gam tương đương với một năng lượng nghỉ xấp xỉ bằng 9.10¹³ J (90 TJ).",
          answer: true,
          explain: "Đúng. E = m . c² = 10⁻³ . (3.10⁸)² = 9 . 10¹³ J.",
        },
        {
          text: "Hạt neutron tự do mang điện tích âm nguyên tố -1,6.10⁻¹⁹ C.",
          answer: false,
          explain: "Sai. Neutron là hạt trung hoà về điện (q_n = 0).",
        },
        {
          text: "Điện tích của hạt nhân nguyên tử luôn là một số nguyên lần điện tích nguyên tố dương: q = +Z.e.",
          answer: true,
          explain: "Đúng. Hạt nhân có Z proton, mỗi proton mang điện +e nên q_hạt nhân = +Z.e.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao nói phần lớn thể tích của một nguyên tử là khoảng không gian rỗng, và hầu như toàn bộ khối lượng của nguyên tử lại tập trung ở hạt nhân nguyên tử?",
      answer:
        "1. Về kích thước:\n- Bán kính của nguyên tử cỡ 10⁻¹⁰ m (khoảng 0,1 nm), trong khi bán kính của hạt nhân chỉ cỡ 10⁻¹⁵ m (1 femtomet).\n- Tỉ lệ bán kính nguyên tử so với hạt nhân là khoảng 100.000 lần. Nếu phóng đại hạt nhân bằng quả bóng bàn (đường kính 4 cm) đặt ở tâm sân vận động thì các electron lớp vỏ sẽ quay ở khoảng cách cách xa tới 4 km!\n- Do đó, hơn 99,9999999999999% thể tích của nguyên tử là không gian rỗng.\n\n2. Về khối lượng:\n- Khối lượng của proton (1,6726.10⁻²⁷ kg) và neutron (1,6749.10⁻²⁷ kg) lớn gấp khoảng 1836 lần khối lượng của electron (9,1094.10⁻³¹ kg).\n- Do đó, khối lượng của các electron ở lớp vỏ là vô cùng nhỏ không đáng kể, hầu như toàn bộ 99,95% khối lượng của nguyên tử đều tập trung cô đặc tại hạt nhân siêu nhỏ ở tâm.",
    },
    {
      id: "es2",
      q: "Ước tính bán kính và khối lượng riêng của hạt nhân Vàng ^197_79Au? (Cho r₀ = 1,2 fm = 1,2.10⁻¹⁵ m, khối lượng hạt nhân xấp xỉ bằng A . u với 1 u = 1,66.10⁻²⁷ kg). Rút ra nhận xét về độ cô đặc của vật chất hạt nhân?",
      answer:
        "1. Tính bán kính hạt nhân Vàng:\n   - R = r₀ . A^(1/3) = 1,2 . 10⁻¹⁵ . (197)^(1/3) ≈ 1,2 . 10⁻¹⁵ . 5,8186 ≈ 6,98 . 10⁻¹⁵ m ≈ 7 fm.\n\n2. Tính thể tích hạt nhân (coi là hình cầu):\n   - V = (4/3) . π . R³ = (4/3) . 3,1416 . (6,98 . 10⁻¹⁵)³ ≈ 1,42 . 10⁻⁴² m³.\n\n3. Tính khối lượng hạt nhân:\n   - m ≈ 197 . 1,66 . 10⁻²⁷ ≈ 3,27 . 10⁻²⁵ kg.\n\n4. Tính khối lượng riêng của hạt nhân:\n   - ρ = m / V = (3,27 . 10⁻²⁵) / (1,42 . 10⁻⁴²) ≈ 2,3 . 10¹⁷ kg/m³ = 230 triệu tấn/cm³!\n- Nhận xét: Khối lượng riêng của hạt nhân nguyên tử vô cùng khủng khiếp (1 cm³ vật chất hạt nhân nặng tới 230 triệu tấn), vật chất hạt nhân có độ cô đặc cực đại trong vũ trụ (tương đương mật độ vật chất trong sao neutron).",
    },
  ],
};

export default extra;
