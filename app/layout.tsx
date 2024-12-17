'use client';

import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from "react";

import { Tajawal } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic"],
  display: "swap",
  weight: ["900", "800", "700", "500", "400", "300"],
});

const queryClient = new QueryClient();


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
      <QueryClientProvider client={queryClient}>
        <Provider>
          {children}
          </Provider>
      </QueryClientProvider>
      </body>
    </html>
  );
}
