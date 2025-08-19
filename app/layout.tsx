import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StreamLine - Modern landing page template",
  description:
    "StreamLine is a modern landing page template built with Next.js, Tailwind CSS, and Radix UI.",
  applicationName: "StreamLine",
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
