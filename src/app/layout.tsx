import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "UtkSolutions - Enterprise Cloud & IT Services",
  description: "Leading provider of cloud engineering, DevOps, cybersecurity, and digital transformation services for modern businesses.",
  keywords: ["Cloud Consulting", "IT Services", "DevOps", "Cybersecurity", "Software Development", "Managed IT"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(dmSans.variable, "font-sans antialiased bg-white")}>
        {children}
      </body>
    </html>
  );
}
