import type { Metadata } from "next";
import { Manrope } from "next/font/google";
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
      <body className={`${manrope.variable} bg-carbon font-sans text-ash`}>
        {children}
      </body>
    </html>
  );
}
