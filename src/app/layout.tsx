import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikita Bhandari — Python Backend Developer & Data Analyst",
  description:
    "Portfolio of Nikita Bhandari — Python Backend Developer, Data Analyst, and Power BI Developer. Building scalable APIs and data-driven solutions.",
  keywords: [
    "Python Developer",
    "Backend Developer",
    "Data Analyst",
    "Power BI",
    "FastAPI",
    "PostgreSQL",
    "Nikita Bhandari",
  ],
  authors: [{ name: "Nikita Bhandari" }],
  openGraph: {
    title: "Nikita Bhandari — Python Backend Developer & Data Analyst",
    description:
      "Portfolio of Nikita Bhandari — Building scalable APIs and data-driven solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans bg-background text-foreground antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
