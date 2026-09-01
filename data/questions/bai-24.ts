import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Phản ứng phân hạch là quá trình:",
    options: [
      "Một hạt nhân rất nặng hấp thụ một neutron chậm rồi vỡ thành hai mảnh hạt nhân trung bình và giải phóng neutron cùng năng lượng lớn.",
      "Hai hạt nhân nhẹ kết hợp lại thành hạt nhân nặng hơn ở nhiệt độ cực cao.",
      "Hạt nhân tự phát phân rã mà không cần bất kì tác nhân kích thích nào.",
      "Một proton biến đổi thành một neutron trong hạt nhân.",
    ],
    answer: 0,
    explain: "Phân hạch là quá trình hạt nhân nặng hấp thụ neutron vỡ thành hai mảnh trung bình kèm theo neutron và toả nhiệt.",
  },
  {
    id: "q2",
    q: "Để duy trì phản ứng dây chuyền tự duy trì ổn định trong lò phản ứng của nhà máy điện hạt nhân, hệ số nhân neutron k phải thoả mãn điều kiện:",
    options: ["k = 1", "k > 1", "k < 1", "k = 0"],
    answer: 0,
    explain: "Để phản ứng dây chuyền ổn định và công suất không đổi (kiểm soát được), hệ số nhân neutron k phải bằng 1.",
  },
  {
    id: "q3",
    q: "Trong lò phản ứng hạt nhân, các thanh điều khiển làm bằng chất nào sau đây có tác dụng hấp thụ bớt neutron thừa để kiểm soát tốc độ phản ứng?",
    options: ["Bo (B) hoặc Cadimi (Cd)", "Urani (U)", "Nước nặng (D₂O)", "Graphit (than chì)"],
    answer: 0,
    explain: "Bo và Cadimi có tiết diện bắt neutron rất lớn nên được dùng làm các thanh điều khiển điều chỉnh hệ số k.",
  },
  {
    id: "q4",
    q: "Phản ứng nhiệt hạch là phản ứng:",
    options: [
      "Tổng hợp hai hạt nhân rất nhẹ thành hạt nhân nặng hơn ở nhiệt độ cực kì cao.",
      "Vỡ hạt nhân Urani thành các hạt nhân nhẹ hơn.",
      "Phóng xạ tự phát của thỏi phóng xạ Radi.",
      "Toả nhiệt khi đốt cháy khí hiđrô trong khí quyển oxy.",
    ],
    answer: 0,
    explain: "Phản ứng nhiệt hạch là phản ứng kết hợp hai hạt nhân rất nhẹ (như H, D, T) thành hạt nhân nặng hơn ở nhiệt độ hàng chục triệu độ C.",
  },
  {
    id: "q5",
    q: "Nguồn năng lượng khổng lồ giúp Mặt Trời và các ngôi sao toả sáng và phát nhiệt suốt hàng tỉ năm qua có nguồn gốc từ:",
    options: [
      "Các phản ứng nhiệt hạch tổng hợp hiđrô thành heli diễn ra liên tục trong lòng ngôi sao.",
      "Các phản ứng phân hạch quặng Urani trong lòng ngôi sao.",
      "Sự cháy hoá học của khí than và dầu mỏ.",
      "Sự ma sát giữa các hành tinh trong hệ Mặt Trời.",
    ],
    answer: 0,
    explain:
      "Trong tâm Mặt Trời, áp suất và nhiệt độ cực cao duy trì chuỗi phản ứng nhiệt hạch tổng hợp các hạt nhân hiđrô thành heli, giải phóng năng lượng bức xạ nuôi sống Trái Đất.",
  },
  {
    id: "q6",
    q: "So với phản ứng phân hạch, phản ứng nhiệt hạch có ưu điểm vượt trội nào sau đây?",
    options: [
      "Toả năng lượng lớn hơn trên cùng một khối lượng nhiên liệu và nguồn nhiên liệu sạch dồi dào, ít tạo rác thải phóng xạ nguy hại.",
      "Dễ dàng thực hiện ở ngay nhiệt độ phòng và áp suất thường.",
      "Không cần dùng bất kì công nghệ giam giữ từ trường nào.",
      "Có thể kích nổ đơn giản bằng mồi lửa thông thường.",
    ],
    answer: 0,
    explain:
      "Nhiệt hạch toả năng lượng trên 1 kg nhiên liệu gấp nhiều lần phân hạch, nhiên liệu đơteri có sẵn trong nước biển và không tạo tro xỉ hạt nhân độc hại lâu dài.",
  },
  {
    id: "q7",
    q: "Đồng vị phóng xạ Coban-60 (^60_27Co) phát ra tia gamma được ứng dụng phổ biến trong y tế để:",
    options: [
      "Xạ trị tiêu diệt tế bào khối u ác tính (ung thư).",
      "Tiêm vào mạch máu để chụp X-quang răng.",
      "Làm thuốc gây mê phẫu thuật.",
      "Đo huyết áp bệnh nhân.",
    ],
    answer: 0,
    explain:
      "Tia gamma năng lượng cao phát ra từ Co-60 được hội tụ chính xác vào các khối u ác tính để phá huỷ DNA của tế bào ung thư (xạ trị).",
  },
  {
    id: "q8",
    q: "Phương pháp chụp kiểm tra không phá huỷ (NDT - Non-Destructive Testing) trong công nghiệp sử dụng tia phóng xạ gamma nhằm mục đích:",
    options: [
      "Phát hiện các vết nứt, bọt khí, khuyết tật ẩn sâu bên trong các mối hàn kim loại, cánh tuabin máy bay.",
      "Làm sạch bề mặt kim loại bị rỉ sét.",
      "Đo độ dẫn điện của thanh kim loại.",
      "Hàn gắn các thanh thép lại với nhau.",
    ],
    answer: 0,
    explain:
      "Khả năng đâm xuyên của tia gamma cho phép chụp ảnh xuyên thấu kết cấu kim loại dày để phát hiện các khuyết tật ẩn bên trong mà không cần cắt phá mẫu vật.",
  },
  {
    id: "q9",
    q: "Trong nông nghiệp, kĩ thuật chiếu xạ hạt giống bằng nguồn phóng xạ gamma được ứng dụng để:",
    options: [
      "Gây đột biến nhân tạo có định hướng nhằm tạo ra các giống cây trồng mới có năng suất cao, kháng sâu bệnh.",
      "Làm hạt giống nảy mầm ngay trong vòng 1 giây.",
      "Làm biến đổi hạt lúa thành hạt ngô.",
      "Tăng khối lượng của hạt giống lên gấp 10 lần.",
    ],
    answer: 0,
    explain:
      "Chiếu xạ liều thích hợp gây đột biến gen/nhiễm sắc thể, từ đó các nhà khoa học chọn lọc ra các giống cây trồng ưu việt (như các giống lúa đột biến ST, DT ở Việt Nam).",
  },
  {
    id: "q10",
    q: "Nguyên tắc cơ bản nhất về an toàn bức xạ đối với người làm việc trong môi trường có nguồn phóng xạ là:",
    options: [
      "Giảm tối đa thời gian tiếp xúc, tăng tối đa khoảng cách tới nguồn và sử dụng tấm che chắn bức xạ thích hợp (chì, bê tông).",
      "Uống nhiều nước khoáng trước khi tiếp xúc.",
      "Đeo găng tay vải thông thường và khẩu trang y tế.",
      "Luôn giữ nguồn phóng xạ ở nhiệt độ dưới 0°C.",
    ],
    answer: 0,
    explain:
      "Ba nguyên tắc vàng an toàn phóng xạ (ALARA): Giảm thời gian (Time), tăng khoảng cách (Distance), và tăng cường che chắn (Shielding).",
  },
];

export default questions;
