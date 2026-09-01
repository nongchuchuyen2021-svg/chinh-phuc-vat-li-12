import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một máy biến áp lí tưởng có số vòng dây cuộn sơ cấp là N₁ = 2000 vòng và cuộn thứ cấp là N₂ = 100 vòng. Đặt vào hai đầu cuộn sơ cấp một điện áp xoay chiều có giá trị hiệu dụng U₁ = 220 V và tần số f = 50 Hz. Cuộn thứ cấp được nối với một bóng đèn sợi đốt loại 11 V - 22 W.",
      statements: [
        {
          text: "Đây là máy hạ áp có tỉ số biến áp k = N₁/N₂ = 20.",
          answer: true,
          explain: "Đúng. N₁ > N₂ nên đây là máy hạ áp, tỉ số vòng dây là 2000 / 100 = 20.",
        },
        {
          text: "Điện áp hiệu dụng ở hai đầu cuộn thứ cấp là U₂ = 11 V.",
          answer: true,
          explain: "Đúng. U₂ = U₁ . (N₂ / N₁) = 220 . (100 / 2000) = 11 V.",
        },
        {
          text: "Tần số của dòng điện ở mạch thứ cấp là 2,5 Hz.",
          answer: false,
          explain: "Sai. Máy biến áp không làm thay đổi tần số của dòng điện xoay chiều, tần số thứ cấp vẫn là 50 Hz.",
        },
        {
          text: "Cường độ dòng điện hiệu dụng trong cuộn sơ cấp khi bóng đèn sáng bình thường là 0,1 A.",
          answer: true,
          explain: "Đúng. Cường độ dòng thứ cấp I₂ = P / U₂ = 22 / 11 = 2 A. Cường độ sơ cấp I₁ = I₂ . (N₂ / N₁) = 2 . (100 / 2000) = 0,1 A.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét bài toán truyền tải điện năng xoay chiều từ nhà máy điện đến khu công nghiệp tiêu thụ.",
      statements: [
        {
          text: "Phương pháp hiệu quả và kinh tế nhất để giảm hao phí khi truyền tải điện năng đi xa là tăng tiết diện của dây dẫn lên hàng trăm lần.",
          answer: false,
          explain: "Sai. Tăng tiết diện dây làm tăng khối lượng kim loại đồng/nhôm và tăng chi phí cột điện khổng lồ. Cách tối ưu nhất là tăng điện áp U.",
        },
        {
          text: "Ở nhà máy điện, người ta sử dụng máy tăng áp để nâng điện áp trước khi đưa lên đường dây cao thế.",
          answer: true,
          explain: "Đúng. Tăng điện áp để giảm cường độ dòng điện truyền tải, từ đó giảm hao phí toả nhiệt trên đường dây.",
        },
        {
          text: "Máy biến áp có thể dùng để biến đổi hiệu điện thế của nguồn điện pin một chiều 9 V.",
          answer: false,
          explain: "Sai. Pin một chiều tạo từ thông không đổi (ΔΦ = 0), máy biến áp không hoạt động với dòng điện một chiều.",
        },
        {
          text: "Hiệu suất truyền tải điện là tỉ số giữa công suất nhận được tại nơi tiêu thụ và công suất phát đi tại nhà máy điện: H = P_nhận / P_phát.",
          answer: true,
          explain: "Đúng. H = (P - ΔP) / P = 1 - ΔP/P.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao máy biến áp không thể hoạt động với nguồn điện một chiều không đổi? Nếu vô tình cắm cuộn sơ cấp của máy biến áp vào nguồn điện một chiều có điện áp định mức thì điều gì sẽ xảy ra?",
      answer:
        "1. Nguyên nhân máy biến áp không hoạt động với dòng một chiều:\n- Máy biến áp hoạt động dựa trên hiện tượng cảm ứng điện từ. Để cuộn thứ cấp xuất hiện suất điện động cảm ứng, từ thông qua lõi thép phải biến thiên theo thời gian (dΦ/dt ≠ 0).\n- Dòng điện một chiều có cường độ không đổi, sinh ra từ trường không đổi => Từ thông qua lõi thép không đổi (dΦ/dt = 0) => Suất điện động ở cuộn thứ cấp bằng 0.\n\n2. Hậu quả khi cắm vào nguồn một chiều:\n- Cuộn sơ cấp có điện trở thuần R rất nhỏ (khi dùng điện xoay chiều, cuộn dây có cảm kháng Z_L = ωL rất lớn cản trở dòng điện).\n- Khi nối với điện một chiều, không có cảm kháng (Z_L = 0), cường độ dòng điện một chiều I = U/R sẽ tăng vọt lên rất lớn (dòng ngắn mạch).\n- Dòng điện quá lớn làm toả nhiệt dữ dội (Q = I² R t), gây cháy lớp vỏ cách điện và làm cháy hỏng cuộn dây máy biến áp.",
    },
    {
      id: "es2",
      q: "Người ta cần truyền tải một công suất điện P = 100 kW từ nhà máy điện đến nơi tiêu thụ bằng đường dây tải điện một pha có tổng điện trở r = 10 Ω. Hệ số công suất cosφ = 1. Hãy tính công suất hao phí do toả nhiệt trên đường dây trong hai trường hợp:\n a) Điện áp ở đầu đường dây là U₁ = 1000 V.\n b) Dùng máy tăng áp nâng điện áp lên U₂ = 10.000 V trước khi truyền tải?",
      answer:
        "1. Trường hợp a: Điện áp truyền tải U₁ = 1000 V:\n   - Công suất hao phí:\n     ΔP₁ = (P² . r) / (U₁² . cos²φ) = ((100.10³)² . 10) / (1000² . 1) = (10¹⁰ . 10) / 10⁶ = 100.000 W = 100 kW.\n   - Nhận xét: Hao phí bằng 100% công suất truyền tải (toàn bộ điện năng bị mất sạch trên đường dây dưới dạng nhiệt!).\n\n2. Trường hợp b: Điện áp truyền tải U₂ = 10.000 V (tăng 10 lần):\n   - Công suất hao phí:\n     ΔP₂ = (P² . r) / (U₂² . cos²φ) = ((100.10³)² . 10) / (10.000² . 1) = 10¹¹ / 10⁸ = 1000 W = 1 kW.\n   - Tỉ lệ hao phí: ΔP₂ / P = 1 kW / 100 kW = 1% (hiệu suất truyền tải đạt 99%).\n- Kết luận: Việc tăng điện áp lên 10 lần đã làm giảm hao phí đi 100 lần (từ 100 kW xuống chỉ còn 1 kW).",
    },
  ],
};

export default extra;
