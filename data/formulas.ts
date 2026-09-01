export type GradeLevel = "12" | "11" | "10";

export type FormulaItem = {
  id: string;
  grade: GradeLevel;
  chapterId: string;
  chapterName: string;
  name: string;
  formula: string;
  explain: string;
  unit: string;
  tip?: string;
};

export type GradeTabInfo = {
  id: "all" | GradeLevel;
  name: string;
  shortName: string;
  emoji: string;
  desc: string;
  weightBadge: string;
};

export const GRADE_TABS: GradeTabInfo[] = [
  {
    id: "all",
    name: "Tất cả khối lớp",
    shortName: "Tất cả",
    emoji: "📚",
    desc: "Toàn bộ công thức trọng tâm ôn thi tốt nghiệp 10-11-12",
    weightBadge: "100% Đề thi",
  },
  {
    id: "12",
    name: "Vật lí Lớp 12",
    shortName: "Lớp 12",
    emoji: "⚛️",
    desc: "Vật lí nhiệt · Khí lí tưởng · Từ trường · Vật lí hạt nhân",
    weightBadge: "~70% Đề thi (Trọng tâm)",
  },
  {
    id: "11",
    name: "Vật lí Lớp 11",
    shortName: "Lớp 11",
    emoji: "⚡",
    desc: "Dao động điều hòa · Sóng cơ & Ánh sáng · Điện trường · Dòng điện",
    weightBadge: "~20% Đề thi",
  },
  {
    id: "10",
    name: "Vật lí Lớp 10",
    shortName: "Lớp 10",
    emoji: "🚀",
    desc: "Động học · Động lực học · Công & Năng lượng · Động lượng",
    weightBadge: "~10% Đề thi",
  },
];

export type ChapterFilterItem = {
  id: string;
  grade: GradeLevel | "all";
  name: string;
  emoji: string;
};

export const FORMULA_CHAPTERS: ChapterFilterItem[] = [
  // Khối 12
  { id: "12-c1", grade: "12", name: "12 - C.I: Vật lí nhiệt", emoji: "🔥" },
  { id: "12-c2", grade: "12", name: "12 - C.II: Khí lí tưởng", emoji: "💨" },
  { id: "12-c3", grade: "12", name: "12 - C.III: Từ trường", emoji: "🧲" },
  { id: "12-c4", grade: "12", name: "12 - C.IV: Vật lí hạt nhân", emoji: "⚛️" },
  // Khối 11
  { id: "11-c1", grade: "11", name: "11 - C.I: Dao động điều hòa", emoji: "〰️" },
  { id: "11-c2", grade: "11", name: "11 - C.II: Sóng cơ & Sóng ánh sáng", emoji: "🌊" },
  { id: "11-c3", grade: "11", name: "11 - C.III: Điện trường & Tụ điện", emoji: "⚡" },
  { id: "11-c4", grade: "11", name: "11 - C.IV: Mạch điện & Định luật Ôm", emoji: "💡" },
  // Khối 10
  { id: "10-c1", grade: "10", name: "10 - C.I: Động học (Biến đổi đều & Rơi tự do)", emoji: "🏃" },
  { id: "10-c2", grade: "10", name: "10 - C.II: Động lực học (Định luật Newton)", emoji: "⚖️" },
  { id: "10-c3", grade: "10", name: "10 - C.III: Công, Công suất & Cơ năng", emoji: "🔋" },
  { id: "10-c4", grade: "10", name: "10 - C.IV: Động lượng & Bảo toàn", emoji: "🎯" },
];

export const FORMULAS: FormulaItem[] = [
  // =========================================================================
  // KHỐI 12: VẬT LÍ 12 (~70% ĐỀ THI)
  // =========================================================================

  // --- CHƯƠNG I: VẬT LÍ NHIỆT ---
  {
    id: "f12-01",
    grade: "12",
    chapterId: "12-c1",
    chapterName: "Chương I. Vật lí nhiệt",
    name: "Định luật I Nhiệt động lực học",
    formula: "ΔU = A + Q",
    explain: "ΔU: Độ biến thiên nội năng của hệ (J)\nA: Công mà hệ trao đổi (A > 0: nhận công, A < 0: sinh công)\nQ: Nhiệt lượng mà hệ trao đổi (Q > 0: nhận nhiệt, Q < 0: toả nhiệt)",
    unit: "Jun (J)",
    tip: "Quy ước dấu: Nhận vào là DƯƠNG (+), Truyền đi / Sinh ra là ÂM (-)",
  },
  {
    id: "f12-02",
    grade: "12",
    chapterId: "12-c1",
    chapterName: "Chương I. Vật lí nhiệt",
    name: "Chuyển đổi thang nhiệt độ Kelvin & Celsius",
    formula: "T(K) = t(°C) + 273,15   và   ΔT(K) = Δt(°C)",
    explain: "T: Nhiệt độ tuyệt đối theo thang Kelvin (K)\nt: Nhiệt độ theo thang Celsius (°C)\nΔT, Δt: Độ biến thiên nhiệt độ (độ tăng giảm theo 2 thang là như nhau)",
    unit: "Kelvin (K) / °C",
    tip: "0 K là độ không tuyệt đối; độ biến thiên nhiệt độ ΔT(K) luôn bằng đúng Δt(°C)",
  },
  {
    id: "f12-03",
    grade: "12",
    chapterId: "12-c1",
    chapterName: "Chương I. Vật lí nhiệt",
    name: "Nhiệt lượng làm biến thiên nhiệt độ",
    formula: "Q = m · c · ΔT = m · c · (t₂ - t₁)",
    explain: "m: Khối lượng của vật (kg)\nc: Nhiệt dung riêng của chất cấu tạo nên vật (J/(kg·K))\nΔT = t₂ - t₁: Độ biến thiên nhiệt độ (K hoặc °C)",
    unit: "Jun (J)",
    tip: "Nước có nhiệt dung riêng rất lớn (~4180 J/(kg.K)) nên giữ nhiệt và làm mát rất tốt",
  },
  {
    id: "f12-04",
    grade: "12",
    chapterId: "12-c1",
    chapterName: "Chương I. Vật lí nhiệt",
    name: "Nhiệt lượng nóng chảy / đông đặc",
    formula: "Q = λ · m",
    explain: "λ: Nhiệt nóng chảy riêng của chất (J/kg)\nm: Khối lượng chất rắn kết tinh nóng chảy (kg)",
    unit: "Jun (J)",
    tip: "Quá trình nóng chảy/đông đặc của chất rắn kết tinh diễn ra ở nhiệt độ không đổi",
  },
  {
    id: "f12-05",
    grade: "12",
    chapterId: "12-c1",
    chapterName: "Chương I. Vật lí nhiệt",
    name: "Nhiệt lượng hoá hơi / ngưng tụ",
    formula: "Q = L · m",
    explain: "L: Nhiệt hoá hơi riêng của chất lỏng ở nhiệt độ sôi (J/kg)\nm: Khối lượng chất lỏng hoá hơi hoàn toàn (kg)",
    unit: "Jun (J)",
    tip: "Nhiệt hoá hơi riêng của nước rất lớn (~2,26.10⁶ J/kg)",
  },
  {
    id: "f12-06",
    grade: "12",
    chapterId: "12-c1",
    chapterName: "Chương I. Vật lí nhiệt",
    name: "Phương trình Cân bằng nhiệt",
    formula: "Q_toả = Q_thu   <=>   Σ [m_i · c_i · (t_i - t_cb)] = Σ [m_j · c_j · (t_cb - t_j)]",
    explain: "Áp dụng cho hệ nhiệt cô lập không trao đổi nhiệt với môi trường ngoài.\nt_cb: Nhiệt độ cân bằng chung của hệ sau khi trao đổi nhiệt hoàn tất.",
    unit: "Jun (J)",
  },

  // --- CHƯƠNG II: KHÍ LÍ TƯỞNG ---
  {
    id: "f12-07",
    grade: "12",
    chapterId: "12-c2",
    chapterName: "Chương II. Khí lí tưởng",
    name: "Định luật Boyle (Quá trình Đẳng nhiệt)",
    formula: "p · V = hằng số   <=>   p₁ · V₁ = p₂ · V₂   (T = const)",
    explain: "p: Áp suất chất khí (Pa, atm, mmHg, Bar)\nV: Thể tích chất khí (m³, lít, dm³, cm³)\nĐồ thị p-V là một nhánh đường hypebol.",
    unit: "p(Pa), V(m³)",
    tip: "Trong hệ đơn vị SI: 1 atm ≈ 1,013.10⁵ Pa = 760 mmHg; 1 lít = 10⁻³ m³",
  },
  {
    id: "f12-08",
    grade: "12",
    chapterId: "12-c2",
    chapterName: "Chương II. Khí lí tưởng",
    name: "Định luật Charles (Quá trình Đẳng áp)",
    formula: "V / T = hằng số   <=>   V₁ / T₁ = V₂ / T₂   (p = const)",
    explain: "V: Thể tích chất khí (m³, lít)\nT: Nhiệt độ tuyệt đối (K), T = t(°C) + 273,15\nĐồ thị V-T là đường thẳng kéo dài đi qua gốc toạ độ O.",
    unit: "V(m³), T(K)",
    tip: "Bắt buộc phải đổi nhiệt độ t(°C) sang nhiệt độ tuyệt đối T(K) trước khi tính toán!",
  },
  {
    id: "f12-09",
    grade: "12",
    chapterId: "12-c2",
    chapterName: "Chương II. Khí lí tưởng",
    name: "Quá trình Đẳng tích (Định luật Amontons / Gay-Lussac)",
    formula: "p / T = hằng số   <=>   p₁ / T₁ = p₂ / T₂   (V = const)",
    explain: "p: Áp suất chất khí (Pa)\nT: Nhiệt độ tuyệt đối (K)\nĐồ thị p-T là đường thẳng kéo dài đi qua gốc toạ độ O.",
    unit: "p(Pa), T(K)",
  },
  {
    id: "f12-10",
    grade: "12",
    chapterId: "12-c2",
    chapterName: "Chương II. Khí lí tưởng",
    name: "Phương trình trạng thái khí lí tưởng",
    formula: "(p₁ · V₁) / T₁ = (p₂ · V₂) / T₂ = hằng số",
    explain: "Mối liên hệ tổng quát giữa 3 thông số trạng thái (p, V, T) của một lượng khí xác định.",
    unit: "p(Pa), V(m³), T(K)",
  },
  {
    id: "f12-11",
    grade: "12",
    chapterId: "12-c2",
    chapterName: "Chương II. Khí lí tưởng",
    name: "Phương trình Clapeyron - Mendeleev",
    formula: "p · V = n · R · T = (m / M) · R · T",
    explain: "n = m/M: Lượng chất (số mol khí, mol)\nR ≈ 8,314 J/(mol·K): Hằng số khí lí tưởng\nM: Khối lượng mol của chất khí (kg/mol hoặc g/mol)",
    unit: "p(Pa), V(m³), T(K)",
    tip: "Nếu dùng R = 8,314 J/(mol.K) thì bắt buộc p đo bằng Pa (N/m²), V đo bằng m³",
  },
  {
    id: "f12-12",
    grade: "12",
    chapterId: "12-c2",
    chapterName: "Chương II. Khí lí tưởng",
    name: "Áp suất khí theo mô hình vi mô",
    formula: "p = (1/3) · μ · m · v²_tb = (2/3) · μ · E_d = μ · k · T",
    explain: "μ = N/V: Mật độ phân tử khí (hạt/m³)\nm: Khối lượng của một phân tử khí (kg)\nE_d = (3/2)·k·T: Động năng tịnh tiến trung bình của 1 phân tử (J)\nk ≈ 1,38 · 10⁻²³ J/K: Hằng số Boltzmann",
    unit: "Pascal (Pa)",
  },
  {
    id: "f12-13",
    grade: "12",
    chapterId: "12-c2",
    chapterName: "Chương II. Khí lí tưởng",
    name: "Tốc độ căn quân phương của phân tử",
    formula: "v_rms = √(v²_tb) = √(3 · k · T / m) = √(3 · R · T / M)",
    explain: "v_rms: Tốc độ hiệu dụng (căn bậc hai của trung bình bình phương tốc độ phân tử, m/s)\nT: Nhiệt độ tuyệt đối (K)\nM: Khối lượng mol (kg/mol)",
    unit: "m/s",
  },

  // --- CHƯƠNG III: TỪ TRƯỜNG & CẢM ỨNG ĐIỆN TỪ ---
  {
    id: "f12-14",
    grade: "12",
    chapterId: "12-c3",
    chapterName: "Chương III. Từ trường",
    name: "Lực từ tác dụng lên đoạn dây dẫn mang dòng điện (Lực Laplace)",
    formula: "F = B · I · L · sin(α)",
    explain: "B: Cảm ứng từ (Tesla - T)\nI: Cường độ dòng điện (A)\nL: Chiều dài đoạn dây dẫn đặt trong từ trường (m)\nα = (B⃗, I⃗): Góc hợp bởi véc-tơ cảm ứng từ và chiều dòng điện\nChiều xác định theo Quy tắc Bàn tay trái",
    unit: "Newton (N)",
    tip: "Lực từ F lớn nhất khi dây dẫn vuông góc với từ trường (α = 90° => sinα = 1)",
  },
  {
    id: "f12-15",
    grade: "12",
    chapterId: "12-c3",
    chapterName: "Chương III. Từ trường",
    name: "Từ thông qua khung dây phẳng",
    formula: "Φ = N · B · S · cos(α)",
    explain: "N: Số vòng dây của khung\nS: Diện tích mặt phẳng khung dây (m²)\nα = (n⃗, B⃗): Góc hợp bởi véc-tơ pháp tuyến n⃗ và véc-tơ cảm ứng từ B⃗",
    unit: "Weber (Wb)",
    tip: "Cẩn thận bẫy góc: Nếu đề bài cho góc β giữa mp khung dây và B⃗ thì α = 90° - β",
  },
  {
    id: "f12-16",
    grade: "12",
    chapterId: "12-c3",
    chapterName: "Chương III. Từ trường",
    name: "Định luật Faraday về Suất điện động cảm ứng",
    formula: "e_c = - ΔΦ / Δt   hay   |e_c| = |ΔΦ / Δt|",
    explain: "Độ lớn suất điện động cảm ứng tỉ lệ với tốc độ biến thiên từ thông qua mạch kín.\nDấu trừ (-) thể hiện Định luật Lenz về chiều dòng điện cảm ứng.",
    unit: "Volt (V)",
  },
  {
    id: "f12-17",
    grade: "12",
    chapterId: "12-c3",
    chapterName: "Chương III. Từ trường",
    name: "Suất điện động của Máy phát điện xoay chiều 1 pha",
    formula: "e = E₀ · cos(ω·t - π/2)   với   E₀ = N · B · S · ω   và   E = E₀ / √2",
    explain: "E₀: Suất điện động cực đại (V)\nE: Suất điện động hiệu dụng (V)\nω = 2π·f: Tần số góc (rad/s)\nTần số máy phát: f = n·p (n: vòng/s) hoặc f = (n·p)/60 (n: vòng/phút), p: số cặp cực",
    unit: "Volt (V)",
  },
  {
    id: "f12-18",
    grade: "12",
    chapterId: "12-c3",
    chapterName: "Chương III. Từ trường",
    name: "Hệ thức Máy biến áp lí tưởng",
    formula: "U₂ / U₁ = N₂ / N₁ = I₁ / I₂",
    explain: "N₁, N₂: Số vòng dây cuộn sơ cấp và cuộn thứ cấp\nU₁, U₂: Điện áp hiệu dụng hai đầu cuộn sơ cấp và thứ cấp\nI₁, I₂: Cường độ dòng điện hiệu dụng\nN₂ > N₁: Máy tăng áp; N₂ < N₁: Máy hạ áp",
    unit: "U(V), I(A)",
  },
  {
    id: "f12-19",
    grade: "12",
    chapterId: "12-c3",
    chapterName: "Chương III. Từ trường",
    name: "Công suất hao phí khi truyền tải điện năng",
    formula: "ΔP = I² · r = (P² · r) / (U² · cos²φ)",
    explain: "P: Công suất điện cần truyền đi (W)\nr: Điện trở tổng cộng của đường dây tải (Ω)\nU: Điện áp hiệu dụng ở đầu đường dây tải (V)\ncosφ: Hệ số công suất (thường xấp xỉ 1)",
    unit: "Oát (W)",
    tip: "Tăng điện áp truyền tải U lên k lần => Công suất hao phí ΔP giảm k² lần!",
  },
  {
    id: "f12-20",
    grade: "12",
    chapterId: "12-c3",
    chapterName: "Chương III. Từ trường",
    name: "Bước sóng của Sóng điện từ trong chân không",
    formula: "λ = c / f = c · T",
    explain: "c ≈ 3 · 10⁸ m/s: Tốc độ truyền sóng điện từ (ánh sáng) trong chân không\nf: Tần số sóng điện từ (Hz)\nT: Chu kì dao động của sóng (s)",
    unit: "Mét (m)",
  },

  // --- CHƯƠNG IV: VẬT LÍ HẠT NHÂN ---
  {
    id: "f12-21",
    grade: "12",
    chapterId: "12-c4",
    chapterName: "Chương IV. Vật lí hạt nhân",
    name: "Bán kính hạt nhân nguyên tử",
    formula: "R ≈ r₀ · A^(1/3)   (với r₀ ≈ 1,2 · 10⁻¹⁵ m = 1,2 fm)",
    explain: "A = Z + N: Số khối (tổng số hạt nucleon gồm Z proton và N neutron)",
    unit: "Mét (m) / fm",
  },
  {
    id: "f12-22",
    grade: "12",
    chapterId: "12-c4",
    chapterName: "Chương IV. Vật lí hạt nhân",
    name: "Độ hụt khối của hạt nhân",
    formula: "Δm = Z · m_p + (A - Z) · m_n - m_hn",
    explain: "m_p: Khối lượng proton (~1,00728 u)\nm_n: Khối lượng neutron (~1,00866 u)\nm_hn: Khối lượng hạt nhân thực tế (u hay kg)",
    unit: "u (đvC) hay kg",
    tip: "1 u ≈ 931,5 MeV/c² = 1,66055.10⁻²⁷ kg",
  },
  {
    id: "f12-23",
    grade: "12",
    chapterId: "12-c4",
    chapterName: "Chương IV. Vật lí hạt nhân",
    name: "Năng lượng liên kết & Năng lượng liên kết riêng",
    formula: "W_lk = Δm · c²   và   W_lkr = W_lk / A",
    explain: "W_lk: Năng lượng liên kết toàn phần của hạt nhân (MeV hoặc J)\nW_lkr: Năng lượng liên kết riêng trên một nucleon (MeV/nucleon)\nĐại lượng W_lkr đặc trưng cho mức độ BỀN VỮNG của hạt nhân.",
    unit: "MeV / (MeV/nucleon)",
    tip: "Hạt nhân có số khối trung bình (50 < A < 70) bền vững nhất (W_lkr ≈ 8,8 MeV/nu)",
  },
  {
    id: "f12-24",
    grade: "12",
    chapterId: "12-c4",
    chapterName: "Chương IV. Vật lí hạt nhân",
    name: "Năng lượng toả / thu trong phản ứng hạt nhân",
    formula: "Q = (m_trước - m_sau) · c² = W_lk_sau - W_lk_trước",
    explain: "m_trước, m_sau: Tổng khối lượng nghỉ các hạt trước và sau phản ứng\nQ > 0: Phản ứng toả năng lượng (m_trước > m_sau)\nQ < 0: Phản ứng thu năng lượng (m_trước < m_sau)",
    unit: "MeV hoặc Jun (J)",
  },
  {
    id: "f12-25",
    grade: "12",
    chapterId: "12-c4",
    chapterName: "Chương IV. Vật lí hạt nhân",
    name: "Định luật Phóng xạ",
    formula: "N(t) = N₀ · 2^(-t/T) = N₀ · e^(-λ·t)   và   m(t) = m₀ · 2^(-t/T)",
    explain: "N₀, m₀: Số hạt và khối lượng chất phóng xạ ban đầu lúc t = 0\nN(t), m(t): Số hạt và khối lượng còn lại sau thời gian t\nT: Chu kì bán rã\nλ = ln(2) / T ≈ 0,693 / T: Hằng số phóng xạ",
    unit: "hạt / kg / gam",
    tip: "Số hạt bị phân rã: ΔN = N₀ - N(t) = N₀ · (1 - 2^(-t/T))",
  },
  {
    id: "f12-26",
    grade: "12",
    chapterId: "12-c4",
    chapterName: "Chương IV. Vật lí hạt nhân",
    name: "Độ phóng xạ (H)",
    formula: "H(t) = λ · N(t) = H₀ · 2^(-t/T) = H₀ · e^(-λ·t)",
    explain: "H: Độ phóng xạ, số phân rã trong 1 giây (đơn vị Becquerel, 1 Bq = 1 s⁻¹)\n1 Ci (Curie) = 3,7 · 10¹⁰ Bq",
    unit: "Becquerel (Bq)",
  },

  // =========================================================================
  // KHỐI 11: VẬT LÍ 11 (~20% ĐỀ THI)
  // =========================================================================

  // --- CHƯƠNG I (11): DAO ĐỘNG ĐIỀU HÒA ---
  {
    id: "f11-01",
    grade: "11",
    chapterId: "11-c1",
    chapterName: "Chương I. Dao động điều hòa (Lớp 11)",
    name: "Phương trình Dao động điều hòa (Li độ, Vận tốc, Gia tốc)",
    formula: "x = A·cos(ωt + φ)\nv = -ωA·sin(ωt + φ) = ωA·cos(ωt + φ + π/2)\na = -ω²x = ω²A·cos(ωt + φ + π)",
    explain: "x: Li độ (cm hoặc m); A: Biên độ dao động (A > 0)\nω = 2π/T = 2πf: Tần số góc (rad/s)\nφ: Pha ban đầu (rad); (ωt + φ): Pha dao động tại thời điểm t\nv sớm pha π/2 so với x; a sớm pha π so với x (ngược pha x)",
    unit: "x(cm), v(cm/s), a(cm/s²)",
    tip: "Tại VTCB: |v| max = ωA, a = 0. Tại Biên: v = 0, |a| max = ω²A",
  },
  {
    id: "f11-02",
    grade: "11",
    chapterId: "11-c1",
    chapterName: "Chương I. Dao động điều hòa (Lớp 11)",
    name: "Hệ thức độc lập thời gian giữa x, v, a",
    formula: "A² = x² + (v / ω)²   và   A² = (a / ω²)² + (v / ω)²   <=>   (v / v_max)² + (a / a_max)² = 1",
    explain: "Hệ thức liên hệ trực tiếp giữa li độ, vận tốc và gia tốc mà không phụ thuộc vào thời gian t.",
    unit: "A(cm), v(cm/s), a(cm/s²)",
  },
  {
    id: "f11-03",
    grade: "11",
    chapterId: "11-c1",
    chapterName: "Chương I. Dao động điều hòa (Lớp 11)",
    name: "Chu kì và Tần số của Con lắc lò xo",
    formula: "ω = √(k / m)   ;   T = 2π · √(m / k)   ;   f = (1 / 2π) · √(k / m)",
    explain: "k: Độ cứng của lò xo (N/m)\nm: Khối lượng vật nặng (kg)\nVới con lắc lò xo treo thẳng đứng: T = 2π · √(Δl₀ / g) (Δl₀: độ giãn ở VTCB)",
    unit: "T(s), f(Hz), ω(rad/s)",
  },
  {
    id: "f11-04",
    grade: "11",
    chapterId: "11-c1",
    chapterName: "Chương I. Dao động điều hòa (Lớp 11)",
    name: "Chu kì và Tần số của Con lắc đơn (góc nhỏ)",
    formula: "ω = √(g / l)   ;   T = 2π · √(l / g)   ;   f = (1 / 2π) · √(g / l)",
    explain: "l: Chiều dài dây treo con lắc (m)\ng: Gia tốc trọng trường tại nơi treo (m/s²)\nĐiều kiện dao động điều hoà: biên độ góc α₀ nhỏ (α₀ ≤ 10° hay ≤ 0,175 rad)",
    unit: "T(s), f(Hz)",
    tip: "Chu kì con lắc đơn KHÔNG phụ thuộc vào khối lượng m của vật nặng!",
  },
  {
    id: "f11-05",
    grade: "11",
    chapterId: "11-c1",
    chapterName: "Chương I. Dao động điều hòa (Lớp 11)",
    name: "Năng lượng trong Dao động điều hòa (Cơ năng)",
    formula: "W = W_đ + W_t = (1/2)·m·v² + (1/2)·k·x² = (1/2)·m·ω²·A² = const",
    explain: "W_đ: Động năng biến thiên tuần hoàn với tần số góc ω' = 2ω, chu kì T' = T/2\nW_t: Thế năng biến thiên tuần hoàn với tần số góc ω' = 2ω, chu kì T' = T/2\nW: Cơ năng được bảo toàn (tỉ lệ thuận với bình phương biên độ A²)",
    unit: "Jun (J)",
  },

  // --- CHƯƠNG II (11): SÓNG CƠ & SÓNG ÁNH SÁNG ---
  {
    id: "f11-06",
    grade: "11",
    chapterId: "11-c2",
    chapterName: "Chương II. Sóng cơ & Sóng ánh sáng (Lớp 11)",
    name: "Bước sóng, Vận tốc truyền sóng & Chu kì",
    formula: "λ = v · T = v / f   <=>   v = λ · f",
    explain: "λ: Bước sóng (m hoặc cm) — quãng đường sóng truyền đi trong 1 chu kì\nv: Tốc độ truyền sóng (m/s)\nT: Chu kì dao động của nguồn sóng (s)\nf: Tần số sóng (Hz) — không đổi khi truyền qua các môi trường khác nhau",
    unit: "λ(m), v(m/s)",
    tip: "Khi sóng truyền từ môi trường này sang môi trường khác: Tần số f KHÔNG ĐỔI, tốc độ v và bước sóng λ thay đổi",
  },
  {
    id: "f11-07",
    grade: "11",
    chapterId: "11-c2",
    chapterName: "Chương II. Sóng cơ & Sóng ánh sáng (Lớp 11)",
    name: "Giao thoa sóng cơ (Hai nguồn kết hợp cùng pha)",
    formula: "Cực đại: d₂ - d₁ = k · λ   ;   Cực tiểu: d₂ - d₁ = (k + 1/2) · λ   (k ∈ ℤ)",
    explain: "d₁, d₂: Khoảng cách từ điểm đang xét đến hai nguồn sóng S₁, S₂\nk = 0: Cực đại trung tâm (đường trung trực)\nKhoảng cách giữa 2 cực đại (hoặc 2 cực tiểu) liên tiếp trên đoạn thẳng nối 2 nguồn là λ / 2",
    unit: "Mét (m) hoặc cm",
  },
  {
    id: "f11-08",
    grade: "11",
    chapterId: "11-c2",
    chapterName: "Chương II. Sóng cơ & Sóng ánh sáng (Lớp 11)",
    name: "Điều kiện Sóng dừng trên sợi dây",
    formula: "Hai đầu cố định: L = k · (λ / 2)   ;   1 đầu cố định, 1 đầu tự do: L = (2k + 1) · (λ / 4)",
    explain: "L: Chiều dài sợi dây (m)\nVới 2 đầu cố định: k là số bụng sóng (số bó sóng), số nút sóng là (k + 1)\nVới 1 cố định 1 tự do: k là số bó sóng nguyên, số bụng = số nút = (k + 1)\nKhoảng cách giữa 2 nút (hoặc 2 bụng) liên tiếp là λ / 2; giữa 1 nút và 1 bụng liền kề là λ / 4",
    unit: "Mét (m)",
  },
  {
    id: "f11-09",
    grade: "11",
    chapterId: "11-c2",
    chapterName: "Chương II. Sóng cơ & Sóng ánh sáng (Lớp 11)",
    name: "Giao thoa ánh sáng qua khe Young (Khoảng vân & Vị trí vân)",
    formula: "Khoảng vân: i = (λ · D) / a\nVân sáng: x_s = k · i   ;   Vân tối: x_t = (k + 1/2) · i   (k ∈ ℤ)",
    explain: "a: Khoảng cách giữa 2 khe hẹp (thường đo bằng mm)\nD: Khoảng cách từ mặt phẳng chứa 2 khe đến màn quan sát (m)\nλ: Bước sóng ánh sáng đơn sắc (thường đo bằng μm hoặc nm)\ni: Khoảng vân (mm) — khoảng cách giữa 2 vân sáng (hoặc tối) liên tiếp",
    unit: "i(mm), x(mm)",
    tip: "Nhớ quy đổi chuẩn: a(mm), D(m), λ(μm) => Khoảng vân i sẽ ra đúng đơn vị mm",
  },

  // --- CHƯƠNG III (11): ĐIỆN TRƯỜNG & TỤ ĐIỆN ---
  {
    id: "f11-10",
    grade: "11",
    chapterId: "11-c3",
    chapterName: "Chương III. Điện trường & Tụ điện (Lớp 11)",
    name: "Định luật Coulomb (Lực tương tác tĩnh điện)",
    formula: "F = k · |q₁ · q₂| / (ε · r²)",
    explain: "k = 9 · 10⁹ N·m²/C²: Hằng số tĩnh điện\nq₁, q₂: Điện tích của hai điện tích điểm (Coulomb - C)\nr: Khoảng cách giữa hai điện tích điểm (m)\nε: Hằng số điện môi của môi trường (trong chân không/không khí ε ≈ 1)",
    unit: "Newton (N)",
    tip: "Cùng dấu thì ĐẨY nhau, trái dấu thì HÚT nhau",
  },
  {
    id: "f11-11",
    grade: "11",
    chapterId: "11-c3",
    chapterName: "Chương III. Điện trường & Tụ điện (Lớp 11)",
    name: "Cường độ điện trường & Mối liên hệ với Hiệu điện thế",
    formula: "E = F / |q| = k · |Q| / (ε · r²)   và   U = E · d   <=>   E = U / d",
    explain: "E: Cường độ điện trường (V/m hoặc N/C)\nF: Lực điện tác dụng lên điện tích thử q (F⃗ = q·E⃗)\nU: Hiệu điện thế giữa hai điểm (V)\nd: Hình chiếu quãng đường lên phương của đường sức điện trường đều (m)",
    unit: "V/m hoặc N/C",
  },
  {
    id: "f11-12",
    grade: "11",
    chapterId: "11-c3",
    chapterName: "Chương III. Điện trường & Tụ điện (Lớp 11)",
    name: "Điện dung & Năng lượng điện trường của Tụ điện",
    formula: "C = Q / U   và   W_c = (1/2)·C·U² = (1/2)·(Q² / C) = (1/2)·Q·U",
    explain: "C: Điện dung của tụ điện (Fara - F; 1 μF = 10⁻⁶ F, 1 pF = 10⁻¹² F)\nQ: Điện tích nạp vào tụ điện (C)\nU: Hiệu điện thế giữa hai bản tụ (V)\nW_c: Năng lượng điện trường tích trữ trong tụ điện (J)",
    unit: "C(Fara - F), W(Jun - J)",
  },

  // --- CHƯƠNG IV (11): DÒNG ĐIỆN KHÔNG ĐỔI & MẠCH ĐIỆN ---
  {
    id: "f11-13",
    grade: "11",
    chapterId: "11-c4",
    chapterName: "Chương IV. Mạch điện & Định luật Ôm (Lớp 11)",
    name: "Định luật Ohm cho toàn mạch kín",
    formula: "I = E / (R_N + r)   <=>   E = I · (R_N + r) = U_N + I · r",
    explain: "E: Suất điện động của nguồn điện (V)\nr: Điện trở trong của nguồn điện (Ω)\nR_N: Điện trở tương đương của toàn bộ mạch ngoài (Ω)\nU_N = I · R_N: Hiệu điện thế hai cực nguồn (hiệu điện thế mạch ngoài, V)",
    unit: "Ampe (A)",
    tip: "Khi đoản mạch (R_N = 0) => I_đm = E / r rất lớn, gây nguy hiểm cháy nổ",
  },
  {
    id: "f11-14",
    grade: "11",
    chapterId: "11-c4",
    chapterName: "Chương IV. Mạch điện & Định luật Ôm (Lớp 11)",
    name: "Công, Công suất điện & Định luật Joule - Lenz",
    formula: "Q_nhiệt = I² · R · t   ;   P_mạch = U · I = I² · R   ;   P_nguồn = E · I",
    explain: "Q_nhiệt: Nhiệt lượng toả ra trên điện trở R trong thời gian t (J)\nP_mạch: Công suất tiêu thụ của đoạn mạch (W)\nP_nguồn: Công suất toàn phần do nguồn điện sinh ra (W)\nHiệu suất nguồn điện: H = U_N / E = R_N / (R_N + r)",
    unit: "Jun (J), Oát (W)",
  },

  // =========================================================================
  // KHỐI 10: VẬT LÍ 10 (~10% ĐỀ THI)
  // =========================================================================

  // --- CHƯƠNG I (10): ĐỘNG HỌC ---
  {
    id: "f10-01",
    grade: "10",
    chapterId: "10-c1",
    chapterName: "Chương I. Động học (Lớp 10)",
    name: "Chuyển động thẳng biến đổi đều (Vận tốc, Quãng đường)",
    formula: "v = v₀ + a·t   ;   d = s = v₀·t + (1/2)·a·t²   ;   v² - v₀² = 2·a·s",
    explain: "v₀: Vận tốc ban đầu lúc t = 0 (m/s)\nv: Vận tốc tại thời điểm t (m/s)\na: Gia tốc của chuyển động (m/s²); a = const\ns, d: Quãng đường / Độ dịch chuyển (m)\nNhanh dần đều: a cùng dấu v₀ (a·v₀ > 0); Chậm dần đều: a ngược dấu v₀ (a·v₀ < 0)",
    unit: "v(m/s), a(m/s²), s(m)",
    tip: "Công thức độc lập thời gian: v² - v₀² = 2as rất hay dùng để tính nhanh gia tốc hoặc quãng đường dừng lại",
  },
  {
    id: "f10-02",
    grade: "10",
    chapterId: "10-c1",
    chapterName: "Chương I. Động học (Lớp 10)",
    name: "Chuyển động Rơi tự do",
    formula: "v = g·t   ;   h = (1/2)·g·t²   ;   v = √(2·g·h)",
    explain: "Rơi tự do là chuyển động thẳng nhanh dần đều không vận tốc đầu (v₀ = 0) dưới tác dụng duy nhất của trọng lực.\ng: Gia tốc rơi tự do (thường lấy g ≈ 9,8 m/s² hoặc 10 m/s²)\nh: Độ cao vật rơi được sau thời gian t (m)",
    unit: "v(m/s), h(m)",
  },

  // --- CHƯƠNG II (10): ĐỘNG LỰC HỌC ---
  {
    id: "f10-03",
    grade: "10",
    chapterId: "10-c2",
    chapterName: "Chương II. Động lực học (Lớp 10)",
    name: "Định luật II Newton",
    formula: "F⃗_hl = m · a⃗   <=>   a = F_hl / m",
    explain: "F⃗_hl: Hợp lực của tất cả các ngoại lực tác dụng lên vật (N)\nm: Khối lượng của vật (kg)\na⃗: Gia tốc vật thu được (m/s²), luôn cùng hướng với véc-tơ hợp lực F⃗_hl",
    unit: "Newton (N)",
  },
  {
    id: "f10-04",
    grade: "10",
    chapterId: "10-c2",
    chapterName: "Chương II. Động lực học (Lớp 10)",
    name: "Trọng lực & Trọng lượng",
    formula: "P⃗ = m · g⃗   =>   P = m · g",
    explain: "P⃗: Trọng lực là lực hút của Trái Đất tác dụng lên vật, có phương thẳng đứng, chiều hướng về tâm Trái Đất\nm: Khối lượng (kg)\nP: Trọng lượng — độ lớn của trọng lực (N)",
    unit: "Newton (N)",
  },
  {
    id: "f10-05",
    grade: "10",
    chapterId: "10-c2",
    chapterName: "Chương II. Động lực học (Lớp 10)",
    name: "Lực Ma sát trượt",
    formula: "F_mst = μ_t · N",
    explain: "μ_t: Hệ số ma sát trượt (không có đơn vị, phụ thuộc vào bản chất và tình trạng bề mặt tiếp xúc)\nN: Độ lớn áp lực vuông góc của vật lên mặt tiếp xúc (N)\nLực ma sát trượt luôn ngược chiều chuyển động tương đối của vật",
    unit: "Newton (N)",
  },
  {
    id: "f10-06",
    grade: "10",
    chapterId: "10-c2",
    chapterName: "Chương II. Động lực học (Lớp 10)",
    name: "Lực Đàn hồi của lò xo (Định luật Hooke)",
    formula: "F_đh = k · |Δl| = k · |l - l₀|",
    explain: "k: Độ cứng của lò xo (N/m)\nl₀: Chiều dài tự nhiên ban đầu của lò xo khi chưa biến dạng (m)\nl: Chiều dài của lò xo khi bị dãn hoặc nén (m)\n|Δl|: Độ biến dạng của lò xo (độ dãn hoặc độ nén, m)",
    unit: "Newton (N)",
  },
  {
    id: "f10-07",
    grade: "10",
    chapterId: "10-c2",
    chapterName: "Chương II. Động lực học (Lớp 10)",
    name: "Gia tốc hướng tâm & Lực hướng tâm (Chuyển động tròn đều)",
    formula: "a_ht = v² / r = ω² · r   ;   F_ht = m · a_ht = (m · v²) / r = m · ω² · r",
    explain: "v: Tốc độ dài (m/s); ω: Tốc độ góc (rad/s), liên hệ: v = ω·r\nr: Bán kính quỹ đạo tròn (m)\nF_ht: Lực hướng tâm là hợp lực giữ cho vật chuyển động tròn đều, luôn hướng vào tâm quỹ đạo",
    unit: "a(m/s²), F(N)",
  },

  // --- CHƯƠNG III (10): NĂNG LƯỢNG, CÔNG & CÔNG SUẤT ---
  {
    id: "f10-08",
    grade: "10",
    chapterId: "10-c3",
    chapterName: "Chương III. Công, Công suất & Cơ năng (Lớp 10)",
    name: "Công cơ học & Công suất",
    formula: "A = F · s · cos(α)   ;   P = A / t = F · v · cos(α)",
    explain: "F: Độ lớn lực tác dụng (N); s: Quãng đường dịch chuyển (m)\nα = (F⃗, s⃗): Góc hợp bởi véc-tơ lực và véc-tơ độ dịch chuyển\nα < 90°: Công phát động (A > 0); α = 90°: Lực không sinh công (A = 0); α > 90°: Công cản (A < 0)\nP: Công suất — tốc độ thực hiện công (Oát - W, 1 kW = 1000 W)",
    unit: "A(Jun - J), P(Oát - W)",
  },
  {
    id: "f10-09",
    grade: "10",
    chapterId: "10-c3",
    chapterName: "Chương III. Công, Công suất & Cơ năng (Lớp 10)",
    name: "Động năng & Định lí Động năng",
    formula: "W_đ = (1/2) · m · v²   và   A_ngoại_lực = W_đ2 - W_đ1 = (1/2)·m·v₂² - (1/2)·m·v₁²",
    explain: "W_đ: Động năng của vật do chuyển động (J)\nĐịnh lí động năng: Độ biến thiên động năng của vật bằng tổng công của các ngoại lực tác dụng lên vật.",
    unit: "Jun (J)",
  },
  {
    id: "f10-10",
    grade: "10",
    chapterId: "10-c3",
    chapterName: "Chương III. Công, Công suất & Cơ năng (Lớp 10)",
    name: "Thế năng trọng trường & Định luật Bảo toàn Cơ năng",
    formula: "W_t = m · g · z   và   W = W_đ + W_t = (1/2)·m·v² + m·g·z = const",
    explain: "z: Toạ độ (độ cao) của vật so với mốc chọn thế năng (m)\nW: Cơ năng của vật trong trọng trường.\nNếu vật chỉ chịu tác dụng của trọng lực (lực thế), cơ năng của vật được bảo toàn.",
    unit: "Jun (J)",
    tip: "Nếu có ma sát hoặc lực cản (lực không thế): A_lực_cản = W_sau - W_trước (cơ năng bị hao phí thành nhiệt)",
  },

  // --- CHƯƠNG IV (10): ĐỘNG LƯỢNG & BẢO TOÀN ĐỘNG LƯỢNG ---
  {
    id: "f10-11",
    grade: "10",
    chapterId: "10-c4",
    chapterName: "Chương IV. Động lượng & Bảo toàn (Lớp 10)",
    name: "Động lượng & Xung lượng của lực",
    formula: "p⃗ = m · v⃗   và   Δp⃗ = p⃗₂ - p⃗₁ = F⃗ · Δt",
    explain: "p⃗: Véc-tơ động lượng của vật, cùng hướng với véc-tơ vận tốc v⃗\nF⃗ · Δt: Xung lượng của lực F trong khoảng thời gian Δt\nĐộ biến thiên động năng của vật trong một khoảng thời gian bằng xung lượng của tổng hợp lực tác dụng.",
    unit: "kg·m/s hoặc N·s",
  },
  {
    id: "f10-12",
    grade: "10",
    chapterId: "10-c4",
    chapterName: "Chương IV. Động lượng & Bảo toàn (Lớp 10)",
    name: "Định luật Bảo toàn Động lượng & Va chạm mềm",
    formula: "p⃗_trước = p⃗_sau   <=>   m₁·v⃗₁ + m₂·v⃗₂ = (m₁ + m₂) · V⃗   (Va chạm mềm)",
    explain: "Định luật áp dụng cho hệ kín (cô lập, không chịu ngoại lực hoặc tổng ngoại lực bằng 0).\nV⃗: Vận tốc chung của 2 vật sau va chạm dính liền vào nhau (va chạm mềm):\nV⃗ = (m₁·v⃗₁ + m₂·v⃗₂) / (m₁ + m₂)",
    unit: "kg·m/s, V(m/s)",
  },
];
