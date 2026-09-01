import FormulaClient from "@/components/FormulaClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sổ tay Công thức Vật lí 10 - 11 - 12 Toàn diện — THPT Na Rì",
  description:
    "Tra cứu nhanh hệ thống công thức, đơn vị chuẩn SI, chú thích ý nghĩa đại lượng và mẹo thi Vật lí cả 3 khối 10, 11, 12 phục vụ thi Tốt nghiệp THPT.",
};

export default function FormulaPage() {
  return <FormulaClient />;
}
