import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Trong mô hình động học phân tử chất khí, nhận định nào sau đây là SAI?",
    options: [
      "Các phân tử khí chuyển động hỗn loạn không ngừng về mọi phía.",
      "Nhiệt độ càng cao thì các phân tử khí chuyển động càng nhanh.",
      "Kích thước phân tử khí lớn xấp xỉ khoảng cách giữa các phân tử.",
      "Lực tương tác giữa các phân tử khí rất yếu khi không va chạm.",
    ],
    answer: 2,
    explain:
      "Khoảng cách giữa các phân tử khí lớn gấp hàng chục lần kích thước của phân tử, do đó kích thước phân tử là rất nhỏ so với khoảng cách giữa chúng.",
  },
  {
    id: "q2",
    q: "Áp suất của một lượng khí chứa trong bình kín tác dụng lên thành bình được tạo ra bởi:",
    options: [
      "Trọng lực của các phân tử khí đè nén lên đáy bình.",
      "Lực hút tĩnh điện giữa các phân tử khí với thành bình.",
      "Sự va chạm liên tục của vô số phân tử khí chuyển động nhiệt vào thành bình.",
      "Lực đẩy giữa các phân tử khí đẩy nhau dạt vào thành bình.",
    ],
    answer: 2,
    explain:
      "Vô số phân tử khí chuyển động nhiệt hỗn loạn va chạm liên tục vào thành bình truyền xung lượng tạo nên lực ép và áp suất tác dụng lên thành bình.",
  },
  {
    id: "q3",
    q: "Khí lí tưởng là mô hình chất khí trong đó các phân tử:",
    options: [
      "Được coi là các chất điểm và chỉ tương tác với nhau khi va chạm đàn hồi.",
      "Có kích thước đáng kể và luôn hút nhau rất mạnh.",
      "Đứng yên hoàn toàn ở 0°C.",
      "Chỉ chuyển động thẳng đều theo một phương duy nhất.",
    ],
    answer: 0,
    explain:
      "Khí lí tưởng là chất khí coi các phân tử là chất điểm (kích thước vô cùng nhỏ) và bỏ qua lực tương tác khi không va chạm (chỉ tương tác va chạm đàn hồi).",
  },
  {
    id: "q4",
    q: "Ba thông số trạng thái xác định hoàn toàn trạng thái của một lượng khí xác định là:",
    options: [
      "Khối lượng m, Thể tích V, Áp suất p.",
      "Áp suất p, Thể tích V, Nhiệt độ tuyệt đối T.",
      "Nhiệt độ t, Khối lượng riêng D, Áp suất p.",
      "Thể tích V, Khối lượng m, Vận tốc v.",
    ],
    answer: 1,
    explain:
      "Trạng thái của một lượng khí xác định được mô tả đầy đủ bởi 3 thông số trạng thái: Áp suất p, Thể tích V và Nhiệt độ tuyệt đối T.",
  },
  {
    id: "q5",
    q: "Trong điều kiện nào sau đây thì một khí thực (như không khí) tuân theo gần đúng nhất các định luật của khí lí tưởng?",
    options: [
      "Ở áp suất rất cao và nhiệt độ rất thấp.",
      "Ở áp suất thấp và nhiệt độ tương đối cao (nhiệt độ phòng).",
      "Ở nhiệt độ gần nhiệt độ hoá lỏng.",
      "Khi bị nén trong thể tích rất nhỏ.",
    ],
    answer: 1,
    explain:
      "Ở áp suất thấp và nhiệt độ cao, khoảng cách giữa các phân tử rất lớn và động năng nhiệt lớn hơn nhiều so với thế năng tương tác, khi đó khí thực tuân theo rất gần các quy luật khí lí tưởng.",
  },
  {
    id: "q6",
    q: "Đơn vị đo áp suất 1 atm tương đương với bao nhiêu Pascal (Pa)?",
    options: ["1,013 . 10⁵ Pa", "10⁵ Pa", "1,013 . 10³ Pa", "133,3 Pa"],
    answer: 0,
    explain: "1 atm (atmosphere tiêu chuẩn) = 1,01325 . 10⁵ Pa ≈ 1,013 . 10⁵ Pa.",
  },
  {
    id: "q7",
    q: "Khi giữ nguyên thể tích của một bình kín chứa khí và đun nóng để nhiệt độ tăng lên thì áp suất trong bình tăng lên là vì:",
    options: [
      "Số lượng phân tử khí trong bình sinh sôi thêm.",
      "Các phân tử khí chuyển động nhanh hơn, va chạm vào thành bình mạnh hơn và thường xuyên hơn.",
      "Kích thước phân tử khí nở to ra.",
      "Lực hút giữa các phân tử khí với nhau tăng lên.",
    ],
    answer: 1,
    explain:
      "Nhiệt độ tăng làm vận tốc trung bình của phân tử tăng => động lượng trao đổi khi va chạm tăng và tần số va chạm vào thành bình tăng => áp suất tăng.",
  },
  {
    id: "q8",
    q: "Đổi đơn vị thể tích: 2,5 m³ bằng bao nhiêu lít (L)?",
    options: ["2500 L", "250 L", "25.000 L", "25 L"],
    answer: 0,
    explain: "1 m³ = 1000 dm³ = 1000 L nên 2,5 m³ = 2,5 . 1000 = 2500 L.",
  },
  {
    id: "q9",
    q: "Hiện tượng khuếch tán chất khí (ví dụ mở nắp lọ nước hoa ở góc phòng thì một lúc sau cả phòng đều ngửi thấy mùi thơm) chứng tỏ:",
    options: [
      "Các phân tử khí chuyển động hỗn loạn không ngừng và giữa các phân tử có khoảng cách.",
      "Không khí có lực hút rất mạnh kéo các phân tử hương thơm đi.",
      "Chất khí có tính dẫn điện tốt.",
      "Nước hoa là khí lí tưởng đơn nguyên tử.",
    ],
    answer: 0,
    explain:
      "Sự khuếch tán là bằng chứng trực quan cho thấy các phân tử chuyển động nhiệt hỗn loạn về mọi phía và tự do luồn lách qua khoảng cách giữa các phân tử không khí.",
  },
  {
    id: "q10",
    q: "Trong các va chạm giữa các phân tử khí lí tưởng với nhau hoặc với thành bình, loại va chạm này được coi là:",
    options: [
      "Va chạm mềm (dính vào nhau).",
      "Va chạm hoàn toàn đàn hồi (bảo toàn động năng và động lượng).",
      "Va chạm không đàn hồi.",
      "Va chạm sinh ra điện tích mới.",
    ],
    answer: 1,
    explain:
      "Trong mô hình khí lí tưởng, mọi va chạm của phân tử được coi là va chạm đàn hồi hoàn toàn, cơ năng (động năng) của hệ phân tử được bảo toàn.",
  },
];

export default questions;
