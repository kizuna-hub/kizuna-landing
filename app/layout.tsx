import type { Metadata } from "next";
import { Inter, Playfair_Display, Outfit, Geist } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/landing/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair"
});

export const metadata: Metadata = {
  title: "Kizuna Hub",
  description: "Bệ phóng bảo vệ Startup của bạn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} ${outfit.variable} ${geist.variable} ${playfair.variable} font-sans bg-[#102c1e] text-white min-h-full flex flex-col antialiased`}>

        <Navbar theme="dark" />

        {/* Thêm class 'relative' vào đây để fix lỗi tính toán tọa độ cuộn */}
        <main className="relative flex-1 flex flex-col">
          {children}
        </main>

      </body>
    </html>
  );
}