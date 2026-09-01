import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một đoạn dây dẫn thẳng bằng đồng dài L = 0,2 m, khối lượng m = 10 g được treo nằm ngang bằng hai sợi dây mảnh nhẹ không dãn trong một từ trường đều có cảm ứng từ B = 0,25 T thẳng đứng hướng lên trên. Cho dòng điện không đổi I = 2 A chạy qua đoạn dây dẫn. Lấy g = 10 m/s².",
      statements: [
        {
          text: "Lực từ tác dụng lên đoạn dây dẫn có phương nằm ngang vuông góc với đoạn dây.",
          answer: true,
          explain: "Đúng. B thẳng đứng, I nằm ngang => lực từ F nằm ngang vuông góc với cả B và I.",
        },
        {
          text: "Độ lớn của lực từ tác dụng lên đoạn dây dẫn là 0,1 N.",
          answer: true,
          explain: "Đúng. F = B . I . L . sin(90°) = 0,25 . 2 . 0,2 = 0,1 N.",
        },
        {
          text: "Trọng lực tác dụng lên đoạn dây dẫn có độ lớn là 0,1 N.",
          answer: true,
          explain: "Đúng. P = m . g = 0,01 . 10 = 0,1 N.",
        },
        {
          text: "Khi cân bằng trong từ trường, hai sợi dây treo lệch khỏi phương thẳng đứng một góc 45°.",
          answer: true,
          explain: "Đúng. tan(θ) = F / P = 0,1 / 0,1 = 1 => θ = 45°.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về véc-tơ cảm ứng từ B và lực từ Laplace trong từ trường.",
      statements: [
        {
          text: "Cảm ứng từ B tại một điểm phụ thuộc vào chiều dài của đoạn dây dẫn thử đặt tại điểm đó.",
          answer: false,
          explain: "Sai. Cảm ứng từ B là đại lượng đặc trưng cho từ trường tại điểm đó, không phụ thuộc vào đoạn dây dẫn thử.",
        },
        {
          text: "Lực từ tác dụng lên đoạn dây dẫn luôn vuông góc với mặt phẳng chứa đoạn dây dẫn và véc-tơ cảm ứng từ B.",
          answer: true,
          explain: "Đúng. Véc-tơ F vuông góc với cả véc-tơ B và đoạn dòng điện I.",
        },
        {
          text: "Động cơ điện một chiều hoạt động dựa trên tác dụng của ngẫu lực từ lên khung dây dẫn có dòng điện chạy qua.",
          answer: true,
          explain: "Đúng. Momen lực từ làm quay khung dây (roto) trong từ trường của stato.",
        },
        {
          text: "Nếu tăng đồng thời cường độ dòng điện lên 2 lần và cảm ứng từ lên 2 lần thì lực từ tăng lên 4 lần.",
          answer: true,
          explain: "Đúng. Vì F tỉ lệ thuận với tích (B . I), cả hai tăng 2 lần thì F tăng 2 . 2 = 4 lần.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Phát biểu quy tắc bàn tay trái xác định lực từ tác dụng lên đoạn dây dẫn mang dòng điện. Hãy xác định lực từ trong trường hợp: Dòng điện chạy thẳng đứng từ dưới lên trên, từ trường đều nằm ngang hướng từ Trái sang Phải?",
      answer:
        "1. Phát biểu quy tắc bàn tay trái:\n- Đặt bàn tay trái sao cho các đường sức từ đâm xuyên vào lòng bàn tay (lòng bàn tay hướng về phía nguồn phát ra từ trường - cực Bắc N).\n- Chiều từ cổ tay đến 4 ngón tay duỗi thẳng chỉ theo chiều dòng điện I trong dây dẫn.\n- Khi đó, ngón tay cái choãi ra 90° sẽ chỉ chiều của lực từ F tác dụng lên đoạn dây dẫn.\n\n2. Áp dụng vào trường hợp cụ thể:\n- B nằm ngang hướng từ Trái sang Phải => Lòng bàn tay trái hướng sang bên Trái (để hứng B từ Trái sang).\n- Dòng điện I thẳng đứng hướng lên trên => 4 ngón tay chỉ thẳng đứng lên trên.\n- Ngón tay cái choãi ra 90° hướng đâm thẳng vào trong mặt phẳng hình vẽ (vuông góc với mặt giấy hướng ra xa người quan sát, kí hiệu ⊗).",
    },
    {
      id: "es2",
      q: "Một thanh nhôm dài L = 0,4 m, khối lượng m = 50 g được đặt nằm ngang trên hai thanh ray kim loại song song nhẵn cách điện trong một từ trường đều B = 0,2 T thẳng đứng hướng xuống. Nối hai ray với nguồn điện để tạo dòng điện không đổi I qua thanh nhôm. Lấy g = 10 m/s². Tính cường độ dòng điện I tối thiểu để thanh nhôm bắt đầu chuyển động với gia tốc a = 2 m/s² (bỏ qua ma sát giữa thanh và ray)?",
      answer:
        "1. Phân tích lực tác dụng lên thanh nhôm theo phương ngang:\n- Vì B thẳng đứng hướng xuống, thanh nằm ngang trên ray => góc α = 90°.\n- Lực từ tác dụng lên thanh theo phương ngang: F = B . I . L . sin(90°) = B . I . L.\n\n2. Áp dụng định luật II Newton cho chuyển động của thanh theo phương ngang (không có ma sát):\n   F = m . a => B . I . L = m . a\n\n3. Tính cường độ dòng điện I:\n   I = (m . a) / (B . L) = (0,05 . 2) / (0,2 . 0,4) = 0,1 / 0,08 = 1,25 A.\n- Kết luận: Cường độ dòng điện cần thiết chạy qua thanh nhôm là I = 1,25 A.",
    },
  ],
};

export default extra;
