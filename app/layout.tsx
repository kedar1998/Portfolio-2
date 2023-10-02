import "./globals.css";
import type { Metadata } from "next";
import React from "react";
// eslint-disable-next-line camelcase
import { Source_Sans_3, Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "Kedar | Frontend Developer",
  description: "Portfolio kedar Makode",
};

const SourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sourcesans3",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${SourceSans3.variable} ${montserrat.variable}`}>
        {children}
      </body>
    </html>
  );
}
