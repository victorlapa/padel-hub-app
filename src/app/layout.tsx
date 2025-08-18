import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BottomNav from "@/components/bottom-nav";
import SessionProvider from "@/components/SessionProvider";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 overflow-hidden">
              {children}
            </main>
            <BottomNav />
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
