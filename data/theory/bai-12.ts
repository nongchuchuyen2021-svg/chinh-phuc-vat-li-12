import type { LessonTheory } from "@/lib/types";

const bai12: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ thiết lập công thức tính **Áp suất chất khí theo mô hình động học phân tử** `p = 1/3 . μ . m . v²`, tìm hiểu mối quan hệ mật thiết giữa **Động năng tịnh tiến trung bình của phân tử** với **Nhiệt độ tuyệt đối** `E_d = 3/2 . k . T` và căn bậc hai của trung bình bình phương tốc độ phân tử (tốc độ căn quân phương).",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "💥",
      heading: "1. Áp suất chất khí theo mô hình động học phân tử",
      blocks: [
        {
          kind: "text",
          text: "Dựa vào định luật bảo toàn động lượng trong các va chạm đàn hồi của phân tử khí vào thành bình, ta xây dựng được công thức tính áp suất khí:",
        },
        {
          kind: "example",
          title: "Công thức áp suất khí theo mô hình vi mô",
          text: "**p = (1/3) . μ . m . v²_tb = (2/3) . μ . E_d**\nTrong đó:\n- `p`: Áp suất chất khí (`Pa`).\n- `μ = N / V`: Mật độ phân tử khí (số hạt trên 1 m³).\n- `m`: Khối lượng của một phân tử khí (`kg`).\n- `v²_tb`: Trung bình bình phương tốc độ phân tử (`m²/s²`).\n- `E_d = (1/2) . m . v²_tb`: Động năng tịnh tiến trung bình của một phân tử (`J`).",
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "🌡️",
      heading: "2. Mối quan hệ giữa Động năng phân tử và Nhiệt độ",
      blocks: [
        {
          kind: "text",
          text: "Kết hợp công thức áp suất vi mô với phương trình trạng thái `p = μ . k . T`, ta thu được hệ thức nền tảng của thuyết động học phân tử:",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "⚡",
              title: "Động năng tịnh tiến trung bình",
              text: "**E_d = (3/2) . k . T**\nTrong đó `k ≈ 1,38 . 10⁻²³ J/K` là hằng số Boltzmann. Động năng phân tử **chỉ phụ thuộc vào nhiệt độ tuyệt đối T**, không phụ thuộc vào loại khí!",
            },
            {
              emoji: "🚀",
              title: "Tốc độ căn quân phương (v_rms)",
              text: "**v_rms = √(v²_tb) = √(3.k.T / m) = √(3.R.T / M)**\nỞ cùng nhiệt độ, khí có khối lượng mol `M` càng nhỏ (như H₂, He) thì tốc độ chuyển động nhiệt trung bình càng lớn.",
            },
          ],
        },
        {
          kind: "note",
          text: "**Ý nghĩa vật lí sâu sắc của Nhiệt độ:**\nNhiệt độ tuyệt đối `T` là thước đo trực tiếp **động năng chuyển động nhiệt trung bình của các phân tử**. Ở `T = 0 K`, động năng nhiệt triệt tiêu hoàn toàn.",
        },
        {
          kind: "check",
          q: "Ở nhiệt độ 300 K, động năng tịnh tiến trung bình của một phân tử khí lí tưởng bất kì bằng bao nhiêu? Lấy k = 1,38.10⁻²³ J/K.",
          options: ["6,21 . 10⁻²¹ J", "4,14 . 10⁻²¹ J", "2,07 . 10⁻²¹ J", "8,28 . 10⁻²¹ J"],
          answer: 0,
          explain:
            "E_d = (3/2) . k . T = 1,5 . 1,38 . 10⁻²³ . 300 = 6,21 . 10⁻²¹ J.",
        },
      ],
    },
  ],
  summary: [
    "Áp suất vi mô: p = (1/3).μ.m.v²_tb = (2/3).μ.E_d.",
    "Động năng phân tử tỉ lệ thuận với nhiệt độ: E_d = (3/2).k.T.",
    "Nhiệt độ T là số đo động năng chuyển động nhiệt trung bình của các phân tử.",
    "Tốc độ căn quân phương: v_rms = √(3.R.T / M).",
  ],
};

export default bai12;
