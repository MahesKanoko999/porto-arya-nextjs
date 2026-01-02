import type { Metadata } from "next";
import { Dosis, Open_Sans } from "next/font/google"; // Dosis and Open Sans
import "./globals.css";
import Cursor from "@/components/Cursor";

const dosis = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"], // All weights from orig
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Arya Wiratama.1111",
  description: "Hello, my name is Arya Wiratama.1111 I created this website for my personal data and photos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${dosis.variable} ${openSans.variable} antialiased bg-[#12141C] text-white`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
