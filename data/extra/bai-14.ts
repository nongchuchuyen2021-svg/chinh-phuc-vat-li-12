import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một ống dây dẫn hình trụ (solenoid) gồm nhiều vòng dây quấn sít nhau được nối với nguồn điện một chiều để tạo dòng điện không đổi chạy qua ống dây.",
      statements: [
        {
          text: "Xung quanh và bên trong ống dây xuất hiện từ trường.",
          answer: true,
          explain: "Đúng. Dòng điện chạy trong các vòng dây sinh ra từ trường trong không gian xung quanh và bên trong lòng ống dây.",
        },
        {
          text: "Bên trong lòng ống dây dài, từ trường có thể coi gần đúng là từ trường đều.",
          answer: true,
          explain: "Đúng. Trong lòng ống dây dài các đường sức từ song song và cách đều nhau.",
        },
        {
          text: "Nếu đảo chiều dòng điện chạy qua ống dây thì chiều các đường sức từ không thay đổi.",
          answer: false,
          explain: "Sai. Theo quy tắc nắm tay phải, đảo chiều dòng điện thì chiều đường sức từ cũng đảo ngược lại 180°.",
        },
        {
          text: "Đặt một lõi sắt non vào trong lòng ống dây thì độ mạnh của từ trường trong lòng ống dây giảm đi.",
          answer: false,
          explain: "Sai. Lõi sắt non bị từ hoá mạnh làm tăng độ mạnh của từ trường lên hàng trăm đến hàng nghìn lần (chế tạo nam châm điện).",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về đặc tính của từ trường và đường sức từ trong không gian.",
      statements: [
        {
          text: "Qua mỗi điểm trong không gian có từ trường, ta chỉ có thể vẽ được một và chỉ một đường sức từ.",
          answer: true,
          explain: "Đúng. Các đường sức từ không bao giờ cắt nhau.",
        },
        {
          text: "Đường sức từ của từ trường tĩnh là những đường cong mở có điểm bắt đầu và kết thúc ở các cực từ.",
          answer: false,
          explain: "Sai. Đường sức từ luôn là những đường cong khép kín (đi ra cực Bắc, đi vào cực Nam và tiếp tục khép kín bên trong lòng nam châm).",
        },
        {
          text: "Hai dòng điện thẳng song song chạy cùng chiều sẽ hút nhau bằng lực từ.",
          answer: true,
          explain: "Đúng. Hai dòng điện cùng chiều hút nhau, ngược chiều đẩy nhau (hiện tượng tương tác từ giữa hai dòng điện).",
        },
        {
          text: "Địa từ trường của Trái Đất có tác dụng bảo vệ sinh quyển khỏi các chùm hạt mang năng lượng cao từ gió Mặt Trời.",
          answer: true,
          explain: "Đúng. Từ trường Trái Đất uốn cong quỹ đạo các hạt tích điện từ bão Mặt Trời, bảo vệ sự sống trên Trái Đất.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Tại sao nói từ trường là một trường xoáy, khác với điện trường tĩnh là một trường thế?",
      answer:
        "- Điện trường tĩnh do các điện tích đứng yên sinh ra: Các đường sức điện trường là những đường cong hở (bắt đầu từ điện tích dương và kết thúc ở điện tích âm hoặc ở vô cực). Công của lực điện trường tĩnh khi dịch chuyển điện tích trên một đường cong kín luôn bằng 0, do đó điện trường tĩnh là một trường thế.\n- Từ trường do dòng điện hoặc nam châm sinh ra: Không tồn tại điện tích từ cô lập (không có đơn cực từ). Các đường sức từ luôn là những đường cong khép kín liên tục (đi ra cực Bắc, đi vào cực Nam và tiếp tục chạy từ Nam sang Bắc bên trong lòng nam châm). Một trường có các đường sức khép kín như vậy được gọi là trường xoáy (vortex field).",
    },
    {
      id: "es2",
      q: "Nêu quy tắc nắm tay phải dùng để xác định chiều đường sức từ của dòng điện chạy trong ống dây hình trụ (solenoid)? Ứng dụng nguyên lý này để phân biệt hai cực Bắc - Nam của một nam châm điện?",
      answer:
        "1. Quy tắc nắm tay phải cho ống dây:\n- Khum bàn tay phải sao cho chiều từ cổ tay đến các ngón tay chỉ theo chiều dòng điện chạy qua các vòng dây của ống dây.\n- Khi đó, ngón tay cái choãi ra 90° sẽ chỉ chiều của các đường sức từ bên trong lòng ống dây.\n\n2. Ứng dụng xác định cực của nam châm điện:\n- Chiều ngón tay cái choãi ra chính là hướng đi ra của đường sức từ tại một đầu ống dây. Do đó, đầu ống dây mà ngón tay cái hướng tới chính là **Cực Bắc (N)** của nam châm điện.\n- Đầu còn lại (nơi đường sức từ đi vào) chính là **Cực Nam (S)**.",
    },
  ],
};

export default extra;
