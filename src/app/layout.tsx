import type { Metadata } from "next";
import { Martian_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";

const font = Martian_Mono({
  subsets: ['latin'],
  weight: ['100','200','300','400','500','600','700','800'],
})

export const metadata: Metadata = {
  title: "anhtuan-dev",
  description: "Personal website of Anh Tuan Tran - Game Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-white}` }>
          <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
