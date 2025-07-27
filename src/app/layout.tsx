import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
      title: "EduBh - Industry-Ready Education",
  description: "Bridge the gap between academia and industry with comprehensive programs designed for modern career success.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(inter.className, "antialiased bg-[#EAEEFE] overflow-x-hidden")}> 
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
