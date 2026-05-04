import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

// Dùng Playfair cho Tiêu đề để có độ Đậm (Bold) sắc nét và sang trọng
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif"
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
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-[#102c1e] text-white min-h-full flex flex-col antialiased`}>
        {children}
      </body>
    </html>
  );
}