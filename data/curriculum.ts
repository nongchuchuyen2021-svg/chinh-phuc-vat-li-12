import type { Topic } from "@/lib/types";

// Cấu trúc SGK Vật lí 12 — Kết nối tri thức với cuộc sống.
// Trọn bộ 25 bài / 4 chương đầy đủ Lý thuyết, Trắc nghiệm, Đúng/Sai và Tự luận.

export const CURRICULUM: Topic[] = [
  {
    id: "chuong-1",
    name: "Chương I. Vật lí nhiệt",
    emoji: "🔥",
    lessons: [
      { id: "bai-01", title: "Bài 1. Cấu trúc của chất. Sự chuyển thể", available: true },
      {
        id: "bai-02",
        title: "Bài 2. Nội năng. Định luật I của nhiệt động lực học",
        available: true,
      },
      { id: "bai-03", title: "Bài 3. Nhiệt độ. Thang nhiệt độ – nhiệt kế", available: true },
      { id: "bai-04", title: "Bài 4. Nhiệt dung riêng", available: true },
      { id: "bai-05", title: "Bài 5. Nhiệt nóng chảy riêng", available: true },
      { id: "bai-06", title: "Bài 6. Nhiệt hoá hơi riêng", available: true },
      { id: "bai-07", title: "Bài 7. Bài tập về vật lí nhiệt", available: true },
    ],
  },
  {
    id: "chuong-2",
    name: "Chương II. Khí lí tưởng",
    emoji: "💨",
    lessons: [
      {
        id: "bai-08",
        title: "Bài 8. Mô hình động học phân tử chất khí",
        available: true,
      },
      { id: "bai-09", title: "Bài 9. Định luật Boyle", available: true },
      { id: "bai-10", title: "Bài 10. Định luật Charles", available: true },
      {
        id: "bai-11",
        title: "Bài 11. Phương trình trạng thái của khí lí tưởng",
        available: true,
      },
      {
        id: "bai-12",
        title:
          "Bài 12. Áp suất khí theo mô hình động học phân tử. Quan hệ giữa động năng phân tử và nhiệt độ",
        available: true,
      },
      { id: "bai-13", title: "Bài 13. Bài tập về khí lí tưởng", available: true },
    ],
  },
  {
    id: "chuong-3",
    name: "Chương III. Từ trường & Cảm ứng điện từ",
    emoji: "🧲",
    lessons: [
      { id: "bai-14", title: "Bài 14. Từ trường", available: true },
      {
        id: "bai-15",
        title: "Bài 15. Lực từ tác dụng lên dây dẫn mang dòng điện. Cảm ứng từ",
        available: true,
      },
      {
        id: "bai-16",
        title: "Bài 16. Từ thông. Hiện tượng cảm ứng điện từ",
        available: true,
      },
      { id: "bai-17", title: "Bài 17. Máy phát điện xoay chiều", available: true },
      {
        id: "bai-18",
        title: "Bài 18. Ứng dụng hiện tượng cảm ứng điện từ",
        available: true,
      },
      {
        id: "bai-19",
        title: "Bài 19. Điện từ trường. Mô hình sóng điện từ",
        available: true,
      },
      { id: "bai-20", title: "Bài 20. Bài tập về từ trường", available: true },
    ],
  },
  {
    id: "chuong-4",
    name: "Chương IV. Vật lí hạt nhân",
    emoji: "⚛️",
    lessons: [
      { id: "bai-21", title: "Bài 21. Cấu trúc hạt nhân", available: true },
      {
        id: "bai-22",
        title: "Bài 22. Phản ứng hạt nhân và năng lượng liên kết",
        available: true,
      },
      { id: "bai-23", title: "Bài 23. Hiện tượng phóng xạ", available: true },
      { id: "bai-24", title: "Bài 24. Công nghiệp hạt nhân", available: true },
      { id: "bai-25", title: "Bài 25. Bài tập về vật lí hạt nhân", available: true },
    ],
  },
];

export function findLesson(lessonId: string) {
  for (const topic of CURRICULUM) {
    const lesson = topic.lessons.find((l) => l.id === lessonId);
    if (lesson) return { topic, lesson };
  }
  return null;
}
