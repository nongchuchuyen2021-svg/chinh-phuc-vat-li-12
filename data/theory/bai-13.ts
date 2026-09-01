import type { LessonTheory } from "@/lib/types";

const bai13: LessonTheory = {
  intro:
    "Trong bài học tổng kết Chương II này, chúng ta sẽ ôn luyện các phương pháp giải bài tập khí lí tưởng: bài toán biến đổi trạng thái qua đồ thị chu trình (p-V, V-T, p-T), bài toán ống thuỷ tinh chứa cột thuỷ ngân (áp suất chất lưu), bài toán bình khí có rò rỉ hoặc bơm thêm khí và bài toán cơ học chất khí kết hợp pittông có tải trọng.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "📐",
      heading: "1. Tổng hợp hệ thống công thức Khí lí tưởng",
      blocks: [
        {
          kind: "cards",
          tone: "nebula",
          items: [
            {
              emoji: "🌡️",
              title: "Các đẳng quá trình",
              text: "- **Đẳng nhiệt (T = const):** `p₁ . V₁ = p₂ . V₂`\n- **Đẳng áp (p = const):** `V₁ / T₁ = V₂ / T₂`\n- **Đẳng tích (V = const):** `p₁ / T₁ = p₂ / T₂`",
            },
            {
              emoji: "🌌",
              title: "Phương trình trạng thái",
              text: "`(p₁ . V₁) / T₁ = (p₂ . V₂) / T₂ = n . R = (m / M) . R`",
            },
            {
              emoji: "💥",
              title: "Áp suất vi mô & Động năng",
              text: "- `p = (2/3) . μ . E_d = μ . k . T`\n- `E_d = (3/2) . k . T`\n- `v_rms = √(3.R.T / M)`",
            },
            {
              emoji: "🌊",
              title: "Cân bằng pittông & Cột thuỷ ngân",
              text: "- Ống nằm ngang: `p_khí = p₀`\n- Ống thẳng đứng miệng ở trên: `p_khí = p₀ + h`\n- Ống thẳng đứng miệng ở dưới: `p_khí = p₀ - h`",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "📊",
      heading: "2. Kĩ năng phân tích chu trình trên đồ thị",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Bước 1",
              title: "Xác định tên các quá trình",
              text: "Nhìn vào trục toạ độ để nhận diện: đường song song với trục nào là đẳng thông số đó; đường hypebol trên (p, V) là đẳng nhiệt; đường qua gốc toạ độ trên (V, T) là đẳng áp; trên (p, T) là đẳng tích.",
            },
            {
              label: "Bước 2",
              title: "Lập bảng thông số trạng thái",
              text: "Ghi các giá trị `(p₁, V₁, T₁)`, `(p₂, V₂, T₂)`, `(p₃, V₃, T₃)`... rồi dùng các định luật tương ứng để tìm thông số chưa biết.",
            },
            {
              label: "Bước 3",
              title: "Tính công và nhiệt lượng",
              text: "Diện tích hình khép kín trên đồ thị `(p, V)` chính là **độ lớn công cơ học mà khối khí sinh ra trong một chu trình**: `A' = Diện tích hình chu trình`.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Áp dụng linh hoạt các đẳng quá trình và phương trình Clapeyron - Mendeleev.",
    "Chú ý đổi đơn vị chuẩn: p (Pa), V (m³), T (K).",
    "Công trong chu trình khép kín bằng diện tích hình bao bởi đồ thị trên hệ toạ độ (p, V).",
    "Áp suất thuỷ tĩnh của cột chất lỏng chiều cao h: p = p0 ± d.h hoặc p = p0 ± h (cmHg).",
  ],
};

export default bai13;
