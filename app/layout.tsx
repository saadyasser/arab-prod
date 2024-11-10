import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { ReactNode } from "react";

import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  weight: ["900", "800", "700", "500", "400", "300"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
