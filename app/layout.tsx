import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { ScrollActivity } from "../components/scroll-activity";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Atena Studio - Design Portfolio",
  description:
    "A refined personal portfolio for brand identity, art direction, and digital design.",
  openGraph: {
    title: "Atena Studio - Design Portfolio",
    description:
      "Brand identity, digital design, and art direction for ambitious teams.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=TASA+Orbiter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${manrope.variable} bg-carbon font-sans text-ash`}>
        <ScrollActivity />
        {children}
      </body>
    </html>
  );
}
