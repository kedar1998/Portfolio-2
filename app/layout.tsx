import "./globals.css";
import type { Metadata } from "next";
import React from "react";
// eslint-disable-next-line camelcase
import { Source_Sans_3 } from "next/font/google";

// Saira Extra Condensed

export const metadata: Metadata = {
  title: "Kedar | Frontend Developer",
  description: "Portfolio kedar Makode",
};

const SourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sourcesans3",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${SourceSans3.variable}`}>{children}</body>
    </html>
  );
}
