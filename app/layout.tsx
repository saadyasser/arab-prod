"use client";

import { Provider } from "@/components/ui/provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

import { Tajawal } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/sections/Footer/Footer";
import Banner from "@/components/Banner";
import { SessionProvider } from "next-auth/react";

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
        <SessionProvider>
          <QueryClientProvider client={queryClient}>
            <Provider>
              <Banner
                title="خصومات بنسبة 20% على الكورسات"
                startAt="2024-12-20T12:26:49.668Z"
                endAt="2024-12-28T12:26:49.668Z"
              />
              <NavBar />
              <main>{children}</main>
              <Footer />
            </Provider>
          </QueryClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
