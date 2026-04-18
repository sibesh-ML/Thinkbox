import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ThinkBox — Analytical Thinking Platform",
  description: "Master guesstimation, problem structuring, and analytical thinking from scratch",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
