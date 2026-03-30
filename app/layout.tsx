import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AXTORR | DJ & Producer | Afro House • Tech House",
  description: "Costa Rica-based DJ specializing in Afro House, House, and Tech House. Book AXTORR for your next event or explore exclusive mixes.",
  keywords: ["DJ", "AXTORR", "Tech House", "Afro House", "Costa Rica", "Electronic Music", "House Music"],
  openGraph: {
    title: "AXTORR | DJ & Producer",
    description: "Costa Rica-based DJ specializing in Afro House, House, and Tech House.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col noise">{children}</body>
    </html>
  );
}
