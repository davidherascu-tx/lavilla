import type { Metadata } from "next";
import { Frank_Ruhl_Libre } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

// Configure the Frank Ruhl Libre font
const frankRuhlLibre = Frank_Ruhl_Libre({
  variable: "--font-frank-ruhl",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "La Villa",
  description: "Authentic culinary experience at La Villa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${frankRuhlLibre.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-stone-50 text-stone-900 font-sans">
        <Header />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}