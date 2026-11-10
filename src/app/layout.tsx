import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "A Letter For You",
  description: "A cute little surprise letter and memories just for you.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Letter",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFF0F4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
