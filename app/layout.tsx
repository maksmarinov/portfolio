import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { Space_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: "700",
});

export const metadata: Metadata = {
  title: "Maks's portfolio ",
  description: "Check out my personal projects",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
