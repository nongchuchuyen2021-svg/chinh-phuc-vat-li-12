import type { LessonExtra } from "@/lib/types";

const extra: LessonExtra = {
  tf: [
    {
      id: "tf1",
      context:
        "Một trạm phát sóng điện từ phát ra một sóng vô tuyến hình sin truyền theo phương thẳng đứng hướng lên trên bầu trời. Tại một thời điểm xét tại điểm M trên phương truyền sóng, véc-tơ cường độ điện trường E⃗ đang có độ lớn cực đại và hướng về phía Đông.",
      statements: [
        {
          text: "Tại thời điểm đó ở điểm M, véc-tơ cảm ứng từ B⃗ cũng đang có độ lớn cực đại.",
          answer: true,
          explain: "Đúng. Trong sóng điện từ, dao động của E và B luôn đồng pha với nhau.",
        },
        {
          text: "Véc-tơ cảm ứng từ B⃗ tại điểm M đang hướng về phía Bắc.",
          answer: true,
          explain: "Đúng. Áp dụng tam diện thuận (hoặc nắm tay phải): v⃗ hướng lên trên, E⃗ hướng sang Đông => B⃗ hướng về phía Bắc.",
        },
        {
          text: "Sóng điện từ này là sóng dọc vì truyền theo phương thẳng đứng.",
          answer: false,
          explain: "Sai. Sóng điện từ luôn luôn là sóng ngang vì phương dao động của E⃗ và B⃗ luôn vuông góc với phương truyền sóng v⃗.",
        },
        {
          text: "Nếu tần số sóng là 150 MHz thì bước sóng của sóng này trong chân không là 2 m.",
          answer: true,
          explain: "Đúng. λ = c / f = (3 . 10⁸) / (1,5 . 10⁸) = 2 m.",
        },
      ],
    },
    {
      id: "tf2",
      context:
        "Xét về thang sóng điện từ và ứng dụng trong khoa học và đời sống.",
      statements: [
        {
          text: "Ánh sáng nhìn thấy, tia X, tia tử ngoại và sóng vô tuyến đều có cùng bản chất vật lí là sóng điện từ.",
          answer: true,
          explain: "Đúng. Chúng đều là sóng điện từ, chỉ khác nhau ở tần số và bước sóng.",
        },
        {
          text: "Sóng điện từ có tần số càng lớn thì bước sóng càng dài.",
          answer: false,
          explain: "Sai. Bước sóng tỉ lệ nghịch với tần số: λ = c / f (tần số càng lớn thì bước sóng càng ngắn).",
        },
        {
          text: "Lò vi sóng (Microwave oven) dùng sóng điện từ thuộc dải sóng cực ngắn để làm nóng các phân tử nước trong thức ăn.",
          answer: true,
          explain: "Đúng. Tần số khoảng 2,45 GHz làm các phân tử nước phân cực dao động mạnh sinh nhiệt nhanh chóng.",
        },
        {
          text: "Khi một phi hành gia ở trên Mặt Trăng nói chuyện với nhau ngoài không gian chân không, họ có thể nghe trực tiếp giọng nói của nhau qua không khí mà không cần dùng bộ đàm vô tuyến.",
          answer: false,
          explain: "Sai. Trên Mặt Trăng là chân không tuyệt đối, sóng âm (sóng cơ) không truyền được, bắt buộc phải dùng bộ đàm sóng điện từ.",
        },
      ],
    },
  ],
  essay: [
    {
      id: "es1",
      q: "Trình bày hai luận điểm cơ bản của Maxwell về điện từ trường. Từ hai luận điểm này, hãy giải thích tại sao một điện tích dao động điều hoà lại làm phát sinh sóng điện từ lan truyền ra xa?",
      answer:
        "1. Hai luận điểm của Maxwell:\n- Luận điểm 1: Một từ trường biến thiên theo thời gian sinh ra một điện trường xoáy (có đường sức khép kín).\n- Luận điểm 2: Một điện trường biến thiên theo thời gian sinh ra một từ trường xoáy (có đường sức khép kín bao quanh).\n\n2. Cơ chế phát sinh sóng điện từ từ điện tích dao động:\n- Khi một điện tích dao động điều hoà, nó tạo ra tại điểm đó một điện trường biến thiên theo thời gian.\n- Theo luận điểm 2, điện trường biến thiên này sinh ra một từ trường xoáy biến thiên ở vùng không gian lân cận.\n- Từ trường biến thiên này lại sinh ra điện trường xoáy biến thiên ở vùng không gian tiếp theo (theo luận điểm 1).\n- Quá trình chuyển hoá liên tục giữa điện trường biến thiên và từ trường biến thiên tự duy trì và lan toả rộng dần ra không gian xung quanh với tốc độ ánh sáng, tạo thành **sóng điện từ**.",
    },
    {
      id: "es2",
      q: "Một vệ tinh viễn thông địa tĩnh bay ở độ cao h = 36.000 km so với mặt đất. Một tín hiệu sóng vô tuyến được truyền thẳng đứng từ đài phát mặt đất lên vệ tinh, sau đó vệ tinh thu nhận và lập tức phát chuyển tiếp tín hiệu trở lại đài thu trên mặt đất ngay bên cạnh đài phát. Tính khoảng thời gian trễ từ lúc phát tín hiệu đến lúc nhận lại được tín hiệu? Cho tốc độ sóng điện từ c = 3.10⁸ m/s.",
      answer:
        "1. Tổng quãng đường mà sóng điện từ truyền đi (cả đi và về):\n   - S_tổng = 2 . h = 2 . 36.000 km = 72.000 km = 7,2 . 10⁷ m.\n\n2. Khoảng thời gian trễ của tín hiệu:\n   - Δt = S_tổng / c = (7,2 . 10⁷) / (3 . 10⁸) = 0,24 giây = 240 ms.\n- Kết luận: Thời gian trễ tín hiệu là 0,24 giây (240 mili-giây). Đây là lí do vì sao khi gọi điện thoại qua vệ tinh quốc tế ta thường cảm nhận thấy một khoảng trễ nhỏ.",
    },
  ],
};

export default extra;
