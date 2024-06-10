import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "KatsMo safaris",
  description: "Get ready to explore Africa's wonders, one thrilling safari at a time with the best in tourism and self care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Navbar />
        <main className="relative overflow-hidden">
          {children} 
        </main>
        <Footer />
      </body>
    </html>
  );
}