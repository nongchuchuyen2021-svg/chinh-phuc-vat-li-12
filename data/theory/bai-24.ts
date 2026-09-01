import type { LessonTheory } from "@/lib/types";

const bai24: LessonTheory = {
  intro:
    "Trong bài học này, chúng ta sẽ tìm hiểu hai dạng phản ứng hạt nhân giải phóng năng lượng khổng lồ: **Phản ứng Phân hạch** (Fission) và **Phản ứng Nhiệt hạch** (Fusion), cấu tạo và nguyên lý hoạt động của **Nhà máy điện hạt nhân** (Lò phản ứng hạt nhân), ứng dụng của đồng vị phóng xạ trong y tế - nông nghiệp - công nghiệp và an toàn bức xạ.",
  minutes: 8,
  sections: [
    {
      id: "muc-1",
      emoji: "💥",
      heading: "1. Phản ứng Phân hạch & Phản ứng Dây chuyền",
      blocks: [
        {
          kind: "text",
          text: "**Phân hạch** là quá trình một hạt nhân rất nặng (như `^235_92U` hoặc `^239_94Pu`) hấp thụ một neutron chậm rồi vỡ thành hai hạt nhân có số khối trung bình và giải phóng từ 2 đến 3 neutron mới cùng năng lượng cực lớn (~200 MeV/phân hạch).",
        },
        {
          kind: "example",
          title: "Phương trình phân hạch điển hình của Urani-235",
          text: "**^1_0n + ^235_92U -> ^236_92U* -> ^95_39Y + ^138_53I + 3 ^1_0n + 200 MeV**",
        },
        {
          kind: "cards",
          tone: "plasma",
          items: [
            {
              emoji: "⛓️",
              title: "Phản ứng dây chuyền (Chain reaction)",
              text: "Các neutron sinh ra tiếp tục kích hoạt các hạt nhân Urani khác. Gọi `k` là hệ số nhân neutron trung bình:\n- `k < 1`: Phản ứng tắt dần.\n- `k = 1`: Phản ứng dây chuyền **tự duy trì có kiểm soát** (ứng dụng trong **Nhà máy điện hạt nhân**).\n- `k > 1`: Phản ứng dây chuyền bùng nổ mất kiểm soát (**Bom nguyên tử A-bomb**).",
            },
            {
              emoji: "🧱",
              title: "Khối lượng tới hạn (m_th)",
              text: "Là khối lượng tối thiểu của nhiên liệu hạt nhân để phản ứng dây chuyền có thể duy trì (`k ≥ 1`).",
            },
          ],
        },
      ],
    },
    {
      id: "muc-2",
      emoji: "☀️",
      heading: "2. Phản ứng Nhiệt hạch (Tổng hợp hạt nhân)",
      blocks: [
        {
          kind: "text",
          text: "**Nhiệt hạch** là quá trình kết hợp hai hay nhiều hạt nhân rất nhẹ (như hiđrô, đơteri, triti) thành một hạt nhân nặng hơn ở nhiệt độ cực kì cao (hàng chục đến hàng trăm triệu độ C).",
        },
        {
          kind: "example",
          title: "Phương trình phản ứng nhiệt hạch trong lòng Mặt Trời",
          text: "**^2_1H + ^3_1H -> ^4_2He + ^1_0n + 17,6 MeV**",
        },
        {
          kind: "compare",
          left: {
            emoji: "☀️",
            title: "Ưu điểm của Nhiệt hạch",
            items: [
              "Năng lượng toả ra trên 1 đơn vị khối lượng nhiên liệu **lớn hơn gấp nhiều lần** so với phân hạch.",
              "Nhiên liệu dồi dào vô tận (Đơteri có sẵn trong nước biển).",
              "**Sạch và an toàn**: Không tạo ra chất thải phóng xạ chu kì dài nguy hiểm.",
            ],
          },
          right: {
            emoji: "🔥",
            title: "Điều kiện thực hiện",
            items: [
              "Cần nhiệt độ cực cao (hơn 100 triệu độ) để các hạt nhân có động năng thắng lực đẩy tĩnh điện Coulomb.",
              "Cần mật độ hạt đủ cao và thời gian giam giữ plasma đủ dài (lò phản ứng Tokamak, dự án ITER quốc tế).",
            ],
          },
        },
      ],
    },
    {
      id: "muc-3",
      emoji: "🏥",
      heading: "3. Ứng dụng của Công nghệ hạt nhân trong đời sống",
      blocks: [
        {
          kind: "steps",
          items: [
            {
              label: "Y học hạt nhân",
              title: "Chẩn đoán PET/SPECT & Xạ trị ung thư",
              text: "Dùng đồng vị I-131 điều trị ung thư tuyến giáp; Co-60, dao Gamma (Gamma Knife) tiêu diệt tế bào khối u chính xác.",
            },
            {
              label: "Nông nghiệp",
              title: "Chiếu xạ tạo giống đột biến & Diệt khuẩn thực phẩm",
              text: "Chiếu xạ hạt giống để chọn lọc các giống lúa, đậu kháng sâu bệnh, năng suất cao; chiếu xạ bảo quản thanh long, xoài xuất khẩu.",
            },
            {
              label: "Công nghiệp",
              title: "Kiểm tra khuyết tật mối hàn (NDT)",
              text: "Chụp ảnh bức xạ gamma kiểm tra khuyết tật bên trong các đường ống dẫn dầu khí, thân máy bay mà không phá huỷ kết cấu.",
            },
          ],
        },
      ],
    },
  ],
  summary: [
    "Phân hạch: Hạt nhân nặng hấp thụ neutron vỡ thành hạt nhân trung bình + toả năng lượng (~200 MeV).",
    "Phản ứng dây chuyền: k = 1 trong lò phản ứng điện hạt nhân; k > 1 trong bom nguyên tử.",
    "Nhiệt hạch: Kết hợp các hạt nhân nhẹ ở nhiệt độ hàng trăm triệu độ; toả năng lượng cực lớn, là nguồn năng lượng của các ngôi sao.",
    "Ứng dụng: Phát điện sạch, chẩn đoán & xạ trị y tế, tạo giống đột biến nông nghiệp, chụp kiểm tra không phá huỷ công nghiệp.",
  ],
};

export default bai24;
