import FormulaClient from "@/components/FormulaClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sổ tay Công thức Vật lí 12 — THPT Na Rì",
  description:
    "Tra cứu nhanh hệ thống công thức, đơn vị chuẩn SI và chú thích ý nghĩa đại lượng Vật lí 12 cả 4 chương.",
};

export default function FormulaPage() {
  return <FormulaClient />;
}
