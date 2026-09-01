import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một khung dây dẫn phẳng quay đều quanh một trục nằm trong mặt phẳng khung và vuông góc với các đường sức từ của một từ trường đều B = 0,2 T. Khung gồm N = 100 vòng dây, diện tích mỗi vòng là S = 200 cm², quay với tốc độ góc không đổi ω = 120 rad/s.",
      statements: [
        {
          text: "Từ thông cực đại gửi qua toàn bộ khung dây là Φ₀ = 0,4 Wb.",
          answer: true,
          explain: "Đúng. Φ₀ = N . B . S = 100 . 0,2 . (200 . 10⁻⁴) = 0,4 Wb.",
        },
        {
          text: "Suất điện động cảm ứng cực đại xuất hiện trong khung dây là E₀ = 48 V.",
          answer: true,
          explain: "Đúng. E₀ = ω . Φ₀ = 120 . 0,4 = 48 V.",
        },
        {
          text: "Suất điện động hiệu dụng của khung dây là E ≈ 33,94 V.",
          answer: true,
          explain: "Đúng. E = E₀ / √2 = 48 / 1,4142 ≈ 33,94 V.",
        },
        {
          text: "Tại thời điểm từ thông qua khung dây đạt cực đại thì suất điện động trong khung cũng đạt giá trị cực đại.",
          answer: false,
          explain: "Sai. Suất điện động e chậm pha π/2 so với Φ (khi Φ cực đại thì e = 0; khi Φ = 0 thì |e| cực đại).",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về máy phát điện xoay chiều và các giá trị hiệu dụng của dòng điện xoay chiều.",
      statements: [
        {
          text: "Máy phát điện xoay chiều ba pha tạo ra 3 dòng điện xoay chiều cùng biên độ, cùng tần số và lệch pha nhau từng đôi một góc 2π/3 (120°).",
          answer: true,
          explain: "Đúng. Ba cuộn dây đặt lệch nhau 120° trên stato tạo ra 3 suất điện động lệch pha 2π/3.",
        },
        {
          text: "Vôn kế xoay chiều đo và hiển thị giá trị điện áp cực đại U₀ của mạng điện.",
          answer: false,
          explain: "Sai. Các dụng cụ đo xoay chiều (vôn kế, ampe kế) luôn chỉ giá trị hiệu dụng U, I.",
        },
        {
          text: "Điện áp tức thời u có thể nhận giá trị âm trong khi điện áp hiệu dụng U luôn là số dương.",
          answer: true,
          explain: "Đúng. u biến thiên điều hoà nhận cả âm và dương, còn U = U₀/√2 là hằng số dương.",
        },
        {
          text: "Một máy phát điện có 6 cặp cực (p = 6) muốn phát ra dòng điện 50 Hz thì roto phải quay 500 vòng/phút.",
          answer: true,
          explain: "Đúng. n = (60 . f) / p = (60 . 50) / 6 = 500 vòng/phút.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Trình bày định nghĩa Cường độ dòng điện hiệu dụng của dòng điện xoay chiều? Nêu ý nghĩa thực tiễn của việc sử dụng các giá trị hiệu dụng trong kĩ thuật điện?",
      answer:
        "1. Định nghĩa cường độ dòng điện hiệu dụng:\n- Cường độ dòng điện hiệu dụng của dòng điện xoay chiều là đại lượng có giá trị bằng cường độ của một dòng điện không đổi (dòng một chiều) mà khi chạy qua cùng một điện trở R, trong cùng một khoảng thời gian sẽ toả ra một nhiệt lượng đúng bằng nhiệt lượng do dòng điện xoay chiều đó toả ra trên cùng điện trở.\n- Biểu thức: I = I₀ / √2.\n\n2. Ý nghĩa thực tiễn:\n- Cho phép áp dụng các công thức tính công suất điện (P = U.I.cosφ) và nhiệt lượng toả ra (Q = I² R t) tương tự như dòng điện một chiều.\n- Các thiết bị điện xoay chiều (bóng đèn, động cơ, bàn ủi) và các đồng hồ đo điện (vôn kế, ampe kế, công tơ điện) đều được thiết kế và ghi thông số theo giá trị hiệu dụng.",
    },
    {
      id: "es2",
      q: "Một cuộn dây phẳng gồm N = 1000 vòng dây quay đều trong từ trường đều B = 0,05 T với tốc độ 1800 vòng/phút quanh một trục nằm trong mặt phẳng cuộn dây và vuông góc với đường sức từ. Tiết diện mỗi vòng dây là S = 100 cm². Nối hai đầu cuộn dây với một điện trở R = 100 Ω (bỏ qua điện trở của cuộn dây). Tính công suất toả nhiệt trung bình trên điện trở R?",
      answer:
        "1. Tốc độ góc của cuộn dây:\n   - n = 1800 / 60 = 30 vòng/s\n   - ω = 2π . n = 2π . 30 = 60π rad/s ≈ 188,5 rad/s.\n\n2. Suất điện động cực đại sinh ra:\n   - S = 100 . 10⁻⁴ = 0,01 m²\n   - E₀ = N . B . S . ω = 1000 . 0,05 . 0,01 . (60π) = 30π V ≈ 94,25 V.\n\n3. Suất điện động hiệu dụng:\n   - E = E₀ / √2 = (30π) / √2 = 15π√2 V ≈ 66,64 V.\n\n4. Công suất toả nhiệt trung bình trên điện trở R:\n   - P = E² / R = (15π√2)² / 100 = (450 . π²) / 100 = 4,5 . π² ≈ 4,5 . 9,87 ≈ 44,4 W.\n- Kết luận: Công suất toả nhiệt trung bình trên điện trở là khoảng 44,4 W.",
    },
  ],
};

export default extra;
