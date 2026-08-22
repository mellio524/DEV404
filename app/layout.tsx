import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DreamShell } from "./components/DreamShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dev-404.com"),
  title: "DEV 404 - Official Music and Video Universe",
  description:
    "A trippy tech-thriller React site for DEV 404 with official albums, videos, artist information, and interactive depth-driven visuals.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    title: "DEV 404 - Official Music and Video Universe",
    description:
      "Enter the DEV 404 universe: official albums, videos, and cyberpunk digital art in an interactive thriller-styled site.",
    url: "https://dev-404.com",
    siteName: "DEV 404",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "DEV 404",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DEV 404 - Official Music and Video Universe",
    description:
      "Official DEV 404 music releases, videos, and signal-fractured art.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DreamShell>{children}</DreamShell>
      </body>
    </html>
  );
}
