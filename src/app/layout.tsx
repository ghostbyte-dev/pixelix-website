import type { Metadata } from "next";
import { Inter, PT_Sans } from "next/font/google";
import "./globals.css";

const inter = PT_Sans({ subsets: ["latin"], weight: "700" });

export const metadata: Metadata = {
  title: "Pixelix",
  description: "Homepage of the Pixelfed client Pixelix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
