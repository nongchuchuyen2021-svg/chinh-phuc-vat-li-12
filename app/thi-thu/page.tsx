import MockExamClient from "@/components/MockExamClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thi thử Tốt nghiệp THPT Vật lí — THPT Na Rì",
  description:
    "Luyện thi thử tốt nghiệp THPT môn Vật lí theo đúng ma trận cấu trúc mới 2025: 18 câu trắc nghiệm, 4 câu đúng/sai, 6 câu điền số.",
};

export default function MockExamPage() {
  return <MockExamClient />;
}
