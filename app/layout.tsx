import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "react-email + Resend",
  description: "learned from Colby Fayock",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen flex-col items-center p-12 sm:p-24 text-gray-300 bg-black">
          {children}
          <Backdrop />
          <Footer />
        </main>
      </body>
    </html>
  );
}
