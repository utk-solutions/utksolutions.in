import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Pixology - Building Digital Product",
  description: "At Pixology we specialize in designing, building, shipping and scaling beautiful, usable products with blazing-fast efficiency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-dm-sans), sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
