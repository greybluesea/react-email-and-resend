import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Backdrop from "./components/Backdrop";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-screen flex-col items-center p-24 text-gray-300">
          <div className="z-10 max-w-5xl w-full flex items-center justify-center">
            <h2 className="text-2xl text-center ">
              Enter your name and email, to receive an one-off/transactional
              email <br /> formulated with React Email, sent via Resend
            </h2>
          </div>
          {children}
          <Backdrop />
          <Footer />
        </main>
      </body>
    </html>
  );
}