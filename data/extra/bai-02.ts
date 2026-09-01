import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một khối khí lí tưởng đơn nguyên tử chứa trong một xilanh cách nhiệt có pittông kín chuyển động không ma sát. Người ta dùng ngoại lực tác dụng lên pittông để nén khối khí này thật nhanh.",
      statements: [
        {
          text: "Vì xilanh cách nhiệt nên nhiệt lượng khối khí trao đổi với bên ngoài Q = 0.",
          answer: true,
          explain: "Đúng. Xilanh cách nhiệt lý tưởng nên không có sự truyền nhiệt ra môi trường ngoài (Q = 0).",
        },
        {
          text: "Ngoại lực nén pittông làm khối khí nhận công nên A > 0.",
          answer: true,
          explain: "Đúng. Khí bị nén lại nên nhận công từ ngoại lực (A > 0).",
        },
        {
          text: "Độ biến thiên nội năng của khối khí bằng 0 vì không có nhiệt lượng truyền vào.",
          answer: false,
          explain: "Sai. Theo Định luật I: ΔU = A + Q = A + 0 = A > 0, do đó nội năng của khối khí tăng lên.",
        },
        {
          text: "Nhiệt độ của khối khí sau khi bị nén nhanh sẽ giảm xuống.",
          answer: false,
          explain: "Sai. Đối với khí lí tưởng nội năng tỉ lệ với nhiệt độ. Vì ΔU > 0 nên nhiệt độ của khối khí tăng lên.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét quá trình truyền nhiệt và thực hiện công trong các hiện tượng nhiệt động lực học.",
      statements: [
        {
          text: "Quá trình truyền nhiệt luôn xảy ra tự phát từ vật có nhiệt độ thấp sang vật có nhiệt độ cao hơn.",
          answer: false,
          explain: "Sai. Nhiệt chỉ tự truyền từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn.",
        },
        {
          text: "Nội năng của một vật gồm tổng động năng và thế năng tương tác của các phân tử tạo nên vật.",
          answer: true,
          explain: "Đúng. Đây là định nghĩa chính xác của nội năng.",
        },
        {
          text: "Khi một miếng sắt được mài trên đá mài, có sự chuyển hoá cơ năng thành nội năng.",
          answer: true,
          explain: "Đúng. Công của lực ma sát làm tăng nội năng của miếng sắt và đá mài (nóng lên).",
        },
        {
          text: "Một động cơ nhiệt có thể chuyển hoá hoàn toàn 100% nhiệt lượng nhận được thành công cơ học.",
          answer: false,
          explain: "Sai. Theo nguyên lý nhiệt động lực học, không thể có động cơ nhiệt nào có hiệu suất 100% vì luôn có phần nhiệt lượng truyền cho nguồn lạnh.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Phân biệt hai hình thức làm biến đổi nội năng: Thực hiện công và Truyền nhiệt. Cho một ví dụ cụ thể cho mỗi hình thức trong đời sống hằng ngày?",
      answer:
        "1. Phân biệt:\n- Thực hiện công: Có sự chuyển hoá giữa cơ năng (hoặc dạng năng lượng khác) thành nội năng hoặc ngược lại; có sự tác dụng lực và có dịch chuyển vị trí vĩ mô.\n- Truyền nhiệt: Không có sự chuyển hoá dạng năng lượng mà chỉ có sự truyền trực tiếp nội năng từ vật có nhiệt độ cao sang vật có nhiệt độ thấp hơn; không gắn với chuyển động cơ học vĩ mô.\n\n2. Ví dụ:\n- Thực hiện công: Dùng bơm xe đạp ấn pittông nhiều lần, thân bơm bị nóng lên.\n- Truyền nhiệt: Thả một chiếc thìa nhôm lạnh vào bát canh nóng, thìa nóng dần lên sau một lúc.",
    },
    {
      id: "es2",
      q: "Một khối khí thực hiện một chu trình biến đổi: Nhận nhiệt lượng 400 J từ nguồn nóng và thực hiện công 150 J đẩy pittông, đồng thời truyền nhiệt lượng 200 J cho nguồn lạnh. Tính độ biến thiên nội năng sau quá trình này?",
      answer:
        "- Tổng nhiệt lượng khối khí trao đổi: Q = Q_nhận + Q_toả = 400 + (-200) = +200 J.\n- Công khối khí trao đổi (do khí sinh công): A = -150 J.\n- Áp dụng Định luật I nhiệt động lực học: ΔU = A + Q = -150 + 200 = +50 J.\n- Kết luận: Nội năng của khối khí tăng thêm 50 J.",
    },
  ],
};

export default extra;
