import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { DreamShell } from "./components/DreamShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-404.com"),
  title: "DEV 404 - Lucid Dreams",
  description:
    "Step into the dream of DEV 404: music videos, albums, and signal-fractured story worlds inspired by Lucid Dreams.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "DEV 404 - Lucid Dreams",
    description:
      "A surreal DEV 404 music hub where videos become rooms and albums become memories.",
    url: "https://dev-404.com",
    siteName: "DEV 404",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DEV 404 Lucid Dreams",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV 404 - Lucid Dreams",
    description:
      "Enter the dream of DEV 404 through music videos, albums, and signal-fractured rooms.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DreamShell>{children}</DreamShell>
      </body>
    </html>
  );
}
