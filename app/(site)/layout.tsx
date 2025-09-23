import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Konstantin",
  description: "Konstantin's cv",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased relative`}>
        {children}
        <GoogleAnalytics gaId="G-SQ6G16HQB7" />
      </body>
    </html>
  );
}
