import type { Metadata } from "next";
import { Source_Sans_3 as FontSans } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import { ClerkProvider } from "@clerk/nextjs";

const fontSans = FontSans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight:['200','300','300','400','500','600','700','800','900'],
});


export const metadata: Metadata = {
  title: "Sommaire-AI-Powered PDF Summarization",
  description: "Save hours of reading time. Transform lengthy PDFs into clear, accurate summaries in seconds with our advanced AI technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} font-sans vantialiased`}
      >
        <div className=" relative flex min-h-screen flex-col bg-gray-50">
        <Header/>
        <main className="flex-1">{children}</main>
        <Footer/>
        </div>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
