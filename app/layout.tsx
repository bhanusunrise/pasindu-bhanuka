import type { Metadata } from "next";
import { Orbitron, Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pasindu Bhanuka | Portfolio",
  description:
    "Portfolio of Pasindu Bhanuka — projects, education, certifications and contact information.",
  keywords: [
    "Pasindu Bhanuka",
    "Software Engineer",
    "Project Management",
    "Web Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${firaCode.variable} ${orbitron.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}