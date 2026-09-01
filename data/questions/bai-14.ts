import type { Question } from "@/lib/types";

const questions: Question[] = [
  {
    id: "q1",
    q: "Từ trường là dạng vật chất tồn tại xung quanh:",
    options: [
      "Điện tích đứng yên.",
      "Điện tích chuyển động (hoặc nam châm, dòng điện).",
      "Mọi vật thể có khối lượng.",
      "Các điện tích âm đứng yên.",
    ],
    answer: 1,
    explain: "Từ trường tồn tại xung quanh các hạt mang điện chuyển động, dòng điện và nam châm.",
  },
  {
    id: "q2",
    q: "Tính chất cơ bản nhất của từ trường là:",
    options: [
      "Tác dụng lực điện lên điện tích đứng yên.",
      "Tác dụng lực từ lên nam châm hoặc dòng điện đặt trong nó.",
      "Làm biến đổi khối lượng của các hạt mang điện.",
      "Phát ra ánh sáng nhìn thấy.",
    ],
    answer: 1,
    explain: "Tính chất cơ bản của từ trường là tác dụng lực từ lên kim nam châm hoặc đoạn dây dẫn mang dòng điện đặt trong nó.",
  },
  {
    id: "q3",
    q: "Quy ước chiều của đường sức từ ở bên ngoài nam châm thẳng là:",
    options: [
      "Đi ra từ cực Bắc (N) và đi vào cực Nam (S).",
      "Đi ra từ cực Nam (S) và đi vào cực Bắc (N).",
      "Đi từ tâm nam châm toả tròn đều ra ngoài vô tận.",
      "Song song với trục của nam châm và hướng sang phải.",
    ],
    answer: 0,
    explain: "Quy ước chiều đường sức từ bên ngoài nam châm: 'Vào Nam ra Bắc' (đi ra từ cực Bắc N và đi vào cực Nam S).",
  },
  {
    id: "q4",
    q: "Đặc điểm nào sau đây của đường sức từ là ĐÚNG?",
    options: [
      "Các đường sức từ có thể cắt nhau tại một điểm trong không gian.",
      "Đường sức từ là những đường cong khép kín (hoặc vô hạn ở hai đầu).",
      "Nơi nào từ trường mạnh thì đường sức từ vẽ rất thưa.",
      "Đường sức từ luôn là những đoạn thẳng song song cách đều nhau.",
    ],
    answer: 1,
    explain:
      "Từ trường là trường xoáy nên các đường sức từ là những đường cong khép kín (hoặc vô hạn ở hai đầu), qua mỗi điểm chỉ vẽ được duy nhất 1 đường sức từ (không cắt nhau).",
  },
  {
    id: "q5",
    q: "Dùng quy tắc nắm tay phải đối với dòng điện thẳng dài: ngón tay cái choãi ra chỉ theo chiều dòng điện thì các ngón tay khum lại chỉ:",
    options: [
      "Chiều của lực từ tác dụng lên dòng điện.",
      "Chiều của các đường sức từ xung quanh dòng điện.",
      "Chiều chuyển động của electron trong dây dẫn.",
      "Hướng của cực Bắc địa lí.",
    ],
    answer: 1,
    explain:
      "Theo quy tắc nắm tay phải cho dòng điện thẳng: Ngón tay cái chỉ chiều dòng điện I, chiều khum của 4 ngón tay chỉ chiều của các đường sức từ.",
  },
  {
    id: "q6",
    q: "Từ trường đều là từ trường có đặc điểm:",
    options: [
      "Có các đường sức từ là những đường thẳng song song và cách đều nhau.",
      "Có độ lớn cảm ứng từ biến thiên tuần hoàn theo thời gian.",
      "Chỉ xuất hiện ở xung quanh một nam châm hình cầu.",
      "Độ lớn lực từ bằng 0 ở mọi điểm.",
    ],
    answer: 0,
    explain:
      "Từ trường đều là từ trường có véc-tơ cảm ứng từ tại mọi điểm là như nhau: cùng hướng và cùng độ lớn. Các đường sức từ là các đường thẳng song song cách đều nhau (thường gặp giữa hai cực của nam châm chữ U hoặc trong lòng ống dây dài).",
  },
  {
    id: "q7",
    q: "Khi đặt một kim nam châm nhỏ tự do trong từ trường Trái Đất ở nơi không có từ trường lạ, cực Bắc của kim nam châm sẽ chỉ về hướng:",
    options: ["Bắc địa lí.", "Nam địa lí.", "Đông địa lí.", "Tây địa lí."],
    answer: 0,
    explain:
      "Theo quy ước la bàn, cực Bắc của kim nam châm tự do sẽ quay về hướng Bắc địa lí (do bị hút bởi cực từ Nam của Trái Đất nằm ở vùng cực Bắc địa lí).",
  },
  {
    id: "q8",
    q: "Xung quanh vật nào sau đây KHÔNG có từ trường?",
    options: [
      "Một quả cầu kim loại tích điện đứng yên cô lập.",
      "Một dây dẫn đang có dòng điện một chiều chạy qua.",
      "Một nam châm vĩnh cửu hình chữ U.",
      "Một electron đang chuyển động với vận tốc 10⁶ m/s trong máy gia tốc.",
    ],
    answer: 0,
    explain:
      "Điện tích đứng yên chỉ sinh ra điện trường tĩnh, không sinh ra từ trường. Chỉ khi điện tích chuyển động (dòng điện, chùm electron) mới sinh ra từ trường.",
  },
  {
    id: "q9",
    q: "Hình dạng các đường sức từ của dòng điện chạy trong một dây dẫn thẳng rất dài là:",
    options: [
      "Các đường tròn đồng tâm nằm trong các mặt phẳng vuông góc với dây dẫn, có tâm nằm trên dây dẫn.",
      "Các đường parabol nằm trong mặt phẳng chứa dây dẫn.",
      "Các đường thẳng song song với dây dẫn.",
      "Các đường xoắn ốc dọc theo chiều dài dây dẫn.",
    ],
    answer: 0,
    explain:
      "Đường sức từ của dòng điện thẳng dài là các đường tròn đồng tâm nằm trong mặt phẳng vuông góc với dòng điện, tâm nằm trên dây dẫn.",
  },
  {
    id: "q10",
    q: "Trong lòng một ống dây điện hình trụ dài (solenoid) có dòng điện chạy qua, từ trường có đặc điểm:",
    options: [
      "Là từ trường đều, các đường sức từ là những đường thẳng song song cách đều nhau và cùng hướng dọc theo trục ống dây.",
      "Bằng 0 ở mọi điểm.",
      "Có các đường sức từ là các đường tròn đồng tâm vuông góc với trục ống dây.",
      "Mạnh nhất ở hai đầu ống dây và yếu nhất ở chính giữa lòng ống.",
    ],
    answer: 0,
    explain:
      "Ở sâu bên trong lòng ống dây hình trụ dài, từ trường là từ trường đều: các đường sức từ là những đường thẳng song song cách đều nhau dọc theo trục ống dây.",
  },
];

export default questions;
