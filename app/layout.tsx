import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600"],
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Pharmacy Council of Thailand",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
