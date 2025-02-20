import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chuck Norris",
  description: "This Site is made by Chuck Norris",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
