export type FormulaItem = {
  id: string;
  name: string;
  formula: string;
  explain: string;
  unit: string;
  chapterId: string;
};

export const FORMULA_CHAPTERS = [
  { id: "all", name: "Tất cả các chương", emoji: "📚" },
  { id: "chuong-1", name: "Chương I. Vật lí nhiệt", emoji: "🔥" },
  { id: "chuong-2", name: "Chương II. Khí lí tưởng", emoji: "💨" },
  { id: "chuong-3", name: "Chương III. Từ trường", emoji: "🧲" },
  { id: "chuong-4", name: "Chương IV. Vật lí hạt nhân", emoji: "⚛️" },
];

export const FORMULAS: FormulaItem[] = [
  // CHƯƠNG I: VẬT LÍ NHIỆT
  {
    id: "f-01",
    chapterId: "chuong-1",
    name: "Định luật I Nhiệt động lực học",
    formula: "ΔU = A + Q",
    explain: "ΔU: Độ biến thiên nội năng (J)\nA: Công hệ trao đổi (A > 0: nhận công, A < 0: sinh công)\nQ: Nhiệt lượng hệ trao đổi (Q > 0: nhận nhiệt, Q < 0: toả nhiệt)",
    unit: "Jun (J)",
  },
  {
    id: "f-02",
    chapterId: "chuong-1",
    name: "Chuyển đổi thang nhiệt độ Kelvin & Celsius",
    formula: "T(K) = t(°C) + 273,15   và   ΔT(K) = Δt(°C)",
    explain: "T: Nhiệt độ tuyệt đối (K)\nt: Nhiệt độ theo thang Celsius (°C)\nΔT, Δt: Độ biến thiên nhiệt độ",
    unit: "Kelvin (K) / °C",
  },
  {
    id: "f-03",
    chapterId: "chuong-1",
    name: "Nhiệt lượng làm biến thiên nhiệt độ",
    formula: "Q = m . c . ΔT = m . c . (t₂ - t₁)",
    explain: "m: Khối lượng của vật (kg)\nc: Nhiệt dung riêng của chất (J/(kg.K))\nΔT = t₂ - t₁: Độ biến thiên nhiệt độ",
    unit: "Jun (J)",
  },
  {
    id: "f-04",
    chapterId: "chuong-1",
    name: "Nhiệt lượng nóng chảy / đông đặc",
    formula: "Q = λ . m",
    explain: "λ: Nhiệt nóng chảy riêng của chất (J/kg)\nm: Khối lượng chất rắn kết tinh nóng chảy (kg)",
    unit: "Jun (J)",
  },
  {
    id: "f-05",
    chapterId: "chuong-1",
    name: "Nhiệt lượng hoá hơi / ngưng tụ",
    formula: "Q = L . m",
    explain: "L: Nhiệt hoá hơi riêng của chất lỏng (J/kg)\nm: Khối lượng chất lỏng hoá hơi ở nhiệt độ sôi (kg)",
    unit: "Jun (J)",
  },
  {
    id: "f-06",
    chapterId: "chuong-1",
    name: "Phương trình Cân bằng nhiệt",
    formula: "Q_toả = Q_thu   <=>   Σ [m_i . c_i . (t_i - t_cb)] = Σ [m_j . c_j . (t_cb - t_j)]",
    explain: "Áp dụng cho hệ nhiệt cô lập không trao đổi nhiệt với môi trường bên ngoài",
    unit: "Jun (J)",
  },

  // CHƯƠNG II: KHÍ LÍ TƯỞNG
  {
    id: "f-07",
    chapterId: "chuong-2",
    name: "Định luật Boyle (Quá trình Đẳng nhiệt)",
    formula: "p . V = hằng số   <=>   p₁ . V₁ = p₂ . V₂   (T = const)",
    explain: "p: Áp suất chất khí (Pa, atm, mmHg)\nV: Thể tích chất khí (m³, lít)",
    unit: "p(Pa), V(m³)",
  },
  {
    id: "f-08",
    chapterId: "chuong-2",
    name: "Định luật Charles (Quá trình Đẳng áp)",
    formula: "V / T = hằng số   <=>   V₁ / T₁ = V₂ / T₂   (p = const)",
    explain: "V: Thể tích chất khí (m³, lít)\nT: Nhiệt độ tuyệt đối (K), T = t(°C) + 273,15",
    unit: "V(m³), T(K)",
  },
  {
    id: "f-09",
    chapterId: "chuong-2",
    name: "Quá trình Đẳng tích (Định luật Amontons)",
    formula: "p / T = hằng số   <=>   p₁ / T₁ = p₂ / T₂   (V = const)",
    explain: "Áp suất tỉ lệ thuận với nhiệt độ tuyệt đối khi thể tích bình không đổi",
    unit: "p(Pa), T(K)",
  },
  {
    id: "f-10",
    chapterId: "chuong-2",
    name: "Phương trình trạng thái khí lí tưởng",
    formula: "(p₁ . V₁) / T₁ = (p₂ . V₂) / T₂ = hằng số",
    explain: "Mối liên hệ tổng quát giữa 3 thông số trạng thái của một lượng khí xác định",
    unit: "p(Pa), V(m³), T(K)",
  },
  {
    id: "f-11",
    chapterId: "chuong-2",
    name: "Phương trình Clapeyron - Mendeleev",
    formula: "p . V = n . R . T = (m / M) . R . T",
    explain: "n = m/M: Số mol khí (mol)\nR ≈ 8,314 J/(mol.K): Hằng số khí lí tưởng\nM: Khối lượng mol (g/mol hay kg/mol)",
    unit: "p(Pa), V(m³), T(K)",
  },
  {
    id: "f-12",
    chapterId: "chuong-2",
    name: "Áp suất khí theo mô hình vi mô",
    formula: "p = (1/3) . μ . m . v²_tb = (2/3) . μ . E_d = μ . k . T",
    explain: "μ = N/V: Mật độ phân tử khí (hạt/m³)\nE_d = (3/2).k.T: Động năng tịnh tiến trung bình của 1 phân tử (J)\nk ≈ 1,38 . 10⁻²³ J/K: Hằng số Boltzmann",
    unit: "Pascal (Pa)",
  },
  {
    id: "f-13",
    chapterId: "chuong-2",
    name: "Tốc độ căn quân phương của phân tử",
    formula: "v_rms = √(v²_tb) = √(3 . k . T / m) = √(3 . R . T / M)",
    explain: "v_rms: Tốc độ hiệu dụng (căn bậc hai của trung bình bình phương tốc độ)",
    unit: "m/s",
  },

  // CHƯƠNG III: TỪ TRƯỜNG & CẢM ỨNG ĐIỆN TỪ
  {
    id: "f-14",
    chapterId: "chuong-3",
    name: "Lực từ tác dụng lên đoạn dây dẫn (Lực Laplace)",
    formula: "F = B . I . L . sin(α)",
    explain: "B: Cảm ứng từ (T)\nI: Cường độ dòng điện (A)\nL: Chiều dài đoạn dây dẫn (m)\nα = (B⃗, I⃗): Góc hợp bởi từ trường và chiều dòng điện\nChiều xác định theo Quy tắc Bàn tay trái",
    unit: "Newton (N)",
  },
  {
    id: "f-15",
    chapterId: "chuong-3",
    name: "Từ thông qua khung dây phẳng",
    formula: "Φ = N . B . S . cos(α)",
    explain: "N: Số vòng dây của khung\nS: Diện tích mặt phẳng khung dây (m²)\nα = (n⃗, B⃗): Góc hợp bởi véc-tơ pháp tuyến n⃗ và véc-tơ cảm ứng từ B⃗",
    unit: "Weber (Wb)",
  },
  {
    id: "f-16",
    chapterId: "chuong-3",
    name: "Định luật Faraday về Suất điện động cảm ứng",
    formula: "e_c = - ΔΦ / Δt   hay   |e_c| = |ΔΦ / Δt|",
    explain: "Độ lớn suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông qua mạch",
    unit: "Volt (V)",
  },
  {
    id: "f-17",
    chapterId: "chuong-3",
    name: "Suất điện động của Máy phát điện xoay chiều",
    formula: "e = E₀ . cos(ω.t - π/2)   với   E₀ = N . B . S . ω   và   E = E₀ / √2",
    explain: "ω = 2π.f: Tốc độ góc (rad/s)\nTần số máy phát: f = n.p (vòng/s) = (n.p)/60 (vòng/phút)",
    unit: "Volt (V)",
  },
  {
    id: "f-18",
    chapterId: "chuong-3",
    name: "Hệ thức Máy biến áp lí tưởng",
    formula: "U₂ / U₁ = N₂ / N₁ = I₁ / I₂",
    explain: "N₁, N₂: Số vòng dây cuộn sơ cấp và thứ cấp\nU₁, U₂: Điện áp hiệu dụng hai đầu cuộn sơ cấp và thứ cấp\nI₁, I₂: Cường độ dòng điện hiệu dụng",
    unit: "U(V), I(A)",
  },
  {
    id: "f-19",
    chapterId: "chuong-3",
    name: "Công suất hao phí khi truyền tải điện năng",
    formula: "ΔP = I² . r = (P² . r) / (U² . cos²φ)",
    explain: "P: Công suất điện truyền đi (W)\nr: Điện trở tổng cộng của đường dây (Ω)\nU: Điện áp hiệu dụng ở đầu đường dây tải (V)\ncosφ: Hệ số công suất (thường cosφ = 1)",
    unit: "Oát (W)",
  },
  {
    id: "f-20",
    chapterId: "chuong-3",
    name: "Bước sóng của Sóng điện từ trong chân không",
    formula: "λ = c / f = c . T",
    explain: "c ≈ 3 . 10⁸ m/s: Tốc độ ánh sáng trong chân không\nf: Tần số sóng điện từ (Hz)\nT: Chu kì dao động của sóng (s)",
    unit: "Mét (m)",
  },

  // CHƯƠNG IV: VẬT LÍ HẠT NHÂN
  {
    id: "f-21",
    chapterId: "chuong-4",
    name: "Bán kính hạt nhân nguyên tử",
    formula: "R ≈ r₀ . A^(1/3)   (với r₀ ≈ 1,2 . 10⁻¹⁵ m = 1,2 fm)",
    explain: "A = Z + N: Số khối (tổng số nucleon trong hạt nhân)",
    unit: "Mét (m) / fm",
  },
  {
    id: "f-22",
    chapterId: "chuong-4",
    name: "Độ hụt khối của hạt nhân",
    formula: "Δm = Z . m_p + (A - Z) . m_n - m_hn",
    explain: "m_p: Khối lượng proton (~1,00728 u)\nm_n: Khối lượng neutron (~1,00866 u)\nm_hn: Khối lượng hạt nhân",
    unit: "u hay kg",
  },
  {
    id: "f-23",
    chapterId: "chuong-4",
    name: "Năng lượng liên kết & Năng lượng liên kết riêng",
    formula: "W_lk = Δm . c²   và   W_lkr = W_lk / A",
    explain: "W_lk: Năng lượng liên kết toàn phần (MeV)\nW_lkr: Năng lượng liên kết riêng (MeV/nucleon) — đặc trưng cho độ bền vững của hạt nhân",
    unit: "MeV / (MeV/nucleon)",
  },
  {
    id: "f-24",
    chapterId: "chuong-4",
    name: "Năng lượng toả / thu trong phản ứng hạt nhân",
    formula: "Q = (m_trước - m_sau) . c² = W_lk_sau - W_lk_trước",
    explain: "Q > 0: Phản ứng toả năng lượng\nQ < 0: Phản ứng thu năng lượng",
    unit: "MeV hay Jun (J)",
  },
  {
    id: "f-25",
    chapterId: "chuong-4",
    name: "Định luật Phóng xạ",
    formula: "N(t) = N₀ . 2^(-t/T) = N₀ . e^(-λ.t)   và   m(t) = m₀ . 2^(-t/T)",
    explain: "N₀, m₀: Số hạt và khối lượng ban đầu\nT: Chu kì bán rã\nλ = ln(2) / T ≈ 0,693 / T: Hằng số phóng xạ",
    unit: "hạt / kg / gam",
  },
  {
    id: "f-26",
    chapterId: "chuong-4",
    name: "Độ phóng xạ (H)",
    formula: "H(t) = λ . N(t) = H₀ . 2^(-t/T)",
    explain: "H: Độ phóng xạ, số phân rã trong 1 giây (1 Bq = 1 s⁻¹)\n1 Ci (Curie) = 3,7 . 10¹⁰ Bq",
    unit: "Becquerel (Bq)",
  },
];
